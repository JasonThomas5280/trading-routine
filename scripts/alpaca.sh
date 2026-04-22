#!/usr/bin/env bash
# alpaca.sh — thin curl wrapper for Alpaca Markets API
# Handles: account, positions, orders (buy/sell/trail_stop/cancel), quotes, bars
#
# Required env vars:
#   APCA_API_KEY_ID       — key from Alpaca dashboard
#   APCA_API_SECRET_KEY   — secret from Alpaca dashboard
#   APCA_API_BASE_URL     — https://paper-api.alpaca.markets OR https://api.alpaca.markets
#   APCA_DATA_BASE_URL    — always https://data.alpaca.markets

set -euo pipefail

# --- env validation ---------------------------------------------------------
: "${APCA_API_KEY_ID:?ERROR: APCA_API_KEY_ID not set. Check .env}"
: "${APCA_API_SECRET_KEY:?ERROR: APCA_API_SECRET_KEY not set. Check .env}"
APCA_API_BASE_URL="${APCA_API_BASE_URL:-https://paper-api.alpaca.markets}"
APCA_DATA_BASE_URL="${APCA_DATA_BASE_URL:-https://data.alpaca.markets}"

# --- common curl with auth headers (note: HYPHENS in header names) ----------
_curl() {
  curl -sS --fail-with-body \
    -H "APCA-API-KEY-ID: $APCA_API_KEY_ID" \
    -H "APCA-API-SECRET-KEY: $APCA_API_SECRET_KEY" \
    -H "Content-Type: application/json" \
    "$@"
}

usage() {
  cat <<EOF
Usage: alpaca.sh <command> [args...]

Account & positions:
  account                           → GET /v2/account
  positions                         → GET /v2/positions
  position <SYM>                    → GET /v2/positions/<SYM>

Orders:
  orders [status]                   → GET /v2/orders (status=open|closed|all)
  order_buy <SYM> <QTY> <LIMIT>     → POST limit buy, day TIF
  order_sell <SYM> <QTY> market     → POST market sell, day TIF
  order_sell <SYM> <QTY> limit <P>  → POST limit sell, day TIF
  order_trail_stop <SYM> <QTY> <PCT>→ POST trailing_stop sell, GTC (pct as int, script adds quotes)
  cancel_order <ID>                 → DELETE /v2/orders/<ID>
  cancel_all                        → DELETE /v2/orders

Market data:
  quote <SYM>                       → latest quote normalized to {bid,ask,last,spread}
  bars <SYM> <TF> <LIMIT>           → recent bars (TF: 1Day|1Hour|1Week)
  portfolio_history <PERIOD>        → account value history (PERIOD: 1D|5D|1M|3M)

Examples:
  alpaca.sh account
  alpaca.sh positions
  alpaca.sh order_buy NVDA 1.5384 509.36
  alpaca.sh order_trail_stop NVDA 1.5384 10
  alpaca.sh cancel_order abc123
  alpaca.sh quote NVDA
  alpaca.sh bars SPY 1Day 40
EOF
}

cmd="${1:-}"; shift || true

case "$cmd" in
  account)
    _curl "$APCA_API_BASE_URL/v2/account"
    ;;

  positions)
    _curl "$APCA_API_BASE_URL/v2/positions"
    ;;

  position)
    sym="${1:?symbol required}"
    _curl "$APCA_API_BASE_URL/v2/positions/$sym"
    ;;

  orders)
    status="${1:-open}"
    _curl "$APCA_API_BASE_URL/v2/orders?status=$status&limit=50"
    ;;

  order_buy)
    sym="${1:?symbol required}"
    qty="${2:?qty required}"
    limit="${3:?limit_price required}"
    body=$(cat <<JSON
{
  "symbol": "$sym",
  "qty": "$qty",
  "side": "buy",
  "type": "limit",
  "limit_price": "$limit",
  "time_in_force": "day"
}
JSON
)
    _curl -X POST "$APCA_API_BASE_URL/v2/orders" -d "$body"
    ;;

  order_sell)
    sym="${1:?symbol required}"
    qty="${2:?qty required}"
    type="${3:?type required (market|limit)}"
    if [[ "$type" == "limit" ]]; then
      price="${4:?limit price required}"
      body=$(cat <<JSON
{
  "symbol": "$sym",
  "qty": "$qty",
  "side": "sell",
  "type": "limit",
  "limit_price": "$price",
  "time_in_force": "day"
}
JSON
)
    else
      body=$(cat <<JSON
{
  "symbol": "$sym",
  "qty": "$qty",
  "side": "sell",
  "type": "market",
  "time_in_force": "day"
}
JSON
)
    fi
    _curl -X POST "$APCA_API_BASE_URL/v2/orders" -d "$body"
    ;;

  order_trail_stop)
    sym="${1:?symbol required}"
    qty="${2:?qty required}"
    pct="${3:?trail pct required (integer)}"
    # CRITICAL: trail_percent MUST be a STRING. Do NOT remove the quotes around $pct below.
    body=$(cat <<JSON
{
  "symbol": "$sym",
  "qty": "$qty",
  "side": "sell",
  "type": "trailing_stop",
  "trail_percent": "$pct",
  "time_in_force": "gtc"
}
JSON
)
    _curl -X POST "$APCA_API_BASE_URL/v2/orders" -d "$body"
    ;;

  cancel_order)
    id="${1:?order id required}"
    _curl -X DELETE "$APCA_API_BASE_URL/v2/orders/$id" -o /dev/null -w "%{http_code}\n"
    ;;

  cancel_all)
    _curl -X DELETE "$APCA_API_BASE_URL/v2/orders"
    ;;

  quote)
    sym="${1:?symbol required}"
    # Normalize IEX/SIP response shape — bid/ask at the top level
    raw=$(_curl "$APCA_DATA_BASE_URL/v2/stocks/$sym/quotes/latest")
    # Emit a simpler shape via jq if installed; else return raw
    if command -v jq >/dev/null 2>&1; then
      echo "$raw" | jq '{
        symbol: .symbol,
        bid: .quote.bp,
        ask: .quote.ap,
        bid_size: .quote.bs,
        ask_size: .quote.as,
        spread: (.quote.ap - .quote.bp),
        mid: ((.quote.ap + .quote.bp) / 2),
        timestamp: .quote.t
      }'
    else
      echo "$raw"
    fi
    ;;

  bars)
    sym="${1:?symbol required}"
    tf="${2:?timeframe required (1Day|1Hour|1Week)}"
    limit="${3:-40}"
    start="${4:-}"
    end="${5:-}"
    # Alpaca's bars endpoint returns only 1 (today's) bar when called with limit alone.
    # It REQUIRES an explicit start/end date range to return a historical series.
    # Default to last 90 calendar days → yesterday if caller didn't specify.
    if [[ -z "$start" ]]; then
      start=$(date -u -d "90 days ago" +%Y-%m-%d 2>/dev/null || date -u -v-90d +%Y-%m-%d)
    fi
    if [[ -z "$end" ]]; then
      end=$(date -u -d "yesterday" +%Y-%m-%d 2>/dev/null || date -u -v-1d +%Y-%m-%d)
    fi
    # feed=iex works on free/paper tier. SIP may be unavailable; IEX-only volumes
    # are lower than consolidated, but consistent with themselves (e.g. a 40%
    # volume surge vs 50-day IEX avg is a valid signal).
    _curl "$APCA_DATA_BASE_URL/v2/stocks/$sym/bars?timeframe=$tf&start=$start&end=$end&limit=$limit&feed=iex"
    ;;

  portfolio_history)
    period="${1:-5D}"
    _curl "$APCA_API_BASE_URL/v2/account/portfolio/history?period=$period"
    ;;

  "" | -h | --help | help)
    usage
    ;;

  *)
    echo "Unknown command: $cmd" >&2
    usage
    exit 1
    ;;
esac

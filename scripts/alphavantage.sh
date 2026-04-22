#!/usr/bin/env bash
# alphavantage.sh — Alpha Vantage API wrapper
# Covers: OVERVIEW, EARNINGS, EARNINGS_CALENDAR, SECTOR (sector performance), ETF_PROFILE
#
# Required env var:
#   ALPHAVANTAGE_API_KEY — get free key at https://www.alphavantage.co/support/#api-key
#
# Quota notes:
#   Free tier: 25 calls/day, 5/minute
#   Paid ($50/mo): 75/minute
# Script caches responses locally for 24h (fundamentals don't change intraday)
# to preserve quota.

set -euo pipefail

: "${ALPHAVANTAGE_API_KEY:?ERROR: ALPHAVANTAGE_API_KEY not set. If unset, routines should fall back to cache or skip Alpha-Vantage-dependent logic.}"

BASE="https://www.alphavantage.co/query"
CACHE_DIR="${AV_CACHE_DIR:-$HOME/.alphavantage_cache}"
# Default TTL (used as fallback if a function-specific TTL isn't configured below).
CACHE_TTL_SEC="${AV_CACHE_TTL:-86400}"   # 24 hours default

# Per-function TTLs (seconds). Fundamentals rarely change intraday so we cache
# aggressively to survive the 25-call/day free tier during a 100+ name scan.
# Override any of these with env vars (AV_TTL_OVERVIEW=604800 etc.) if needed.
AV_TTL_OVERVIEW="${AV_TTL_OVERVIEW:-604800}"           # 7 days  — fundamentals, quarterly
AV_TTL_EARNINGS="${AV_TTL_EARNINGS:-604800}"           # 7 days  — historical EPS series
AV_TTL_EARNINGS_CALENDAR="${AV_TTL_EARNINGS_CALENDAR:-86400}"  # 1 day — updates daily
AV_TTL_SECTOR="${AV_TTL_SECTOR:-3600}"                 # 1 hour  — updates intraday
AV_TTL_ETF_PROFILE="${AV_TTL_ETF_PROFILE:-1209600}"    # 14 days — ETF rebalances are rare
AV_TTL_TOP_GAINERS="${AV_TTL_TOP_GAINERS:-300}"        # 5 min   — intraday shortlist

# Minimum gap between *actual* (non-cached) API calls. Free tier: 5/min = 12s gap.
# Paid ($50/mo): 75/min = 0.8s gap. Override via AV_MIN_GAP_SEC.
AV_MIN_GAP_SEC="${AV_MIN_GAP_SEC:-12}"
AV_LAST_CALL_FILE="$CACHE_DIR/.last_call_epoch"

mkdir -p "$CACHE_DIR"

_cache_path() {
  # args: function symbol
  echo "$CACHE_DIR/${1}_${2:-GLOBAL}.json"
}

_ttl_for_fn() {
  # Map function name to its TTL. Falls back to CACHE_TTL_SEC.
  case "$1" in
    OVERVIEW)          echo "$AV_TTL_OVERVIEW" ;;
    EARNINGS)          echo "$AV_TTL_EARNINGS" ;;
    EARNINGS_CALENDAR) echo "$AV_TTL_EARNINGS_CALENDAR" ;;
    SECTOR)            echo "$AV_TTL_SECTOR" ;;
    ETF_PROFILE)       echo "$AV_TTL_ETF_PROFILE" ;;
    TOP_GAINERS_LOSERS) echo "$AV_TTL_TOP_GAINERS" ;;
    *)                 echo "$CACHE_TTL_SEC" ;;
  esac
}

_throttle() {
  # Ensure at least AV_MIN_GAP_SEC has passed since the last non-cached call.
  # Uses a shared file so throttling works across sequential script invocations.
  if [[ -f "$AV_LAST_CALL_FILE" ]]; then
    local last now gap sleep_for
    last=$(cat "$AV_LAST_CALL_FILE" 2>/dev/null || echo 0)
    now=$(date +%s)
    gap=$((now - last))
    if (( gap < AV_MIN_GAP_SEC )); then
      sleep_for=$((AV_MIN_GAP_SEC - gap))
      echo "⏳ AV throttle: sleeping ${sleep_for}s (min gap ${AV_MIN_GAP_SEC}s)" >&2
      sleep "$sleep_for"
    fi
  fi
  date +%s > "$AV_LAST_CALL_FILE"
}

_fetch() {
  # args: function symbol
  local fn="$1"; local sym="${2:-}"
  local cache; cache=$(_cache_path "$fn" "$sym")
  local ttl;   ttl=$(_ttl_for_fn "$fn")

  # Return cached if fresh (zero-byte cache treated as invalid)
  if [[ -f "$cache" && -s "$cache" ]]; then
    local age
    age=$(( $(date +%s) - $(stat -c %Y "$cache" 2>/dev/null || stat -f %m "$cache") ))
    if (( age < ttl )); then
      cat "$cache"
      return 0
    fi
  fi

  # Gate the live call behind the throttle
  _throttle

  # Fetch fresh
  local url="$BASE?function=$fn&apikey=$ALPHAVANTAGE_API_KEY"
  [[ -n "$sym" ]] && url="$url&symbol=$sym"

  local response
  response=$(curl -sS --fail-with-body "$url")

  # Alpha Vantage returns "Note" field when rate-limited — fall back to STALE cache if present
  if echo "$response" | grep -q '"Note"'; then
    echo "⚠️ Alpha Vantage rate limited ($fn $sym). Falling back to stale cache if available." >&2
    if [[ -f "$cache" && -s "$cache" ]]; then
      cat "$cache"
      return 0
    fi
    echo "$response" >&2
    return 1
  fi

  # "Information" field appears on daily quota exhaustion + some invalid requests
  if echo "$response" | grep -q '"Information"'; then
    echo "⚠️ Alpha Vantage info response ($fn $sym) — likely daily quota or invalid symbol. Trying stale cache." >&2
    if [[ -f "$cache" && -s "$cache" ]]; then
      cat "$cache"
      return 0
    fi
    echo "$response" >&2
    return 1
  fi

  echo "$response" | tee "$cache"
}

usage() {
  cat <<EOF
Usage: alphavantage.sh <command> [args...]

Commands:
  overview <SYM>             → company fundamentals (EPS, ROE, float, shares outstanding)
  earnings <SYM>             → historical quarterly + annual EPS
  earnings_calendar [horizon] → upcoming earnings (3month default)
  sector                     → sector performance (all 11 GICS sectors, daily/weekly/etc.)
  etf_profile <ETF>          → ETF constituent list (e.g., SPY, QQQ, XLK)
  clear_cache                → delete the local cache
  cache_status               → show cached items + their age

Examples:
  alphavantage.sh overview NVDA
  alphavantage.sh earnings NVDA
  alphavantage.sh sector
  alphavantage.sh etf_profile XLK
EOF
}

cmd="${1:-}"; shift || true

case "$cmd" in
  overview)
    sym="${1:?symbol required}"
    _fetch OVERVIEW "$sym"
    ;;

  earnings)
    sym="${1:?symbol required}"
    _fetch EARNINGS "$sym"
    ;;

  earnings_calendar)
    horizon="${1:-3month}"
    url="$BASE?function=EARNINGS_CALENDAR&horizon=$horizon&apikey=$ALPHAVANTAGE_API_KEY"
    curl -sS --fail-with-body "$url"
    ;;

  sector)
    _fetch SECTOR ""
    ;;

  etf_profile)
    etf="${1:?ETF symbol required}"
    _fetch ETF_PROFILE "$etf"
    ;;

  clear_cache)
    rm -rf "$CACHE_DIR"
    mkdir -p "$CACHE_DIR"
    echo "Cache cleared."
    ;;

  cache_status)
    echo "Cache dir: $CACHE_DIR"
    if [[ -d "$CACHE_DIR" ]]; then
      for f in "$CACHE_DIR"/*.json; do
        [[ -e "$f" ]] || continue
        age=$(( $(date +%s) - $(stat -c %Y "$f" 2>/dev/null || stat -f %m "$f") ))
        printf "  %-40s  %d sec old\n" "$(basename "$f")" "$age"
      done
    fi
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

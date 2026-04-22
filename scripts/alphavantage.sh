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
CACHE_TTL_SEC="${AV_CACHE_TTL:-86400}"   # 24 hours default

mkdir -p "$CACHE_DIR"

_cache_path() {
  # args: function symbol
  echo "$CACHE_DIR/${1}_${2:-GLOBAL}.json"
}

_fetch() {
  # args: function symbol
  local fn="$1"; local sym="${2:-}"
  local cache; cache=$(_cache_path "$fn" "$sym")

  # Return cached if fresh
  if [[ -f "$cache" ]]; then
    local age
    age=$(( $(date +%s) - $(stat -c %Y "$cache" 2>/dev/null || stat -f %m "$cache") ))
    if (( age < CACHE_TTL_SEC )); then
      cat "$cache"
      return 0
    fi
  fi

  # Fetch fresh
  local url="$BASE?function=$fn&apikey=$ALPHAVANTAGE_API_KEY"
  [[ -n "$sym" ]] && url="$url&symbol=$sym"

  local response
  response=$(curl -sS --fail-with-body "$url")

  # Alpha Vantage returns "Note" field when rate-limited — preserve cache, return error
  if echo "$response" | grep -q '"Note"'; then
    echo "⚠️ Alpha Vantage rate limited. Using stale cache if available." >&2
    if [[ -f "$cache" ]]; then
      cat "$cache"
      return 0
    fi
    echo "$response" >&2
    return 1
  fi

  # Alpha Vantage also returns "Information" field on some errors
  if echo "$response" | grep -q '"Information"'; then
    echo "⚠️ Alpha Vantage info response (may be quota or invalid request)." >&2
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

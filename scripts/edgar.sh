#!/usr/bin/env bash
# edgar.sh — SEC EDGAR API wrapper for 13F institutional sponsorship data
# EDGAR is FREE but requires a User-Agent header with contact info (SEC policy).
#
# Required env var:
#   EDGAR_USER_AGENT  — "Firstname Lastname email@example.com" (SEC policy — required)
#   
# Example: export EDGAR_USER_AGENT="Jason FireLit jason@firelit.consulting"

set -euo pipefail

: "${EDGAR_USER_AGENT:?ERROR: EDGAR_USER_AGENT not set. SEC policy requires a User-Agent string with contact. Example: 'Jason FireLit jason@firelit.consulting'}"

BASE="https://data.sec.gov"
CACHE_DIR="${EDGAR_CACHE_DIR:-$HOME/.edgar_cache}"
CACHE_TTL_SEC="${EDGAR_CACHE_TTL:-604800}"  # 7 days default — 13F data is quarterly

mkdir -p "$CACHE_DIR"

_cache_path() {
  echo "$CACHE_DIR/${1}_${2:-GLOBAL}.json"
}

_fetch_cached() {
  local name="$1"; local key="$2"; local url="$3"
  local cache; cache=$(_cache_path "$name" "$key")

  # Treat zero-byte cache files as invalid (prevents self-inflicted stale empties)
  if [[ -f "$cache" && -s "$cache" ]]; then
    local age
    age=$(( $(date +%s) - $(stat -c %Y "$cache" 2>/dev/null || stat -f %m "$cache") ))
    if (( age < CACHE_TTL_SEC )); then
      cat "$cache"
      return 0
    fi
  fi

  response=$(curl -sS --fail-with-body \
    -H "User-Agent: $EDGAR_USER_AGENT" \
    -H "Accept: application/json" \
    "$url")
  echo "$response" | tee "$cache"
}

usage() {
  cat <<EOF
Usage: edgar.sh <command> [args...]

Commands:
  ticker_to_cik <SYM>             Look up a company's CIK (required for other lookups)
  submissions <CIK>               Recent filings for a CIK
  institutional_holders <CIK>     Summary of 13F holdings (approximation — full 13F parsing requires additional work)
  clear_cache
  cache_status

Examples:
  edgar.sh ticker_to_cik NVDA
  edgar.sh submissions 0001045810
  edgar.sh institutional_holders 0001045810

Note: Full 13F holder analysis (counting holders, tracking quarter-over-quarter changes) 
      is involved — this script is a scaffold. Weekly /weekly-prep can parse the raw 
      submissions feed and compute trends. For MVP, track holder count from Alpha 
      Vantage OVERVIEW field 'PercentInstitutions' and use EDGAR 13F as a refinement layer.
EOF
}

cmd="${1:-}"; shift || true

case "$cmd" in
  ticker_to_cik)
    sym="${1:?symbol required}"
    sym_upper=$(echo "$sym" | tr '[:lower:]' '[:upper:]')
    # SEC provides a mapping file: https://www.sec.gov/files/company_tickers.json
    _fetch_cached "tickers" "all" "https://www.sec.gov/files/company_tickers.json" \
      | jq -r --arg s "$sym_upper" 'to_entries | map(.value) | map(select(.ticker == $s)) | .[0] | .cik_str'
    ;;

  submissions)
    cik="${1:?CIK required (10 digits, zero-padded)}"
    # Pad to 10 digits if shorter
    cik_padded=$(printf "%010d" "$cik")
    _fetch_cached "submissions" "$cik_padded" "$BASE/submissions/CIK$cik_padded.json"
    ;;

  institutional_holders)
    cik="${1:?CIK required}"
    cik_padded=$(printf "%010d" "$cik")
    echo "⚠️ Full 13F aggregation is not implemented in this scaffold." >&2
    echo "⚠️ For Phase 0, use Alpha Vantage OVERVIEW.PercentInstitutions as approximation." >&2
    echo "⚠️ For Phase 1+, extend this script to fetch 13F-HR filings and aggregate." >&2
    _fetch_cached "submissions" "$cik_padded" "$BASE/submissions/CIK$cik_padded.json" \
      | jq '.filings.recent | {form: .form, filingDate: .filingDate, accessionNumber: .accessionNumber} | to_entries | map(select(.value[0] == "13F-HR" or .value[0] == "13F-HR/A"))' 2>/dev/null || {
        echo "jq parse failed — returning raw" >&2
      }
    ;;

  clear_cache)
    rm -rf "$CACHE_DIR"; mkdir -p "$CACHE_DIR"
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

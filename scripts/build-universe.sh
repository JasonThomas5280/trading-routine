#!/usr/bin/env bash
# build-universe.sh — seed the CAN SLIM candidate universe from top-sector ETF constituents
#
# Called by /weekly-prep step 4 ("Universe scan"). Given the top-3 sector ETFs
# (determined by step 3's 4-week relative performance ranking), this script:
#   1. Pulls each ETF's holdings via Alpha Vantage ETF_PROFILE
#   2. Dedupes across ETFs (some names appear in multiple sector funds)
#   3. Applies price/liquidity pre-filters via Alpaca (cheap — one call/symbol)
#   4. Emits the filtered universe to stdout, one ticker per line
#
# Output: plain ticker list, suitable for piping into canslim-screener.
# Expected count: ~100–180 names (76 holdings × 3 ETFs minus dedupe & filter).
#
# Required env vars (loaded from .env by caller):
#   ALPHAVANTAGE_API_KEY, APCA_API_KEY_ID, APCA_API_SECRET_KEY, APCA_API_BASE_URL
#
# Usage:
#   bash scripts/build-universe.sh XLK XLY XLF            # 3 sector ETFs
#   bash scripts/build-universe.sh XLK XLY XLF --min-weight 0.005  # skip holdings <0.5% weight (noise floor)
#   bash scripts/build-universe.sh XLK XLY XLF --no-filter         # skip Alpaca price/liq filter (faster, debug only)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MIN_PRICE=10
MAX_PRICE=500
MIN_WEIGHT=0.003   # default: drop holdings weighted <0.3% (ETF noise tail)
APPLY_FILTER=1

# --- parse args -------------------------------------------------------------
ETFS=()
while [[ $# -gt 0 ]]; do
  case "$1" in
    --min-weight) MIN_WEIGHT="$2"; shift 2 ;;
    --min-price)  MIN_PRICE="$2";  shift 2 ;;
    --max-price)  MAX_PRICE="$2";  shift 2 ;;
    --no-filter)  APPLY_FILTER=0;  shift ;;
    -h|--help)
      grep -E '^# ' "$0" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *) ETFS+=("$1"); shift ;;
  esac
done

if [[ ${#ETFS[@]} -eq 0 ]]; then
  echo "ERROR: pass at least one ETF symbol (e.g. XLK XLY XLF)" >&2
  exit 1
fi

: "${ALPHAVANTAGE_API_KEY:?ERROR: ALPHAVANTAGE_API_KEY not set}"

# --- pull + union holdings across ETFs --------------------------------------
UNION_FILE=$(mktemp)
trap 'rm -f "$UNION_FILE"' EXIT

for etf in "${ETFS[@]}"; do
  echo "→ pulling $etf holdings..." >&2
  bash "$SCRIPT_DIR/alphavantage.sh" etf_profile "$etf" \
    | python -c "
import sys, json
d = json.load(sys.stdin)
min_w = float('$MIN_WEIGHT')
for h in d.get('holdings', []):
    sym = (h.get('symbol') or '').strip().upper()
    try:
        w = float(h.get('weight') or 0)
    except ValueError:
        w = 0
    # Skip cash placeholders and weight-below-threshold
    if not sym or sym in {'CASH', 'USD', '-'} or w < min_w:
        continue
    # Skip preferred-share / multi-class oddities (contain dot or slash)
    if '.' in sym or '/' in sym:
        continue
    print(sym)
" >> "$UNION_FILE"
done

# Dedupe and sort
sort -u "$UNION_FILE" -o "$UNION_FILE"
PRE_FILTER_COUNT=$(wc -l < "$UNION_FILE" | tr -d ' ')
echo "→ $PRE_FILTER_COUNT unique tickers after dedupe (min_weight=$MIN_WEIGHT)" >&2

if [[ $APPLY_FILTER -eq 0 ]]; then
  cat "$UNION_FILE"
  exit 0
fi

# --- filter by price (Alpaca quote is cheap, one call per symbol) -----------
: "${APCA_API_KEY_ID:?ERROR: APCA_API_KEY_ID not set}"
: "${APCA_API_SECRET_KEY:?ERROR: APCA_API_SECRET_KEY not set}"

echo "→ applying price filter \$${MIN_PRICE}–\$${MAX_PRICE} via Alpaca quotes..." >&2

PASS_COUNT=0
REJECT_PRICE=0
REJECT_UNKNOWN=0

while IFS= read -r sym; do
  [[ -z "$sym" ]] && continue
  quote=$(bash "$SCRIPT_DIR/alpaca.sh" quote "$sym" 2>/dev/null || echo "")
  # Parse mid price from normalized quote shape
  mid=$(echo "$quote" | python -c "
import sys, json
try:
    d = json.load(sys.stdin)
    # Prefer ask if valid, else bid, else mid
    ask = d.get('ask') or 0
    bid = d.get('bid') or 0
    if ask > 0 and bid > 0:
        print((ask + bid) / 2)
    elif bid > 0:
        print(bid)
    else:
        print(0)
except Exception:
    print(0)
")
  # Crude numeric compare via awk
  keep=$(awk -v m="$mid" -v lo="$MIN_PRICE" -v hi="$MAX_PRICE" \
    'BEGIN { print (m >= lo && m <= hi) ? 1 : 0 }')
  if [[ "$mid" == "0" || "$mid" == "0.0" ]]; then
    REJECT_UNKNOWN=$((REJECT_UNKNOWN + 1))
    continue
  fi
  if [[ "$keep" == "1" ]]; then
    echo "$sym"
    PASS_COUNT=$((PASS_COUNT + 1))
  else
    REJECT_PRICE=$((REJECT_PRICE + 1))
  fi
done < "$UNION_FILE"

echo "→ filter complete: $PASS_COUNT passed, $REJECT_PRICE out-of-price-range, $REJECT_UNKNOWN no-quote" >&2

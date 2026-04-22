---
name: canslim-screener
description: Score stocks against the CAN SLIM methodology (Current earnings, Annual earnings, New catalysts, Supply/demand, Leader, Institutional sponsorship, Market direction) and identify tradeable base patterns. Use this skill whenever the agent needs to evaluate a ticker, build a watchlist, compute relative strength rankings, detect base patterns (cup-with-handle, flat base, double bottom, high-tight flag), or determine a valid pivot point for entry. Always call this skill before any new trade decision — never score stocks inline. The skill returns a structured conviction score (0–100) plus entry parameters (pivot, buy zone, stop) or an explicit rejection with reason.
---

# CAN SLIM Screener

The brain of the strategy. This skill scores tickers against William O'Neil's CAN SLIM framework and returns a go/no-go with conviction score + entry parameters.

## When to use

Call this skill from:
- `/weekly-prep` — scan universe, produce ranked watchlist
- `/pre-market` — re-score open watchlist candidates on overnight news
- `/market-check` — final go/no-go before any entry
- `/trade` — ad-hoc scoring of a ticker Jason asks about

**Never score CAN SLIM inline in a slash command.** Always call this skill. The scoring rubric lives in one place to prevent drift.

## Inputs

- `symbol` (required) — ticker to score, e.g., `NVDA`
- `purpose` (required) — one of `screen` | `final_check` | `watchlist_refresh`
- `market_state` (required) — current M state from MARKET-DIRECTION.md

## Outputs

Return a JSON block AND a human-readable summary.

```json
{
  "symbol": "NVDA",
  "conviction_score": 87,
  "pass": true,
  "letter_scores": {
    "C_current_earnings": 20,
    "A_annual_earnings": 15,
    "N_new_catalyst": 15,
    "S_supply_demand": 13,
    "L_leader": 14,
    "I_institutional": 8,
    "base_pattern_bonus": 10
  },
  "base_pattern": "cup_with_handle",
  "pivot_point": 485.00,
  "entry_zone": {"low": 485.00, "high": 509.25},
  "stop_at_entry": "entry * 0.93",
  "earnings_date_days_out": 23,
  "data_sources": {
    "earnings": "alpha_vantage",
    "price_volume": "alpaca",
    "catalyst": "perplexity",
    "institutional": "edgar_cache"
  },
  "warnings": []
}
```

## Steps

### 1. Verify market state gate
If `market_state != "Confirmed Uptrend"` AND `purpose == "final_check"`:
→ return `pass: false, rejection_reason: "market_not_in_uptrend"`.
For `purpose: screen` or `watchlist_refresh`, continue scoring but flag the gate in `warnings`.

### 2. Liquidity & price filters
Pull Alpaca: last price, 50-day average daily volume, market cap.
- If price < $10 or price > $500 → reject (`liquidity_price_out_of_range`)
- If 50d ADV < 500,000 → reject (`insufficient_liquidity`)

### 3. Earnings date check
Pull Alpha Vantage `EARNINGS` endpoint. If next earnings announcement is within 5 trading days → reject (`earnings_too_close`).

### 4. Score each letter

Load `references/scoring-rubric.md` for the full scoring details. Summary:

| Letter | Max | Data source |
|---|---|---|
| C — Current quarterly EPS growth | 20 | Alpha Vantage EARNINGS |
| A — Annual EPS growth + ROE | 15 | Alpha Vantage EARNINGS + OVERVIEW |
| N — New catalyst + 52w high proximity | 15 | Perplexity + Alpaca |
| S — Float + volume surge + buybacks | 15 | Alpha Vantage OVERVIEW + Alpaca volume |
| L — RS rank vs. universe + sector leadership | 15 | Alpaca price bars + sector ETF comparison |
| I — Institutional sponsorship trend | 10 | SEC EDGAR 13F (weekly cache) |
| Base pattern bonus | 10 | Alpaca price bars + `references/base-patterns.md` |

### 5. Detect base pattern

Load `references/base-patterns.md`. Run base detection on 6-month daily bars. Returns one of:
- `cup_with_handle` — +10 bonus
- `flat_base` — +10 bonus
- `double_bottom` — +10 bonus
- `high_tight_flag` — +10 bonus (rare but most explosive)
- `no_valid_base` — 0 bonus, flag as "base not formed"
- `late_stage_base` (4th-stage+) — 0 bonus, add warning "late stage — higher failure risk"

Compute pivot point per the pattern rules in the reference. Entry zone = pivot to pivot × 1.05 (chase limit).

### 6. Compute conviction score

Sum all letter scores + base bonus. Total max: 100.

- ≥ 85 → high conviction (eligible for 35% sizing override per TRADING-STRATEGY.md)
- 75–84 → standard conviction (30% sizing)
- < 75 → reject (`conviction_below_threshold`)

### 7. Return

Output the JSON block AND a 5-line human summary in this format:

```
📊 NVDA — 87/100 ✅
Base: cup-with-handle (8w), pivot $485.00, buy zone $485.00–$509.25
Stop if entered: $451.05 (-7%)
Earnings: 23 days out (clear)
Top signal: 40% EPS accel + RS 94 + sector leader
```

## Data source notes

**Alpha Vantage quota:** Free tier is 25 calls/day, 5/min. Paid tier ($50/mo) is 75/min. If on free tier, cache `OVERVIEW` responses for 7 days (fundamentals don't change intraday) and `EARNINGS` for 24 hours post-announcement, then 7 days.

**Perplexity prompt template** for the "N" letter:

```
Research <SYMBOL> for CAN SLIM "N" (New) letter.
Answer in 5 bullets:
1. New product, service, or management change in last 12 months (yes/no + brief)
2. Trading within 15% of 52-week high? (yes/no)
3. Analyst price target changes in last 30 days (up/down/flat)
4. Any pending catalyst in next 30 days (earnings aside)
5. Primary risk to the thesis
No fluff. One line per bullet.
```

**SEC EDGAR cache:** Refresh 13F data weekly only (they're filed quarterly with 45-day lag anyway). Stale data up to 7 days = acceptable. Beyond that, flag as `institutional_data_stale` warning.

## Rejections are features, not failures

If fewer than 3 tickers pass for a week, that's information — the market may be transitioning states, or sectors may be weak. Log the rejection breakdown in `memory/RESEARCH-LOG.md`:

```
Scanned 247 Russell 1000 + mid-cap candidates
Rejections:
  - conviction_below_threshold: 198
  - earnings_too_close: 23
  - no_valid_base: 14
  - insufficient_liquidity: 8
Passed (≥75): 4
```

This pattern itself is signal. A week with <3 passes is often a week to sit on cash.

## References

- `references/scoring-rubric.md` — full point-by-point scoring details per letter
- `references/base-patterns.md` — cup-with-handle, flat base, double bottom, high-tight flag detection rules + pivot calc

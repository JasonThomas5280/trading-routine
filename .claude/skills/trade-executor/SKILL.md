---
name: trade-executor
description: Place all buy and sell orders on Alpaca with mandatory pre-trade validation — position sizing math (accounting for $2,500 account, PDT rule, fractional shares), verification against TRADING-STRATEGY.md hard rules (max 4 positions, 30% cap, 10% cash buffer, no options, earnings proximity), trailing stop placement as real GTC orders (never mental), and logging to TRADE-LOG.md. Use this skill for every single order the agent places — never construct an Alpaca API call inline. The skill refuses orders that violate any hard rule and returns a structured result (executed / rejected / partially_filled) with order IDs and rationale.
---

# Trade Executor

Every order goes through this skill. **Never construct Alpaca API calls inline.** Every rule violation must be caught here before hitting the broker.

## When to use

- `/market-check` placing a new entry from the watchlist
- `/eod-review` acting on a sell signal from `sell-rules-engine`
- `/trade` ad-hoc buy/sell helper
- Any case where an order needs to be placed, period.

## Inputs

For BUY:
- `symbol` (required)
- `conviction_score` (required — from canslim-screener)
- `pivot_point` (required)
- `entry_zone` (required — {low, high})
- `thesis` (required — 2–3 sentences from RESEARCH-LOG.md)
- `target_position_pct` (optional — defaults to 30%; 35% allowed if conviction ≥85)

For SELL:
- `symbol` (required)
- `quantity` (required — or "all")
- `sell_reason` (required — one of: HARD_STOP_7PCT, TRAIL_HIT, DIST_DAY_CLUSTER, MA50_BREAK_VOLUME, CLIMAX_TOP, BASE_FAILURE, 8_WEEK_RULE, SECTOR_BLACKLIST, CIRCUIT_BREAKER, MANUAL_OVERRIDE)
- `sell_rules_engine_output` (required for non-manual sells — the JSON from that skill's last run on this symbol)

## Outputs

```json
{
  "action": "BUY",
  "symbol": "NVDA",
  "executed": true,
  "shares": 12.5,
  "avg_fill_price": 487.50,
  "position_value": 609.38,
  "position_pct_of_equity": 24.38,
  "entry_order_id": "alpaca_order_abc123",
  "trailing_stop_order_id": "alpaca_order_xyz456",
  "hard_stop_price": 453.38,
  "pdt_count_after": 0,
  "warnings": [],
  "logged_to_trade_log": true
}
```

Or on rejection:

```json
{
  "action": "BUY",
  "symbol": "NVDA",
  "executed": false,
  "rejected": true,
  "rejection_reason": "would_exceed_max_4_positions",
  "current_position_count": 4,
  "logged_to_trade_log": false
}
```

## Steps

### BUY flow

**1. Load current state (no assumptions):**
- Call `bash scripts/alpaca.sh account` → parse equity, buying_power, daytrade_count, pattern_day_trader flag
- Call `bash scripts/alpaca.sh positions` → current open positions

**2. Run hard-rule gauntlet (fail fast):**

Check in this order. First failure returns rejection:

| Check | Rule | Rejection code |
|---|---|---|
| Options check | Symbol is a stock or allowed inverse ETF (SH, SQQQ)? | `options_forbidden` |
| Market state | MARKET-DIRECTION.md = "Confirmed Uptrend"? (Or this is a hedge trade and state = Under Pressure/Correction) | `market_not_in_uptrend` |
| Position count | Current positions + 1 ≤ 4? | `would_exceed_max_4_positions` |
| Cash buffer | After trade, cash ≥ 10% of equity? | `would_break_cash_buffer` |
| Conviction | `conviction_score ≥ 75`? (85 required for 35% sizing override) | `conviction_below_threshold` |
| Weekly trade count | This week's new positions + 1 ≤ 3? (Check TRADE-LOG.md) | `would_exceed_max_3_weekly` |
| Daily loss cap | Account not down -3% today? | `daily_circuit_breaker_active` |
| Weekly loss cap | Account not down -6% WoW? | `weekly_circuit_breaker_active` |
| Drawdown halt | Account not -12% from high-water mark? | `drawdown_halt` |
| Earnings proximity | Next earnings >5 trading days out? | `earnings_too_close` |
| Entry zone | Current price within pivot → pivot × 1.05? | `price_out_of_entry_zone` |
| Amateur hour | Current time not 8:30–9:00 CT or after 2:45 CT? | `outside_valid_entry_window` |
| Macro risk | Not an FOMC day pre-1pm CT, not pre-7:30am CT on major macro release day? | `macro_risk_window` |

**3. Size the position:**

Load `references/position-sizing.md` for the math. Summary:

```
target_pct = 30% (or 35% if conviction_score ≥ 85 AND market state confirmed ≥10 sessions)
target_dollars = min(equity * target_pct, equity * available_cash_pct_after_reserves)
raw_shares = target_dollars / current_price

if symbol is fractional-eligible on Alpaca:
  shares = round(raw_shares, 4)
else:
  shares = floor(raw_shares)
  
# Sanity floor: don't bother with trades under $200
if shares * current_price < 200:
  return rejected: "position_too_small_to_matter"
```

**4. PDT check for the buy:**

A buy is never itself a day trade, but if the agent might need to exit same-day (e.g., news hits), we should check we won't be pushed to 3 day trades. For a BUY the PDT check is informational only — log warning if `daytrade_count >= 2` so operator knows there's limited same-day exit capacity.

**5. Place the parent buy order:**

Order type: LIMIT at `entry_zone_high` (the chase limit — pivot × 1.05). Why limit, not market: prevents getting a bad fill on illiquid mid-caps during a gap.

```bash
bash scripts/alpaca.sh order_buy <SYMBOL> <SHARES> <LIMIT_PRICE>
```

Wait for fill confirmation (poll 3× with 2s delay, or use Alpaca's order status polling).

If unfilled after 30 seconds AND price has moved outside entry zone → cancel the order. Log `entry_window_missed`.

**6. Place the GTC trailing stop:**

Once filled:
```bash
bash scripts/alpaca.sh order_trail_stop <SYMBOL> <SHARES> 10
```

This creates a real GTC trailing stop order with `trail_percent: "10"`. Note: Alpaca requires `trail_percent` as a STRING, not a float — this is a common gotcha. Script handles this.

Record both order IDs. If trailing stop fails to place, log as warning but proceed — the agent has the -7% hard stop as backup, and the next `/eod-review` will retry.

**7. Compute hard stop price:**

```
hard_stop = avg_fill_price * 0.93
```

This is a MENTAL backup in case the Alpaca trailing stop breaks. We don't place two stops (Alpaca rejects opposing orders). Instead, `/eod-review` and `/market-check` both check every position against its hard stop price.

**8. Log to TRADE-LOG.md:**

Append a BUY entry per the format in TRADE-LOG.md (see the format block there). Include order IDs, thesis, market state at entry.

**9. Send ClickUp alert:**

Via `bash scripts/clickup.sh "..."`. Format per CLAUDE.md communication rules.

**10. Return the result JSON.**

### SELL flow

**1. Load current state:** Same as buy step 1.

**2. Verify the sell signal:**

- If `sell_reason != MANUAL_OVERRIDE`, require `sell_rules_engine_output` in input. Refuse to sell without the engine's determination logged.
- If the sell_rules_engine's `verdict != SELL_NOW` — reject with `sell_signal_mismatch`.

**3. PDT gauntlet:**

Critical step. If selling today would create a day trade (position opened today?):
- Check `daytrade_count`.
- If `daytrade_count >= 3` AND `sell_reason != HARD_STOP_7PCT`:
  - **Defer the sell to tomorrow.** Log `pdt_limit_deferred`. Set a flag for next `/market-check` to re-evaluate.
- If `daytrade_count >= 3` AND `sell_reason == HARD_STOP_7PCT`:
  - **Sell anyway.** Capital preservation > PDT flag. Accept the restriction. Log `pdt_flag_accepted_for_hardstop`.

**4. Cancel existing trailing stop order (if any):**

Before placing the sell, cancel the open GTC trailing_stop to avoid conflicting orders:
```bash
bash scripts/alpaca.sh cancel_order <trailing_stop_order_id>
```

**5. Place the sell:**

Market order for urgency on hard stops and volume-driven signals:
```bash
bash scripts/alpaca.sh order_sell <SYMBOL> <SHARES> market
```

Limit order for 8_WEEK_RULE or planned exits (price specified by caller):
```bash
bash scripts/alpaca.sh order_sell <SYMBOL> <SHARES> limit <PRICE>
```

**6. Log the sell:**

Append a SELL entry to TRADE-LOG.md with exit_reason, hold_period, P&L, rule adherence note.

**7. Send ClickUp alert:**

Format:
```
🔴 SOLD 12 shares $NVDA @ $501.25 ($601.50)
Reason: TRAIL_HIT
Hold: 7 days | P&L: +$165.00 (+2.82%)
```

**8. Return result JSON.**

## Stop-tightening (non-entry path)

Called by `/eod-review` when sell-rules-engine returns `TIGHTEN_STOP`:

```
current_trail_pct = <from open trailing stop order>
new_trail_pct = <from sell-rules-engine>

if new_trail_pct < current_trail_pct (i.e., tighter):
  cancel existing trailing_stop
  place new trailing_stop at new_trail_pct
  log to TRADE-LOG.md as STOP_ADJUST entry
else:
  no-op (we NEVER loosen a stop)
```

## Critical Alpaca Gotchas

1. **`trail_percent` must be a string, not a number.** `"10"` works; `10` gets rejected.
2. **Trailing stops only fire during market hours.** Weekend gaps aren't protected by trailing stops — only by the hard stop price we manually check.
3. **Fractional shares** work for most stocks but NOT for inverse ETFs like SQQQ. Verify via Alpaca's `/v2/assets/<symbol>` endpoint's `fractionable: true/false`.
4. **Quote response shape** differs between IEX and SIP feeds. `scripts/alpaca.sh quote` abstracts this.
5. **Base URL** is `api.alpaca.markets` for account + orders but `data.alpaca.markets` for bars/quotes. Common mistake.
6. **Env var name vs. header name mismatch:** Env vars are `APCA_API_KEY_ID` and `APCA_API_SECRET_KEY`. Headers are `APCA-API-KEY-ID` and `APCA-API-SECRET-KEY`. Script handles this.

## References

- `references/alpaca-order-api.md` — full Alpaca order API cheat sheet with the above gotchas in detail
- `references/position-sizing.md` — the $2,500-specific position sizing math + fractional share handling

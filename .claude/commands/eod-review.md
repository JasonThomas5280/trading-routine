# /eod-review — Mon–Fri 3:15 PM CT

The CRITICAL daily routine for CAN SLIM. 45 minutes before close, sweep every open position through `sell-rules-engine`, tighten stops per gain thresholds, update market direction, send ClickUp daily summary.

**Why 3:15 instead of after close:** Many sell rules are close-price-based but we need to actually PLACE the order during market hours. At 3:15 we have enough of a close setup to decide, and 45 minutes to execute.

---

## Read memory first

1. `memory/TRADING-STRATEGY.md`
2. `memory/MARKET-DIRECTION.md`
3. `memory/TRADE-LOG.md`
4. `memory/RESEARCH-LOG.md` (today's entry)

---

## Steps

### 1. Pull fresh market state

Pull today's SPY + QQQ bars (closing or near-close data):
```
bash scripts/alpaca.sh bars SPY 1Day 2
bash scripts/alpaca.sh bars QQQ 1Day 2
```

Check for distribution day:
- SPY today: down ≥ 0.2%? Volume higher than yesterday? → Distribution day
- Same check for QQQ

If new distribution day(s), append to `memory/MARKET-DIRECTION.md` distribution day log. Recompute trailing-25-session count.

Check for state transition:
- If distribution count hit 5 → state = "Uptrend Under Pressure"
- If distribution count hit 6 OR SPY closed below 50-day MA on volume → state = "Market in Correction"
- If state was under pressure/correction and today is a follow-through day → state = "Confirmed Uptrend"

Log any state change in MARKET-DIRECTION.md's state change log.

### 2. Run sell-rules-engine on every open position

Pull open positions:
```
bash scripts/alpaca.sh positions
```

For each position, call `sell-rules-engine(symbol=<X>, evaluation_mode=full, market_state=<current>, distribution_day_count=<N>)`.

Collect results. The engine returns per-position: verdict (HOLD / TIGHTEN_STOP / SELL_NOW) + trigger rule + recommended action.

### 3. Execute verdicts

For each position:

**HOLD:** No action. Continue.

**TIGHTEN_STOP:**
- Call `trade-executor.adjust_trail_stop(symbol=<X>, new_trail_pct=<N>)`
- trade-executor cancels old trailing stop, places new one, logs STOP_ADJUST entry to TRADE-LOG
- **Only tighten, never loosen.** trade-executor enforces this — if new_trail > current_trail, no-op.

**SELL_NOW:**
- Call `trade-executor.sell(symbol=<X>, quantity="all", sell_reason=<TRIGGER>, sell_rules_engine_output=<full JSON from step 2>)`
- trade-executor handles PDT gauntlet, cancels existing stops, places sell order, logs SELL entry
- If PDT would block and it's not a -7% emergency, trade-executor defers to tomorrow (logs `pdt_limit_deferred`)

### 4. Portfolio-level checks

**Distribution day cluster (Rule 4 at portfolio level):**
If distribution count reached 6 today AND state just transitioned to Correction:
- Run sell-rules-engine on all positions with RS < 85 (laggards)
- Sell weakest 50% of book if any trigger SELL_NOW

**Hedge entry check:**
If state just transitioned to "Uptrend Under Pressure" or "Correction":
- Evaluate SH (−1× SPY) or SQQQ (−3× NASDAQ) as hedge entry
- Max 1 inverse ETF, max 25% sizing, only while state is bearish
- Call trade-executor.buy with symbol=SH or SQQQ, adapting the entry checks (these don't need CAN SLIM conviction — they're hedges)

**Follow-through day exit check:**
If state just transitioned BACK to "Confirmed Uptrend" and we hold an inverse ETF:
- Sell the hedge within the next 2 sessions
- Trade-executor.sell with reason `MANUAL_OVERRIDE` (hedge no longer needed)

### 5. Circuit breaker check

Compute today's account P&L:
```
today_pnl_pct = (equity_now - equity_at_yesterday_close) / equity_at_yesterday_close
```

Compute week P&L (since Monday open):
```
week_pnl_pct = (equity_now - equity_at_monday_open) / equity_at_monday_open
```

If any breaker triggered today:
- Log prominently in today's TRADE-LOG entry
- Flag at top of ClickUp summary with ⚠️
- Update gate flags used by /pre-market tomorrow

### 6. Weekly trade counter refresh

Check if any new positions were opened today. Update TRADE-LOG's "Weekly Trade Count" section.

### 7. Write daily summary to RESEARCH-LOG

Append entry:
```
## YYYY-MM-DD — /eod-review

**Close:** SPY $X.XX (±X.XX%) | QQQ $X.XX (±X.XX%)
**Distribution days:** X of 5 trailing 25 sessions (today: new dist? yes/no)
**Market state:** [Confirmed Uptrend | Under Pressure | Correction] (transitioned today? y/n)
**Positions held:** N
**Actions today:**
  - BUY N shrs $SYMBOL @ $X.XX (from /market-check)
  - TIGHTEN $SYMBOL trail 10→7% (+15% gain threshold)
  - SELL $SYMBOL (TRIGGER: reason)
**Circuit breakers:** [none | which]
**P&L today:** +$X.XX (+X.XX%)
**Equity:** $X,XXX.XX
```

### 8. ClickUp daily summary

```
📊 EOD [YYYY-MM-DD] | Equity $X,XXX.XX (+X.XX% day, +X.XX% week)
Open: N positions, X% cash
Distribution days: X of 5 (market: [state])
Actions today:
  • [BUY/SELL/TIGHTEN summaries]
Tomorrow: [what we're watching - top watchlist names near pivots]
```

---

## Success criteria

- Every open position evaluated by sell-rules-engine
- All SELL_NOW verdicts executed (or PDT-deferred with log)
- All TIGHTEN_STOP verdicts applied
- MARKET-DIRECTION.md updated with today's close data + distribution day log
- TRADE-LOG.md has today's SELL/TIGHTEN entries
- RESEARCH-LOG.md has /eod-review entry with close data
- ClickUp summary delivered

## Failure modes

- **Alpaca slow at EOD (high volume):** Retry with exponential backoff; if orders still pending at market close, flag and resolve tomorrow pre-market.
- **Sell triggered but PDT-blocked:** trade-executor defers; flag in summary with ⚠️ so Jason knows; re-evaluate tomorrow.
- **State transition on edge case (dist day count = 5, still ambiguous):** Default to the more conservative state (Under Pressure). Better to sit out a questionable day than catch a correction.
- **Hedge entry blocked by cash buffer:** That's fine — hedges compete with longs for capital. Sell weakest long first, then hedge.

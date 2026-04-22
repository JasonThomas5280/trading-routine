---
name: sell-rules-engine
description: Evaluate every open position against the 8 CAN SLIM sell rules (-7% hard stop, trailing stop hit, distribution day cluster, 50-day MA break on volume, climax top, base failure, 8-week rule, late-stage base) and return deterministic verdicts (HOLD, TIGHTEN_STOP, SELL_NOW) with rationale. Use this skill whenever the agent needs to decide exits — especially in /eod-review, /market-check, and any emergency intraday sell decision. Never let the agent decide exits by vibes. This skill is the non-emotional exit discipline that separates top-decile swing traders from the rest.
---

# Sell Rules Engine

Exits are where CAN SLIM practitioners lose the most money by going soft. This skill removes agent discretion from the hardest emotional decision.

**Core principle:** If any sell rule fires, SELL. No "let me see what happens tomorrow." No "but the catalyst is still bullish." No "this one's different."

## When to use

- `/eod-review` — evaluate every open position at 3:15 PM CT daily
- `/market-check` — quick re-evaluate if a position is near its stop mid-morning
- `/pre-market` — overnight gap check (did any position gap below its hard stop?)
- Emergency: if news hits mid-session and the agent needs to decide fast

**Evaluate every open position every time.** No shortcuts. No "this one's obviously fine." The engine is fast.

## Inputs

- `symbol` (required)
- `evaluation_mode` (required) — `full` | `quick_overnight_gap_check` | `emergency_news`
- `market_state` (required) — from MARKET-DIRECTION.md
- `distribution_day_count` (required) — current count from MARKET-DIRECTION.md

## Outputs

```json
{
  "symbol": "NVDA",
  "verdict": "SELL_NOW",
  "trigger_rule": "HARD_STOP_7PCT",
  "trigger_detail": "Close $451.00 < hard_stop $453.38",
  "position_data": {
    "avg_entry": 487.50,
    "current": 451.00,
    "pnl_pct": -7.49,
    "days_held": 4,
    "peak_since_entry": 495.00,
    "hard_stop": 453.38,
    "current_trail_pct": 10
  },
  "supporting_signals": [],
  "recommended_action": {
    "action": "market_sell_all",
    "urgency": "immediate"
  }
}
```

Or for HOLD / TIGHTEN_STOP:

```json
{
  "symbol": "META",
  "verdict": "TIGHTEN_STOP",
  "trigger_rule": "GAIN_THRESHOLD_15PCT",
  "trigger_detail": "Position +16.8% → tighten trail to 7%",
  "position_data": {...},
  "recommended_action": {
    "action": "replace_trailing_stop",
    "new_trail_pct": 7
  }
}
```

## The 8 Sell Rules

Evaluated in priority order. **First rule that fires wins.** Remaining rules aren't checked.

### Rule 1: -7% Hard Stop (highest priority)

**Trigger:** Current price (or today's close for EOD eval) ≤ `avg_entry × 0.93`

**Verdict:** `SELL_NOW`, market order.

**Exception:** None. This is the non-negotiable rule. Not for "I'll hold through earnings." Not for "it bounced off the stop." 7% means 7%.

**Intraday refinement:** Mid-session, only trigger if the stop-level has been breached on volume (to avoid whipsaw on a spike-down). At EOD, trigger on any close below stop.

---

### Rule 2: Trailing Stop Hit

**Trigger:** Alpaca reports the GTC trailing_stop order has executed (status = `filled`).

**Verdict:** Already sold by Alpaca. Log it and update TRADE-LOG.md. This rule mostly exists for state reconciliation — the trailing stop does the work.

**Edge case:** If Alpaca's trailing stop execution price was materially worse than expected (e.g., gap-down fill well below trail trigger), note in warnings and consider it for future stop-tightening decisions.

---

### Rule 3: 50-day MA Break on Volume

**Trigger:** Stock closes below its 50-day moving average AND day's volume ≥ 1.5× 50-day average volume.

**Verdict:** `SELL_NOW`, market order at next open (or EOD close if evaluated at 3:15).

**Rationale:** A clean MA break on volume is institutional selling. Don't argue with it.

**Edge case:** If the break happens but volume is <1.2× average, downgrade to `TIGHTEN_STOP to 5%` instead of SELL. Low-volume break may be a shake-out.

---

### Rule 4: Distribution Day Cluster

**Trigger:** `distribution_day_count >= 6` in trailing 25 sessions AND position has RS rank < 85.

**Verdict:** `SELL_NOW` for weakest 50% of positions.

**Rationale:** 6+ distribution days = market top/correction territory. Institutional distribution is widespread. Rotate to cash or hedges.

**Note:** Leaders (RS ≥ 90) can survive a distribution cluster — don't auto-sell those. Sell the laggards in your book first.

---

### Rule 5: Climax Top

**Trigger (all conditions):**
- Position up ≥ 25% from entry
- Single day's percent gain ≥ 2× the 20-day average daily range
- Day's volume ≥ 1.5× the 50-day average
- Stock has run up 20%+ over the prior 2 weeks

**Verdict:** `SELL_NOW` for 50% of position (lock in profit). Let remaining 50% ride with tightened trail (5%).

**Rationale:** A climax top marks emotional/exhaustion buying. The rally has lifted everyone's cost basis. Future upside limited; downside accelerated.

**Calibration note:** Don't over-trigger this. Many big winners have strong days. The "climax" is distinguishable by the combination of: very oversize move + huge volume + late in the rally + often a gap up.

---

### Rule 6: Base Failure (for recent entries only)

**Trigger:** Position entered within last 5 sessions AND stock returns to base (back below pivot + 2%) on heavy volume (≥+40% vs 50-day average).

**Verdict:** `SELL_NOW`.

**Rationale:** A proper breakout doesn't come back into its base. Return to base on volume = the breakout was false.

**Don't confuse with:** Normal pullback to pivot on light volume — that's a retest, not a failure. Volume distinguishes them.

---

### Rule 7: 8-Week Rule (positive inversion — a HOLD rule)

**Trigger:** Position gained ≥ 20% within 3 weeks of entry.

**Verdict:** `HOLD` for 8 weeks from entry date, regardless of other sell rules EXCEPT Rule 1 (-7% hard stop).

**Rationale:** O'Neil's big-winner rule. Stocks that move 20%+ in 3 weeks are exhibiting leadership strength. These are the stocks that double. Holding through the natural 8-week consolidation prevents selling too early.

**Override:** Rule 1 (-7% hard stop) still applies. Any other rule deferred until 8-week anniversary.

---

### Rule 8: Late-Stage Base (proactive de-risking)

**Trigger:** Position's current base (per canslim-screener) is 4th-stage or later.

**Verdict:** `TIGHTEN_STOP` to 5% immediately. Not an automatic sell — but aggressive stop management.

**Rationale:** Late-stage bases fail 3-out-of-4 times. Preserve profits via tighter stops.

---

## Stop-Tightening (Gain Thresholds) — Always Evaluated

Separate from the 8 sell rules. These are evaluated on every position whose P&L is positive.

| Position gain | New trail % | Verdict |
|---|---|---|
| +15% | 7% | `TIGHTEN_STOP` |
| +20% | 5% | `TIGHTEN_STOP` |
| +25% | 4% + climax watch | `TIGHTEN_STOP` + evaluate Rule 5 |

**Never loosen a stop.** If current trail % is already 5%, don't "adjust" to 7% because of a pullback. The ratchet only goes one direction.

**Never tighten closer than 3% to current price.** Whipsaw protection. If a tightening would put the stop within 3% of last price, pick a slightly wider trail.

---

## Data Pulls Per Evaluation

For each position being evaluated:

1. Alpaca positions endpoint → current price, qty, avg_entry, unrealized_pl
2. Alpaca bars (last 60 days) → compute 50-day MA, 20-day ATR, 50-day avg volume
3. Alpaca orders (open) → find current trailing_stop order, current trail_percent
4. TRADE-LOG.md → entry date, peak since entry, base stage at entry
5. MARKET-DIRECTION.md → distribution day count, market state

Cache the market-level data (distribution count, state) for the full eval batch — don't re-pull per position.

---

## Evaluation Modes

**`full`** (default, used by /eod-review): Check all 8 rules + stop-tightening. Most comprehensive.

**`quick_overnight_gap_check`** (used by /pre-market): Only checks Rule 1 (hard stop) with gap scenario. If pre-market shows price below hard stop, flag for immediate open action.

**`emergency_news`** (used ad-hoc when news hits): Checks Rule 1 + evaluates if news changes the thesis. If thesis is broken, verdict = `SELL_NOW` with reason MANUAL_OVERRIDE (human should confirm).

---

## What This Skill Will NOT Do

- Decide new entries (that's canslim-screener)
- Place orders (that's trade-executor)
- Override Rule 1 for any reason
- Be "soft" on a position because the fundamentals are "still good"

Fundamentals don't save bad price action. The -7% stop exists because CAN SLIM is a momentum system — momentum broken = thesis broken, regardless of the story.

---

## Composite example output

Typical EOD evaluation batch:

```json
{
  "batch_evaluated": 3,
  "results": [
    {"symbol": "NVDA", "verdict": "HOLD", "note": "P&L +8.2%, under thresholds"},
    {"symbol": "META", "verdict": "TIGHTEN_STOP", "new_trail_pct": 7, "reason": "gain_over_15pct"},
    {"symbol": "CRWD", "verdict": "SELL_NOW", "trigger_rule": "MA50_BREAK_ON_VOLUME"}
  ],
  "market_level_triggers": {
    "distribution_days": 4,
    "state": "Confirmed Uptrend"
  }
}
```

## References

- `references/sell-checklist.md` — the full per-rule cheat sheet with edge cases, in case the skill itself ever becomes ambiguous

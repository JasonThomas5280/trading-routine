# Sell Rules Checklist — Expanded Detail

Called by `sell-rules-engine` SKILL.md. The SKILL.md has the operational logic; this file exists for edge cases, rationale, and O'Neil's own commentary on why each rule exists.

---

## Rule 1: -7% Hard Stop

**Precise trigger:**
```
if current_price <= avg_entry * 0.93:
    verdict = SELL_NOW
```

**Why 7%, not 8% or 10%:**
O'Neil's research showed that stocks that fall 8%+ from proper pivots rarely come back to produce winners. The 7% cut preserves capital for the next idea. If you're right more than 40% of the time on 2.5:1 winner:loser ratio, you're profitable — but ONLY if losers are actually cut at 7%.

**Common failure modes:**
- "I'll hold until tomorrow to see" — by tomorrow it's -12% and you're questioning your strategy
- "The earnings are tomorrow, it'll recover" — earnings disasters are bimodal, you don't want to be there
- "The fundamentals are still great" — yes, and so were Cisco's in 2000

**What if the stock gaps through the stop?**
If overnight news causes a gap to, say, -15%, still sell. Do NOT hold hoping for a bounce. A 15% loss hurts less than a 40% loss six weeks from now.

**What if market is down 3% that day?**
Still sell. Market context doesn't rescue individual stops. If anything, it reinforces the decision — broad weakness = more stops coming.

---

## Rule 2: Trailing Stop Hit

This rule is mostly bookkeeping. Alpaca executes the trailing stop automatically. The skill's job is:

1. Detect the execution (order status = `filled`)
2. Reconcile with `TRADE-LOG.md`
3. Log the exit reason as `TRAIL_HIT`
4. Check the fill price vs. expected trigger — if materially worse (>1% slippage), note for future trail-percent calibration

**The only decision:** Nothing. The stop fired. Accept it.

---

## Rule 3: 50-day MA Break on Volume

**Precise trigger:**
```
if close_today < sma50(close) and volume_today >= 1.5 * sma50(volume):
    verdict = SELL_NOW
```

**Why the MA50 matters:**
The 50-day MA is where institutional money watches for support. When it breaks on volume, it means institutions are selling, not buying the dip.

**Edge case — first time touching the MA50:**
If a position has never tested its 50-day MA since entry, and this is the first touch, volume matters even more. First-touch breaks on heavy volume are especially bearish. First-touch holds are bullish (often the buy-the-dip point).

**Edge case — stock has been consolidating:**
If the stock has been sideways along its MA50 for several sessions (accumulation/distribution ambiguous), apply stricter volume threshold (≥1.8×) before triggering. Otherwise you'll get shaken out during consolidations.

---

## Rule 4: Distribution Day Cluster

**Precise trigger:**
```
if dist_day_count_trailing_25 >= 6 and position.rs_rank < 85:
    verdict = SELL_NOW for this position
```

**Why 6, not 5:**
- 5 distribution days = "Uptrend Under Pressure" (no new entries, but hold)
- 6+ = confirmed distribution = rotate to cash

**Which positions to sell first when clusters form:**
Evaluate all open positions by:
1. RS rank (lowest first)
2. Unrealized P&L (negative first — cut losers before winners)
3. Base stage (late-stage first)
4. Sector leadership (laggards first)

Sell weakest half. Hold strongest half. Re-evaluate next session.

---

## Rule 5: Climax Top

**Precise trigger (all):**
```
if (unrealized_pl_pct >= 25 and
    today_range_pct >= 2 * atr_20 and
    volume_today >= 1.5 * sma50(volume) and
    close_today >= 1.20 * close_15_days_ago):
    verdict = SELL_NOW for 50%
```

**Why 50%, not 100%:**
CAN SLIM's biggest winners often climax multiple times before topping permanently. Selling half locks in profit; keeping half preserves upside. This is "rules-based greed management."

**Visual signature of a climax top:**
- Often starts with a gap up at the open
- Single day's range is 3×+ its recent average
- Volume is massive
- Usually happens on day 1 of "euphoric" news (analyst upgrades, conference calls with bold guidance, media coverage)
- Closes near the low of its day's range (rejection)

**NOT a climax top:**
- Strong earnings-day reaction on first trading day after report (different pattern — earnings-induced gap)
- Day-1 of a new uptrend after a long base (that's a breakout, not exhaustion)
- Normal strong day during an orderly advance

---

## Rule 6: Base Failure

**Precise trigger:**
```
if days_since_entry <= 5 and
   close < pivot_point * 1.02 and
   volume_today >= 1.4 * sma50(volume):
    verdict = SELL_NOW
```

**Why 5 days:**
Proper breakouts run 5%+ from pivot in the first few sessions. Returning to pivot within 5 days means the "breakout" was a head-fake — institutional sellers used the breakout to unload.

**Edge case — the stock is trading light volume:**
If volume is not heavy (<1.2× average), it's a retest, not a failure. Hold. Watch for the next session — if volume picks up on the downside, THEN sell.

---

## Rule 7: 8-Week Hold (DEFERS other rules)

**Precise trigger:**
```
if unrealized_pl_pct >= 20 and days_since_entry <= 15:
    hold_until_date = entry_date + 8 weeks
    # Defer rules 3, 4, 5, 6, 8 until hold_until_date
    # Rule 1 (-7%) STILL applies
```

**Why this exists:**
The best swing-trade winners — the ones that 2x and 3x — almost always show a 20%+ move in 3 weeks early. These need room to consolidate. Selling on normal pullback signals (Rule 3, Rule 5) during the first 8 weeks kills the multi-bagger before it happens.

**The "defer" means:**
- Rule 1 (-7%): STILL fires — if you bought at $100 and it hits $93, sell even during 8-week-rule
- Rules 3–6, 8: Do NOT fire during the 8-week window
- After 8 weeks: resume full rule evaluation

**Exception within the exception:**
If during the 8-week window, market state transitions to "Correction" (Rule 4 at portfolio level, not per-stock), still consider selling laggards. The 8-week rule is per-stock strength; a correction overrides everything.

---

## Rule 8: Late-Stage Base

**Precise trigger:**
```
if position.base_stage_at_entry >= 4:
    verdict = TIGHTEN_STOP to 5% immediately
```

**Why not a SELL:**
A late-stage base CAN produce a winner — just with lower probability (roughly 25% vs. 60%+ for 1st-2nd stage). Tightening the stop preserves the chance of being right while protecting against the 75% failure case.

**Track base stage continuously:**
A stock that was 2nd-stage at entry can become 3rd-stage as it advances. Re-evaluate base stage on each `/weekly-review`. If a position graduates to 4th-stage, tighten.

---

## Positive Stop-Tightening (Gain-Based)

Not a sell rule, but evaluated alongside the 8 rules. Applies to any position in positive territory.

```
+15% gain → trail_pct = 7%
+20% gain → trail_pct = 5%
+25% gain → trail_pct = 4%, watch for climax top
+30% gain → trail_pct = 4%, Rule 5 scrutiny doubled
+50% gain → trail_pct = 3% (this is rare — a multi-bagger in progress)
```

**Safety floors on tightening:**
- Never within 3% of current price
- Never a trail that would be beneath the current 50-day MA (you want the MA as support, not the stop above it)
- Never loosen (ratchet principle)

---

## What ISN'T a sell rule (common mistakes)

- **Earnings announcement approaching** — don't sell just because of the calendar. (We never ENTER within 5 days of earnings, but if a position moves into that window organically, hold and let the trailing stop do its work.)
- **Competitor news** — competitor's bad news doesn't break your thesis unless it's a direct market-share hit. Rely on price action.
- **Analyst downgrade** — analysts downgrade into strength more often than into real weakness. Wait for price confirmation.
- **"It's been 3 weeks and it's flat"** — if the stop hasn't been hit, the trade is still live. Don't exit on boredom.
- **Fed minutes, CPI readings, geopolitical headlines** — if any of these break the market-level picture, that shows up in Rule 4 (distribution cluster). Let the market-level rule handle it.

---

## Emotional sell traps (flag if agent's reasoning drifts here)

If during evaluation the agent's thinking includes any of these phrases, pause and re-check the ruleset:

- "I feel like this is going to recover"
- "The earnings call sounded bullish"
- "It's just noise"
- "Let me give it one more day"
- "The fundamentals are intact"

None of those are sell rules. None of those are reasons to hold past a rule trigger. The rules are the rules.

---

## One more rule (implicit, for completeness): Obvious state drift

If at any point Alpaca reports a position that's not in TRADE-LOG.md (or vice versa), HALT and alert. Don't sell, don't buy. State drift = potential bug or partial fill issue. Jason's manual review.

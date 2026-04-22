# CAN SLIM Trading Strategy — Rulebook

**Version:** 1.0 | **Account:** Alpaca | **Capital:** $2,500 | **Style:** Long + inverse ETF hedges | **Hold:** Signal-based (no time limit)

This is the agent's rulebook. Never violate. Update in-place when a rule learns a new nuance from a weekly review (and log the change in WEEKLY-REVIEW.md with date + rationale).

---

## The CAN SLIM Framework

CAN SLIM is William O'Neil's fundamentals-plus-technicals system from *How to Make Money in Stocks*. It requires **all seven** conditions. Missing any one letter disqualifies the trade.

### C — Current Quarterly Earnings
- **Rule:** EPS growth ≥ +25% year-over-year in the most recent quarter. Prefer +40%+.
- **Acceleration bonus:** If current quarter's growth exceeds prior quarter's growth, score +10.
- **Red flag:** Growth that decelerates 2 quarters in a row = avoid.
- **Data source:** Alpha Vantage `EARNINGS` endpoint.
- **Score:** 0–20 points. 25%–40% = 10pts. 40%–80% = 15pts. 80%+ = 20pts. <25% = 0 (disqualifying).

### A — Annual Earnings Growth
- **Rule:** Annual EPS growth ≥ +25% for each of the last 3 years. ROE ≥ 17%.
- **Prefer:** Consistent acceleration, not volatile "big year then flat" patterns.
- **Data source:** Alpha Vantage `EARNINGS` + `OVERVIEW` endpoints.
- **Score:** 0–15 points. All 3 years ≥25% = 10pts. ROE ≥17% = +5pts.

### N — New Product, New Management, New High
- **Rule:** Something genuinely new driving the story. Classic triggers:
  - New product/service with provable market traction
  - New management (<18 months) executing
  - New industry cycle (post-downturn recovery)
  - Price breakout to new 52-week high from a proper base
- **Data source:** Perplexity research query + price proximity check via Alpaca.
- **Score:** 0–15 points. New high from base = 10pts. Provable new catalyst = +5pts.

### S — Supply & Demand
- **Rule:** Smaller floats move faster. Volume on up-days should be notably higher than down-days.
- **Metrics:**
  - Float ≤ 50M shares ideal; ≤ 200M acceptable; >500M is headwind
  - Volume surge: breakout volume ≥ +40% above 50-day average
  - Buyback activity: ongoing repurchase program = positive
- **Data source:** Alpha Vantage `OVERVIEW` (SharesOutstanding), Alpaca bars for volume.
- **Score:** 0–15 points. Float <50M = 5. Breakout volume ≥+40% = 5. Active buyback = 5.

### L — Leader or Laggard
- **Rule:** Only trade leaders. Relative Strength (RS) rank ≥ 80 vs. the market (top 20%). Prefer ≥ 90.
- **RS rank calc:** 6-month price change vs. universe, percentile-ranked.
- **Within sector:** Must be top 3 performers in its sector.
- **Sector:** Sector must also be leading — top 3 of 11 GICS sectors on 4-week relative performance.
- **Score:** 0–15 points. RS ≥ 90 = 10pts, 80–90 = 5pts. Sector top-3 = +5pts.

### I — Institutional Sponsorship
- **Rule:** Quality institutional ownership, increasing over recent quarters.
- **Metrics:**
  - ≥ 10 institutional holders
  - At least 1 "smart money" top-quartile performer fund adding (via 13F data)
  - Not OVER-owned (≥90% institutional = crowded trade, reduce points)
- **Data source:** SEC EDGAR 13F (weekly cache — not intraday).
- **Score:** 0–10 points. Increasing = 7pts, stable = 3pts, decreasing = 0.

### M — Market Direction
- **Rule:** The most important letter. 3 out of 4 stocks follow the market. New long entries ONLY in "Confirmed Uptrend."
- **States** (updated daily in MARKET-DIRECTION.md):
  - **Confirmed Uptrend** — SPY above 50-day MA, <5 distribution days in 25 sessions, recent follow-through day (+1.25% on volume 4–7 days after a low).
  - **Uptrend Under Pressure** — 5+ distribution days in 25 sessions. Reduce exposure. No new entries.
  - **Market in Correction** — SPY closes below 50-day MA on volume, OR distribution days reach 6+. Sell weak positions. Hedge with inverse ETFs. Go to cash.
- **Distribution day:** Index closes down ≥0.2% on higher volume than the prior day.
- **Follow-through day:** 4th-7th day of a rally attempt closes up ≥1.25% on volume higher than prior day. Confirms new uptrend.
- **Score gate (not additive):** Market state must be "Confirmed Uptrend" OR the trade is rejected regardless of letter scores.

---

## Conviction Score (Entry Gate)

**Total possible: 100 points** (C:20 + A:15 + N:15 + S:15 + L:15 + I:10 + Base pattern bonus:10)

- **Required to enter:** ≥ 75/100 AND market in "Confirmed Uptrend" AND valid base pattern.
- **Exception:** Never enter below 75 "because it's close." 75 is the floor.
- **Base pattern bonus:** +10 for cup-with-handle, flat base, double bottom, or high-tight flag at proper pivot point. 0 otherwise. See `canslim-screener/references/base-patterns.md`.

---

## Position Sizing (tuned for $2,500)

| Rule | Value |
|---|---|
| Max concurrent positions | 4 |
| Max per position at entry | 30% (~$750) |
| Min cash buffer | 10% |
| Max deployed | 90% |
| Max new positions per week | 3 |
| Min dollar size per trade | $200 (don't bother below this) |
| Fractional shares | Allowed on Alpaca — use them |

**Sizing formula:**
```
desired_position_value = min(account_equity × 0.30, 
                              account_equity × available_cash_pct)
shares = desired_position_value ÷ entry_price
# round to 4 decimal places if fractional; round down to int if ticker is not fractional-eligible
```

**Kelly-adjusted sizing (optional, weeks with conviction > 85):** Size up to 35% on conviction ≥ 85 AND market direction confirmed ≥ 10 sessions. Log the override in TRADE-LOG.md.

---

## Entry Rules

**A buy trigger requires ALL of:**
1. Conviction score ≥ 75 from `canslim-screener`
2. Market in "Confirmed Uptrend" (from MARKET-DIRECTION.md)
3. Price crosses pivot point on volume ≥ +40% vs. 50-day average volume
4. Entry within 5% of pivot point (late = don't chase)
5. No earnings announcement within 5 trading days
6. PDT status checked — entering now does not put us at 4+ day trades in rolling 5 days if we might need to exit same-day
7. Position sizing respects max-4-positions and 90% cap rules
8. Daily/weekly circuit breakers NOT triggered

**Never enter during:** First 30 minutes of session (8:30–9:00 CT), last 15 minutes of session (2:45–3:00 CT), FOMC meeting days before 1:00 PM CT, days with major macro data releases before 7:30 AM CT.

---

## Exit Rules (in priority order — first one firing wins)

**Hard Stops (always triggered by `sell-rules-engine`):**

1. **-7% hard stop from entry** — If price closes below entry × 0.93, sell at next open (or immediately if intraday break is on heavy volume). NO EXCEPTIONS.
2. **Trailing stop hit** — GTC trailing_stop order on Alpaca handles this automatically. Don't override.
3. **Distribution day cluster** — If market reaches 6 distribution days in 25 sessions, reduce exposure by 50% across weakest positions.
4. **50-day MA break on volume** — Individual stock closes below its 50-day MA on volume ≥ 1.5× the 50-day average. Sell.

**Soft Signals (sell-rules-engine evaluates, agent decides with logged rationale):**

5. **Climax top** — Single-day gain ≥ 2× the 20-day average true range, on volume 1.5×+ average, occurring late in a rally (stock up 25%+ over 2 weeks). Consider partial sell (50%).
6. **8-week rule** — If a stock gains +20% in <3 weeks from breakout, hold for 8 weeks from buy date before considering selling (O'Neil's rule for big winners). Exception: sell on any hard-stop trigger.
7. **Base failure** — Breakout fails, stock returns to base within 5 sessions on heavy volume. Sell.
8. **Late-stage base** — 4th-stage base or later = higher risk. Reduce position by 50% on any weakness.

**Trailing stop tightening:**
- Initial: 10% ATR-adjusted trailing stop (GTC on Alpaca, `trail_percent: "10"`)
- At +15% gain: tighten to 7%
- At +20% gain: tighten to 5%
- At +25%+ gain: tighten to 4%, monitor for climax top
- **Never within 3% of current price** (whipsaw protection)
- **Never move a stop DOWN.** Ever.

---

## Inverse ETF Hedging Rules

**Allowed instruments:** SH (−1× S&P), SQQQ (−3× NASDAQ). No others.

**Entry trigger:** Market state transitions to "Uptrend Under Pressure" OR "Correction."

**Sizing:** Max 1 inverse ETF at a time, max 25% of portfolio when deployed.

**Exit trigger:** Follow-through day confirms new uptrend → exit within 2 sessions.

**Rationale:** Inverse ETFs are hedges against existing long positions during corrections, not directional bets. A -3× instrument like SQQQ decays from leverage — never hold longer than necessary.

---

## Circuit Breakers (Account-Level)

| Trigger | Action |
|---|---|
| Account down -3% in a single day | Halt new entries rest of day. Sells still allowed. |
| Account down -6% in the week | Halt new entries until Monday. Run /weekly-review early. |
| Drawdown -12% from high-water mark | Halt all entries. Human review required. |
| PDT count = 3 of 3 in rolling 5 days | Block any order that would create a 4th day trade. Override only for -7% hard stop emergency. |
| Alpha Vantage cache > 24hr stale | Degrade to Alpaca-only analysis. Flag in log. |
| Perplexity + WebSearch both fail | Skip new entries. Sells still run (use Alpaca data only). |
| Alpaca API down | Halt all activity. Alert immediately. |

---

## Sector Rotation Rules

- Track sector RS rankings weekly via `/weekly-prep`.
- Only take new entries in top-3 sectors (by 4-week RS).
- If a stock's sector drops out of top-3, tighten stop to 5%.
- If 2 consecutive failed trades in a sector → blacklist sector for 2 weeks.

---

## Learning Loop

Every Friday, `/weekly-review` generates a postmortem that answers:

1. **Rule adherence** — Did we violate any hard rule this week? If yes, why? What gating should be added?
2. **Win/loss asymmetry** — Average winner size vs. average loser size. CAN SLIM target: winners 2.5× average loser.
3. **Sector hit rate** — Which sectors worked, which didn't.
4. **Market direction accuracy** — Did MARKET-DIRECTION.md calls match how the market actually behaved?
5. **Conviction correlation** — Did higher-conviction-score trades outperform lower-conviction ones?
6. **Research source impact** — Did websearch-fallback weeks underperform Perplexity weeks?

Changes to this rulebook get proposed in WEEKLY-REVIEW.md, reviewed with Jason, then edited in-place here with a changelog entry at the bottom.

---

## Changelog

| Date | Change | Rationale |
|---|---|---|
| 2026-04-17 | v1.0 initial ruleset | Architecture by Claude Opus 4.7 per Jason's spec: CAN SLIM, $2,500, aggressive 4-position concentration, signal-based exits, inverse-ETF hedging, Russell 1000 + selective mid-caps universe. |

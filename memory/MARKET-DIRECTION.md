# Market Direction — The "M" in CAN SLIM

**3 out of 4 stocks follow the market.** This file is read by EVERY routine before deciding whether new entries are allowed. Updated by `/pre-market` daily and `/eod-review` daily (close-of-day truth).

---

## Current Status

**Status:** 🟢 **CONFIRMED UPTREND**

**Last updated:** 2026-04-24 (Fri) — `/eod-review`
**Confirmed Uptrend days:** 14 (since follow-through day 2026-04-08)
**Distribution days (last 25 sessions):** 1 effective (Apr 23 only — today is an UP day, no new distribution)
**Most recent follow-through day:** 2026-04-08 (SPY +2.55%, volume 94M vs 70M prior = higher-volume confirmation)
**SPY close 2026-04-24:** ~$710 est. (record close; +~1.0% from $703.23; range $708.58–$714.14 per search; Alpaca blocked day 7, exact close unconfirmed) — NOT a distribution day (UP)
**SPY close 2026-04-23:** ~$703.23 (-0.41% vs Apr 22 $706.14) — DISTRIBUTION DAY (magnitude -0.41% >= -0.20%; software sector carnage IBM -7.94% / SFDC -8.88% / NOW -18% implies elevated vol; exact ratio unconfirmed — Alpaca 403 day 4)
**SPY close 2026-04-22:** $706.14 (+0.29% vs Apr 21 close $704.08) — no distribution day
**SPY close 2026-04-21:** $704.08
**SPY relative to 50-day MA:** above (est. ~$675; today's ~$710 est. = +5.2% above)
**SPY relative to 200-day MA:** above (200-day ~$666; today's ~$710 est. = +6.6% above)
**QQQ close 2026-04-24:** ~$661 est. (Nasdaq +1.63% to 24,836.60 record; from $650.81; Alpaca blocked — estimate only) — NOT a distribution day (UP)
**QQQ close 2026-04-23:** $650.81 (-0.34% vs Apr 22 $653.01) — DISTRIBUTION DAY (magnitude -0.34% >= -0.20%; Nasdaq -0.89%; vol elevated with software sector)
**QQQ close 2026-04-22:** $653.01 (+1.35% vs Apr 21 close $644.33) — no distribution day
**QQQ relative to 50-day MA:** above

**Key Apr 24 context:** S&P 500 + Nasdaq closed at NEW ALL-TIME HIGHS. Semiconductor index up 18th straight day. Intel +23.6% (blockbuster earnings), AMD +13.9%, Nvidia retook $5T market cap. Uptrend strengthening, not deteriorating.

---

## State Definitions (reference)

### 🟢 Confirmed Uptrend
- SPY above 50-day MA
- <5 distribution days in trailing 25 sessions
- Most recent trigger: a follow-through day (day 4–7 of a rally attempt closing +1.25%+ on higher volume)
- **Agent behavior:** New long entries allowed. Normal sizing. No hedges.

### 🟡 Uptrend Under Pressure
- 5 distribution days in trailing 25 sessions, OR
- SPY tagging 50-day MA repeatedly without breaking it
- **Agent behavior:** No new entries. Tighten stops on all positions. Prepare hedge candidates (SH, SQQQ) but don't enter yet.

### 🔴 Market in Correction
- 6+ distribution days in trailing 25 sessions, OR
- SPY closes below 50-day MA on volume, OR
- SPY closes below 200-day MA
- **Agent behavior:** Sell any position with RS < 85. Enter inverse ETF hedge (1 position, max 25%). No new long entries. Wait for follow-through day.

---

## Distribution Day Log (trailing 25 sessions)

Format: `YYYY-MM-DD | Index | % Change | Volume Ratio vs. Prior | Expires on YYYY-MM-DD`

A distribution day expires after 25 sessions OR if index gains 6%+ from the day's close (O'Neil's "day fades" rule).

| Date | Index | % Change | Vol Ratio | Status |
|---|---|---|---|---|
| 2026-03-27 | SPY | -1.73% | 1.07x | **FADED** (gain from 634.09 to 710.14 = +12.0%) |
| 2026-03-26 | SPY | -1.79% | 1.06x | **FADED** (gain from 645.09 = +10.1%) |
| 2026-03-20 | SPY | -1.70% | 1.47x | **FADED** (gain from 648.57 = +9.5%) |
| 2026-03-19 | SPY | -0.25% | 1.35x | **FADED** (gain from 659.80 = +7.6%) |
| 2026-04-23 | SPY | -0.41% | est. >1.0x | **ACTIVE** (expires 2026-06-01; vol ratio unconfirmed — Alpaca 403; software sector selling implies elevated volume) |
| 2026-04-23 | QQQ | -0.34% | est. >1.0x | **ACTIVE** (expires 2026-06-01; Nasdaq -0.89% close) |

**Effective count: 1/25** (1 SPY dist day; QQQ dist day logged for reference — count tracks SPY)

---

## Follow-Through Day Log

Format: `YYYY-MM-DD | Index | % Gain | Volume vs. Prior | Day # of Rally Attempt`

| Date | Index | % Gain | Vol vs Prior | Rally Day # |
|---|---|---|---|---|
| 2026-04-08 | SPY | +2.55% | 94M vs 70M (+34%) | Day 6 (from 3/31 low at $631.97) |

---

## Rally Attempt Tracking

**Current rally status:** Confirmed (FTD fired 2026-04-08, uptrend in day 12).

---

## Rules for Updating This File

1. **Only `/pre-market` and `/eod-review` edit this file.** No ad-hoc edits. (Exception: this /weekly-prep jumpstart — see State Change Log.)
2. On state change, log the transition at the bottom of this file with date, trigger, and expected agent behavior change.
3. If the state is ambiguous, default to the more conservative state (e.g., between Uptrend and Under Pressure → choose Under Pressure).

---

## State Change Log

| Date | From → To | Trigger |
|---|---|---|
| 2026-04-19 | NOT INITIALIZED → CONFIRMED UPTREND | Jumpstart init by /weekly-prep. SPY +2.55% follow-through on 2026-04-08, sustained rally +12% from 3/30 low. No active distribution days (4 historical, all faded). |

# Market Direction — The "M" in CAN SLIM

**3 out of 4 stocks follow the market.** This file is read by EVERY routine before deciding whether new entries are allowed. Updated by `/pre-market` daily and `/eod-review` daily (close-of-day truth).

---

## Current Status

**Status:** 🟢 **CONFIRMED UPTREND**

**Last updated:** 2026-04-19 (Sun) — `/weekly-prep` jumpstart
**Confirmed Uptrend days:** 7 (since follow-through day 2026-04-08)
**Distribution days (last 25 sessions):** 0 effective (4 raw, all faded by +6% rule — 3/19, 3/20, 3/26, 3/27 all followed by SPY gaining >6% from close)
**Most recent follow-through day:** 2026-04-08 (SPY +2.55%, volume 94M vs 70M prior = higher-volume confirmation)
**SPY close 2026-04-17:** $710.14
**SPY relative to 50-day MA:** +5.9% above ($710.14 vs ~$671 50-day MA)
**SPY relative to 200-day MA:** above (200-day ~$666, SPY +6.6% above)
**QQQ relative to 50-day MA:** above

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

**Effective count: 0/25**

---

## Follow-Through Day Log

Format: `YYYY-MM-DD | Index | % Gain | Volume vs. Prior | Day # of Rally Attempt`

| Date | Index | % Gain | Vol vs Prior | Rally Day # |
|---|---|---|---|---|
| 2026-04-08 | SPY | +2.55% | 94M vs 70M (+34%) | Day 6 (from 3/31 low at $631.97) |

---

## Rally Attempt Tracking

**Current rally status:** Confirmed (FTD fired 2026-04-08, uptrend in day 7).

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

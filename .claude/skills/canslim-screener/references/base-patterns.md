# Base Pattern Detection Reference

Called by `canslim-screener` SKILL.md. This file defines the 4 proper CAN SLIM base patterns and the rules for computing a valid pivot point.

**Core principle:** The pivot point is the price at which the stock tells you institutional buying has arrived. Buying before pivot = speculation. Buying far above pivot = chasing. The entry zone is pivot → pivot × 1.05.

---

## Pattern Classification Inputs

Pull from Alpaca: 130 daily bars (approximately 6 months) for the ticker. Compute:
- Weekly closes for visual base analysis
- 50-day moving average
- Relative volume (daily volume / 50d avg volume)
- Daily percent change

---

## Pattern 1: Cup-with-Handle (most common, most reliable)

**Structure:**
- Prior uptrend of at least 30% over 12+ weeks
- Cup: smooth U-shaped decline of 12–35% from prior high (correction of 35%+ is broken — skip)
- Cup duration: 7 weeks minimum, ideally 3–6 months, max 65 weeks
- Recovery to near prior high forms right side of cup
- Handle: tight 1–4 week downward drift of 8–15% from cup right-side peak
- Handle volume should be noticeably lower than cup average volume
- Handle must form in upper third of full base (if handle is in lower third, pattern is invalid)

**Pivot point:** Intraday high of the highest day in the handle, + $0.10.

**Example calc:** Handle high = $485.00 → pivot = $485.10. Entry zone: $485.10 to $509.36 (pivot × 1.05).

**Valid breakout:** Pivot crossed on volume ≥ +40% above 50d average.

**Failure signs:**
- Handle forms in lower half of base — invalidates pattern
- Cup has sharp V-shape (not smooth) — lower success rate
- Prior uptrend < 30% — not enough fuel
- Breakout happens on weak volume (<+20%) — high failure rate, skip

---

## Pattern 2: Flat Base

**Structure:**
- Forms after a stock has already advanced 20%+ from a prior base
- Sideways consolidation of 5–7 weeks minimum
- Depth of base ≤ 15% from high to low
- Tight price action — weekly ranges narrow

**Pivot point:** High of the flat base + $0.10.

**Typical setup:** Often appears as a second base after a cup-with-handle breakout has run 20%+.

**Why it works:** Stocks that consolidate tightly after a move are being accumulated, not distributed.

---

## Pattern 3: Double Bottom

**Structure:**
- Two distinct lows separated by 1–6 weeks
- Second low slightly UNDERCUTS the first (by a small margin — 1–5% typically). This shakeout is key — weak hands panic out near the second low, leaving stronger hands.
- Middle peak between the two lows forms the pivot reference
- Total base depth: 15–30%

**Pivot point:** The peak between the two lows + $0.10.

**Failure signs:**
- Second low undercuts first low by >8% — becomes a new downtrend, not a base
- Second low doesn't undercut at all — less effective shakeout, lower conviction

---

## Pattern 4: High-Tight Flag (rarest, most explosive)

**Structure:**
- Prior run-up of 100%+ in 4–8 weeks (yes — requires a massive prior move)
- Sideways consolidation of 3–5 weeks
- Consolidation tight — pulls back only 10–25% from the recent high
- Volume quiets significantly during consolidation

**Pivot point:** High of the consolidation + $0.10.

**Why rare:** It requires a prior 100%+ move, which only happens in specific windows (hyper-growth stocks in leading sectors during strong bull markets).

**Why explosive:** The 100%+ prior move confirms massive demand. A tight flag after that = profit-taking without distribution. Breakouts from high-tight flags often produce the year's biggest winners.

**Confidence modifier:** +5 extra to "N" letter if this pattern is detected (above the base bonus), because the pattern itself is a catalyst.

---

## Base Stage Counting

Each new base a stock forms earns a stage number. Stages reset after a 20%+ correction.

| Stage | Interpretation | Conviction impact |
|---|---|---|
| 1st stage | Just broke out of a long consolidation after a downtrend | Strongest — full +10 bonus |
| 2nd stage | Formed a new base after a 20%+ move from 1st stage | Strong — full +10 bonus |
| 3rd stage | Third consecutive base without a 20%+ correction | Caution — +7 bonus |
| 4th stage+ | Very late — institutional crowd is well into this name | Often topping — 0 bonus, `late_stage_base` warning |

**Why stages matter:** 3 out of 4 late-stage breakouts fail. Institutional buyers who bought the 1st and 2nd stage are distributing to retail at the 3rd and 4th. Recognizing late-stage saves you from the trap.

---

## Pivot Point Tolerance — The "Chase Limit"

Once a pivot is computed, the valid entry zone is:

```
entry_zone_low = pivot_point
entry_zone_high = pivot_point × 1.05
```

**Above 5% past pivot = chasing.** Skip. Wait for next base to form.

Why: O'Neil's backtests showed buying >5% extended cut win rate nearly in half. The stock needs room to run to your profit target; buying late eats the room.

---

## Volume Confirmation (required for any breakout)

A valid breakout requires:
- Price closes above pivot on the breakout day
- Day's volume ≥ 40% above the 50-day average volume

**Low-volume breakouts fail more often than they succeed.** If price breaks out on normal or light volume, wait. The institutional buying hasn't arrived. Often the stock retests the pivot in the next 1–5 sessions, and the retest with heavy volume is the real breakout.

---

## What Disqualifies a Base Entirely

- Depth > 35% from high to low (too much damage)
- Prior uptrend < 20% (not enough demand to form institutional base)
- Sloppy, wide-range bars during the base (distribution happened)
- More than 6 distribution days during the base formation itself
- Stock has reported an earnings MISS during the base (fundamentals broke)

---

## Output shape

`canslim-screener` returns base pattern detection as:

```json
{
  "base_pattern": "cup_with_handle",
  "base_stage": 2,
  "base_duration_weeks": 9,
  "base_depth_pct": 18.3,
  "pivot_point": 485.10,
  "entry_zone": {"low": 485.10, "high": 509.36},
  "volume_confirmation_ready": true,
  "warnings": []
}
```

Or on no valid pattern:

```json
{
  "base_pattern": "no_valid_base",
  "nearest_pattern_close_miss": "cup_forming_needs_handle",
  "estimated_weeks_to_ready": 2,
  "warnings": ["base_not_yet_formed"]
}
```

---

## When in doubt, skip

If pattern analysis is ambiguous ("it kind of looks like a cup but the handle is weird"), default to `no_valid_base`. A skipped trade costs nothing. A trade on an invalid base costs -7%.

# CAN SLIM Scoring Rubric — Full Detail

Called by `canslim-screener` SKILL.md. This is the source of truth for how every letter scores.

---

## C — Current Quarterly Earnings (max 20)

**Rule:** Most recent quarter's EPS must grow ≥ +25% YoY.

**Data:** Alpha Vantage `EARNINGS` endpoint → `quarterlyEarnings[0]`. Compare `reportedEPS` vs. same quarter prior year.

**Scoring:**
| EPS YoY Growth | Points |
|---|---|
| ≥ 80% | 20 |
| 40–79% | 15 |
| 25–39% | 10 |
| < 25% | **DISQUALIFY (return 0, pass=false)** |

**Acceleration bonus (already counted in base score — do not add again):** If `quarterlyEarnings[0]` growth > `quarterlyEarnings[1]` growth, the signal is stronger — reflected in your "C" narrative, not score.

**Deceleration penalty:** If last 2 quarters both show decelerating YoY growth → cap "C" at 10 points regardless and add `warning: earnings_decelerating`.

**Edge cases:**
- Negative prior-year EPS (turnaround): use sequential QoQ growth instead — require ≥ 50% QoQ to count.
- Recent IPO with <4 quarters of history: reject with `insufficient_earnings_history` unless ≥ 3 quarters show ≥ 40% YoY growth.
- One-time charges: Alpha Vantage reports GAAP — if a charge distorts the quarter, note in warnings but use reported number. Don't adjust on vibes.

---

## A — Annual Earnings Growth (max 15)

**Rule:** Annual EPS growth ≥ +25% for each of last 3 years. ROE ≥ 17%.

**Data:** Alpha Vantage `EARNINGS` → `annualEarnings[0:3]`, and `OVERVIEW` → `ReturnOnEquityTTM`.

**Scoring:**
| Condition | Points |
|---|---|
| All 3 years ≥ 25% annual growth | 10 |
| 2 of 3 years ≥ 25% | 5 |
| < 2 of 3 years ≥ 25% | 0 |
| ROE ≥ 17% (additive) | +5 |
| ROE 10–16.9% | +2 |
| ROE < 10% | 0 |

**Edge cases:**
- <3 years of annual history: max 7 points (half credit) + warning `short_annual_history`.
- Negative ROE: 0 additive even if earnings growth is strong.

---

## N — New Product / Management / High (max 15)

**Rule:** Something genuinely new. Best signal: new 52-week high from a proper base.

**Data:**
- Price proximity to 52-week high: Alpaca bars.
- New product/management/catalyst: Perplexity query (see canslim-screener SKILL.md for prompt).

**Scoring:**

| Signal | Points |
|---|---|
| Closed at new 52-week high in last 10 sessions, from a valid base | 10 |
| Within 5% of 52-week high, base forming | 7 |
| Within 15% of 52-week high | 3 |
| More than 15% off 52-week high | 0 |

**Additive (max +5):**
- Genuinely new product/service launched within 12 months with provable market traction → +5
- New CEO/management (<18mo) and executing (evidence of change) → +3
- Recent analyst upgrade with price target bump → +2 (max +2 even if multiple)

Cap total "N" at 15. If additive would push past 15, cap it.

**Reject triggers:** None for this letter — N of 0 is possible (old boring company at 52w high still has a path via other letters).

---

## S — Supply & Demand (max 15)

**Rule:** Smaller floats + volume surges on up-days.

**Data:**
- Float: Alpha Vantage `OVERVIEW` → `SharesFloat`.
- Volume surge: Alpaca bars, compare breakout-day volume to 50-day average volume.
- Buybacks: Perplexity one-line check ("Does <SYMBOL> have an active share repurchase program as of Q1 2026?").

**Scoring:**

| Component | Max | Method |
|---|---|---|
| Float size | 5 | <50M = 5, 50–200M = 3, 200–500M = 1, >500M = 0 |
| Volume on most recent up-day ≥ +40% vs 50d avg | 5 | Yes = 5, 20–39% = 3, <20% = 0 |
| Active buyback program | 5 | Confirmed active = 5, ended/none = 0 |

**Edge cases:**
- Tickers with splits in trailing 12 months: use split-adjusted volume from Alpaca.
- Missing float data: approximate from SharesOutstanding − insider holdings from OVERVIEW; flag warning.

---

## L — Leader (max 15)

**Rule:** RS rank ≥ 80 vs. the universe (top 20%). Stock must be among top 3 in its sector on 4-week RS.

**Data:**
- 6-month price change for the ticker: Alpaca bars, (close_today / close_126_sessions_ago) - 1.
- Compare to Russell 1000 constituent distribution (or approximate via SPY if Russell constituent data unavailable — annotate).
- Sector RS: use sector ETF (XLK, XLE, XLF, etc.) 4-week price change, rank.

**Scoring:**

| Component | Max | Method |
|---|---|---|
| RS rank (6-month) | 10 | ≥95 = 10, 90–94 = 8, 80–89 = 5, 70–79 = 2, <70 = 0 |
| Sector RS (4-week rank of stock's sector vs. 10 others) | 5 | Top 3 sector = 5, 4–6 = 3, 7–9 = 0, bottom 3 (laggard) = −3 |

**Note on sector laggard penalty:** A leader in a laggard sector is usually a trap. Be suspicious when L_sector = -3 even if L_rs = 10.

**Reject trigger:** If RS rank < 70 → 0 points for L and add warning `not_a_leader`. Don't auto-reject the whole stock on L alone, but it's almost impossible to hit 75 conviction without a decent L.

---

## I — Institutional Sponsorship (max 10)

**Rule:** Quality institutional ownership, present and stable.

**Data (two-tier approach):**

**Tier 1 — Alpha Vantage `OVERVIEW.PercentInstitutions`** (PRIMARY, always available)
- Run `bash scripts/alphavantage.sh overview <SYM>`, parse `PercentInstitutions` field (returned as a percentage, e.g. `69.737` = 69.7% institutional ownership).

**Tier 2 — SEC EDGAR 13F filings** (OPTIONAL, weekly cadence — used as refinement/confirmation layer when available)
- Compare current quarter's holder count and aggregate shares vs. prior quarter via `scripts/edgar.sh institutional_holders <CIK>`.
- If EDGAR data available AND shows quarter-over-quarter accumulation, add +2 bonus to Tier 1 score (cap at 10).
- If EDGAR data unavailable, proceed with Tier 1 score only — add `warnings: ["edgar_data_unavailable"]`. Per the skill preflight exception, this is the one letter where missing data is acceptable.

**Tier 1 scoring (PercentInstitutions):**

| Ownership band | Points | Interpretation |
|---|---|---|
| 30–70% | **7** | Healthy sponsorship — room to grow but already credible. Ideal. |
| 70–85% | **6** | Heavy but acceptable — most mega-caps live here (e.g. NVDA ~70%, MSFT ~72%). |
| 20–30% | **4** | Growing sponsorship — early-stage, higher reward/risk. |
| 85–95% | **3** | Very crowded — less upside from fund buying, unwinds hurt. |
| 10–20% | **2** | Thin sponsorship — may struggle to sustain moves. |
| <10% OR >95% | **0** | Either unknown to institutions OR dangerously saturated. |

**Tier 2 adjustments (only apply if EDGAR data fresh within 90 days):**

| Condition | Adjustment |
|---|---|
| Holder count ↑ QoQ (≥5% increase in number of 13F filers) | +2 |
| Holder count ↓ QoQ (≥5% decrease) | -2 |
| "Smart money" fund (top-quartile 13F performer) adding | +1 |

**Cap total at 10. Floor at 0.**

**Warning triggers (don't change score, just flag):**
- `PercentInstitutions` > 90% → `crowded_trade`
- `PercentInstitutions` < 20% → `thin_sponsorship`
- EDGAR tier unavailable for >14 days → `institutional_data_stale`

---

## M — Market Direction (GATE, not score)

Pulled from `memory/MARKET-DIRECTION.md`. Not additive to conviction score — instead, gates whether `pass: true` is even possible.

- `Confirmed Uptrend` → long entries allowed; pass = eligible
- `Uptrend Under Pressure` → pass = false for new entries, reason: `market_under_pressure`
- `Market in Correction` → pass = false for new entries; only inverse ETF entries allowed

**Override rule:** None. M is never overridden. Not for "obviously great" stocks, not for FOMO, not for "this one's different." If M is not green, no new longs. Period.

---

## Base Pattern Bonus (max 10)

See `base-patterns.md` for detection rules. Only valid, untouched proper bases earn the bonus.

| Pattern | Bonus |
|---|---|
| High-tight flag | 10 |
| Cup-with-handle (1st or 2nd stage) | 10 |
| Flat base (1st or 2nd stage) | 10 |
| Double-bottom (1st or 2nd stage) | 10 |
| Any of the above at 3rd stage | 7 |
| Any of the above at 4th+ stage | 0 + `late_stage_base` warning |
| No valid base | 0 + `no_valid_base` — often a reject trigger on its own |

---

## Quick Reference: What gets you to 75?

Typical 75–85 conviction stock:
- C: 15 (40–79% EPS growth)
- A: 10 (3-yr good annual, ROE slightly below 17)
- N: 10 (new high, base, no recent catalyst beyond price action)
- S: 10 (mid-size float, solid volume)
- L: 13 (RS 90, sector top-3)
- I: 7 (holders up)
- Base: 10 (cup-w-handle)
= 75 ✅

Typical 85+ conviction stock:
- C: 20 (80%+ growth accelerating)
- A: 15 (3-yr + high ROE)
- N: 15 (new high + fresh catalyst)
- S: 13 (small float + volume surge)
- L: 15 (RS 95 + top sector)
- I: 10 (holders up + smart money adding)
- Base: 10 (clean cup-w-handle or high-tight flag)
= 98 ✅ (rare — these are the moonshots)

---

## Changelog

| Date | Change | Rationale |
|---|---|---|
| 2026-04-17 | v1.0 initial rubric | Per TRADING-STRATEGY.md v1.0 |

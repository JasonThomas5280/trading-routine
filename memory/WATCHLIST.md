# Watchlist

Rebuilt every Sunday by `/weekly-prep`. Refreshed each morning by `/pre-market`. Primary input to `/market-check` execution decisions.

**Format:** Ranked by conviction score descending. Top 8 candidates max (4 positions + 4 bench).

---

## Current Week: 2026-04-27 to 2026-05-01

**Built:** 2026-04-26 (Sun) — `/weekly-prep` | `research_source: websearch_fallback` (Alpaca + Perplexity + Alpha Vantage all blocked — IP allowlist issue)
**⚠️ Date correction:** Week header was "2026-04-28" — corrected to "2026-04-27" (today is Monday April 27, 2026). FOMC decision is **Wednesday April 29** (not Tuesday). No-entry window: Wednesday before 1 PM CT.
**Market direction at build time:** 🟢 Confirmed Uptrend Day 14 (SPY $713.94 ALL-TIME HIGH; 1/25 distribution days)
**Top sectors (4-week performance, est.):**
1. XLK Technology: ~+18% (semiconductor index 18+ consecutive up days; dominant)
2. XLC Communication: ~+13% (Meta, GOOGL, Netflix — but ALL major names in earnings blackout this week)
3. XLF Financials: ~+10% (GS, JPM strong Q1)
4. XLY Consumer Disc: ~+9% (substitute for XLC this week — XLC untradeable due to Mag-7 earnings)
**Bottom sectors (avoid):** XLE Energy (~-1%), XLU Utilities (~+1.5%), XLP Staples (~+2.5%)
**Blacklisted sectors:** None

**⚠️ EARNINGS-BLACKOUT WEEK — thin universe:**
AMD (May 5), PLTR (May 4), STX (Apr 28), META/MSFT/AMZN/GOOGL (Apr 29), AAPL (Apr 30) all in blackout. XLC as a sector is effectively untradeable for individual entries this week. Only **1 name is immediately actionable** (NVDA). This reflects earnings-calendar congestion, NOT market deterioration. Market is at ATH — be patient, execute only NVDA if setup holds.

**Scan stats (full detail in RESEARCH-LOG.md 2026-04-26 /weekly-prep entry):**
- Universe seeded: ~15 candidates (manual web-fallback — build-universe.sh blocked)
- Pre-filtered (earnings blackout / technical fails): 8 removed (STX, PLTR, AMD, META, MSFT, AMZN, GOOGL, AAPL)
- Scored via canslim-screener: 6 (NVDA, AVGO, LRCX, MU, CRWD, GS)
- Passed ≥75: 3 (NVDA 87, MU 78, LRCX 75)
- With valid entry zone this week: **1** (NVDA only)

---

### Primary watchlist (top 4 — ready to trade this week)

| Rank | Symbol | Conviction | Sector | Base / Setup | Pivot | Stop if Entered | Earnings Date | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | NVDA | **87/100** | XLK/Semis | Flat base Stage 1 (V-recovery breakout Apr 24) | **$201.75** | $193.69 (-7%) | ~May 20, 2026 ✅ | 🔴 **BELOW PIVOT (Tue premarket).** Mon Apr 27 ACTUAL close: $216.61 (new 52wk HIGH $216.83 — rallied hard after our 10AM check). Tue Apr 28 premarket: $200.64 (-7.4% from close; VWAP $200.55–$201.39, vol 1.7M). Cause: oil spike + NQ -0.66% risk-off, not company-specific. RSI 69.92. Setup conviction 87/100 INTACT. Do NOT enter below $201.75. If regular session reclaims $201.75 with +40% volume pace, re-evaluate at /market-check. Alpaca still blocked (day 11). **FOMC restriction: no entries WEDNESDAY before 1PM CT.** |
| 2 | STX | EARNINGS WATCH | XLK/Storage | Breakout above $554 (pre-earnings) | TBD post-earnings | TBD | **Apr 28 after-close** ⚠️ | ⏳ **EARNINGS WATCH — re-evaluate Wed Apr 29 pre-market.** Reports TOMORROW (Tue Apr 28) AH, 5:00 PM ET. Expected EPS $3.47, revenue $2.94B. Earnings call 5 PM ET. If beats + strong reaction: run canslim-screener at Wed /pre-market. **Earliest possible entry: Thursday April 30** (FOMC window blocks Wednesday). If disappoints: REMOVE. |
| 3 | AVGO | 74/100 (data-dependent) | XLK/Semis | Flat base Stage 2 | $406.75 (original) / $429.41 (ATH break) | entry × 0.93 | Jun 3, 2026 ✅ | 🟡 **WATCHING — DATA-DEPENDENT.** 74/100 = 1pt below threshold (A-letter API blocked). Last ~$420.10 Fri est. — inside buy zone $406.75–$427.09. FY2025 earnings +292% YoY, AI chip sales Q1 FY26 +106% YoY — fundamentally strong. Likely re-scores 79–82/100 with API. **Do NOT enter at 74. Restore API or confirm A-letter manually before entry.** |
| 4 | LRCX | **75/100 ⚠️ MIN CONVICTION** | XLK/Semi Equip | Flat base (2wk, ~7% depth after Apr 27 damage) | **$273.60** | entry × 0.93 | May 2026 (TBD) ✅ | 🟡 **PROMOTED from bench 2026-04-28.** Apr 27 intraday low $256.31 pierced $260 support — but closed $261.87 (above support). Apr 28 recovery to $272.11 (+3.9%), within 0.5% of pivot. **Do NOT enter without re-running canslim-screener first.** Minimum conviction (75/100) — volume confirmation AND fresh screen required. B of A PT $330. Earnings TBD May. Note: OpenAI capex narrative is risk factor for semi equipment. |

### Bench (5–8 — setup forming, not yet at pivot)

| Rank | Symbol | Conviction | Notes |
|---|---|---|---|
| 5 | MU | **78/100** | XLK/Memory. Cup-without-handle (10wk, 18% depth). **NO ENTRY** — handle not formed. Indicative pivot ~$507 if handle forms (buy zone $507–$532). Earnings Jul 1 (44 days, clear). Q2 FY26 EPS >500% YoY. HBM4 sold out through 2026. RS ≥95 est. Re-score when handle forms — expected 88/100 HIGH CONVICTION. Monitor tightly. |
| 6 | LRCX | ~~**BENCH**~~ → **PRIMARY RANK 4** | XLK/Semi Equip. **Promoted 2026-04-28 /market-check.** Apr 27 close $261.87 (above $260 threshold — base damage but not failed). Apr 28 recovery +3.9% to $272.11, within 0.5% of $273.60 pivot. Must re-run canslim-screener before entry. See primary table rank 4. |
| 7 | AMD | **UNSCORED — blackout** | XLK/Semis. Earnings May 5 (blackout starts Mon Apr 28). +13.9% on Apr 24. Strong AI GPU competitive position. Projected EPS +33% YoY for Q1. **Re-score immediately after May 5 earnings if beats.** Potential high-conviction candidate for week of May 5+. |
| 8 | STX (post-earnings) | **TBD** | XLK/Storage. Conditional on April 28 earnings beat. If strong: run full canslim-screener Tue Apr 29 at /pre-market. EPS +81.1% YoY expected. AI cloud storage demand "sold out." Do NOT score pre-earnings — wait for reaction. |

---

### Removed this week

| Symbol | Reason |
|---|---|
| CRWD | **44/100 REJECT** — EPS decelerated to +8.7% YoY (below 25% minimum); negative GAAP ROE (-0.59%); stock 20.9% below 52-week high; no valid base. Re-score after June 9 earnings if re-accelerates. |
| GS | **C-letter fail** — Q1 2026 EPS +24.3% YoY (0.7pp shy of 25% threshold). Informational total 42/100. Cup forming (~11wk, -16.7% depth) but needs handle. Re-score after July Q2 earnings if ≥25% growth confirmed. |
| PLTR | **Earnings blackout (May 4) + bearish technical.** 10-day MA crossed below 50-day MA on April 9. Price $142.39 is 31% below 52-week high ($207.52) — NOT a leader setup. Stock fell 20%+ in 2026. Remove entirely until technical structure repairs. |
| CBOE | Removed prior week — earnings May 1, analyst consensus (Hold avg $286.56) below $310 pivot. |
| PANW | Removed prior week — -13.5% from high, no valid base entry. |
| SNEX | Removed prior week — -20% from peak, momentum broken. |
| WDC | Removed prior week — earnings blackout (April 30). |
| META | Earnings April 29 — blackout. Re-evaluate after results. |

---

## Week-Ahead Entry Execution Plan (corrected dates — week of April 27)

**Monday April 27 (today):** ✅ EXECUTED — /market-check ran.
- NVDA: Price in zone ($210.14 ✅) but volume not confirming (6.19M → pace ~27M vs ~98M req). NOT entered. Alpaca blocked. Setup intact — retry Tuesday.
- AVGO: 74/100 — cannot enter without API. Skip.
- STX: Earnings TOMORROW (April 28 AH). No entry today.

**Tuesday April 28 — ✅ /market-check EXECUTED (10:00 AM CT):**
- **OpenAI revenue miss (WSJ):** Chip stocks NVDA/AVGO/AMD -3–5%. AI capex sustainability narrative negative. SPY -0.46% intraday (potential dist day #2 — confirm at EOD).
- **NVDA:** Premarket $200.64 (below pivot). Regular session gapped up to $208.70+ range; current $210.23 — in zone $201.75–$211.84 ✅. Volume 13.36M at 90 min, pace ~58M vs 208M required = 28% of threshold. **NOT triggered — volume gate fail.** Alpaca blocked (day 12). Conviction 87/100 structurally intact but OpenAI sentiment headwind. Do NOT enter Wednesday before 1 PM CT (FOMC).
- **STX:** Earnings AH tonight. Blackout maintained. Re-evaluate Thursday /pre-market.
- **AVGO:** OpenAI selloff ~-3 to -5% from $416.72 = est. $396–$404. Below $406.75 pivot. No entry.
- **LRCX:** Promoted to Primary Rank 4 (see above). Within 0.5% of $273.60 pivot. Re-screen required before entry.

**Wednesday April 29:** ⛔ FOMC DECISION DAY
- **No new entries before 1 PM CT.** FOMC decision ~12 PM CT, Powell press conf ~12:30 PM CT.
- STX post-earnings: if gap-up + strong volume, run canslim-screener at /pre-market. Earliest entry: Thursday April 30 (not Wednesday — FOMC window).
- MSFT/META/AMZN/GOOGL earnings AH Wed: monitor for XLK sentiment impact Thursday.

**Thursday April 30 – Friday May 1:**
- GDP Advance Q1 (April 30) + Core PCE before open — macro risk. Monitor for sentiment shift.
- AAPL earnings April 30 AH.
- STX post-earnings (if strong): earliest valid entry Thursday after 10:30 AM ET.
- Mag-7 reaction to MSFT/META/AMZN/GOOGL: if positive, XLK strengthens, NVDA/AVGO/LRCX setups may improve.
- No new entries on Friday if macro data forces sentiment shift.

---

## Last Week's Watchlist (archived — week of 2026-04-20 to 2026-04-24)

*(See git history for prior week's jumpstart watchlist)*

**Key carry-overs:** NVDA (re-scored 67→87), LRCX (scored 75), AVGO (scored 74, API-blocked). CBOE, PANW, SNEX, WDC, META all removed with rationale above.

---

## Historical watchlists (archived)

*(Moved to `memory/archive/watchlists/` monthly)*

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
| 1 | NVDA | **87/100** | XLK/Semis | Flat base Stage 1 (V-recovery breakout Apr 24) | **$201.75** | $193.69 (-7%) | ~May 20, 2026 ✅ | 🟡 **WATCHING — FOMC RESTRICTION.** Tue Apr 28 close: $213.17 (-1.59% from ATH). Wed Apr 29 pre-mkt: ~$209–$213 (above $201.75 pivot). JPMorgan cautionary note on "limits to run" — NOT a downgrade; analyst maintains buy. No company-specific negative catalyst. **NO ENTRIES before 1 PM CT today (FOMC).** FOMC decision ~12 PM CT; Mag-7 earnings tonight = XLK uncertainty. Setup 87/100 INTACT. Best entry window: Thursday Apr 30 if Mag-7 beats tonight and Alpaca API restored. |
| 2 | STX | **68/100 ⚠️ BELOW THRESHOLD** | XLK/Storage | Post-earnings gap (not yet a base) | TBD after price settles | entry × 0.93 | ~Jul 2026 ✅ | 🟢 **ELEVATED — NEEDS RE-SCORE.** Q3 FY2026 MASSIVE BEAT: EPS $4.10 vs $3.47 est (+18.2%); rev $3.11B vs $2.94B est (+5.8%); +115% EPS YoY; gross margin 47%; free cash flow ~$1B. Q4 guided: EPS $5.00 ±$0.20, rev $3.45B ±$100M (+41% YoY midpoint). Annual growth target raised to 20%+. Pre-mkt +18% (~$570–$595). **canslim-screener run → 68/100 REJECT** (A-letter: FY2023 cyclical trough negative EPS; base: unconfirmed post-600% rally; all APIs blocked). **DO NOT ENTER at 68/100.** Re-score when APIs restored — potential 83/100 if base confirms. Earliest entry: Friday May 1 (FOMC clears Wed, post-gap settles Thu). |
| 3 | AVGO | 74/100 (data-dependent) | XLK/Semis | Flat base Stage 2 | $406.75 (original) / $429.41 (ATH break) | entry × 0.93 | Jun 3, 2026 ✅ | 🔴 **BELOW PIVOT.** Apr 28 close ~$400.35 (range $394.65–$417.16; down -4.23% on OpenAI AI-demand miss). Still 74/100 (A-letter API blocked). Below $406.75 pivot. Fundamental thesis intact: Meta MTIA ($300B+ through 2029), Google TPU lock-ins, 94% analyst buy. Mag-7 earnings tonight (META beats = positive for AVGO AI chip thesis). **Watch for pivot reclaim ~$406.75 Thursday; still needs API restore for official 75+ score.** |
| 4 | LRCX | **REMOVED — see below** | XLK/Semi Equip | Below pivot + China risk | — | — | May 2026 (TBD) | 🔴 **REMOVED 2026-04-29.** Price corrected: prior $272.11 estimate was wrong (Alpaca blocked day 14; WebSearch data error). Actual close ~$251.24 (range $243.04–$255.30) = -8.2% below $273.60 pivot. NEW RISK: US export curbs to China — MATCH Act advancing in Congress; Lam halted Hua Hong shipments; China rev projected to fall from 43% → <30% of total in 2026. Insider sold 6,010 shares ($1.55M) April 28. LRCX beat Q3 earnings (June guidance +10% rev / +15% EPS vs consensus) but structural China risk dominates. Remove until: (1) pivot reclaimed, AND (2) MATCH Act outcome known, AND (3) fresh canslim-screener run. |

### Bench (5–8 — setup forming, not yet at pivot)

| Rank | Symbol | Conviction | Notes |
|---|---|---|---|
| 5 | MU | **78/100** | XLK/Memory. Cup-without-handle (10wk, 18% depth). **NO ENTRY** — handle not formed. Indicative pivot ~$507 if handle forms (buy zone $507–$532). Earnings Jul 1 (44 days, clear). Q2 FY26 EPS >500% YoY. HBM4 sold out through 2026. RS ≥95 est. Re-score when handle forms — expected 88/100 HIGH CONVICTION. Monitor tightly. |
| 6 | LRCX | **REMOVED to "Removed this week"** | XLK/Semi Equip. **Removed 2026-04-29 /pre-market.** Price corrected to $251.24 (prior $272.11 was websearch estimation error; Alpaca blocked day 14). China export curbs risk (MATCH Act) = material thesis risk. -8.2% below $273.60 pivot. Insider sell $1.55M. |
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
| LRCX | **REMOVED 2026-04-29 /pre-market** — Price corrected from estimated $272 to actual ~$251 (-8.2% below $273.60 pivot; prior estimate was Alpaca-blocked WebSearch error). China export curbs (MATCH Act, Hua Hong halt) = material revenue risk (China 43% of rev → projected <30%). Insider sold $1.55M April 28. Re-evaluate after: (1) MATCH Act outcome clear, (2) price reclaims $273.60 pivot, (3) fresh canslim-screener with live API. |

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

**Wednesday April 29 — ✅ /market-check EXECUTED (10:00 AM CT):**
- **⛔ NO ENTRIES** — FOMC restriction (hard rule: no entries before 1 PM CT) + Alpaca API blocked day 15 (dual hard stops).
- **NVDA:** Opened $202.24 (above $201.75 pivot), intraday low $199.03 (briefly below pivot — pre-FOMC drift). Range $199.03–$202.75. Volume: unconfirmed (Alpaca blocked). Setup 87/100 intact. After 1 PM CT window theoretical if Alpaca restores — in practice hold cash (Mag-7 AH tonight = XLK uncertainty).
- **STX:** $660–$687 today. 68/100 REJECT maintained. Earliest entry: Friday May 1 after full re-score.
- **AVGO:** ~$400 est. (below $406.75 pivot). 74/100 below threshold. No entry. Watch META AH tonight.
- **MSFT/META/AMZN/GOOGL earnings AH tonight:** Results critical for Thursday XLK direction. Broadly positive = NVDA/AVGO setups strengthen Thursday.
- **LRCX:** REMOVED from watchlist. See "Removed this week."

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

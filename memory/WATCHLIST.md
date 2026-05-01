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
| 1 | NVDA | **🔴 est. 75–80/100 CAUTION** | XLK/Semis | Flat base Stage 1 (V-recovery breakout Apr 24) | **$201.75** | $193.69 (-7%) | ~May 20, 2026 ✅ | 🔴 **CAUTION — RS DETERIORATION.** May 1 intraday: opened $209.93, fell to ~$199.57 (-4.9%) on up-market day (+0.54% SPY). 2nd consecutive session of -4%+ relative weakness (Apr 30: -4.1% vs +1.02% SPY). Heavy distribution volume pace. Score degrading: 87 → est. 75–80; ≥75 threshold at risk. Below $201.75 pivot. **No entry until:** (1) Alpaca API restored, (2) pivot $201.75 reclaimed on volume, (3) fresh canslim-screener confirms score ≥75. Google TPU + Amazon custom silicon = persistent L-letter headwind. Mag-7 AI capex structural positive — but RS must stabilize first. |
| 2 | STX | **68/100 ⚠️ BELOW THRESHOLD** | XLK/Storage | Post-earnings gap (not yet a base) | TBD after base forms | entry × 0.93 | ~Jul 2026 ✅ | 🔴 **BELOW THRESHOLD — NO ENTRY UNTIL RE-SCORE.** Apr 28 earnings: EPS $4.10 +115% YoY; Q4 guide EPS $5.00 (+41% YoY). **Massive analyst upgrade wave:** Rosenblatt $1,000 PT (from $500), BofA $840, Barclays $750, Citi $740, GS $700, UBS $545 (Neutral). Apr 30 close: ~$643. Still 68/100 (A-letter: FY2023 cyclical negative EPS). No base formed. **Cannot enter at 68/100.** Re-score when Alpha Vantage API restores. Potential 83+/100. Watch for base formation. |
| 3 | AVGO | **74/100 → needs re-score** | XLK/Semis | Flat base Stage 2 | $406.75 | entry × 0.93 | Jun 3, 2026 ✅ | 🟡 **ABOVE PIVOT — NEEDS RE-SCORE.** Apr 30 close: ~$412.65 (+3%, above $406.75 pivot). May 1 pre-mkt: ~$415 est. **META $300B+ AI chip commitment (AVGO supplier) confirmed. GOOGL Cloud compute-constrained.** Score 74/100 (A-letter API blocked — 1pt below threshold). **Cannot enter at 74. Re-score immediately when Alpha Vantage restores — expected 76–80/100.** If ≥75 confirmed, AVGO becomes primary buy candidate above NVDA (no Google TPU competition risk). Alpaca blocked day 19. |
| 4 | LRCX | **REMOVED — see below** | XLK/Semi Equip | Below pivot + China risk | — | — | May 2026 (TBD) | 🔴 **REMOVED 2026-04-29.** Price corrected: prior $272.11 estimate was wrong (Alpaca blocked day 14; WebSearch data error). Actual close ~$251.24 (range $243.04–$255.30) = -8.2% below $273.60 pivot. NEW RISK: US export curbs to China — MATCH Act advancing in Congress; Lam halted Hua Hong shipments; China rev projected to fall from 43% → <30% of total in 2026. Insider sold 6,010 shares ($1.55M) April 28. LRCX beat Q3 earnings (June guidance +10% rev / +15% EPS vs consensus) but structural China risk dominates. Remove until: (1) pivot reclaimed, AND (2) MATCH Act outcome known, AND (3) fresh canslim-screener run. |

### Bench (5–8 — setup forming, not yet at pivot)

| Rank | Symbol | Conviction | Notes |
|---|---|---|---|
| 5 | MU | **78/100** | XLK/Memory. Cup pattern. **NO ENTRY** — handle not confirmed. Current price ~$517 (May 1, +2.81% in 24h, +61% past month). Indicative pivot ~$507 now breached — but handle needed to reduce shakeout risk. Earnings Jul 1 (61 days clear). Q2 FY26 EPS >500% YoY. HBM4 sold out through 2026. RS ≥95 est. Mag-7 AI capex surge ($200B+ incremental 2026) = direct demand tailwind for memory. Re-score when handle forms — expected 88/100+ HIGH CONVICTION. Monitor daily for handle formation. |
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

**Thursday April 30 — /pre-market 6:00 AM CT:**
- **Mag-7 results confirmed:** ALL BEAT — MSFT (Azure +40%), AMZN (AWS +28%, +4% AH), GOOGL (Cloud +63%). META beat fundamentals but -6-8% AH on capex raise to $125-145B. Net: positive for XLK; positive for chip suppliers (NVDA/AVGO).
- ES futures: ~+0.12% | NQ futures: ~+0.21% | Alpaca blocked day 17
- NVDA $209.25 (above pivot); AVGO $405.54 (below pivot); STX $639.74 (+10.49%, 68/100 reject)
- GDP Q1 + Core PCE releasing 7:30 AM CT — major macro event
- AAPL earnings AH tonight

**Thursday April 30 — COMPLETED:**
- GDP Q1 +2.0% (benign miss); Core PCE +0.3% (in-line); jobless claims 189K (cycle low). Market shrugged off.
- NVDA: fell -4.1% to $200.37 on Google TPU direct-sales news. Pivot BREACHED.
- AVGO: +3% to $412.65 — ABOVE $406.75 pivot on META AI chip commitment confirmation.
- AAPL Q2 FY2026 AH: $111.2B revenue +17% YoY (record), EPS $2.01. Pre-market May 1: +3%.
- S&P 500 +1.02% to NEW ATH 7,209.01. Best April since 2020: S&P +10.4%, Nasdaq +15.3%.

**Friday May 1 — ✅ /market-check EXECUTED (10:00 AM CT):**
- **⛔ Abort gate: Alpaca API 403 blocked day 20. No execution possible.**
- **NVDA:** Opened $209.93, current ~$199.57 (range $198.70–$210.30) — **BELOW $201.75 pivot.** Volume pace: 53.3M at 90 min → ~231M/day pace (above 208M req — volume gate passes). **Price gate FAILS.** ⚠️ **RS DETERIORATION — 2nd consecutive session of heavy relative weakness: Apr 30 -4.1% on up-day (+1.02% SPY); May 1 -4.9% on up-day (+0.54% SPY). Distribution volume evident. Score degrading: 87 → est. 75–80 → ≥75 threshold at risk. Status downgraded to 🔴 CAUTION.** Do NOT enter until: (1) Alpaca restored, (2) pivot $201.75 reclaimed on volume, (3) fresh canslim-screener confirms score ≥75.
- **AVGO:** ~$402–$410 est. (below $406.75 pivot). Score 74/100. Cannot enter (below threshold AND below pivot AND Alpaca blocked).
- **STX:** ~$643+. 68/100 reject. No base formed. No entry. Analyst PTs ($700–$1,000) are awareness-only.
- **MU (bench):** ~$517. Handle not formed. No promotion.
- **AMD (bench):** Earnings May 5 (blackout). No change. Re-score after results.
- No entries. No exits. 0 open positions. 0/3 weekly trades used this week.
- ⚠️ **Alpaca API blocked day 20** — ALL ORDER EXECUTION IMPOSSIBLE. Week closes 0 trades.

---

## Last Week's Watchlist (archived — week of 2026-04-20 to 2026-04-24)

*(See git history for prior week's jumpstart watchlist)*

**Key carry-overs:** NVDA (re-scored 67→87), LRCX (scored 75), AVGO (scored 74, API-blocked). CBOE, PANW, SNEX, WDC, META all removed with rationale above.

---

## Historical watchlists (archived)

*(Moved to `memory/archive/watchlists/` monthly)*

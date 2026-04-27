# Watchlist

Rebuilt every Sunday by `/weekly-prep`. Refreshed each morning by `/pre-market`. Primary input to `/market-check` execution decisions.

**Format:** Ranked by conviction score descending. Top 8 candidates max (4 positions + 4 bench).

---

## Current Week: 2026-04-28 to 2026-05-02

**Built:** 2026-04-26 (Sun) — `/weekly-prep` | `research_source: websearch_fallback` (Alpaca + Perplexity + Alpha Vantage all blocked — IP allowlist issue)
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
| 1 | NVDA | **87/100** | XLK/Semis | Flat base Stage 1 (V-recovery breakout Apr 24) | **$201.75** | $193.69 (-7%) | ~May 20, 2026 ✅ | 🟢 **READY — IN ZONE.** Last ~$208.10 Fri est. (+3.1% above pivot). Buy zone $201.75–$211.84 (ceiling $3.74 away). Volume Apr 24: 192.5M (+175% vs ~70M avg) = confirmed. HIGH CONVICTION ≥85 — eligible for 35% sizing (~$875). Earnings clear (15+ trading days). No new negative catalysts overnight. Target entry /market-check 10AM CT if price holds zone. **FOMC restriction: no entries TUE before 1PM CT (Powell 12:30PM CT Tue). Monday unrestricted.** |
| 2 | STX | EARNINGS WATCH | XLK/Storage | Breakout above $554 (pre-earnings) | TBD post-earnings | TBD | **Apr 28 after-close** ⚠️ | ⏳ **EARNINGS WATCH — re-evaluate Tue Apr 29.** Reports tonight 2PM PT / 5PM ET. Expected EPS $3.44 (+81.1% YoY), revenue ~$2.9B ±$100M. No entry today. If beats + gap ≥+2% on volume ≥+40%: run canslim-screener Tue 6AM. Earliest entry Tue after 1PM CT (FOMC window). If disappoints: REMOVE. |
| 3 | AVGO | 74/100 (data-dependent) | XLK/Semis | Flat base Stage 2 | $406.75 (original) / $429.41 (ATH break) | entry × 0.93 | Jun 3, 2026 ✅ | 🟡 **WATCHING — DATA-DEPENDENT.** 74/100 = 1pt below threshold (A-letter API blocked). Last ~$420.10 Fri est. — inside buy zone $406.75–$427.09. FY2025 earnings +292% YoY, AI chip sales Q1 FY26 +106% YoY — fundamentally strong. Likely re-scores 79–82/100 with API. **Do NOT enter at 74. Restore API or confirm A-letter manually before entry.** |
| 4 | — | — | — | — | — | — | — | No 4th primary candidate this week. Earnings-calendar congestion. Do not lower conviction threshold to fill this slot. |

### Bench (5–8 — setup forming, not yet at pivot)

| Rank | Symbol | Conviction | Notes |
|---|---|---|---|
| 5 | MU | **78/100** | XLK/Memory. Cup-without-handle (10wk, 18% depth). **NO ENTRY** — handle not formed. Indicative pivot ~$507 if handle forms (buy zone $507–$532). Earnings Jul 1 (44 days, clear). Q2 FY26 EPS >500% YoY. HBM4 sold out through 2026. RS ≥95 est. Re-score when handle forms — expected 88/100 HIGH CONVICTION. Monitor tightly. |
| 6 | LRCX | **75/100** | XLK/Semi Equip. Flat base (2wk, ~5% depth), pivot $273.60, buy zone $273.60–$287.28. Current price $267.78 (−2.1% below pivot). Intraday high Apr 26 briefly touched $275.84. Wait for close above $273.60 on confirmed volume ≥+40%. Earnings Jul 29 (65 days, clear). BofA PT $330. Needs Alpaca API restored for volume confirmation. |
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

## Week-Ahead Entry Execution Plan

**Monday April 28:**
- NVDA: Check open. If price holds $201.75–$211.84 range, target entry at /market-check (10 AM CT). Run trade-executor. Use 30% standard sizing ($750). No FOMC day restriction Monday.
- AVGO: Restore API + re-run canslim-screener at /pre-market (6 AM CT). If ≥75, add to primary and evaluate at /market-check.
- STX earnings after close — do not enter Monday.

**Tuesday April 29:**
- FOMC day (decision ~1 PM CT, Powell ~1:30 PM CT). NO new entries before 1 PM CT per rules.
- STX post-earnings: check reaction at 6 AM CT pre-market. If gap-up + strong volume: run screener, evaluate entry after 10 AM CT (after 30-min settle + FOMC no-entry window clears at 1 PM CT — so earliest STX entry would be 1 PM CT Tuesday).
- MSFT/META/AMZN/GOOGL earnings after close April 29 — monitor for XLK sentiment impact Wednesday.

**Wednesday April 30 – Thursday May 1:**
- GDP Advance Q1 (April 30): macro data before open — monitor for sentiment shift.
- AAPL earnings April 30 after close.
- No new entries during elevated event risk unless setup is pristine.

---

## Last Week's Watchlist (archived — week of 2026-04-20 to 2026-04-24)

*(See git history for prior week's jumpstart watchlist)*

**Key carry-overs:** NVDA (re-scored 67→87), LRCX (scored 75), AVGO (scored 74, API-blocked). CBOE, PANW, SNEX, WDC, META all removed with rationale above.

---

## Historical watchlists (archived)

*(Moved to `memory/archive/watchlists/` monthly)*

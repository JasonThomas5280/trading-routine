# Watchlist

Rebuilt every Sunday by `/weekly-prep`. Refreshed each morning by `/pre-market`. Primary input to `/market-check` execution decisions.

**Format:** Ranked by conviction score descending. Top 8 candidates max (4 positions + 4 bench).

---

## Week of 2026-05-04 to 2026-05-08 (Current)

**Built:** 2026-05-03 (Sun) — `/weekly-prep` | **Refreshed:** 2026-05-08 (Fri) — `/pre-market` | `research_source: websearch_fallback` (Perplexity + Alpaca both blocked — IP allowlist; Alpaca day 32)
**Market direction at build time:** 🟢 Confirmed Uptrend Day 22 (SPY ~$723.30 NEW ATH May 1; 2/25 distribution days; follow-through day 2026-04-08)
**Top sectors (4-week trailing RS — raw % return vs. SPY):**
1. XLK Technology: ~+8% relative to SPY (Nasdaq +15.3% April; best 4-week performer by math despite losing forward momentum)
2. XLC Communication Services: ~+5% relative (Mag-7 all beat — META, GOOGL, MSFT, AMZN AH Apr 29; entering post-earnings tradeable window this week)
3. XLE Energy: ~+2-4% relative (Iran/Hormuz war; Brent peaked $126, now ~$114; oil premium)
4. (XLI Industrials: ~0% relative to SPY — in RRG leading quadrant but below top-3 by trailing 4-wk)
**⚠️ SECTOR ROTATION SIGNAL:** RRG shows XLK in LAGGING quadrant — losing forward momentum to XLI/XLE/XLB. XLF ranked #10, XLY ranked #11 on RRG. XLK retains top-3 status by trailing 4-week math ONLY. All XLK entries this week carry `sector_momentum_warning`.
**Bottom sectors (avoid):** XLF Financials (#10 RRG), XLY Consumer Disc (#11 RRG), XLB Materials (negative relative 4-wk)
**Blacklisted sectors:** None (no 2-consecutive-fail trade history to trigger blacklist)

**⚠️ THIN UNIVERSE WEEK — 0 confirmed ≥75 entries:**
AMD (May 5 AH blackout), PLTR (May 4 AH blackout), ETN (May 5 blackout) all in earnings blackout. NVDA below pivot and scoring 71/100 (conditional). AVBO and MU score 62-76/100 with significant uncertainty. **This is information, not failure — market may be in sector transition. Reduce entry expectation for week. DO NOT lower the 75 threshold to fill slots.**

**Scan stats (full detail in RESEARCH-LOG.md 2026-05-03 /weekly-prep entry):**
- Universe seeded: ~15 candidates (manual websearch fallback — build-universe.sh + Alpha Vantage blocked; Alpaca blocked)
- Pre-filtered (earnings blackout / C-letter fails / no valid base): 9 removed (AMD, PLTR, ETN, CAT, URI, FCX earnings blackout or C-letter fail)
- Scored via canslim-screener (websearch fallback): 5 candidates (MU, NVDA, AVGO, GEV, STX)
- Passed ≥75 with confirmed entry conditions: **0**
- Borderline (70–74, near-miss): 3 (MU est. 72–76, NVDA est. 71, AVBO est. 72)
- **Conclusion: Cash-preservation week. Entry only if Alpaca API restores AND a setup crosses pivot on volume AND fresh score ≥75 is confirmed at /market-check.**

---

### Primary watchlist (top 4 — ready to trade this week)

| Rank | Symbol | Conviction | Sector | Base / Setup | Pivot | Stop if Entered | Earnings Date | Buy-Zone | Notes |
|---|---|---|---|---|---|---|---|---|---|
| 1 | MU | **est. 72→76/100 ⚠️ BORDERLINE** | XLK/Memory | Flat base / ATH breakout | ~$545–546 est. (ATH; Alpaca blocked) | entry × 0.93 | ~Jul 1, 2026 ✅ | 🔴 **CRITICALLY EXTENDED** — May 7 actual close: $646.63 (WebSearch live data; prior est. $678.30 may be wrong); May 8 intraday $707.44 (+9.4% today = **+29.5% above ~$546 pivot**); `climax_top_risk_flag` CRITICAL++ — possible BLOWOFF TOP | May 8 /market-check: $707.44 intraday at 10:39 AM ET. +9.4% single-session gain on top of multi-week extension — blowoff top warning. Mizuho $740 PT = Wall Street chasing exhaustion signal. HBM4 supply sold out; 3-5yr contracts; JEDEC May 12-13. Stock up ~70%+ in 2026 from $546 pivot area; stock split speculation. UNCHANGED: 🔴 DO NOT CHASE. Wait for base formation; new pivot may form in $640-710 range (~4-6 wks). C-letter EPS +405% YoY. `sector_momentum_warning: XLK lagging RRG`. |
| 2 | AVGO | **est. 65-68/100 ❌ THESIS RISK — BENCH** | XLK/Semis | Flat base Stage 2 (pivot held at /market-check) | $406.75 | $378.28 (-7%) | Jun 3, 2026 ✅ | ⚠️ **PIVOT TEST HELD** — May 8 intraday: low $406.30 (tested below $406.75 pivot by $0.45); current $418.82 (above pivot). BENCH — pivot held at /market-check. | May 8 /market-check: $418.82 intraday (range $406.30–$426.49). Volume: 22.79M vs ADV 19.49M = +16.9% (FAILS +40% threshold). Score: 65-68/100 (FAILS <75; OpenAI deal financing snag weakened N-letter). Pivot test from low $406.30 HELD — above $406.75 at /market-check → **STAYS BENCH** per pre-market instruction. Three CAN SLIM gates fail (score, volume, Alpaca+NFP abort). Flags: `catalyst_negative`, `thesis_risk`, `openai_deal_financing_snag`. Broader AI chip thesis (META $300B+, hyperscaler ASIC demand) intact. Monitor /eod-review close: if close < $406.75 → REMOVE (failed base); if close > $406.75 → remains bench. `sector_momentum_warning`. |
| 3 | STX | **est. 53→68/100 ❌ NO BASE** | XLK/Storage | Post-earnings gap; no base formed | TBD (base needs ~4-5 wks to form) | — | ~Jul 2026 ✅ | 🔴 **NO BASE** — ~$710-728 (ATH $728.00 May 1); no tradeable pivot | May 7: ~$710-728 (no new overnight catalyst; riding Q3 earnings narrative). 21 analysts Buy, avg PT $610 (stock already beyond avg PT — extended). Large data centers 80% of revenue; demand booked through 2027. No base — needs 4-5 more weeks. Wait for cup-with-handle. **Watch: base formation target ~May 25-June 6. Re-score when Alpaca restores.** |

### Bench (5–8 — setup forming, not yet at pivot)

| Rank | Symbol | Conviction | Notes |
|---|---|---|---|
| 5 | AMD | **66/100 ❌ SCORED — BELOW THRESHOLD** | XLK/Semis. canslim-screener run 2026-05-06 /market-check. REJECT: A-letter 5/15 (GAAP FY2023 -36.9% due to Xilinx amortization); no_valid_base (post-earnings gap, 0pts). May 6 close ~$398.73 (post +20% earnings gap). Post-Q1 analyst wave: DA Davidson Buy $375; Morgan Stanley Outperform $525. ~40+ analysts mostly Buy, avg PT $385-390. Best-case non-GAAP scenario = 71/100 — still below 75. **Re-evaluate: base formation ~3-6 weeks. Earliest re-score: week of June 9.** `sector_momentum_warning`. `no_valid_base`. DO NOT ENTER. |
| 6 | GEV | **est. 58-65/100 BENCH — reduced confidence** | XLI/Power Infrastructure. Q1 2026: massive earnings surprise (EPS $17.44 vs $1.95 est. — verify one-time items). **⚠️ BNP Paribas downgraded to Neutral from Outperform** (PT $1,190) — softens I-letter score. Stock -7.52% last week (market cap $294.30B). ATH $1,181.95 April 23. AI data center power infrastructure theme intact (hyperscalers buying gas turbines). A-letter still capped at 7pts (short public history; spun off April 2024). No confirmed base. Score est. drops from 65 to 58-65/100. **Watch XLI sector**: monitor for XLI top-3 by 4-wk RS. Base formation target: 4-6 weeks. Re-evaluate once base forms AND BNP thesis verified (one-time EPS?). |
| 7 | META | **est. 40-50/100 ❌ POST-EARNINGS SELLOFF** | XLC/Communication. Q1 beat ($7.31 EPS vs $6.79 est.; rev $56.31B +33% YoY) but -9%+ AH on capex raise $125-145B. May 1 close **$608.75** (-23.5% from 52wk high $796.25 Aug 2025). Massive float (2.5B+ shares). **NO ENTRY — needs 4-6 weeks to form base.** C-letter potentially strong, but stock in distribution phase. Score irrelevant until base forms. Re-evaluate ~June. 🔴 |
| 8 | GOOGL | **TBD est. 65-72/100 — needs canslim-screener** | XLC/Communication. Q1 BEAT: Rev $109.9B vs $107.2B; Cloud +63% to $20B; backlog doubled to $460B. +10% post-earnings, new 52-week high. Pentagon AI military contracts. Analyst upgrades: JPMorgan $460, TD Cowen $450, Citi $447, Wells Fargo $427. XLC #2 sector. CONCERN: massive float; needs confirmed base formation at pivot. **Score at next available API session.** 🟡 WATCHING — elevated priority bench. |

---

### Removed this week

| Symbol | Reason |
|---|---|
| NVDA | CEO Jensen Huang confirmed China market share = ZERO due to US export restrictions (May 5 2026). Material revenue headwind — China historically 15-25% of NVDA revenue. Score drops from 71 → est. 60-65/100 (well below 75 threshold). 5+ consecutive sessions of RS underperformance vs. market. Below $201.75 pivot. Removed May 5. Re-evaluate post-May 20 earnings if (1) China situation resolves OR (2) US/international demand offset confirmed at ≥75% of prior China revenue. `sector_momentum_warning` remains. |
| LRCX | Carried from prior week removal. China export curbs (MATCH Act), -8.2% below pivot, insider selling $1.55M. Remain removed until: (1) MATCH Act outcome, (2) pivot reclaim, (3) fresh canslim-screener with live API. |
| CRWD | 44/100 REJECT from prior week. EPS deceleration to +8.7% YoY, negative GAAP ROE. Re-score after June 9 earnings. |
| GS | C-letter fail (Q1 2026 EPS +24.3%, below 25% threshold). XLF now ranked #10 by RRG — sector is effectively blacklisted by momentum signal. Re-score after July Q2 earnings if EPS accelerates ≥25%. |
| ETN | C-letter fail: Q1 2026 expected EPS +0.7% YoY. Plus earnings blackout May 5. Despite XLI sector leadership, ETN fails CAN SLIM C-letter badly. |
| CAT | C-letter fail: Q1 2026 EPS consensus +15.2% (below 25% threshold). Despite AI infrastructure AI narrative and +32% YTD stock performance. Cannot enter below C-letter threshold. |
| URI | C-letter fail: Q1 2026 adj EPS +10% YoY (below 25%). Revenue +7%. Solid company, wrong growth rate for CAN SLIM. |
| FCX | C/A-letter concerns: LT EPS growth est. 5.94%/yr (commodity-driven); guidance cut (Grasberg wet ore). Despite XLB sector momentum on RRG. |
| PLTR | Earnings Monday May 4 AH (blackout). Prior note stands: 10d MA below 50d MA, -31% from 52-week high. Not a leader setup. Remove until technical structure repairs. |

---

## Week-Ahead Entry Execution Plan (Week of May 4–8)

**⚠️ CRITICAL: Alpaca API must be resolved before ANY execution. Blocked 22 consecutive days. Zero orders possible until fixed.**

**Monday May 4:**
- PLTR earnings AH → sector XLC direction setter for Tuesday
- NVDA: Pre-market check → is pivot $201.75 reclaimed overnight? If yes → volume check at /market-check.
- MU: Confirm ATH area holding. Check for sell-off (climax top) or constructive consolidation.
- No entries expected unless Alpaca restores over weekend.

**Tuesday May 5:** ← TODAY
- AMD earnings AH — **no entry all day (blackout)**. AMD reports tonight.
- ETN earnings — no entry ETN. ETN removed (C-letter fail).
- NVDA: **REMOVED from watchlist** — China market share zero confirmed by CEO. Re-eval post-May 20 earnings.
- MU: **EXTENDED 9.4% above pivot** ($596 vs ~$546). `climax_top_risk_flag` ESCALATED. DO NOT CHASE.
- AVGO: $416-420 est. (above pivot). 🟡 WATCHING — score pending live API. No execution (Alpaca blocked day 26).
- PLTR: Up ~+1.4% from massive beat (only +2% AH — muted at 46× fwd rev). Watchlist status unchanged (removed); monitor for technical repair.
- **Results tonight:** AMD AH = highest priority event of the week. Re-score immediately tomorrow.

**Wednesday May 6 (/pre-market updated):**
- AMD results confirmed: BEAT. EPS $1.37 (+6.2%), Rev +38% YoY, DC +57% YoY, Q2 guide strong. AH +15-16%. Pre-mkt ~$390-396 (+15% from $341.54). **Score via canslim-screener at 10:30+ AM CT. Expected 77-82/100.**
- AVGO: $430.66 May 5 close — extended (+0.84% above $427.09 ceiling). Score 72/100 (below 75). Both gates fail for open. Watch for intraday pullback to $415-427.
- MU: ~$640.47 May 5 close — climax top risk, bench only. DO NOT CHASE.
- NVDA: REMOVED — China market share zero (CEO confirmed). Score 60-65/100.
- Heavy earnings continue Wed. 450 companies this week.
- ⚠️ **NFP Friday May 8 8:30 AM ET — no new entries Thu PM or Fri. Entry window: Wed-Thu morning ONLY.**
- Alpaca blocked day ~28 — HALT on all execution.

**Thursday May 7:**
- Heaviest earnings day (598 companies).
- Last viable entry day this week (no entries Thu/Fri per NFP caution — actually: if a setup triggers Thursday before close, it's OK. The NFP caution is about OPENING new positions on a day when a major macro event could gap the market at open Friday.)
- **⚠️ No new entries Thursday PM or Friday due to NFP risk (May 8, 8:30 AM ET).**

**Friday May 8:**
- April NFP at 8:30 AM ET — MAJOR macro event. No new entries.
- If NFP data is strong (labor market healthy) → bullish for continued uptrend. Update MARKET-DIRECTION.md.
- If NFP is weak → watch for distribution day; assess circuit breaker status.

**Effective entry window: Monday May 4 – Thursday May 7 (morning sessions only), contingent on Alpaca API restoration.**

---

## Last Week's Watchlist (archived — week of 2026-04-27 to 2026-05-01)

**Key carry-overs to this week:** NVDA (71/100, below pivot, conditional), AVBO (72/100, below threshold), MU (72-76/100, borderline), STX (68/100, no base).
**Removed:** GS (XLF ranked #10, C-letter fail), PLTR (blackout + technical failure), LRCX (China risk, carried removal). CRWD/SNEX/PANW/WDC/META/CBOE all removed prior weeks — see prior watchlist.

*(See git history for full Week 2 watchlist)*

---

## Historical watchlists (archived)

*(Moved to `memory/archive/watchlists/` monthly)*

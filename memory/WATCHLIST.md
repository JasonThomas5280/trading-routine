# Watchlist

Rebuilt every Sunday by `/weekly-prep`. Refreshed each morning by `/pre-market`. Primary input to `/market-check` execution decisions.

**Format:** Ranked by conviction score descending. Top 8 candidates max (4 positions + 4 bench).

---

## Week of 2026-05-04 to 2026-05-08 (Current)

**Built:** 2026-05-03 (Sun) — `/weekly-prep` | **Refreshed:** 2026-05-06 (Wed) — `/pre-market` | `research_source: websearch_fallback` (Alpaca + Alpha Vantage + Perplexity ALL blocked — IP allowlist issue Day 26)
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
| 1 | MU | **est. 72→76/100 ⚠️ BORDERLINE** | XLK/Memory | Flat base / ATH breakout | ~$545–546 est. (ATH; Alpaca blocked) | entry × 0.93 | ~Jul 1, 2026 ✅ | 🔴 **EXTENDED** — $596.57 pm (+8.2%); 9.4% above ~$546 pivot; `climax_top_risk_flag` ESCALATED | Pre-market May 5: **$596.57** (+8.2% from ~$542 close). Catalyst: Sandisk Q3 massive beat (peer read-through). **EXTENDED 9.4% above ~$545-546 pivot** (5% buy-zone ceiling ~$572). `climax_top_risk_flag` ESCALATED — 3+ sessions of violent intraday swings (May 4: surged to $584, reversed to $542; May 5: gapped to $596). DO NOT CHASE. Watch for consolidation: if MU forms tight base above $570-580 for 3-5 sessions, new pivot may emerge at ~$575-580. C-letter EPS +405% YoY. `sector_momentum_warning: XLK lagging RRG`. |
| 2 | AVGO | **est. 72/100 ❌ BELOW THRESHOLD (expected 76-80 w/ live data)** | XLK/Semis | Flat base Stage 2 (above pivot) | $406.75 | $378.28 (-7%) | Jun 3, 2026 ✅ (29 days) | 🟡 **WATCHING** — ~$416-420 est. (+2.4% above pivot; within buy zone) | May 5 pm: ~$416-420 est. (above $406.75 pivot). No negative catalyst overnight. AI chip $100B 2027 target reaffirmed. META $300B+ AI chip commitment intact. AI rev Q1 FY2026 +106% YoY. Score est. 72/100 — expected 76-80 with live data. **Entry requires:** (1) Alpaca restored, (2) volume ≥+40% confirmed, (3) canslim-screener ≥75. `sector_momentum_warning`. |
| 3 | STX | **est. 53→68/100 ❌ NO BASE** | XLK/Storage | Post-earnings gap; no base formed | TBD (base needs ~4-5 wks to form) | — | ~Jul 2026 ✅ | 🔴 **NO BASE** — $710.89 ATH May 5 (new 52-wk high); no tradeable pivot | May 5: $710.89 (new 52-wk high, +147% YTD). Rosenblatt and BofA raised PTs on Q3 beat. Demand booked through 2027 per mgmt. Still no base — needs 4-5 more weeks. Wait for cup-with-handle. Score 68/100 (expected 83+ with live API). **Watch: base formation target week ~May 25-June 6. Re-score when Alpaca restores.** |

### Bench (5–8 — setup forming, not yet at pivot)

| Rank | Symbol | Conviction | Notes |
|---|---|---|---|
| 5 | AMD | **⭐ POST-EARNINGS — NEEDS CANSLIM SCORE (PRIORITY #1 TODAY)** | XLK/Semis. Q1 2026 BEAT: EPS $1.37 vs $1.29 (+6.2%); Rev $10.25B vs $9.89B (+38% YoY); Data Center $5.8B (+57% YoY); Q2 guide midpoint $11.2B vs $10.53B est. AH +15-16%. OUT OF BLACKOUT. Prior close $341.54 (May 4). Pre-mkt May 6 est. ~$390-396 (+15-16% AH from $341). Post-gap: no base yet. **Run canslim-screener at /market-check once regular session settles (10:30 AM CT min).** C-letter: EPS +38% YoY = 15pts; D.C. +57% = acceleration bonus. Expected score 77-82/100. **Entry only after (1) score ≥75, (2) valid pivot/buy-zone forms, (3) Alpaca API restored.** Highest-priority scoring candidate for week of May 11 if base forms. `sector_momentum_warning: XLK lagging RRG.` |
| 6 | GEV | **est. 65/100 BENCH — base forming** | XLI/Power Infrastructure. Price ~$1,062 (-10% from ATH $1,182). Q1 2026: Rev $9.34B (+16% YoY), Adj EPS $1.98 (+118% vs Q1 2025 $0.91), Orders $18.3B (+71% YoY). AI data center power infrastructure theme — hyperscalers buying gas turbines for data center power. 28/0 analyst Buy. BUT: only 2 years of public history as separate company (spun off April 2024) → A-letter capped at 7pts under short_annual_history rule. Float ~270M shares. No confirmed base. **Watch XLI sector**: if XLI clearly moves to #2 by 4-week RS (currently #4), GEV becomes primary sector focus. Expected score 75+ once base forms (4–6 weeks). |
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

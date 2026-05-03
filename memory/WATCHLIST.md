# Watchlist

Rebuilt every Sunday by `/weekly-prep`. Refreshed each morning by `/pre-market`. Primary input to `/market-check` execution decisions.

**Format:** Ranked by conviction score descending. Top 8 candidates max (4 positions + 4 bench).

---

## Week of 2026-05-04 to 2026-05-08 (Current)

**Built:** 2026-05-03 (Sun) — `/weekly-prep` | `research_source: websearch_fallback` (Alpaca + Alpha Vantage + Perplexity ALL blocked — IP allowlist issue Day 22)
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

| Rank | Symbol | Conviction | Sector | Base / Setup | Pivot | Stop if Entered | Earnings Date | Notes |
|---|---|---|---|---|---|---|---|---|
| 1 | MU | **est. 72→76/100 ⚠️ BORDERLINE** | XLK/Memory | Potential cup-with-handle; ATH $545.91 on May 1 | ~$520–530 est. (pivot not confirmed — Alpaca blocked) | entry × 0.93 | ~Jul 1, 2026 ✅ | 🟡 **BORDERLINE — HANDLE/BASE NOT CONFIRMED.** ATH $545.91 on May 1 (+2.82% from our prior $517 est.). +61% past month = extraordinary but raises climax top risk (O'Neil rule: if stock gains 25%+ in 2 weeks, sell-rules-engine climax top flag applies). C-letter: EPS TTM +405% YoY (extraordinary). A-letter: cyclical trough years FY2023 (neg) + FY2024 ($0.70) drag score; turnaround rule applied = 7pts. **Entry requires:** (1) Alpaca API restored, (2) pivot confirmed on price bars, (3) volume ≥+40% on breakout, (4) sell-rules-engine does NOT flag climax top, (5) score confirmed ≥75. D.A. Davidson PT $1,000 (institutional conviction strong). HBM4 sold out through 2026. `sector_momentum_warning: XLK lagging RRG`. |
| 2 | NVDA | **est. 71/100 ❌ BELOW THRESHOLD — CONDITIONAL** | XLK/Semis | Flat base Stage 1 (under stress — pivot breached) | $201.75 | $187.63 (-7%) | ~May 20, 2026 ✅ | 🔴 **BELOW THRESHOLD. Conditional: scores ~83/100 if pivot $201.75 reclaimed.** May 1 close: ~$199.57 (BELOW pivot $201.75 for 3rd consecutive session). May 3 weekend price: ~$198.45. Google TPU 8t/8i (3x faster training, 80% better perf/$) + Amazon custom silicon + OpenAI booking Google silicon = persistent L-letter competitive erosion. C-letter strong: EPS $1.62/share, est. +128% YoY = 20pts. **Entry gate:** (1) Alpaca restored, (2) price reclaims $201.75 pivot intraday, (3) volume ≥+40% vs 50d avg on reclaim, (4) fresh canslim-screener ≥75, (5) Google/Amazon competition narrative has NOT accelerated. `sector_momentum_warning`. |
| 3 | AVGO | **est. 72/100 ❌ BELOW THRESHOLD** | XLK/Semis | Flat base Stage 2 (forming; pivot minor breach) | $406.75 | $378.28 (-7%) | Jun 3, 2026 ✅ (22 days) | 🔴 **BELOW THRESHOLD. Expected 75–80 when APIs restore.** May 1 close: $405.45 (-0.3% below $406.75 pivot). AI segment Q1 FY2026: +106% YoY revenue ($8.4B). META $300B+ AI chip commitment (AVGO supplier) CONFIRMED. Q1 FY2026 adj EPS $1.98 (+~118% vs $0.91 in Q1 FY2025). S-letter drag: ~4.7B shares float = massive. Breakout volume unconfirmed (Alpaca blocked). **Entry requires:** (1) Alpaca restored, (2) pivot $406.75 reclaimed, (3) volume confirmed, (4) score confirmed ≥75 (expected 76–80 with live data). `sector_momentum_warning`. |
| 4 | STX | **est. 53→68/100 ❌ NO BASE** | XLK/Storage | Post-earnings gap; no base formed | TBD (base needs ~5 wks to form) | — | ~Jul 2026 ✅ | 🔴 **NO ENTRY — no base, no pivot. Wait for cup-with-handle to form (est. 5–8 wks).** Apr 28 earnings: EPS $4.10 (+115% YoY); Q4 guide $5.00 EPS (+41% YoY). Massive analyst upgrade wave: Rosenblatt $1,000 PT, BofA $840, Barclays $750, Citi $740. Apr 30 close ~$643. Score est. 68/100 with API-blocked A-letter (cyclical); expected 83+/100 with live API. **Watch: when base forms and pivot establishes, re-run canslim-screener and potentially move to Primary #1.** |

### Bench (5–8 — setup forming, not yet at pivot)

| Rank | Symbol | Conviction | Notes |
|---|---|---|---|
| 5 | AMD | **BLACKOUT (May 5 AH)** | XLK/Semis. Earnings Tuesday May 5 after close — full blackout this week. ATH $362.79 on May 1 (new all-time high). Q1 expected EPS $1.30 (+33% YoY), revenue $9.84B (+32% YoY). OpenAI 6GW deal for MI450 GPUs confirmed. 29/40 analysts Buy, DA Davidson $375 PT. **Re-score immediately after May 5 earnings if beats.** Expected 72–82/100 post-earnings depending on beat magnitude and base formation. If beats 40%+ EPS = C-letter 15pts → likely 77+. High priority for week of May 11 /weekly-prep. |
| 6 | GEV | **est. 65/100 BENCH — base forming** | XLI/Power Infrastructure. Price ~$1,062 (-10% from ATH $1,182). Q1 2026: Rev $9.34B (+16% YoY), Adj EPS $1.98 (+118% vs Q1 2025 $0.91), Orders $18.3B (+71% YoY). AI data center power infrastructure theme — hyperscalers buying gas turbines for data center power. 28/0 analyst Buy. BUT: only 2 years of public history as separate company (spun off April 2024) → A-letter capped at 7pts under short_annual_history rule. Float ~270M shares. No confirmed base. **Watch XLI sector**: if XLI clearly moves to #2 by 4-week RS (currently #4), GEV becomes primary sector focus. Expected score 75+ once base forms (4–6 weeks). |
| 7 | META | **TBD — re-score Monday /pre-market** | XLC/Communication. Earnings April 29 AH: beat but AH selloff -6-8% on capex raise ($125-145B). Post-earnings reaction settling. XLC emerging as #2 sector by 4-week RS (Mag-7 all beat). If META stabilizes above its prior pivot after the AH selloff, could be a bench-to-primary candidate. **Score at Monday /pre-market.** Concern: massive float (2.5B+ shares), capex raise reducing near-term margin outlook, stock may need 4+ weeks to form base post-earnings. |
| 8 | GOOGL | **TBD — re-score Monday /pre-market** | XLC/Communication. Strong Q1: Cloud +63%, all metrics beat (April 29 AH). Post-earnings tradeable window opens. XLC sector elevation post-Mag-7 sweep. **Score at Monday /pre-market.** Similar concerns: massive float; needs base formation; AI capex investment thesis both supportive (revenue) and costly (capex). |

---

### Removed this week

| Symbol | Reason |
|---|---|
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

**Tuesday May 5:**
- AMD earnings AH — no entry all day (blackout). Pre-market: score PLTR reaction for XLC sector thesis.
- ETN earnings — no entry ETN.
- AVGO: Any move above $406.75 on volume? Score check.

**Wednesday May 6:**
- Heavy earnings week (450 companies). Tech/XLC names continue reporting.
- NVDA/AVGO: confirmation of base hold or further deterioration.
- META/GOOGL: React to week's tech earnings; update scores.

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

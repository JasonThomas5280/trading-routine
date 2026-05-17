# Watchlist

Rebuilt every Sunday by `/weekly-prep`. Refreshed each morning by `/pre-market`. Primary input to `/market-check` execution decisions.

**Format:** Ranked by conviction score descending. Top 8 candidates max (4 positions + 4 bench).

---

## Week of 2026-05-18 to 2026-05-22

**Built:** 2026-05-17 (Sun) — `/weekly-prep` | `research_source: websearch_fallback` (Alpaca: 403 Day 44, Perplexity: 403, Alpha Vantage: 403 — all three primary sources blocked; all data via native WebSearch)

**Market direction:** 🟡 Uptrend Under Pressure (5/25 dist days) | **NO NEW LONG ENTRIES**
**SPY:** $739.17 (May 15 close) | 50-day SMA $688 (+7.3%) | 200-day SMA $673 (+9.9%)
**QQQ:** $709.96 | 50-day SMA $638 (+11.3%) | 200-day SMA $618 (+14.9%)

**Top sectors (4-week trailing RS, Apr 17 → May 15):**
1. XLC Communication Services: ~+12-15% (GOOGL +22%+ in 30d; AI cloud dominant)
2. XLI Industrials: ~+8-12% (RRG leading quadrant; VRT +30% Q1 revenue; AI power infra)
3. XLE Energy: ~+5-8% (oil $100-107; supply discipline)
4. ⚠️ XLK Technology: demoted to #4 — RRG lagging quadrant CONFIRMED; May 15 worst sector (-2.6%)

**Blacklisted sectors:** None (no 2-consecutive-fail trade history)
**XLK status:** `sector_momentum_warning` ESCALATED → **XLK blackout for new entries** until RRG moves to leading/weakening quadrant

---

## ⚠️ UNDER PRESSURE POSTURE — NO NEW LONG ENTRIES

**Entry gate status:** ALL LONG ENTRIES BLOCKED by market state (5/25 dist days → Uptrend Under Pressure). Hedge SH/SQQQ queued at $625 / 25% portfolio pending Alpaca restore.

**Scan stats (websearch_fallback degraded):**
- Universe targeted: 8 names (GOOGL, AVGO, NVDA, VRT, META, AMD, GS, PWR)
- Could not run: build-universe.sh (requires Alpaca + Alpha Vantage, both blocked)
- Passed conviction ≥75: **1** (GOOGL 77/100)
- Entry gates passed: **0** (market Under Pressure = no entries)
- Rejection breakdown:
  - Price ceiling ($10-$500) fail: GS ($948)
  - Earnings blackout (≤5d): NVDA (May 20 AH)
  - Conviction <75: AVGO (62-67), META (~45-55), AMD (66), VRT (est. 55-75, insufficient GAAP data), PWR (~52-60, A-letter annual growth 17.3% < 25%)
  - Market gate (Under Pressure): would have blocked GOOGL entry even if base were present

**This is the 5th consecutive week of 0 actionable setups.** Rubric is working as designed — do NOT lower thresholds to fill slots.

**The week ahead is the highest-stakes inflection point since the April 8 FTD:**
- NVDA earnings May 20 AH = binary event. Beat + H200 China confirmed + strong guidance → potential FTD May 21-22 → state recovery to Confirmed Uptrend. Miss/soft guidance → dist day #6 → 🔴 Market in Correction.
- First order on Alpaca restore (regardless of market state): SH ~$625 / 25% portfolio (hedge activation per Under Pressure protocol).

---

### Primary Watchlist (score ≥75 — watching for recovery entry on FTD confirmation)

| Rank | Symbol | Conviction | Sector | Base / Setup | Pivot | Stop if Entered | Earnings | Buy-Zone Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| W1 | GOOGL | **77/100** ✅ | XLC / Communication | ⏳ FORMING flat base ($387-403 zone; 2wk in — need 3-5 more wks) | ~$403-405 (est., when base completes) | entry × 0.93 | Q2 July (est.) | 🟡 WATCHING — price in consolidation zone; entry gated by Under Pressure + no valid base yet | **Best setup in universe.** C:20 (GAAP EPS +81% YoY Q1 2026; net income $62.6B; Cloud +63% to $20B+ Q1), N:15 (near 52wk ATH; Gemini AI; Pentagon contracts; $70B buyback), L:15 (RS ≥95 — +22.5% in 30d vs SPY +~6%; XLC sector #1), S:10 (float 12B shares = headwind; buyback $70B active; consolidation volume declining = constructive), A:10 (2 of 3 years ≥25% GAAP; FY2024 EPS +12.5% below threshold; ROE 31.83% saves +5), I:7 (65%+ inst, quality increasing). Base:0 — needs 3-5 more weeks of $387-405 consolidation. Antitrust flags ongoing (USA TODAY lawsuit May 12, UK display ad, EU) — Proposal 7 not yet approved but monitoring. **MILESTONE: First conviction-passing name in 5 weeks of operation. Score gate working.** Entry trigger: FTD confirmation + base completion at $403-405 pivot + volume ≥+40% above 50d avg + Alpaca restored. `research_source: websearch_fallback`. |

---

### Bench (below threshold or blocked — watching for score improvement or base completion)

| Rank | Symbol | Score Est. | Sector | Status | Re-Score Trigger | Notes |
|---|---|---|---|---|---|---|
| B1 | NVDA | **⛔ BLACKOUT** | XLK / Semis | 🔴 EARNINGS BLACKOUT May 13-20. Re-score May 21 /pre-market. | Post-May 20 AH earnings | **⚠️ CRITICAL WATCH — H200 China clearance.** May 15 headline: "Nvidia Hits $5.7T as H200 Clears China." If confirmed on May 20 earnings call, China revenue restores (previously 0% from MATCH Act). Prior score ~60-65/100 (China = zero killed N/L). Post-clearance estimate: **80-90/100** — would be primary entry candidate on next Confirmed Uptrend. Data center Q1 FY2027 expectation: $78-79B total revenue, $1.78 EPS. Blackout through May 20. **HIGHEST PRIORITY re-score at /pre-market May 21.** Alpaca restore + price ≤5% above pivot required. `⚠️ earnings_blackout_active`. |
| B2 | VRT | **est. 55-75/100** ⚠️ | XLI / Industrials | 🟡 NEEDS FORMAL SCORE (GAAP data insufficient) | Alpaca + AV restore for formal score | **NEW CANDIDATE — Vertiv Holdings.** AI power infrastructure leader (thermal mgmt, UPS, power for hyperscaler data centers). Q1 2026: Revenue +30% YoY (+23% organic), Americas +44%. Adjusted EPS $1.17 (+83% YoY). FY2026 guidance: $13.75B revenue (+34% YoY), adj. EPS $6.35 (+51% YoY). Sector: XLI (#2 — RRG leading). Price: $370.94 (May 15 close), ATH $379.94 (May 14) — near all-time high. ✅ price within $10-$500. Earnings July 29 ✅ (73 days out). **Score uncertainty:** A-letter GAAP annual EPS unconfirmed for FY2023 (VRT private equity history; possible low/negative FY2023 GAAP). If FY2023 GAAP ≥25%: estimated 72-80/100; if <25%: 55-65/100. Float ~380-400M shares (within range). N-letter: near ATH + AI data center = 10-15pts. **FORMAL canslim-screener REQUIRED when Alpaca + AV restore.** Potential top-3 candidate. `insufficient_data_flag`. `research_source: websearch_fallback`. |
| B3 | AVGO | **62-67/100** ❌ | XLK / Technology | 🔴 Score gate fails; XLK sector demoted to #4 | GAAP FY2023 revenue confirmed ≥25% + XLK sector recovery | Score: C:15 (AI semis +106% YoY; Q1 FY2026 revenue +29%; GAAP EPS unconfirmed — VMware amort.), A:10 (FY2023 revenue +8% = BELOW 25% threshold; ROE 33.37% saves +5), N:12 (est. near ATH; AI ASIC traction), S:5 (float >500M = 0; buyback unconfirmed), L:5 (RS strong but XLK sector #4 = sector penalty applied; `sector_momentum_warning`), I:6, Base:10 (flat base est.). **Total: 63/100** — well below threshold AND sector now blacklisted for new entries. Price: $422-439 range (May 17 per search). Wells Fargo $545 PT, 29 analysts Strong Buy. Earnings June 3 ✅ (17d out — safe). **Score improvement path:** GAAP EPS YoY confirmed ≥40% + XLK returns to top-3 sector. `sector_momentum_warning`. |
| B4 | META | **~45-55/100** ❌ | XLC / Communication | 🟡 BASE FORMING (8-9 months in; est. 4-6 more weeks) | Base completion + score re-check | Q1 2026: Revenue +33% YoY ($56B). But capex raise ($135B) caused -9% AH reaction. Stock recovery underway from May 2025 ATH ($796) correction. Price est. ~$580-620 range (May 15). Float 2.5B+ shares (S-letter headwind). Base still forming — massive distribution phase from ATH to May correction needs more consolidation. C:20 (if GAAP ≥80% YoY confirms), A:10 (need to verify), N:5 (not near 52wk high; capex overhang), S:0-5 (huge float), L:7, I:7, Base:0. Estimated 45-55/100. Re-score week of June 7 when base potentially completes. |

---

### Removed this week

| Symbol | Reason |
|---|---|
| GOOGL | ➡️ PROMOTED from Watchlist W1 to Primary Watchlist (score 77/100 passes threshold; now properly positioned as lead candidate) |
| GS | **DISQUALIFIED — price ceiling.** Goldman Sachs: $948.47 (May 15) > $500 maximum per TRADING-STRATEGY.md. Q1 2026 EPS $17.55 (+24% YoY), ROE 19.8% — excellent fundamentals, cannot trade at this price. Same rule as GEV. Flag for re-evaluation only if stock splits or price rule formally amended. |
| PWR | **A-letter fail.** Quanta Services: annual EPS growth forecast +17.3% < 25% CAN SLIM threshold. Q1 2026 GAAP EPS $1.45, backlog $48.5B (record), but forward growth does not meet criterion. |
| NVDA | **⛔ Earnings blackout** (May 13-20 AH). Re-evaluating May 21 post-earnings. H200 China clearance potential score-changer. |
| AVGO | Score 63/100 (below threshold) AND XLK sector demoted to #4 (sector_momentum_warning escalated to blackout). Dual blockage. |
| AMD | 66/100 carry-over (A-letter: GAAP FY2023 EPS −36.9%). Re-score earliest June 9 (one more GAAP quarter needed). |
| STX | No base formed. Price ~$700+ range. Re-score when cup-with-handle or flat base appears. |
| MU | Climax top (price $762-780 est., +39-43% extended above ~$546 pivot). Wait for base formation est. 6-8 weeks. |

---

### Entry Execution Plan — Week of May 18-22

**Entry gate: ⛔ ZERO new long entries** (market = Uptrend Under Pressure)

**Hedge activation (highest priority when Alpaca restores):**
- Buy SH (inverse S&P −1×) or SQQQ (inverse Nasdaq −3×) at ~$625 / 25% of $2,500 portfolio
- SH preferred (lower leverage decay for account size)
- Sizing: $625 / SH current price (est. $16-18 range)

**Watch triggers that could change posture this week:**

| Day | Event | Bullish scenario | Bearish scenario |
|---|---|---|---|
| Tue May 19 | HD earnings AM | Strong housing demand = consumer resilient | Miss = dist day risk |
| Wed May 20 | NVDA earnings AH + FOMC minutes | Data center >$80B + H200 China confirmed + strong guide → **FTD candidate May 21** | Miss/soft guide → dist day #6 → 🔴 Correction |
| Thu May 21 | WMT earnings AM | Consumer spending resilient | Miss = recession signal |
| Fri May 22 | U of Michigan Sentiment | Confidence recovery | Multi-month low = Correction reinforcement |

**If NVDA results trigger FTD (rally day +1.25%+ on higher volume within 4-7 days of rally attempt):**
→ State flips to 🟢 Confirmed Uptrend → Immediately evaluate GOOGL (if base at $403 pivot) + re-score NVDA → Enter best setup via trade-executor

**Distribution day #6 scenario (one more dist day):**
→ 🔴 Market in Correction → No new longs → Liquidate any positions (none currently) → Deploy SH/SQQQ hedge fully → Cash preservation until FTD

---

## ⚠️ ARCHIVED — Week of 2026-05-11 to 2026-05-15

> **Status:** ARCHIVED as of 2026-05-17 /weekly-prep. Replaced by Week of May 18-22 above.

**Market direction at archive:** 🟡 Uptrend Under Pressure (dist day #5 confirmed May 15 EOD)
**Scan result:** 1 conviction pass (GOOGL 77/100) — 0 tradeable setups (entry gated by Under Pressure + Base:0 + Alpaca blocked Day 43)

### Primary watchlist (archived)

| Rank | Symbol | Conviction | Notes |
|---|---|---|---|
| — | — | — | No tradeable setups. See GOOGL in Watchlist section above. |

### Watchlist watch (archived)

| Rank | Symbol | Conviction | Status | Notes |
|---|---|---|---|---|
| W1 | GOOGL | 77/100 | → PROMOTED to Primary Watchlist May 17 | Base:0 → FORMING. Price $387-402 range May 15. Antitrust active. |

### Bench (archived)

| Rank | Symbol | Score | Notes |
|---|---|---|---|
| B1 | AVGO | 67/100 ❌ | Below threshold. XLK sector demoted. Wells Fargo $545 PT. Earnings June 3. |
| B2 | META | ~45-55/100 ❌ | Base forming. Re-score June 7. |
| B3 | MU | est. 72-76/100 ❌ | Price gate catastrophic fail (+39-43% extended). Wait for base. |
| ~~B4~~ | ~~GEV~~ | ~~~61/100~~ | 🔴 HARD DISQUALIFIED — price $1,042 > $500 ceiling. |

---

## Historical watchlists (archived)

*(Moved to `memory/archive/watchlists/` monthly)*

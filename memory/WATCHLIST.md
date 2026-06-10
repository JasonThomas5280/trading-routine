# Watchlist

Rebuilt every Sunday by `/weekly-prep`. Refreshed each morning by `/pre-market`. Primary input to `/market-check` execution decisions.

**Format:** Ranked by conviction score descending. Top 8 candidates max (4 positions + 4 bench).

---

## ⚠️ ARCHIVED — Week of 2026-06-02 to 2026-06-06 — **STALE — rebuild via /weekly-prep on Sunday Jun 8**

> **Archived week of Jun 2–6.** Market state changed to 🔴 CORRECTION (Dist Day #6 Jun 5 confirmed Jun 8). All primary candidates below threshold. AVGO base destroyed. GOOGL removed. DELL/NVDA below 75. Full rebuild required Sunday Jun 8 — do NOT use this list for entry decisions.

**Built:** 2026-05-31 (Sun) — `/weekly-prep` | `research_source: websearch_fallback` (Alpaca: 403 Day 68, Perplexity: 403, Alpha Vantage: 403 — all three primary sources blocked; all data via WebSearch + cached prior-week fundamentals)

**Market direction:** 🟡 Uptrend Under Pressure (5/25 dist days → 4/25 Jun 2 after Apr 28 expiry) | **NO NEW LONG ENTRIES** until FTD confirmed
**SPY:** ~$756.44 (May 29 close) | **50d MA ~$740** (+2.2%) | **200d MA ~$722** (+4.7%) | ⚠️ Prior MA estimates corrected (50d was $689 — stale artifact)
**QQQ:** ~$737 | **50d MA ~$712** (+3.5%) | **200d MA ~$683** (+7.9%)

**Top sectors (4-week trailing RS, May 1 → May 29):**
1. **XLK Technology: #1** ✅ — 52-week high $191, AI/semiconductor dominant. `sector_momentum_warning` **CLEARED** — XLK BLACKOUT **LIFTED**. ARM +177% YTD, XLK +~20% May. Sector bonus restored for XLK names.
2. XLI Industrials: ~+8-12% — DELL AI servers +757% YoY confirms AI power/cooling cycle. VRT thesis confirmed but VRT price showing distribution.
3. XLE Energy: ~+5-8% — oil held ~$90-100 despite Iran deal uncertainty. JD Vance "not there yet."
4. ⚠️ **XLC Communication Services: DEMOTED to #4** — GOOGL -2.51% on May 29 ATH day (distribution into strength). XLC weakening. No sector bonus for XLC names.

**Blacklisted sectors:** None
**XLK status:** `sector_momentum_warning` CLEARED → **blackout LIFTED** (RRG confirmed leading/weakening via 52-week high price action)

**Universe scan:** DEGRADED — Alpaca + AV both blocked; cannot run `build-universe.sh`. Curated universe of 5 names.
**Candidates evaluated:** GOOGL, NVDA, DELL, ARM, MRVL
**Pre-filtered out:** AVBO (⛔ earnings Jun 3 = 2 trading days blackout), AMD (A-letter GAAP FY2023 EPS -36.9%), GE (float >800M + insufficient GAAP history), META (price data conflict unresolved), VRT (65/100 carry, below threshold), CAT ($931 > $500 ceiling), GS ($948 > $500 ceiling)
**Passed conviction ≥75: 0** — **ZERO for 8th consecutive week**
**Entry gates passed: 0** (market Under Pressure = no entries)

> **⚠️ 8th consecutive week with 0 candidates above conviction threshold.**
> This is NOT a rubric failure — it is information. XLC sector demotion pushed GOOGL below threshold; no other name has valid base + A-letter quality combination. Market transitioning; do NOT lower threshold. Patience is the position.

---

## ⚠️ UNDER PRESSURE POSTURE — NO NEW LONG ENTRIES

**Entry gate:** ALL LONG ENTRIES BLOCKED (Under Pressure; FTD not confirmed). SH/SQQQ hedge $625 queued — FIRST ORDER on Alpaca restore.

**This week's inflection path:**
- **Mon Jun 2:** APR 28 dist day expires → dist count 4/25 (still Under Pressure but one hurdle removed)
- **Tue-Wed Jun 3:** AVBO earnings AH → if beat (consensus $2.40 EPS/$22.11B rev) → potential FTD power-move Jun 4
- **Fri Jun 5:** NFP (96K est, unemployment 4.3%) → beat = FTD fuel; miss = dist day #6 risk → 🔴 Correction

---

### Primary Watchlist (score ≥75)

**NONE this week.** Zero candidates above conviction threshold. See bench for near-threshold names.

---

### Bench (below threshold — watching for score improvement, base formation, or FTD trigger)

| Rank | Symbol | Score | Sector | Status | Re-Score Trigger | Notes |
|---|---|---|---|---|---|---|
| B1 | DELL | **74/100** ⚠️ | XLK / AI Infra | 🟡 Post-earnings gap-up; no base yet | Alpaca+AV restore (A-letter GAAP confirmation) + 3-wk consolidation base | **NEW CANDIDATE — CLOSEST TO THRESHOLD.** Q1 FY2027: Rev $43.84B (+88% YoY), AI-Optimized Servers $16.1B (+757% YoY), EPS $4.86 vs $2.94 est. C:20 (EPS +90%+ YoY). A:7 (VMware amortization creates GAAP uncertainty — cannot confirm all 3 yrs ≥25%; ROE partial credit). N:15 (new ATH; AI server category genuinely new at this scale). S:10 (float headwind but massive volume on gap-up; institutional interest). L:15 (RS 95+; XLK #1 sector). I:7 (cached). Base:0 (earnings gap-up on May 29; need 3-wk consolidation post-gap). **Score would be 84/100 with confirmed base and A-letter AV data.** Pivot: est. $200-210 (consolidation zone above gap). Earnings: est. Aug/Sep (clear). `cached_fundamentals` `research_source: websearch_fallback`. |
| B2 | NVDA | **72/100** ⚠️ | XLK / Semis | 🟡 Post-earnings consolidation wk 3; base forming | Base completion (est. Jun 10-Jul 3) + Alpaca+AV restore | C:20 (Q1 FY2027 EPS +85%+ YoY). A:15 (FY2024+FY2025+FY2026 all ≥25% GAAP). N:10 (near ATH but China H20 = zero permanently = no new market = -5pts). S:5 (massive float; $80B buyback). L:15 (RS 90+; XLK #1 sector — SECTOR BONUS **RESTORED**). I:7 (cached). Base:0 (consolidation wk 3; est. cup-with-handle Jun 10-Jul 3; pivot TBD). **Score with base: 82/100 ✅.** Price ~$211, ATH $235.74 (May 14). Earnings: ~Aug 2026 (clear). `research_source: websearch_fallback`. |
| ~~B3~~ | ~~GOOGL~~ | ~~72/100~~ | ~~XLC / Communication~~ | ❌ **REMOVED Jun 3** — $80B dilutive equity raise (Jun 1) breaks S-letter thesis | — | **REMOVED.** Alphabet announced $80B equity raise: $40B ATM (Q3 2026) + $30B underwritten + $10B Berkshire @ $351.81/sh. Massively dilutive — contradicts buyback/supply thesis. S-letter revised down 10→0-5 → estimated score 72→65-70/100. Stock under pressure overnight; trading ~$352-376 est. = 7-13% below $404 pivot and widening. XLC still #4 sector (no sector bonus). No base forming at these levels. Path to re-entry: stock must rebuild base post-dilution + XLC returns to top-3 + score reaches 75+. Remove entirely from bench; re-evaluate at /weekly-prep when conditions improve. |
| B4 | AVGO | **est. 65–72/100 (REVISED DOWN)** ⚠️ | XLK / Technology | ⚠️ **POST-EARNINGS CRASH — needs new base — re-score Jun 9 (lower expectations)** | New base formation from ~$405–415 support + Jun 9 re-score | **⚠️ MAJOR CORRECTION (Jun 5 /pre-market):** Prior estimate "+6.03% AH → $505–510" was WRONG. Timeline: Q2 FY2026 $22.19B rev (+48% YoY, +88% net income). Q3 guide $29.4B BEAT vs $28.5B cons. AI rev +200% Q3. BUT: management did NOT raise 2027 AI revenue guidance (prior: "in excess of $100B") → violent sell-off. Jun 3 AH: initial pop +6% → reversed -14% from $477 close during earnings call. Jun 4 intraday: $405.51–$496.02. Jun 5 pre-market: **$413.45**. Stock −13.3% from Jun 3 session close. L-letter DAMAGED (market punishing -14% = weak relative strength). Base DESTROYED (need new 3–4 week base from ~$405–415 support). Score reset: C:20 (Q2 beat) + A:est.10 + N:12 (Q3 AI growth 200%) + S:5 (float >500M) + L:5 (RS severely damaged, XLK #1 sector bonus applies but offset by -14% AH reaction) + I:7 + Base:0 = **est. 59–67/100** without base. With base (+10): **69–77/100** — borderline. Citi $500, Evercore $582 PTs (may be revised down). Re-score Jun 9 unchanged but **NO LONGER HIGH-PRIORITY** — must see price stabilization + base formation before entry planning. |

---

### Entry Execution Plan — Week of Jun 2-6

**Entry gate: ⛔ ZERO new long entries** (market = Uptrend Under Pressure; Alpaca Day 68; no FTD)

**FIRST order on Alpaca restore:** Buy SH (inverse S&P −1×) ~$625 / 25% portfolio (Under Pressure hedge protocol)

**FTD confirmation triggers this week:**

| Day | Gate | Bullish setup | Bearish scenario |
|---|---|---|---|
| Mon Jun 2 | APR 28 dist expiry | Dist count → 4/25; ISM Mfg 53.3 est (beat = FTD fuel) | ISM miss = potential dist day #5 (of new 25-session window) |
| Tue/Wed Jun 3 | AVBO earnings AH | Beat $2.40 EPS / $22.11B rev → potential FTD Jun 4 (+1.25%+ on vol) | Revenue miss → gap-down → dist day #6 risk → 🔴 Correction |
| Thu Jun 4 | Post-AVBO reaction | Power move session on AI confidence → FTD confirmation | Sell-the-news repeat (MRVL, NVDA pattern) → no FTD |
| Fri Jun 5 | **NFP** | Jobs +96K+ on lower unemployment → FTD possible | Sub-80K print → recession signal → dist day #6 → 🔴 Correction |

**If FTD confirmed:**
→ 🟢 Confirmed Uptrend → exit SH hedge → immediately re-score DELL (est. 84/100 with base) and NVDA (current 72/100 — still needs base) → if AVBO earnings beat confirmed + XLK sector bonus + base forming: AVBO re-score Jun 9 could be first entry → via `trade-executor`

**If dist day #6 hits:**
→ 🔴 Correction → no new longs → SH/SQQQ $625 hedge → full cash until next FTD

---

### Removed / Changed this week

| Symbol | Reason |
|---|---|
| GOOGL B3 | **REMOVED Jun 3 /pre-market.** $80B dilutive equity raise (announced Jun 1): $40B ATM + $30B underwritten + $10B Berkshire Hathaway @ $351.81/share. Breaks S-letter thesis (massive new share issuance = opposite of buyback narrative; $40B ATM = continuous selling pressure through Q3). Score revised 72→est. 65-70/100. Stock ~7-13% below $404 pivot and drifting further. XLC still #4 sector. No realistic re-entry path until post-dilution base forms + XLC returns to top-3. |
| GOOGL W1→B3 | Previously: **DEMOTED to Bench B3** from Primary (May 31). XLC sector demotion (#2 → #4) cut L-letter 15→10 → conviction score 77→72 (below threshold). Additionally: -2.51% on May 29 ATH market day = distribution signal. Then removed entirely on Jun 3 (equity raise). |
| NVDA B1 | Moved to B2. DELL added as B1 (closer to threshold, stronger C-letter EPS beat). |
| META B4 | Removed — price data conflict persists (search shows $280-320, prior watch showed $580-620). Cannot score reliably without Alpaca. Float 2.5B+ = S-letter structural headwind regardless. Re-evaluate only when Alpaca restores and confirms actual price. |

**Market-check:** 2026-06-10 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 86 | Perplexity 403 | AV 403) | **🔴 CORRECTION UNCHANGED — CPI +4.2% INLINE / CORE +0.2% MoM COOLER — S&P +0.51% ~7,421 DAY 3 RALLY INTACT — NOT FTD — TECH SELLING — ALPACA DAY 86 BLOCKED** | CPI: +4.2% YoY headline (inline) / Core +0.2% MoM (below +0.3% est — cooler) / Energy +23.5% Iran-driven / Shelter +0.3% (cooling) | S&P +0.51% ~7,421 — rally low 7,383.74 HOLDS ✅ (37 pts margin) | NVDA −1.4% / AVGO −3.9% / MU −3.5% (tech selling) | NOT FTD (threshold 7,458.53 — 37 pts short) | FTD window: Day 4 Jun 11 — Day 7 Jun 16 (FOMC ⚠️) | Dist: **6/25 UNCHANGED** (Jun 10 UP intraday = NOT dist day; confirm /eod-review) | May 7 expires TOMORROW Jun 11 → 5/25 (REMAINS CORRECTION) | 0 primary; 0 triggers | NVDA: right side deteriorating; base NOT complete → bench | DELL: continuing weakness → bench | AVGO: watch-only | Bench promotions: NONE | sell-rules-engine: SKIPPED (0 positions) | SH/SQQQ: QUEUED (blocked) | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | FOMC Jun 16-17 (6d) | /eod-review 3:15 PM CT
**Pre-market refresh:** 2026-06-10 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 86 | Perplexity 403 | AV 403) | **🔴 CORRECTION UNCHANGED — DAY 3 RALLY ATTEMPT — ES ~7,381.50 (−0.15%) ⚠️ NEAR RALLY LOW 7,383.74 — CPI NOT RELEASED (7:30 AM CT) BINARY EVENT — NVDA BASE NOT COMPLETE — DELL SILVER LAKE SELLING** | ES ~7,381.50 (−0.15%) / NQ ~28,913.75 (−0.70%) pre-mkt | CPI May 2026 consensus +4.2% YoY — NOT RELEASED YET; hot print = dist day risk + rally undercut | Rally attempt Day 3 | NVDA ~$205.83 AH (−1.13%); Apple AI via Google Cloud (indirect, muted); FORMAL BASE CHECK: NOT COMPLETE (right side reversed overnight, ~19 trading days, no handle, no pivot; est. mid-Jul; 72/100 unchanged) | DELL ~$370 AH (−4.1%; Silver Lake insider selling; no base; 74/100 unchanged; continuing weakness) | AVGO est. −1.75% (geopolitical headwinds; $35B Apollo/Blackstone AI platform long-term; 55/100 unchanged watch-only) | 0 ready; 0 primary; 2 bench (NVDA, DELL) + AVGO watch-only | sell-rules-engine: SKIPPED (0 positions) | SH/SQQQ: QUEUED (Alpaca Day 86 blocked) | May 7 dist expires TOMORROW Jun 11 → 5/25 (state REMAINS CORRECTION) | FTD window: Jun 12–15 | FOMC Jun 16–17 | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | /market-check 10:00 AM CT (CPI result + dist day check + rally low status)
**Pre-market refresh:** 2026-06-09 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 84 | Perplexity 403 | AV 403) | **🔴 CORRECTION UNCHANGED — DAY 2 RALLY ATTEMPT — ⚠️ JUN 8 CLOSE CORRECTION: S&P 7,405.73 (+0.30%, NOT ~7,452) — INTEL +11% AI CHIP ORDER — CPI TOMORROW JUN 10** | Jun 8 confirmed: S&P 7,405.73 (+0.30%) | Nasdaq 25,929.66 (+0.86%) | Dow 50,786.01 (−0.16%) | FTD gap revised: 52.8 pts short (not 6 pts) | FTD window: Jun 12–15 (Day 4–7) ✅ | Jun 9 pre-mkt: Intel INTC +11.2% (Alphabet AI chip order) → chip-led lift; SPY ~$739.22 (+0.23%); WTI ~$89.50 (Iran ceasefire, Strait still closed); Polymarket 89% open higher | ⚠️ CPI May 2026 TOMORROW Jun 10 @ 8:30 ET: forecast +4.2% YoY — BINARY (Hot = dist day risk + rally undercut) | NVDA ~$208–210 (+1.73%); SK Hynix + LG Group AI factory partnerships Jun 7/8 (N-letter positive); base check Jun 10; 72→82/100 with base; entries blocked by Correction | DELL ~$398–406; no new catalysts; no base; 74/100; entries blocked | AVGO ~$396–403 (+2.82% sector lift); 55/100 NOT ACTIONABLE; watch-only | 0 ready; 0 primary; 2 bench (NVDA, DELL) + AVGO watch-only | sell-rules-engine: SKIPPED (0 positions) | SH/SQQQ: QUEUED (FIRST order on Alpaca restore) | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | FOMC Jun 16-17 (7d) | 🚨 Alpaca Day 84 BLOCKED | /market-check 10:00 AM CT
**Pre-market refresh:** 2026-06-09 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 83 | Perplexity 403 | AV 403) | **⚠️ JUN 5 CLOSE CORRECTION: 7,383.74 (−2.64%), NOT 7,446.24 — CORRECTION STATE CONFIRMED | AVGO RE-SCORE 55/100 NOT ACTIONABLE | NVDA/LG PARTNERSHIP POS CATALYST | ES −0.31% NQ −0.88%** | AVGO re-score Jun 9 (blackout lifts): **55/100** — C:20 + A:8 + N:10 + S:5 + L:5 + I:7 + Base:0. Even with base (+10) = 65/100 < 75 threshold. NOT ACTIONABLE. Next trigger: new base complete + RS recovery (est. late Jun/early Jul). AVGO demoted to WATCH ONLY — no active bench position until score path to 75+ is plausible. | NVDA ~$207 est. (Jun 5 −6.2%); Jensen/LG partnership Jun 8 = positive N-letter; base check Jun 10; 72→82/100 with base; entries blocked by Correction | DELL ~$394 (Jun 5 −6.55%); no base; entries blocked | 0 ready; 0 primary; 2 bench (NVDA, DELL — AVGO moved to watch-only) | sell-rules-engine: SKIPPED (0 positions) | SH/SQQQ: QUEUED (FIRST order on Alpaca restore) | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | FOMC Jun 16-17 (7d) | 🚨 Alpaca Day 83 BLOCKED | /market-check 10:00 AM CT
**Market-check:** 2026-06-09 10:00 AM CT — `/market-check ACTUAL` | `research_source: websearch_fallback` (Alpaca Day 84 | Perplexity 403 | AV 403) | **🔴 CORRECTION UNCHANGED — DAY 2 RALLY ATTEMPT — NOT FTD (+0.63% < +1.25%) — NVDA BASE NOT COMPLETE — CPI TOMORROW** | S&P +0.63% intraday (Day 2; threshold 7,458.53 not reached; rally low 7,383.74 holds ✅) | Dist: **5/25 unchanged** (May 7, May 15, May 19, Jun 3, Jun 5) | May 7 expires Jun 11 → 4/25 (REMAINS CORRECTION until FTD) | FTD window: **Jun 12–15 (Day 4–7)** | NVDA ~$205.89-211.39 (cup base forming, right side early-stage, NOT complete; no pivot yet; base check Jun 10; 72→82/100 with base) | DELL ~$400.77 (range $385-406; no base; 74/100) | AVGO ~$396-403 (55/100 watch-only) | ⚠️ CPI TOMORROW Jun 10 8:30 AM ET: forecast +4.2% YoY / Core +2.9% — NO entries before data | FOMC Jun 16-17 (7d) | 0 primary; 0 triggers | Bench promotions: NONE | sell-rules-engine: SKIPPED (0 positions) | SH/SQQQ: QUEUED (Alpaca Day 84 blocked) | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | /eod-review 3:15 PM CT
**Market-check:** 2026-06-09 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 83 | Perplexity 403 | AV 403) | **🔴 CORRECTION UNCHANGED — DAY 2 RALLY ATTEMPT — JUN 8 FTD MISS (6 PTS SHORT) — ALL ABORT GATES FIRED** | Jun 8 confirmed: S&P +0.93% → ~7,452 (Day 1 rally attempt ✅); FTD threshold 7,458.53 — 6 pts short → NOT FTD | Jun 9: ES −0.31% / NQ −0.88% pre-mkt → Day 2, NOT FTD in progress | Dist: **5/25 unchanged** (May 7, May 15, May 19, Jun 3, Jun 5) | FTD window: **Jun 12–15 (Day 4–7)** | NVDA ~$206–210 (Jun 8 recovery; base check **tomorrow Jun 10**; 72/100 prov → 82/100 with base) | AVGO ~$385 (55/100 NOT ACTIONABLE; watch-only) | DELL ~$394–410 est. (no base; 74/100) | 0 primary items; 0 triggers | Bench promotions: NONE | sell-rules-engine: SKIPPED (0 positions) | SH/SQQQ: QUEUED (Alpaca Day 83 blocked) | FOMC Jun 16-17 (7d) | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | /eod-review 3:15 PM CT
**Market-check:** 2026-06-08 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 82 | Perplexity 403 | AV 403) | **⚠️ CRITICAL STATE CORRECTION: MARKET IN CORRECTION (NOT Confirmed Uptrend) — JUN 5 = DIST DAY #6 — FTD NEVER CONFIRMED — ALPACA DAY 82** | S&P Jun 5 actual close: ~7,536 (−0.63% from 7,584.31; not +1.5% ATH as logged) | NFP 172K (strong beat vs ~80K cons) → yields surged → tech selloff | Distribution: **6/25** (May 4, May 7, May 15, May 19, Jun 3, Jun 5) → **🔴 MARKET IN CORRECTION** | May 4 expires after today's close → 5/25 but state REMAINS CORRECTION | All long entries BLOCKED | SH/SQQQ hedge triggered (Correction protocol; $625 / 25% portfolio) but Alpaca Day 82 BLOCKED | Rally attempt: Jun 5 DOWN → not Day 1; if Jun 8 closes UP → Day 1 → FTD eligible Jun 12 earliest | AVGO ~$407–419 est. (post-crash; no base; entries blocked) | NVDA ~$213 est. (no base; check Jun 10; entries blocked) | DELL ~$407–435 est. (no base; entries blocked) | Bench promotions: NONE (entries blocked by Correction regardless) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | SH/SQQQ: QUEUED — FIRST ORDER on Alpaca restore | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 RESET | Equity: $2,500 (HWM) | /eod-review 3:15 PM CT
**Pre-market refresh:** 2026-06-08 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 81 | Perplexity 403 | AV 403) | **⚠️ NOTE: LOGGED AS CONFIRMED UPTREND — CORRECTED AT MARKET-CHECK (STATE = CORRECTION)** | Futures: NQ ~30,195 (−0.65%); ES flat/slight neg (no positive catalyst) | Iran WTI ~$101.67/Brent ~$107.50 (persistent inflation headwind; Strait of Hormuz disrupted; no resolution) | AVGO ~$415–420 est. (post-crash base forming $405–415; re-score Jun 9 — blackout lifts today; est. 65–72/100 without base → 69–77/100 with base; borderline; not high-priority until base confirmed) | NVDA ~$213–216 est. (range $210.97–$221.60 recent; base forming; check Jun 10; 72/100 prov. → 82/100 with base ✅) | DELL ~$400–440 est. (data inconsistent; UBS caution; no base; 74/100) | 0 ready; 0 primary; 3 bench | Bench promotions: NONE | 0 positions | sell-rules-engine: SKIPPED | SH/SQQQ hedge: ⚠️ SHOULD HAVE BEEN QUEUED (Correction state) — corrected at market-check | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 RESET | Equity: $2,500 (HWM) | 🚨 Alpaca Day 81 BLOCKED — CRITICAL RESTORE | /market-check 10:00 AM CT
**Market-check:** 2026-06-05 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 79 | Perplexity 403 | AV 403) | **NFP MAY BEAT — FTD TRACKING (threshold ~7,636 — in progress post-NFP surge) — NOT A DIST DAY** | S&P strongly up post-NFP beat; Yahoo Finance: "Dow, S&P 500 jump to records, Nasdaq surges" → end-of-day headline confirms large gains | FTD confirmation pending /eod-review (S&P ≥7,636 on above-avg vol) | Dist count: 5/25 unchanged | May 4 expires Jun 8 → 4/25 | If FTD confirmed: state → 🟢 Confirmed Uptrend effective Jun 8 | AVGO ~$407–415 (price discovery post -14% AH; re-score Jun 9 ~65–72/100 without base) | DELL ~$440–448 (74/100; no base; no change) | NVDA ~$220–222 (72/100; no base; no change) | Primary: 0 items; 0 triggers | Bench promotions: NONE | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | /eod-review 3:15 PM CT (FTD confirm + weekly-review 3:30 PM CT)
**Pre-market refresh:** 2026-06-05 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 78 | Perplexity 403 | AV 403) | **⚠️ AVGO CRASH CORRECTION: −14% AH (NOT +6%) → $413.45 Jun 5 pre-mkt (NOT $505–510) | NFP TODAY 7:30 AM CT BINARY EVENT | ES −0.55% NQ −1.33%** | AVGO score REVISED: est. 65–72/100 (L-letter damaged, base destroyed from ~$413 vs $477 pre-earnings close; re-score Jun 9 but high-priority status suspended until new base forms ~$405–415) | ADP data discrepancy: our log says 37K, WebSearch says 122K — uncertainty noted; NFP consensus 65K per tracked data | Iran Strait of Hormuz threat — WTI ~$92–96 elevated | ES −0.55%; NQ −1.33% (AVGO drag + NFP anxiety) | FTD threshold: ~7,636 (from Jun 4 close ~7,542) — needs 110K+ NFP + sustained buying | DELL est. ~$440–448 (74/100, no base, Morgan Stanley $448 equal weight; 🟡 BENCH unchanged) | NVDA est. ~$220–222 (72/100, base forming Jun 10; 🟡 BENCH unchanged) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | /market-check 10:00 AM CT (NFP result + dist day / FTD check + AVGO price discovery) | /weekly-review 3:30 PM CT today
**Market-check:** 2026-06-04 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 76 | Perplexity 403 | AV 403) | **ISM SERVICES MAY 54.5% BEAT (53.8% est.) — FTD NOT CONFIRMED — NFP CONS REVISED 65K TOMORROW — AVGO ~$505 NEW ATH** | S&P flat/slight neg Jun 4 (ES −0.14% pre-mkt; intraday unconfirmed — Alpaca blocked) | FTD NOT confirmed (need ~7,711 from ~7,615; gap ~96 pts; prob VERY LOW ~8-12%) | ISM Services **CONFIRMED 54.5% BEAT** — 23rd expansion month; New Orders 57.3%; Prices 71.3% (sticky) | Dist count: **4/25 UNCHANGED** (Jun 3 = NOT dist day ✅; Jun 4 TBD EOD — flat/slight neg) | **NFP CONSENSUS REVISED 65K** (from 96K; leading indicators 110-150K possible; sub-65K = dist #6 risk → 🔴 Correction; 65-110K = neutral/beat) | AVGO: $477.01 Jun 3 close → AH +6.03% → est. **$505-510 Jun 4 open** (new ATH) | DELL est. ~$440-448 (−4.63% Jun 2 from ~$466 ATH; no base; 74/100; 🔴 NO BASE) | NVDA ~$222-225 est. (base forming Jun 10; 72/100; 🔴 NO BASE) | Bench promotions: NONE (no defined pivots) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | /eod-review 3:15 PM CT (dist day check + NFP prep + AVGO Jun 4 close + Alpaca Day 76)
**Pre-market refresh:** 2026-06-04 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 75 | Perplexity 403 | AV 403) | **AVGO BEAT +6% AH — FTD NOT TRIGGERED — NFP TOMORROW JUN 5** | ES −0.14%; NQ −0.01% (AVGO beat did NOT power broad futures) | **FTD probability today: VERY LOW (~8-12%)** — need +1.39% intraday from ~7,615; no broad catalyst | **⚠️ NFP JUN 5 TOMORROW (7:30 AM CT): HIGHEST RISK** — ADP 37K miss + April 60K → sub-80K print risk = dist day #6 → 🔴 Correction | **AVGO CONFIRMED BEAT: EPS +1.49% surprise, Rev +0.52% surprise, stock +6.03% AH. AI semiconductor record. Post-earnings est. ~$473 (new ATH). Re-score Jun 9 → est. 77–82/100 with base + XLK #1 sector bonus. HIGH-PRIORITY target.** | NVDA $221.79 Jun 3 (range $220.80–$232.28; dividend ex-date today $0.25/sh; base forming est. Jun 10; 72/100 prov.; 🟡 BENCH unchanged) | DELL ~$456–461 est. (no new overnight news; no base; 74/100; 🟡 BENCH unchanged) | ISM Services May: UNCONFIRMED | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | /market-check 10:00 AM CT (ISM confirm + dist check + AVGO price discovery + NFP prep)
**Market-check:** 2026-06-03 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 73 | Perplexity 403 | AV 403) | **ADP MAY 37K (MASSIVE MISS vs 116K est; prior Apr revised 109K→60K) — MARKET RISING (RATE CUT BETS) — AVGO EARNINGS AH TONIGHT** | S&P UP (bad news = good news; Fed pivot narrative; exact level unconfirmed — Alpaca blocked) | **FTD NOT CONFIRMED** (threshold ~7,684 — gap ~80+ pts from ~7,589 Jun 2 close; today's +modest rally insufficient) | Dist count: **4/25 UNCHANGED** (Jun 2: −0.14%, below −0.20% threshold → NOT dist day; Jun 3: UP day → NOT dist day) | ISM Services May: PENDING (unconfirmed; Apr 53.6%; contraction risk flagged) | **⚠️ NFP JUN 5 RISK ELEVATED:** ADP 37K miss → NFP likely below 96K est → sub-80K print = recession signal + dist day #6 risk → 🔴 Correction | AVGO AH TONIGHT: beat = FTD candidate Jun 4; miss = dist day #6 risk | DELL ~$456 est. (ATH; no base; 74/100; 🔴 NO BASE) | NVDA ~$224 est. (base forming est. Jun 10; 72/100 prov. 75-77; 🔴 NO BASE) | AVGO ⛔ BLACKOUT (re-score Jun 9) | Bench promotions: NONE (no defined pivots) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | /eod-review 3:15 PM CT (confirm ISM Services result + dist day check + AVGO AH gap magnitude)
**Pre-market refresh:** 2026-06-03 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 72 | Perplexity 403 | AV 403) | **AVGO EARNINGS AH TONIGHT — GOOGL REMOVED — BENCH NOW 2 NAMES** | ES +0.31%; NQ +0.23% (modest positive) | ADP May releases 8:15 AM ET (April 109K, est. ~116K) | ISM Services May releases 10 AM ET (April 53.6%; contraction risk flagged by prediction markets) | **⚠️ GOOGL REMOVED from bench — $80B equity raise (Jun 1) is dilutive: $40B ATM + $30B underwritten + $10B Berkshire @ $351.81/sh. S-letter thesis broken. Score falls 72/100 → est. 65-70/100. Stock ~7-13% below $404 pivot and moving away. XLC still #4. See Research-Log.** | **AVGO: ⛔ BLACKOUT TONIGHT (Jun 3 AH)** — Consensus $2.40 EPS/$22.11B rev; beat = FTD Jun 4 candidate | DELL ~$430 est. (ATH; no base; 74/100; 🔴 NO BASE) | NVDA ~$219-223 est. (base forming est. Jun 10; 72/100; 🔴 NO BASE) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | FTD windows: Jun 4 (AVGO beat) + Jun 5 (NFP)
**Pre-market refresh:** 2026-06-02 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 69 | Perplexity 403 | AV 403) | **NEW WEEK JUN 2-6 — APR 28 DIST EXPIRES TODAY → 4/25 AFTER CLOSE** | ES −0.26%; NQ −0.54% (oil/yields rising); ISM Mfg PMI 10 AM ET (53.3 est.; S&P Global PMI 55.3 beat) | **⚠️ NVDA COMPUTEX (Jun 1 keynote): Vera CPU full production + RTX Spark AI PC chip + Vera Rubin platform — N-letter significantly strengthened; formal re-score pending Alpaca+AV restore + base (est. Jun 10)** | DELL ~$420.50 (May 31 close; no base; score 74/100; DELL listed as Vera CPU customer; UBS caution after near-double in 2026; 🔴 NO BASE — no entry possible) | NVDA ~$212.49 (May 31; Computex bullish; base forming est. Jun 10; 72/100; 🔴 NO BASE) | GOOGL ~$380 est. (base wk 12; XLC #4; 72/100; 🔴 SCORE BELOW THRESHOLD) | AVBO ⛔ BLACKOUT (earnings AH Jun 3) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 (RESET) | Equity: $2,500 (HWM) | FTD probability today: LOW (~8-12%)
**Market-check:** 2026-06-02 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 70 | Perplexity 403 | AV 403) | **ISM MFG PMI MAY 54% BEAT (53.3 est.) — highest since May 2022 — IRAN TALKS SUSPENDED — OIL +7-8%** | S&P ~7,579 (≈flat vs 7,580.06; NOT FTD; threshold ~7,674 — gap ~95 pts; prob LOW ~10-15%) | Dist day risk MODERATE ~20-25% (oil shock + S&P slightly negative) | APR 28 dist expiry: net outcome at close (no dist day → 4/25 ✅; new dist day → stays 5/25) | NVDA $219.67 (+4.04% Computex N-letter upgrade provisional 75-77/100; no base; 🔴 NO BASE) | DELL ATH ~$430.70 (Vera CPU customer confirmed; score 74/100; no base; 🔴 NO BASE) | GOOGL ~$376.34 (−1.05%; 6.8% below $404 pivot; score 72/100; widening from pivot; 🔴 SCORE BELOW THRESHOLD) | AVBO ⛔ BLACKOUT (earnings AH tomorrow Jun 3) | Bench promotions: NONE (no symbol within 2% of defined pivot) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | /eod-review 3:15 PM CT

---

## ⚠️ ARCHIVED — Week of 2026-05-26 to 2026-05-30 — rebuilt via /weekly-prep Sun May 31

> **Archived week of May 26–30.**

## ACTIVE — Week of 2026-05-26 to 2026-05-30

**Built:** 2026-05-24 (Sun) — `/weekly-prep` | `research_source: websearch_fallback` (Alpaca: 403 Day 54, Perplexity: 403, Alpha Vantage: 403 — all three primary sources blocked; all data via WebSearch + cached prior-week fundamentals)

**Market direction:** 🟡 Uptrend Under Pressure (5/25 dist days) | **NO NEW LONG ENTRIES** until FTD confirmed
**SPY:** ~$747 (May 22 est.) | 50d MA $689 (+8.4%) | 200d MA $676 (+10.5%)
**QQQ:** $716.97 | 50d SMA $638 (+12.4%) | 200d SMA $618 (+16.0%)

**Top sectors (4-week trailing RS, Apr 24 → May 22):**
1. XLI Industrials: ~+16% (VRT, AI power/cooling; RRG leading quadrant)
2. XLC Communication Services: ~+12-15% (GOOGL; AI cloud; RS 95+)
3. XLE Energy: ~+8-12% (Iran deal catalyst; Brent elevated)
4. ⚠️ XLK Technology: BLACKOUT — RRG lagging; sector_momentum_warning ongoing

**Blacklisted sectors:** None
**XLK status:** `sector_momentum_warning` → **blackout maintained** until RRG confirms leading/weakening quadrant

**Universe scan:** DEGRADED — Alpaca + AV both blocked; cannot run `build-universe.sh`. Curated universe of 8 names based on sector research.
**Candidates evaluated:** GOOGL, VRT, NVDA, AVGO, GE, META, DE, CCJ
**Pre-filters:** CAT ($931 > $500 price ceiling — disqualified), GE (float >800M + A-letter spin-off history), DE (lagging sector momentum)
**Passed conviction ≥75: 1** (GOOGL 77/100) | Entry gates passed: **0** (market Under Pressure)

> **⚠️ 7th consecutive week with only 1 candidate above conviction threshold.** Rubric is working. Do NOT lower thresholds. This is information: the universe is thin in a transitioning market.

---

## ⚠️ UNDER PRESSURE POSTURE — NO NEW LONG ENTRIES

**Entry gate:** ALL LONG ENTRIES BLOCKED (5/25 dist days → Under Pressure). Hedge SH/SQQQ $625 queued — FIRST ORDER on Alpaca restore.

**This week's inflection: FTD window is open (May 26–28).**
- If FTD confirmed → state flips to 🟢 Confirmed Uptrend → evaluate GOOGL immediately (base approaching wk 5)
- If no FTD by May 28 → rally attempt window closes; monitor SPY $733.39 Day 1 low for undercut
- If dist day #6 hits → 🔴 Correction again; no longs; full SH/SQQQ hedge

---

### Primary Watchlist (score ≥75 — watching for FTD confirmation + base completion)

| Rank | Symbol | Conviction | Sector | Base / Setup | Pivot | Stop if Entered | Earnings | Buy-Zone Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| W1 | GOOGL | **77/100** ✅ | XLC / Communication | ⏳ FORMING flat base ($387-403 zone; **wk 4-5** — need 1-2 more wks for validity) | ~$404 (est., upon base completion) | entry × 0.93 (~$375) | Q2 ~July 2026 (~42d) | 🟡 WATCHING — 3.8% below $404 pivot; entry requires FTD confirmed + base wk 5-7 + vol ≥+40% + Alpaca restored | **Lead candidate for NEXT Confirmed Uptrend.** C:20 (GAAP EPS +81% YoY; Cloud +63%; net income $62.6B), A:10 (2 of 3 yrs ≥25%; ROE 31.83%), N:15 (near 52wk high; Gemini AI; Pentagon; $70B buyback), S:10 (float 12B headwind; buyback active; vol in base declining=constructive), L:15 (RS 95+; XLC #2 sector), I:7 (65%+ inst, increasing). Base:0 (forming wk 4-5; need wk 5-7). Score would be **87/100** with confirmed base. `cached_fundamentals` `research_source: websearch_fallback`. **First order on Alpaca restore: SH hedge $625. Second: GOOGL entry on FTD+base.** |

---

### Bench (below threshold or blocked — watching for base/score improvement)

| Rank | Symbol | Score Est. | Sector | Status | Re-Score Trigger | Notes |
|---|---|---|---|---|---|---|
| B1 | NVDA | **~68/100** ⚠️ | XLK / Semis | 🟡 POST-EARNINGS consolidation wk 2 | Base completion (est. wk 4-6 from May 22) + Alpaca+AV restore | C:20 (+120% EPS YoY Q1 FY2027), A:15 (FY2024+FY2025+FY2026 all ≥25%), N:10 (near ATH but China H20 = zero permanently = no new market), S:5 (massive float; $80B buyback), L:10 (RS 90+; XLK sector NOT top-3 = no sector bonus), I:8, Base:0. Total ~68/100. With valid base (+10): **78/100** ✅ — passes. **China zero = permanent N-letter drag (-5pts vs prior).** Timeline: base formation est. wk 4-8 post-earnings (Jun 10-Jul 3 window). Entry pivot: TBD (depends on base shape). `research_source: websearch_fallback`. |
| B2 | VRT | **65/100** ❌ | XLI / Industrials | 🟡 Early pullback from ATH; no valid base yet | AV restore (GAAP A-letter +5pts) + base formation (+10pts) → est. 80/100 | C:20 (adj. EPS +83% YoY Q1; GAAP caveat), A:7 (GAAP annual unconfirmed; PE history; FY2023 data unavailable — `insufficient_data_flag`), N:12 (AI data center cooling DOMINANT; near ATH; IG credit inaugural), S:3 (float 380-400M; no confirmed buyback), L:15 (RS likely 90+; XLI #1 sector), I:8 (IG rating opens new institutional buyer universe). Base:0. Total 65/100. Path: GAAP confirmed (+5) + base confirmed (+10) = **80/100** ✅. Earnings: July 29 (66 days — clear). `cached_fundamentals: adj_eps_only` `insufficient_data_flag: gaap_annual_fy2023_fy2024`. |
| B3 | AVGO | **~63/100** ❌ | XLK / Technology | ⛔ **EARNINGS BLACKOUT ACTIVE** (starts May 28; June 3 = 4 trading days) | Post-June 3 earnings + XLK sector returns to top-3 + GAAP FY2023 revenue ≥25% confirmed | C:15 (AI revenue doubled YoY; GAAP EPS unconfirmed), A:10 (FY2023 revenue +8% BELOW 25% = A-letter structural fail; ROE saves +5), N:12 (near ATH; custom XPU AI chips; $73B backlog), S:5 (float >500M = 0; buyback est.), L:8 (RS strong but XLK sector #4 = no sector bonus), I:7, Base:10 (est. flat base). Score 63/100 — dual blockage: A-letter + XLK. **Earnings June 3: BLACKOUT starts May 28 (≤5 trading days).** Next re-score: week of June 9 post-earnings. Citi $500, Evercore $582 PT. `sector_momentum_warning`. |
| B4 | META | **~45-55/100** ❌ | XLC / Communication | 🟡 Base forming (est. wk 20+ from May 2025 ATH correction) | Base completion + price data confirmed (agent search shows ~$300-320; prior watchlist showed $580-620 — ⚠️ DATA CONFLICT. Do NOT score until Alpaca+AV restore resolves.) | ⚠️ **PRICE DATA CONFLICT**: Prior watchlist (May 17) estimated $580-620 (ABOVE $500 price ceiling = would disqualify). New websearch shows $280-320 range. Conflict too large (>$200). HOLD VIA WATCHLIST — FULL RE-SCORE REQUIRED when Alpaca+AV restore to confirm actual price. If >$500: disqualified. If <$500: re-score. Do NOT enter on uncertain data. Float 2.5B+ = S-letter headwind regardless. |

---

**Market-check:** 2026-05-29 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 66 | Perplexity 403 | AV 403) | **END OF WEEK — NO FTD — UNDER PRESSURE HOLDS** | S&P ~7,576 (+0.16% from 7,563.63; late FTD threshold 7,658.67 — gap ~83 pts; NOT in progress; grinding day) | Dist count: **5/25 UNCHANGED** (UP day) | State: 🟡 Under Pressure — NO CHANGE | Late FTD probability: VERY LOW (~5-10%) | Iran deal: JD Vance "not there yet, but very close" — not signed | **Apr 28 dist day expires Jun 2-3 (Mon/Tue) → dist count drops to 4/25 → key milestone for Confirmed Uptrend upgrade path** | GOOGL range $385.16-$391.87 (~3.3-3.5% below $404 pivot; base wk 11 intact; 🟡 WATCHING unchanged) | VRT gapping UP on DELL AI beat (no pivot; score 65/100; 🟡 BENCH thesis ↑↑) | NVDA ~$212 (XLK blackout; 🟡 BENCH unchanged) | AVGO ⛔ BLACKOUT (June 3) | Bench: no promotions (GOOGL 3.3-3.5% below pivot, not within 2%) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | /weekly-review 3:30 PM CT today
**Pre-market refresh:** 2026-05-29 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 65 | Perplexity 403 | AV 403) | **FTD WINDOW EXPIRED — END OF WEEK** | ES ~flat (+0.02%); NQ ~flat (−0.04% to +0.07%) | **DELL Q1 FY2027 AH MASSIVE BEAT: Rev $43.84B (+88% YoY), AI-Optimized Servers $16.1B (+757% YoY), EPS $4.86 vs $2.94 est, FY2027 guide $165-169B → DELL +40% pre-mkt** = AI infra mega-signal DIRECTLY bullish for VRT thesis | **COST Q3 AH beat**: sales +11.6%, comp +9.8%, consumer health ✅ | **⚠️ PCE DATA CORRECTION: Core PCE actual 3.3% YoY (prior entry said 2.8%) — confirmed via CNBC; headline 3.8% YoY** | GOOGL $390.13 close May 28 (+0.33%); ~3.5% below $404 pivot; base wk 10-11; 65 analysts Strong Buy avg PT $429.12; no new negatives; 🟡 WATCHING unchanged | VRT $312.29 close May 28 (−17.7% from ATH); pre-mkt gapping UP on DELL; score 65/100 unchanged; thesis ↑; 🟡 BENCH | NVDA $212.58 close; vol 37% avg; XLK blackout; 🟡 BENCH unchanged | AVGO ⛔ BLACKOUT (June 3 earnings — 3 trading days) | Late FTD scenario today: S&P ≥7,658 on above-avg vol (LOW prob ~15% — ES flat) | Apr 28 dist day expires Jun 2-3 → dist count 4/25 → Confirmed Uptrend pathway open | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM) | /weekly-review at 3:30 PM CT
**Market-check:** 2026-05-28 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 63 | Perplexity 403 | AV 403) | **FTD DAY 7 NOT CONFIRMED — WINDOW CLOSES TODAY** | S&P ~7,503 (−0.23% from 7,520.36; threshold 7,614 — gap ~111 pts; FTD impossible, market DOWN) | **⚠️ DIST DAY #6 RISK ELEVATED** — S&P −0.23% > −0.20% ✅; vol estimated elevated (PCE hot + New Home Sales miss 622K vs 665K est.); /eod-review must confirm → if confirmed: 🔴 Correction state change | Rally attempt Day 7 INTACT (SPY >> $733.39 Day 1 low); FTD window expires after close; state stays 🟡 Under Pressure unless dist day #6 fires | GOOGL est. ~$381-384 (5-5.5% below $404 pivot; base wk 9; 🟡 WATCHING unchanged) | VRT est. ~$324-330 (score 65/100; 🟡 BENCH unchanged) | NVDA est. ~$211-215 (score ~68/100; 🟡 BENCH unchanged) | AVGO ⛔ BLACKOUT | Bench: no promotions (no symbol within 2% of defined pivot) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM)
**Pre-market refresh:** 2026-05-28 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 63 | Perplexity 403 | AV 403) | **FTD DAY 7 — FINAL CHANCE — LOW PROBABILITY (~15-20%)** | ES ~7,542 (+0.29% vs 7,520.36; FTD threshold 7,614 — gap 72 pts; needs +0.96% additional) | **PCE April HOT: Core 2.8% YoY (+0.4% MoM) vs 2.7% est — rate hike narrative building, bond yield spike = FTD headwind** | MRVL beat ($0.80/$2.418B/Q2 +35% YoY) BUT -7.3% AH (sell-the-news = semis drag) | CRM beat but FY27 guide slightly light, flat AH (neutral) | **AVGO: ⛔ EARNINGS BLACKOUT STARTS TODAY** (June 3 = 4 trading days) | GOOGL ~$383.79 pre-mkt (-0.27%; ~5.0-5.5% below $404 pivot; base wk 9 forming; moved away from pivot; 🟡 WATCHING unchanged) | VRT ~$328-332 est. (no new catalysts; score 65/100; 🟡 BENCH unchanged) | NVDA ~$213-215 est. (🟡 BENCH unchanged) | **Dist day #6 risk MODERATE-ELEVATED (~30-35%)** if session closes ≤-0.2% on vol → 🔴 Correction | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM)
**Market-check:** 2026-05-27 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 61 | Perplexity 403 | AV 403) | **FTD DAY 6 NOT CONFIRMED — DUAL FAILURE** | S&P 7,546 (+0.36% vs 7,519.13; threshold 7,613 — gap 67 pts); SPY volume ~21.88M vs 48.11M avg = 45% avg (far below) | Rally attempt Day 6 INTACT (SPY >> $733.39 Day 1 low) | Dist count 5/25 UNCHANGED (UP day) | State: 🟡 Under Pressure — NO CHANGE | **FTD Day 7 TOMORROW MAY 28 = FINAL CHANCE** (PCE April 7:30 AM CT; New Home Sales April 10 AM ET [delayed from today]; COST+DELL AH; MRVL/CRM AH tonight as overnight gap fuel) | **AVGO blackout starts TOMORROW May 28** (already bench-only; no action) | GOOGL ~$388.88 (base wk 8-9; ~3.8% below $404 pivot; vol below avg; 🟡 WATCHING unchanged) | VRT $328.92 (score 65/100; 🟡 BENCH unchanged) | NVDA $213.95 (range $212-$218; 🟡 BENCH unchanged) | Bench: no promotions (no symbol within 2% of pivot) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM)
**Pre-market refresh:** 2026-05-27 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 61 | Perplexity 403 | AV 403) | **FTD DAY 6** | ES 7,564.75 (+0.37%); NQ +0.49–1.03% est. | Polymarket 61% higher | Iran deal NOT signed ("close to finalizing") | **MU (Micron) +18% May 26, +5% premarket — $23.9B rev (+196% YoY), EPS $12.07 (+756%), UBS PT $1,625 — MASSIVE semis tailwind; NOT tradeable (>$500; climax top)** | GOOGL ~$388-392 est. (May 26 close $388.76; EU DMA fine risk; base wk 8; ~3.7% below $404 pivot; 🟡 WATCHING unchanged) | VRT ~$327-335 est. (no new catalysts; score 65/100; 🟡 WATCHING unchanged) | NVDA ~$214 AH (−$1.03; bench unchanged) | MRVL+CRM earnings AH tonight → potential May 28 Day 7 FTD fuel | New Home Sales 10 AM ET today | **FTD Day 6 probability: MODERATE-LOW (~30-40%)** | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM)
**EOD-review:** 2026-05-26 3:15 PM CT — `/eod-review` | `research_source: websearch_fallback` (Alpaca Day 60 | Perplexity 403 | AV 403) | **FTD DAY 5 NOT CONFIRMED** | S&P 7,519.13 (+0.61%) NEW RECORD — 47.61 pts short of 7,566.74 FTD threshold | Nasdaq 26,656.18 (+1.17%) | RUT +1.77% | Rally attempt Day 5 INTACT | 0 dist days (UP day) | dist count 5/25 UNCHANGED | State: 🟡 Under Pressure — NO CHANGE | FTD window: **Day 6 May 27 + Day 7 May 28 (LAST)** | GOOGL est. ~$386 (mkt cap ~$4.70T; 🟡 WATCHING; base wk 7-8; ~4.4% below $404 pivot) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | Equity: $2,500 (HWM)
**Market-check:** 2026-05-26 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 59 | Perplexity 403 | AV 403) | **FTD DAY 5 — NOT YET CONFIRMED** | S&P 7,522.60 (+0.66%) at 11 AM ET vs FTD threshold 7,566.74 (gap: 44 pts) | SPY $749.15–$752.13 | **CB Consumer Confidence 93.1 vs 92.0 est → BEAT ✅** | Iran deal NOT signed ("proceeding nicely") | Oil WTI ~$91 (−5%+) | GOOGL $378–385 range (weak; 5–6% below pivot; 🟡 WATCHING unchanged) | VRT ~$328–332 est. (🟡 WATCHING unchanged; score 65/100) | NVDA ~$217 est. (🟡 BENCH unchanged; score ~68/100) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Both abort gates active (Under Pressure + Alpaca Day 59) | Circuit breakers: ALL CLEAR | Weekly trades: 0/3 | FTD window: May 27 (Day 6) + May 28 (Day 7) still open if today falls short
**Pre-market refresh:** 2026-05-26 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 58 | Perplexity 403 | AV 403) | **FTD DAY 5** | ES +0.54% (~7,513); NQ +0.98% (~29,824) | Polymarket 91% prob open higher | Oil WTI −5%+ on Iran talks "proceeding nicely" (Trump) | Iran deal NOT signed — new attacks adding strain | CB Consumer Confidence releases 10 AM ET today (KEY gate) | Kevin Warsh takes Fed Chair oath today | **FTD Day 5 probability: MODERATE (~55-65%)** ← reduced from VERY HIGH (deal not signed + new attacks + futures +0.54% vs +1.25% FTD threshold) | GOOGL ~$389-392 est. (~3-4% below $404 pivot; Apple/Gemini N-letter catalyst; Waymo freeze minor; 🟡 WATCHING) | VRT ~$328-332 est. (no new catalysts; score 65/100; 🟡 WATCHING) | NVDA ~$217 est. (China $200B market aspirational; score ~68/100; 🟡 BENCH) | 0 positions | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: ALL CLEAR | Weekly trades: 0/3
**Market-check:** 2026-05-25 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` (Alpaca Day 56 | Perplexity 403 | AV 403) | **MEMORIAL DAY — market CLOSED** | **INTELLIGENCE UPDATE:** S&P perpetual futures hit ATH on Hyperliquid; Iran deal "largely negotiated" but NOT signed; Brent ~$103.54 / WTI ~$96.60 (falling); FTD Day 5 probability RAISED → **HIGH (~70-80%)** for Tuesday | FTD threshold: S&P 7,566.74 / SPY ~$756.34 | CB Consumer Confidence Tue 10 AM ET = key gate | GOOGL $382.97 (base wk 7; ~5% below pivot; antitrust appeal filed — no new negative; 🟡 WATCHING) | VRT $327.46 (score 65/100 unchanged; 🟡 WATCHING) | NVDA $214.28 (score ~68/100; 🟡 BENCH) | 0 positions | Actions: NONE | Abort gates: ALL fired (market closed + Under Pressure + Alpaca Day 56)
**Pre-market refresh:** 2026-05-25 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 55 | Perplexity 403 | AV 403) | **MEMORIAL DAY — market CLOSED** | Iran deal "largely negotiated" (Trump Sat May 23); Axios: 60-day ceasefire MOU, Strait of Hormuz reopening — NOT YET SIGNED | ES futures +0.35% / NQ +0.42% | FTD Day 5 probability MODERATE-HIGH (~60-70%) for Tuesday | CB Consumer Confidence Tue 10 AM ET = key catalyst | GOOGL ~$383-390 est. (−4 to −5% below $403-405 pivot; base wk 6-7; 🟡 WATCHING) | VRT $327.46 (investor conference: rev guidance raised $13.5-14B FY2026; Roth $355 PT; score 65/100 unchanged; 🟡 WATCHING) | NVDA $214.28 (consolidation wk 3; score ~68/100; 🟡 BENCH) | 0 positions | Weekly trade count RESET: 0/3

---

### Entry Execution Plan — Week of May 26-30

**Entry gate: ⛔ ZERO new long entries** (market = Uptrend Under Pressure; Alpaca Day 55)

**FIRST order on Alpaca restore:** Buy SH (inverse S&P −1×) ~$625 / 25% portfolio (Under Pressure hedge protocol)
- SH preferred over SQQQ (lower leverage decay for account size)
- Sizing: $625 / SH current price (est. ~$16-18 range)

**FTD confirmation triggers this week:**

| Day | Gate | Bullish setup | Bearish scenario |
|---|---|---|---|
| Tue May 26 | **FTD Day 5** | Iran deal announcement → gap-up open ≥+1.25% on above-avg vol = **FTD confirmed** | No deal; flat-to-down = Day 5 not confirmed; window continues |
| Wed May 27 | **FTD Day 6** | MRVL/CRM earnings beat + general momentum ≥+1.25% on vol | Earnings miss = dist day risk (would be #6 → Correction) |
| Thu May 28 | **FTD Day 7 (LAST)** | PCE April soft → rate cut signals = FTD fuel | Hot PCE = dist day risk #6; AVGO blackout starts |
| Fri May 29 | Window closes | If no FTD: rally attempt remains alive but watch for $733.39 SPY undercut | SPY closes below $733.39 = rally attempt reset |

**If FTD confirmed this week:**
→ State flips to 🟢 Confirmed Uptrend → Execute SH sell (hedge off) → Immediately evaluate GOOGL (base wk 5 = potentially valid flat base, min 5wk) → Re-score GOOGL with base data → If base confirmed + vol +40% + Alpaca restored → enter GOOGL via `trade-executor`

**If dist day #6 hits this week:**
→ 🔴 Market in Correction → No new longs → SH/SQQQ hedge highest priority → Cash preservation → Wait for new rally attempt + FTD

---

### Removed this week

| Symbol | Reason |
|---|---|
| GE (GE Aerospace) | **Evaluated new; rejected.** Score ~43/100. A-letter: GE Aerospace spun off April 2024 — insufficient 3-year standalone GAAP history. Float ~860M shares (>500M = S-letter headwind). Score fails threshold even in best case. Fundamental story (orders +87%, revenue +25%) is strong but CAN SLIM rubric requires history. Re-evaluate after FY2026 full year report (est. Jan 2027) when 3-year track record exists. |
| CAT (Caterpillar) | **DISQUALIFIED** — price $931 > $500 ceiling per TRADING-STRATEGY.md. Same rule as GS, GEV. |
| DE (Deere) | **Sector laggard** — only +41% vs CAT +93% last 12 months; no CAN SLIM breakout setup. |
| CCJ (Cameco) | **Rejected** — uranium mining cyclical. Not a CAN SLIM growth-earnings story. |

---

## ⚠️ ARCHIVED — Week of 2026-05-18 to 2026-05-22

> **Archived week of May 18–22 — rebuild via /weekly-prep on Sunday May 25 (or Tue May 27 if pre-market May 26 triggers FTD).**

**Market-check:** 2026-05-22 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` | Alpaca Day 52 blocked | **All entry gates blocked (Under Pressure + Alpaca)** | S&P ~flat/+0.07% (SPY $737.03–$744.87); Dow 300+ pts NEW RECORD; Nasdaq +0.53%; Russell 2000 +0.93% | FTD Day 4 NOT confirmed (magnitude+volume both fail; short of +1.25% threshold) | Rally attempt INTACT (SPY low $737.03 > Day 1 low $733.39) | FTD window: May 26 (D5), May 27 (D6), May 28 (D7) | Dist count: 5/25 UNCHANGED (UP day) | GOOGL $387.66 (3.8% below pivot; 🟡 WATCHING unchanged) | VRT $323-331 (no pivot; 🟡 WATCHING unchanged) | NVDA ~$219-222 (no base; 🟡 BENCH unchanged) | 0 positions | Sell-rules-engine: SKIPPED | Actions: NONE
**Pre-market refresh:** 2026-05-22 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 52 | Perplexity 403 | AV 403) | **All entry gates blocked (Under Pressure)** | ⚠️ DATA CORRECTION: May 21 actual S&P +0.17% to 7,445.72 (vs est. −0.44%/~7,400) — NOT a dist day; SPY actual ~$744.57 | ⚠️ STATE CORRECTION: 🔴 Correction → 🟡 Under Pressure (5/25 dist days; Apr 23 removed) | U of Michigan final May: ~48.2 (near record low; bearish consumer) | ES futures: ~7,410 (−0.47%) — NO FTD setup today | FTD probability today: LOW | FTD window: May 26 (D5), May 27 (D6), May 28 (D7) | GOOGL ~$387-388 (−4.0% below pivot; Waymo minor; dividend $0.22 June 8; 🟡 WATCHING) | VRT ~$323-331 (no news; 🟡 WATCHING) | NVDA pre-mkt $229.72 (vol 2.3× avg; constructive; 🟡 BENCH) | 0 positions | Actions: NONE
**Market-check:** 2026-05-21 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` | Alpaca Day 50 blocked | **All entry gates blocked (Correction + Alpaca)** | S&P est. −0.36% (~7,406) / SPY est. −0.24% (~$741.20) | Oil WTI ~$101 (↑ from $96 — Iran Supreme Leader hardline on enriched uranium; FTD probability REDUCED) | WMT −7.11% (weak Q2 guidance — CAUTIONARY consumer signal; consumer defensive −2.3%) | Dist day #7 risk at close | Rally attempt Day 3 intact (SPY ~$741 >> $733.39 Day 1 low) | FTD window opens tomorrow May 22 (Day 4) | GOOGL $387.39 (4% below pivot; vol +17% — no trigger; 🟡 WATCHING unchanged) | VRT $324.21 (formal score pending; 🟡 WATCHING unchanged) | No bench promotions | 0 positions | Actions: NONE
**Pre-market refresh:** 2026-05-21 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 50 | Perplexity 403 | AV 403) | **All entry gates blocked (Correction)** | DATA CORRECTION: May 20 actual S&P +1.08% to 7,432.97 (vs est. +0.32%) | NVDA Q1 BEAT ($81.6B rev, EPS $1.87, Q2 guide $91B excl. China) — stock MUTED (sell-the-news $216-227) | WMT beat EPS/thin rev miss — consumer positive | Oil WTI −5.66% (~$96) on Iran "final stages" | Rally attempt Day 3 | FTD window: May 22 (Day 4) first opportunity | GOOGL ~$387 (4% below pivot, WATCHING) | VRT ~$324 (flat, WATCHING) | 0 positions | Hedge SH $625 queued
**Market-check:** 2026-05-20 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` | Alpaca Day 49 blocked | **All entry gates blocked (Correction)** | S&P +0.32% est. (actual +1.08% per /pre-market May 21 correction) / Nasdaq +0.55% est. / Russell 2000 −1.01% | Rally attempt Day 2 | NVDA earnings AH tonight (binary FTD catalyst) | GOOGL $388.85 (−2.04%, 3.6% below pivot, WATCHING unchanged) | NVDA BLACKOUT ($220.61) | VRT conf Day 2 ongoing | No promotions/demotions | 0 positions | Hedge SH $625 queued (Alpaca blocked)
**Pre-market refresh:** 2026-05-20 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 49 | Perplexity 403 | AV 403) | **All entry gates blocked (Correction)**
**Market-check:** 2026-05-19 10:00 AM CT — `/market-check` | `research_source: websearch_fallback` | Alpaca Day 47 blocked | **All entry gates blocked (Under Pressure)**
**Pre-market refresh:** 2026-05-19 6:00 AM CT — `/pre-market` | `research_source: websearch_fallback` (Alpaca Day 47 | Perplexity 403 | AV 403)
**May 18 confirmed:** S&P 7,403.05 (−0.07%) | SPY low $734.23 < May 15 low $737.96 → rally attempt RESET. New Day 1 = May 18. FTD window = May 21, 22, 26, 27. Dist day #6 NOT triggered (volume 19.3M vs 48.93M avg). Dist count: **5/25 unchanged.**
**Futures:** ES −0.41%, NQ −0.30%. Crude oil higher (Iran stalled). QQQ pre-market ~$700. Dist day #6 risk if S&P closes ≥−0.20% on above-avg volume today.
**Buy-zone updates (pre-market May 22):**
- GOOGL: ~$387-388 pre-market. Distance from $403-405 pivot: ~−4.0%. Overnight: Waymo paused Atlanta/San Antonio (minor, weather/not thesis-breaking). Dividend $0.22 (ex-June 8, routine). Base wk 6 forming (constructive). No new antitrust news. Status: 🟡 WATCHING — no change from May 21.
- NVDA: $229.72 pre-market (vol 10.4M = 2.3× 30d avg). Constructive drift post-earnings. China H20 = confirmed zero unchanged. No new base formed. Score est. 72-82/100 pending live data. Status: 🟡 BENCH WATCH — needs base + FTD + Alpaca restore.
- VRT: ~$323-331 (stable, no new news). Q1 story intact. `insufficient_data_flag` unchanged. Status: 🟡 WATCHING — formal score pending Alpaca+AV restore.
**Buy-zone updates (pre-market May 21):**
- GOOGL: ~$387-388 pre-market. Distance from $403-405 pivot: ~−4.0%. Google I/O concluded — BofA Buy/$430 PT reaffirmed; no negative catalysts. Base: wk 5 of 3-5 forming (constructive). Antitrust: no new developments. Status: 🟡 WATCHING — below pivot; no buy trigger; Correction blocks all entries. Entry requires: FTD confirmation + base completion at ~$403-405 + volume ≥+40% + Alpaca restored.
- NVDA: **POST-EARNINGS RE-SCORE.** Q1 FY2027: $81.6B rev (+85% YoY), EPS $1.87, Data Center $75.2B (+92%). Q2 guide $91.0B ±2% excl. China (vs $87.3B cons.). China H20 = CONFIRMED ZERO (permanent export restriction). Stock reaction: MUTED $216-227 range (sell-the-news; 4 of last 5 post-earnings sessions closed lower). Score re-estimate: C:20 (massive beat), A:est.15, N:est.10 (near ATH but China = zero kills N catalyst), S:est.10, L:est.10 (muted reaction), I:est.7, Base:? = est. **72-82/100 (needs live data confirmation)**. Pivot: needs new base to form post-earnings consolidation. Status: 🟡 WATCH — full canslim-screener re-score required when Alpaca + AV restore. Entry requires FTD + new base + score ≥75.
- VRT: ~$324 overnight (flat; no formal guidance from investor conference). `insufficient_data_flag` unchanged. Status: 🟡 WATCHING — formal score pending.
**Buy-zone updates (pre-market May 20):**
- GOOGL: ~$386-388 pre-market (range $386.12-$401.50 on May 20). Distance from $403-405 pivot: ~−3.9 to −4.2%. Google I/O Day 2 underway (technology-focused presentations, Gemini 3, AI-Android 17). BofA Buy/$430 PT reaffirmed. N-letter strengthening. Base: wk 4 of 3-5 forming. Status: 🟡 WATCHING — below pivot; no buy trigger; Correction blocks all entries.
- NVDA: **EARNINGS AH TONIGHT.** $1.78 EPS / $79.2B revenue consensus (+120%/+79.5% YoY). 90% Polymarket beat probability. Blackwell ramping faster than expected. China: H20 restricted (zero market share). Binary FTD catalyst. Status: ⛔ BLACKOUT — re-score /pre-market May 21.
- VRT: Investor conference Day 2 today (technology presentations 8 AM ET). Conference may provide FY2026 guidance/GAAP clarity needed for A-letter. Stock ~$335-370 est. Status: 🟡 WATCHING — conference ongoing; formal score pending; no entry (Correction + Alpaca blocked).
**Buy-zone updates (pre-market May 19):**
- GOOGL: $396.94 pre-market → **$398.80 at 10 AM CT** (11 AM ET). Distance from $403-405 pivot: ~−1.0 to −1.5%. Google I/O Day 1 underway (AI product announcements). Mizuho raised PT to $460. N-letter intact/strengthening. Base: wk 3 of 3-5 still forming. Status: 🟡 WATCHING — below pivot; no volume trigger; entry gated by Under Pressure + incomplete base + Alpaca blocked.
- NVDA: EARNINGS BLACKOUT through May 20 AH. Pre-market: +$4.71 (~$230, at/near ATH). Earnings tomorrow: $1.78 EPS / $79.2B rev est. (+120%/+79.5% YoY). H200 China: US has export licenses; China has NOT approved imports. Re-score May 21 /pre-market.
- VRT: **INVESTOR CONFERENCE today (May 19-20, Greenville SC) — starts 2:30 PM ET.** Management strategic updates + financial outlook. May provide GAAP FY2023 clarity for formal score. Stock ~$335-370 range. AI data center thesis intact (+115% YTD). Status: 🟡 WATCHING — conference catalyst; formal score pending.

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
| B1 | NVDA | **est. 72-82/100** ⚠️ | XLK / Semis | 🟡 POST-EARNINGS — partial re-score complete; full score pending Alpaca+AV restore | Alpaca + AV restore for live bars/fundamentals | **POST-EARNINGS RE-SCORE (May 21 /pre-market, websearch_fallback):** Q1 FY2027: Revenue $81.6B (+85% YoY) vs $79.2B cons. ✅, EPS $1.87 non-GAAP vs $1.78 cons. ✅, Data Center $75.2B (+92% YoY) RECORD ✅, Q2 guide $91.0B ±2% excl. China vs $87.3B cons. ✅. Shareholder returns: $80B additional buyback + dividend $0.01→$0.25 (25×). **China H20: CONFIRMED ZERO — permanent US export restriction (not temporary).** Stock reaction: MUTED $216-227 range May 21 (sell-the-news; NVDA closed lower 4 of last 5 post-earnings sessions). Score provisional: C:20 (massive EPS beat), A:est.15, N:est.10 (near ATH but China zero = no new market expansion), S:est.10, L:est.8-10 (muted post-earnings reaction is weak L signal), I:est.7, Base:0 (no new base post-earnings consolidation yet). Total est. **72-82/100** — range due to websearch_fallback data uncertainty. **China zero = permanent negative** for N-letter (no new market = -5pts). Needs: (1) new base to form (est. 2-4 weeks), (2) Alpaca+AV live confirmation, (3) FTD market recovery. Entry pivot: TBD (base must form first). `research_source: websearch_fallback`. |
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

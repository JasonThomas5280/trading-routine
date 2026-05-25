# Watchlist

Rebuilt every Sunday by `/weekly-prep`. Refreshed each morning by `/pre-market`. Primary input to `/market-check` execution decisions.

**Format:** Ranked by conviction score descending. Top 8 candidates max (4 positions + 4 bench).

---

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
| B3 | AVGO | **~63/100** ❌ | XLK / Technology | 🔴 A-letter fail + XLK sector blackout + **⚠️ EARNINGS BLACKOUT STARTS MAY 28** | XLK sector returns to top-3 + GAAP FY2023 revenue ≥25% confirmed + post-June 3 earnings | C:15 (AI revenue doubled YoY; GAAP EPS unconfirmed), A:10 (FY2023 revenue +8% BELOW 25% = A-letter structural fail; ROE saves +5), N:12 (near ATH; custom XPU AI chips; $73B backlog), S:5 (float >500M = 0; buyback est.), L:8 (RS strong but XLK sector #4 = no sector bonus), I:7, Base:10 (est. flat base). Score 63/100 — dual blockage: A-letter + XLK. **Earnings June 3: BLACKOUT starts May 28 (≤5 trading days).** Next re-score: week of June 9 post-earnings. Citi $500, Evercore $582 PT. `sector_momentum_warning`. |
| B4 | META | **~45-55/100** ❌ | XLC / Communication | 🟡 Base forming (est. wk 20+ from May 2025 ATH correction) | Base completion + price data confirmed (agent search shows ~$300-320; prior watchlist showed $580-620 — ⚠️ DATA CONFLICT. Do NOT score until Alpaca+AV restore resolves.) | ⚠️ **PRICE DATA CONFLICT**: Prior watchlist (May 17) estimated $580-620 (ABOVE $500 price ceiling = would disqualify). New websearch shows $280-320 range. Conflict too large (>$200). HOLD VIA WATCHLIST — FULL RE-SCORE REQUIRED when Alpaca+AV restore to confirm actual price. If >$500: disqualified. If <$500: re-score. Do NOT enter on uncertain data. Float 2.5B+ = S-letter headwind regardless. |

---

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

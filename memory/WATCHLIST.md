# Watchlist

Rebuilt every Sunday by `/weekly-prep`. Refreshed each morning by `/pre-market`. Primary input to `/market-check` execution decisions.

**Format:** Ranked by conviction score descending. Top 8 candidates max (4 positions + 4 bench).

---

## ⚠️ ARCHIVED — Week of 2026-06-15 to 2026-06-19 — **STALE — rebuilt Jun 21 /weekly-prep**

> Archived week of Jun 15–19. Market state: 🔴 Correction (7/25 dist days). Zero primary candidates. NVDA 68/100 (bench, no base, Aug 2026+ base timeline), DELL 55/100 (watch-only), AVGO 55/100 (watch-only). FTD Day 7 = Jun 22 Mon (LAST WINDOW; threshold 7,594). Full rebuild completed Sun Jun 21.

---

## ⚠️ ARCHIVED — Week of 2026-06-22 to 2026-06-26 — **STALE — rebuilt Sun Jun 29 /weekly-prep**

> Archived week of Jun 22–26. Market state: 🔴 Correction (6/25 dist days). Zero primary candidates. FTD window CLOSED (Day 7 failed Jun 22; next FTD requires new Day 1 below 7,266.99). NVDA 68–70/100 (bench, cup wk 16, no handle, −8% wk, Aug 2026+ timeline), MRVL 71/100 (bench, no base, CFO selling), LRCX 67/100 (bench), ARM 60/100 (below threshold). SH $625 hedge QUEUED (Alpaca Day 111 BLOCKED). Rebuilt Sun Jun 29.

---

## ⚠️ ARCHIVED — Week of 2026-06-30 to 2026-07-03 — **STALE — rebuilt Jul 5 /weekly-prep**

> Archived week of Jun 30–Jul 3. Market state: 🔴 Correction (6/25 dist days). Zero primary candidates. MRVL 74-76/100 (bench, V-recovery thesis INVALIDATED Jul 2 — broke $252 support), LRCX 72-75/100 (REMOVED — -18.9% in 2 days + triple insider selling + earnings blackout Jul 22), NVDA 69-70/100 (bench, cup wk 19-20), ARM 60/100 (below threshold). SH $625 hedge QUEUED (Alpaca Day 122 BLOCKED). Rebuilt Sun Jul 5.

---

## ACTIVE — Week of 2026-07-06 to 2026-07-10

**Built:** 2026-07-05 (Sun) — `/weekly-prep` 4:00 PM CT | `research_source: websearch_fallback` | `cached_fundamentals` mode
Alpaca: Day ~122 BLOCKED | Perplexity: 403 | Alpha Vantage: 403 — all three primary sources blocked; all data via WebSearch

**Market direction:** 🔴 Market in Correction (6/25 dist days) | **NO NEW LONG ENTRIES**
**S&P 500:** 7,483.24 (Jul 2 close) | **50d MA: 7,413.44** (+0.94% above) | **200d MA: 7,469.76** (+0.18% above — BARELY ⚠️) | Thin margin above both MAs
**QQQ:** ~$712.60 (Jul 2 est.) | Above both MAs
**FTD path:** CLOSED. New Day 1 requires S&P close BELOW 7,266.99 (rally low, 216 pts away).
**⚠️ MA CORRECTION:** Prior estimates 50d ~7,258 and 200d ~6,918 were stale. Actual values confirm S&P is only barely above both, not 3–6% as previously estimated.

**Top sectors (4-week trailing RS, Jul 2 RRG — UPDATED from prior week):**
1. **XLE Energy** — RRG Leading quadrant; +21% YTD; Iran war oil premium; geopolitical tailwind persists; OPEC supply discipline intact
2. **XLI Industrials** — RRG Leading; +16% YTD; defense capex + AI infrastructure build-out; CAT/HON resilient
3. **XLP Consumer Staples** — RRG Leading; defensive outperformance in Correction; low rate-sensitivity
**Avoid:** XLK (Tech — RRG Lagging; chip sector -18.9%/-23% crashes Jul 1-2), **XLF (Financials — DROPPED from prior #1 to RRG Lagging; bank concerns)**, XLC, XLY
**Blacklisted sectors:** None

**Universe scan:** SKIPPED — Correction posture per /weekly-prep rules; build-universe.sh not run; no new-entry watchlist needed
**Candidates monitored (bench only; degraded websearch mode):** NVDA, MRVL, ARM
**LRCX: REMOVED from bench this week** (score collapse ~40-48/100; triple insider selling; earnings blackout Jul 22)
**Passed conviction ≥75: 0** — **ZERO for 12th consecutive week**

> ⚠️ **12th consecutive week with 0 candidates above conviction threshold.**
> 🚨 CHIP SECTOR CRASH Jul 1-2: LRCX −18.9% in 2 days (triple insider selling CEO+Director+SVP; AI capex peak narrative). MRVL −23% from ATH (broke $252 support, V-recovery INVALIDATED, analyst downgrade to Hold, CFO liquidating ~50% of holdings). Both severely downgraded. Correction gate + degraded data + chip damage = zero actionable setups. Strategy functioning correctly.

---

## ⛔ CORRECTION POSTURE — NO NEW LONG ENTRIES — HEDGE CANDIDATES ONLY

**Entry gate: ⛔ ZERO new long entries** (Market in Correction — all new longs blocked)

### Hedge Candidates (Correction Protocol Active)

| Rank | Instrument | Type | Size | Status | Notes |
|---|---|---|---|---|---|
| H1 | **SH** | Inverse S&P (−1×) | $625 / 25% portfolio | **QUEUED — Alpaca Day ~122 BLOCKED** | Execute as FIRST order on Alpaca restore; queued since Jun 5 |
| H2 | **SQQQ** | Inverse NASDAQ (−3×) | Alt: $625 if SH unavailable | Secondary | Only if SH specifically unavailable; SQQQ leverage decay risk for extended holds |

**SH rationale:** Correction (6/25 dist days); chip sector crash Jul 1-2; S&P barely above 50d/200d MA (+0.94%/+0.18%); rally margin only 216 pts to 7,266.99 low; NFP +57K massive miss (labor weakness); FOMC minutes risk week of Jul 7; 12 consecutive weeks without a valid setup. Textbook Correction hedge. Size: $625 / 25% portfolio per TRADING-STRATEGY.md.
**Exit trigger for SH:** Follow-through day confirms new Confirmed Uptrend → exit SH within 2 sessions.

---

### Primary Watchlist (score ≥75)

**NONE this week.** Market in Correction. No new long entries. Zero candidates above threshold (Correction gate + chip crash + degraded data). See bench.

---

### Bench (score below 75 — Correction monitor only)

| Rank | Symbol | Score | Δ | Sector | Status | Re-Score Trigger | Notes |
|---|---|---|---|---|---|---|---|
| B1 | NVDA | **70-72/100 ↑** | ↑2 (Kyber delay DENIED; Goldman "compelling" 21.7x; China H200 access — partial N-letter restore) | XLK / Semis | 🟡 Cup wk ~21-22; no handle; sector recovering post-Iran shock | Handle completion (~Aug 2026) + Alpaca+AV restore + GPU lease stabilization | **C:20 A:15 N:7-9 S:10 L:10 I:5 Base:0.** Price: ~$198-200 est. (Jul 9 close — chip sector recovery +1.3%). ✅ Kyber NVL144 delay DENIED (Jul 7) removes prior N-headwind. ✅ Goldman "compelling" at 21.7x forward earnings (Jul 9). ✅ China H200 limited access (incremental demand). Headwinds remain: (1) B200 GPU lease $6.11→$4.22/hr; (2) Insider selling $410.6M; (3) FOMC hawkish (9-to-8 hike split) + 10yr 4.58% = P/E compression risk. Cup wk ~21-22; no handle; Aug 2026+ timeline UNCHANGED. Not actionable in Correction. `websearch_fallback` `Kyber_delay_denied_Jul7` `Goldman_compelling_21.7x` `China_H200_limited_access` `B200_GPU_lease_compression` `insider_selling_flag` |
| B2 | MRVL | **~45-55/100 ⬇️⬇️⬇️ SEVERE DOWNGRADE** | ↓↓↓ (−23% from ATH; $252 support BROKEN Jul 2; V-recovery thesis INVALIDATED) | XLK / AI Semis | ❌ BELOW THRESHOLD — broken structure; downgraded | New base formation (8+ wks minimum from $245 low) + FTD + Alpaca restore + CFO selling resolved | **C:15 A:10 N:7 S:5 L:5-8 I:4 Base:0.** Price: **~$245.29 (Jul 2 est.)** — broke $252.62 Jun 29 support; −23% from $316.43 ATH (Jun 4). V-recovery $252→$296 COMPLETELY INVALIDATED (gave back entire recovery + more). Analyst downgrade to Hold. CFO liquidating ~50% of holdings (conviction negative). UBS $340 PT still on, but stock behavior contradicts it. Score crashed from 74-76 → ~45-55/100. No base; structure broken; needs 8+ wk rebuild minimum. Not actionable. `websearch_fallback` `V_recovery_invalidated_Jul2` `MRVL_analyst_downgrade_Hold` `CFO_liquidation_50pct` |
| B3 | ARM | **60/100 UNCHANGED** | — | XLK / Semis | ❌ Below threshold; GAAP C-letter fail | GAAP EPS ≥25% YoY + base confirm | **C:10 A:10 N:15 S:5 L:15 I:5(capped) Base:0.** Price: est. ~$315-330 (Jul 2; down from $375-385 Jun 23 selloff). New Street Research Neutral downgrade (470x trailing P/E). AGI CPU launch + Oracle partnership insufficient to lift C-letter GAAP. ⚠️ **Earnings Jul 29** — blackout begins ~Jul 22. Score 60/100 UNCHANGED. Below threshold. `websearch_fallback` `GAAP_Cletter_fail` `ARM_NewStreet_downgrade_Neutral` |
| ❌ | ~~LRCX~~ | **~40-48/100 REMOVED** | ↓↓↓↓ REMOVED (−18.9% in 2 days; triple insider selling; AI capex peak) | XLK / Semi Equip | ❌ REMOVED FROM BENCH — structural damage | N/A — earnings blackout Jul 22 permanently closes entry window | **C:5 A:5 N:3 S:5 L:10 I:3 Base:0.** Price: $433.33 (Jun 30 ATH) → **$351.41 (Jul 2)** = **−18.9% in 2 trading days**. Triple insider selling: CEO + Director + SVP all dumping simultaneously. AI capex peak narrative: customers cutting back on wafer fab orders. Score collapsed ~40-48/100. ⚠️ **Earnings Jul 29 → blackout Jul 22 → entry window PERMANENTLY CLOSED** (only 12 trading days remain and correction won't clear in time). Removed from all watch. `websearch_fallback` `LRCX_triple_insider_CEO_Dir_SVP` `LRCX_earnings_blackout_Jul22_PERMANENT` `AI_capex_peak_narrative` |
| — | MU | ⛔ **BLOCKED — PRICE CEILING** | — | XLK / Memory | ❌ REMOVED — price >$500 | N/A — price ceiling permanently blocks | Price >$500 (est. $1,100–1,200 range). Exceeds $10–$500 liquidity rule in TRADING-STRATEGY.md. Cannot trade regardless of score. Removed from all consideration. `BLOCKED_PRICE_CEILING` |

---

### Entry Execution Plan — Week of Jul 6-10

**Entry gate: ⛔ ZERO new long entries** (Correction + Alpaca Day ~122 BLOCKED + 0 candidates ≥75)

**FIRST order on Alpaca restore (UNCHANGED):** Buy SH $625 / 25% portfolio (Correction hedge — QUEUED since Jun 5)

**Week's critical path (UPDATED Jul 10 /pre-market — FINAL DAY OF WEEK):**
- **Mon Jul 6 ✅:** ISM Services 54.0 BEAT. S&P +0.72% / Dow NEW ATH 53,055.91. NOT dist day.
- **Tue Jul 7 ⚠️:** Trump declared Iran ceasefire "OVER" at NATO summit. Dow −570+, oil +6%. **PROBABLE DIST DAY #7** (Alpaca blocked, vol unconfirmed). S&P down materially.
- **Wed Jul 8 ✅:** S&P recovered ("closes higher as chip stocks rose, oil slid"). S&P ~7,482.71. NOT dist day.
- **Thu Jul 9 ✅:** FOMC June minutes → **FED SPLIT 9-TO-8 ON RATE HIKE** ⚠️ Hawkish. Market RALLIED despite: S&P +0.81% to 7,543.64 / Nasdaq +1.30%. NOT dist day. 10yr yield 4.58%.
- **Fri Jul 10 (TODAY):** MRVL ex-div $0.06. ES +0.2% muted. No major macro. End of week.
- **⚠️⚠️ NEXT WEEK Jul 14 — MEGA CATALYST:** CPI June + Warsh congressional testimony + JPM Q2 earnings + GS Q2 earnings — **ALL MONDAY**. HOT CPI = dist day #7 or #8 risk; COOL CPI = relief rally (but no FTD possible). Do NOT chase XLF earnings (RRG Lagging).
- **Q2 earnings season begins ~Jul 14:** JPM, GS, WFC. Financial sector (XLF) now in RRG Lagging — do NOT chase earnings beats there.

**FTD scenario (if new Day 1 fires this week):**
- Day 1 must be a close BELOW 7,266.99 (current rally low)
- FTD window = Day 4-7 thereafter (e.g., Day 1 = Jul 7 → FTD window Jul 10-15)
- First entry eligible: FTD confirmed + Alpaca restored + ≥1 candidate re-scores ≥75
- Re-score priority: NVDA first (68-70; needs base handle + GPU lease stabilization)

**Calendar risks:**
- ⚠️ **FOMC minutes ~Jul 9** — hawkish tone = dist day risk
- ⚠️ **CPI Jul 10** — hot = bearish; cool = potential Day 1 rally setup
- ⚠️ **Q2 earnings Jul 14+** — JPM/GS/WFC; banks now RRG Lagging → no chasing
- ⚠️ **ARM/LRCX earnings Jul 29** — ARM blackout ~Jul 22; LRCX blackout Jul 22 (PERMANENT block on LRCX)
- **NVDA earnings: ~Aug 27 2026** — base timeline intact; no blackout
- **MRVL earnings: ~Aug 2026** — structure broken; needs full base rebuild

---

## FORMERLY ACTIVE — Week of 2026-06-22 to 2026-06-26

**Built:** 2026-06-21 (Sun) — `/weekly-prep` 4:00 PM CT | `research_source: websearch_fallback` (Alpaca: Day 104 BLOCKED, Perplexity: 403, Alpha Vantage: 403 — all three primary sources blocked; all data via WebSearch + prior-week cached fundamentals) | `cached_fundamentals` mode

**Market direction:** 🔴 Market in Correction (7/25 dist days — May 15 expires Jun 22 → 6/25 without FTD) | **NO NEW LONG ENTRIES**
**⚠️ CONDITIONAL:** If FTD fires Jun 22 (Day 7, LAST WINDOW; threshold 7,594) → upgrade to 🟢 Confirmed Uptrend → cancel SH queue → first entries eligible Tue Jun 23 (if candidates ≥75 emerge with live data)

**S&P 500:** 7,500.58 (Jun 18 close, CONFIRMED) | **50d MA ~7,248** (+3.48%) | **200d MA ~6,882** (+8.84%) | Above both MAs
**QQQ:** $739.36 (Jun 18 close, CONFIRMED) | 50d MA ~665 (+11.2%) | 200d MA ~620 (+19.2%) | Well above both
**FTD tracking:** Day 7 = Jun 22 (LAST WINDOW) | Threshold: **7,594** (7,500.58 × 1.0125) | Jun 22 open: 56% prob DOWN (prediction markets) | FTD prob: **LOW-MODERATE (25-35%)**

**Top sectors (4-week trailing RS, ~May 20 → Jun 18, UPDATED this prep):**
1. **XLK Technology/Semis** — SOX record high Jun 18; chip rally +8.8% wk Jun 12, +6% Jun 15-18; Intel+Apple deal; MRVL $279.70 (YTD +230%), LRCX $366.81 (YTD +115%), NVDA $210.69; **upgraded from #3 → #1 this week**
2. **XLF Financials** — JPM ATH $333.46 (Jun 17); hawkish FOMC = higher-for-longer = NIM positive; XLF above 50d MA since Jun 4; GS Q2 earnings Jul 14 (clear); GS $1,093 (BLOCKED >$500); JPM $325.22 (C-letter disq.)
3. **XLI Industrials** — MACD positive Jun 2; above 50d MA May 20; AI capex tailwind; XLI +3.28% past month

**Blacklisted sectors:** None
**Avoid this week:** XLE Energy (Iran deal → oil falling), XLRE Real Estate (rate-sensitive; hawkish FOMC), XLC Communication (GOOGL overhang)

**Universe scan:** DEGRADED — Alpaca Day 104 BLOCKED + AV 403. Curated universe from top-3 sectors + prior bench.
**Candidates evaluated:** NVDA, MRVL, LRCX, ARM, GS, JPM, MU, AVGO, V, MA
**Pre-filtered out:**
- GS: $1,093 > $500 price ceiling → BLOCKED
- JPM: C-letter EPS +17.16% YoY < 25% → DISQUALIFYING (unchanged from prior weeks)
- MU: Earnings June 24, 2026 → within 5 trading days → BLOCKED this week
- AVGO: 55/100 (CFO transition; no base; cached prior week; unchanged)
- V/MA: C-letter EPS growth ~15-25% YoY (mature compounders; fail CAN SLIM ≥25% threshold)
**Scored (degraded, websearch_fallback):** NVDA, MRVL, LRCX, ARM

**Passed conviction ≥75: 0** — **ZERO for 10th consecutive week**

> ⚠️ **10th consecutive week with 0 candidates above conviction threshold.**
> Contributing factors: (1) 🔴 Correction — M-gate blocks ALL entries regardless of score; (2) Alpaca bars unavailable — base pattern bonus (+10pts) unconfirmable; (3) EDGAR stale — I-letter hard-capped at 5/10; (4) AV blocked — EPS data estimated only via WebSearch. Structural degraded-mode score cap: ~12-15pts per candidate. **NVDA estimated 73/100 degraded → ~83/100 with live data + base completion.** **MRVL estimated 70/100 degraded → ~80/100 live.** The data gap — not a strategy gap — is holding us out. Patience is the position.

---

## ⛔ CORRECTION POSTURE — NO NEW LONG ENTRIES

**Entry gate: ⛔ ZERO new long entries** (Correction; Alpaca Day 104 BLOCKED; 0 candidates ≥75)

**FIRST order on Alpaca restore:** Buy SH (inverse S&P −1×) $625 / 25% portfolio (Correction hedge protocol ACTIVE — queued since Jun 5)

**This week's critical path:**
- **Mon Jun 22 (FTD Day 7 — LAST WINDOW):** 🎯 CRITICAL: S&P close ≥7,594 on above-avg vol → FTD CONFIRMED → 🟢 Confirmed Uptrend → (a) cancel SH queue; (b) re-score MRVL with live bars; (c) entries eligible Tue Jun 23 | May 15 dist expires → 6/25 regardless | AVGO ex-div $0.65 (price adjusts down at open) | MU earnings TONIGHT (after Jun 22 close) — if MU beats, semis gap-up Tue
- **Tue Jun 23:** If FTD fired Mon → first entry day | Re-score MRVL/NVDA with (hopefully) restored data | If no FTD → Correction continues; new rally needs fresh Day 1
- **Wed Jun 24 (CRITICAL):** **MU earnings (FQ3 Micron — biggest semi catalyst of the week)** | FDX earnings | NVDA shareholders mtg (governance; not earnings) | DELL TX reincorp vote | MU entry BLOCKED this week (earnings within 5 days of Jun 22)
- **Thu Jun 26:** Q1 GDP revision + PCE data — HOT = additional sell pressure; COOL = dovish relief; will move bonds + rate-sensitive names
- **Key watchpoint:** MU earnings Jun 24 will be a proxy for AI memory demand. MU beat → MRVL/LRCX/NVDA gap-up Tue-Wed (if FTD also confirmed). MU miss → validates Correction thesis, delay entries.

**Conditional plan (IF FTD fires Jun 22 AND Alpaca restores):**
1. Cancel SH $625 queue immediately
2. Pull live bars: MRVL first (closest to actionable; flat base forming?)
3. If MRVL base confirmed → score goes to ~80/100 → eligible for entry Wed Jun 25 (AFTER MU earnings Jun 24)
4. NVDA: still bench-only (base wk 13-14; no handle; Aug 2026+ timeline)
5. LRCX: bench-only (A-letter weakness; extended +21% from prior week)
6. ARM: bench-only (C-letter 10pts insufficient; float headwind)

---

### Primary Watchlist (score ≥75)

**NONE this week.** Zero candidates above conviction threshold. Market in Correction + degraded data. See bench.

---

### Bench (score below 75 — conditional on FTD + data restore)

| Rank | Symbol | Score | Δ | Sector | Status | Re-Score Trigger | Notes |
|---|---|---|---|---|---|---|---|
| B1 | NVDA | **68-70/100** ⬇️ | ↓3 (B200 GPU lease prices collapsing; insider selling $410M; OpenAI IPO delay Jun 26 → AI demand uncertainty) | XLK / Semis | 🟡 Cup wk 16; no handle; TRIPLE NEGATIVE CATALYST | Handle completion (~Aug 2026) + Alpaca+AV restore + GPU lease stabilization + OpenAI demand clarity | **C:20 A:15 N:5→7 S:10 L:15 I:4→5(capped; insider selling $410.6M past 3 months negative) Base:0.** Jun 25 close: ~$200-205 est. Jun 26 session: **~$193-196 (−1% today; −8% this week = worst week in >1yr).** ⚠️ TRIPLE NEGATIVE: (1) B200 GPU lease prices collapsing $6.11/hr → $4.22/hr (supply glut → margin compression); (2) Insider selling $410.6M (conviction negative); (3) OpenAI IPO delay Jun 26 → AI demand thesis challenged. N-letter impaired from all three angles. I-letter capped. Score revised: **68-70/100 (was 70-71)**. Cup wk 16 intact but under pressure from 8% weekly loss; handle absent; Aug 2026+ timeline UNCHANGED. Not actionable. `websearch_fallback` `B200_GPU_lease_compression_negative` `insider_selling_flag` `OpenAI_IPO_delay_AI_demand_risk` |
| B2 | MRVL | **71→RE-SCORE PENDING** ⬆️⬆️ | ↑MAJOR (Q1 FY2027 EARNINGS BEAT Jun 25 AMC) | XLK / AI Semis | 🟡 WATCHING — score may cross 75 threshold at /market-check re-score | FTD + Alpaca restore + post-earnings base confirmation | **C:15→20? A:10 N:15→+? S:10 L:15 I:6→7? Base:0.** 🚨 **MRVL Q1 FY2027 BEAT (Jun 25 AMC):** Revenue $2.418B vs $2.400B guide (beat); EPS $0.80 vs $0.75 est (+6.67%); Q2 FY2027 guide $2.700B ± 5% (sequential acceleration); Dividend raised $0.06/share payable Jul 30. Jun 26 pre-mkt: gap up expected. **Score impact: C may go 15→20 if YoY EPS ≥40%; N reinforced (AI chip demand, S&P 500 inclusion, strong Q2 guide); I improves on forced institutional buying post-S&P entry. Estimated re-score: 75-80/100 with live data at /market-check.** Still: (1) Correction blocks ALL entries, (2) Alpaca BLOCKED, (3) post-earnings stock may be extended — base must re-form before entry eligible. **ACTION: Re-score MRVL at /market-check with live bars.** `websearch_fallback` `MRVL_Q1FY2027_beat_Jun25AMC` `CFO_transition_orderly` |
| B3 | LRCX | **67/100** ⬆️ | ↑2 (analyst upgrades lift L/I) | XLK / Semi Equip | 🟡 Gaining pre-market on MU beat; watch for base | A-letter improvement path + base confirm | **C:15 A:5 N:15 S:10 L:15 I:7(BofA $330→$480 Buy; WF $365→$450 OW — dual upgrade = I-letter up) Base:0.** Jun 23 close: **$371.33**. Jun 25 pre-mkt: gaining (CNBC: LRCX mentioned as MU beneficiary). BofA raised target $330→$480; Wells Fargo raised $365→$450. No base formed yet; needs consolidation. Next earnings Jul 29 (clear). Score **67/100** UNCHANGED vs threshold. Below 75. `websearch_fallback` `MU_beat_semi_equip_read` |
| B4 | ARM | **60/100** | — | XLK / Semis | ❌ Below threshold — score path unclear | C-letter non-GAAP improvement + base confirm | **C:10 A:10 N:15 S:5 L:15 I:5(capped) Base:0.** Jun 23 close: **~$394 est. (−10.14%)**. ARM led the semi rout Jun 23. Still below conviction threshold. C-letter fails on GAAP. Next earnings ~late July (clear). Score 60/100 UNCHANGED. `websearch_fallback` |
| — | AVGO | **55/100** — | Unchanged | XLK | ❌ Watch-only | New base + CFO Thuener established + score ≥75 path | C:20 A:8 N:8 S:5 L:7 I:7 Base:0. CFO Spears→Thuener. Ex-div Jun 22 ($0.65). No base. Not actionable. `cached_fundamentals` |
| — | DELL | **55/100** ⬇️⬇️ | Unchanged | XLK | ❌ Watch-only | Silver Lake selling halts + new base + score ≥65 path first | Silver Lake supply overhang. TX reincorp vote Jun 25 (governance). No base. Even with base = ~65/100. Not actionable. `cached_fundamentals` |

---

### Entry Execution Plan — Week of Jun 22-26

**Entry gate: ⛔ ZERO new long entries** (Correction; Alpaca Day 110 BLOCKED; 0 candidates ≥75; FTD window CLOSED)

**FIRST order on Alpaca restore (unchanged):** Buy SH $625 / 25% portfolio (Correction hedge — QUEUED since Jun 5)

**Updated plan (as of Jun 25 /market-check 10:00 AM CT):**
- PCE 4.1% headline / 3.4% core — HOT, matched forecast. Market reaction: S&P +0.52% intraday. **PCE digested — NOT a dist day.** Dist 6/25 UNCHANGED. Correction state UNCHANGED.
- S&P ~7,396 intraday — rally low 7,266.99 margin widens to ~129 pts. Constructive but no FTD possible (window CLOSED).
- **All abort gates fired:** Correction + Alpaca Day 110 BLOCKED → NO TRADES.
- Zero watchlist triggers (0 primary items). Sell-rules-engine skipped (0 positions).
- Bench scores UNCHANGED: NVDA 73, MRVL 71, LRCX 67, ARM 60. Zero ≥75. No promotions.
- MRVL CFO resolved (Durn/Meintjes advisory 2027) → I-letter 6/10 confirmed. Score 71/100. Still needs new base post-$279 rejection.
- FTD path: need new Day 1 (S&P close below 7,266.99) → Day 4-7 +1.25%+ on above-avg vol → uptrend confirmed.
- DELL TX reincorp vote Jun 25: governance only, no score impact.
- **Next trigger:** FTD on new rally attempt (requires Day 1 first) + Alpaca restore + MRVL/NVDA base confirmation (wks ahead).

**Calendar risk flags (remaining this week):**
- ~~PCE Jun 25 7:30 AM CT~~ ✅ RESOLVED — 4.1% headline; NOT dist day
- ~~DELL TX reincorp vote Jun 25~~ ✅ RESOLVED — governance only
- **Fri Jun 26 /weekly-review 3:30 PM CT** — week postmortem; no major US macro data today

**Jun 26 pre-market update:**
- 🚨 MRVL Q1 FY2027 BEAT (Jun 25 AMC) → score re-evaluate at /market-check; **estimated 75-80/100 with live data**
- ⚠️ NVDA negative: B200 GPU lease prices $6.11→$4.22/hr; insider selling $410.6M; pre-mkt ~$195.74 (−2.15%); score revised to 70-71/100
- ES +0.78% / NQ +2.15% pre-market (MRVL beat driving semi bid)
- No new US macro data today; quiet Friday into EOM (Jun 30 next Tue)

**Jun 26 /market-check update (10:00 AM CT):**
- ⚠️ **MRVL CATALYST CORRECTION:** Pre-market "MRVL Q1 FY2027 beat Jun 25 AMC" was WRONG. Actual Q1 FY2027 earnings: May 27, 2026. Jun 25 was only a dividend 8-K ($0.06/sh). No new earnings. Score stays **71/100 UNCHANGED** — 75-80 estimate was based on flawed premise.
- 🚨 **OPENAI IPO DELAY (NYT Jun 26):** OpenAI considering delay to 2027 → chip sector sold off sharply. MRVL down ~$11.68 from $281.26 close; NVDA down ~1% (−8% on week = worst week in >1yr). Pre-market gap-up completely reversed.
- **S&P 500:** Opened ~7,404, sold to intraday low 7,323.50 (56 pts above rally low 7,266.99 — INTACT), recovering to "relatively unchanged" (~7,350-7,360 vs 7,357.49 prior close). Dist day risk: uncertain — watch at /eod-review.
- **Bench scores (updated):** NVDA **68-70/100** ⬇️ (was 70-71; GPU lease compression + insider selling + OpenAI delay = N-letter impaired further) | MRVL **71/100** | LRCX **67/100** | ARM **60/100**. All below 75 threshold.
- **Actions:** NONE. Correction + Alpaca Day 111 BLOCKED. 0 primary items. 0 positions.

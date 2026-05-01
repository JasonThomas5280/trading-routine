# Weekly Review

Every Friday 3:30 PM CT, `/weekly-review` runs a postmortem and appends to this file. These are the most valuable entries in the entire memory system — they're where the strategy learns.

---

## Format for New Review

```
## Week ending YYYY-MM-DD (Fri)

### Performance
- Starting equity: $X,XXX.XX
- Ending equity: $X,XXX.XX
- Weekly return: +X.XX% (vs. SPY +X.XX% = +X.XX% alpha)
- Trades taken: N (max 3/week, used N)
- Winners: N (avg +X.XX%)
- Losers: N (avg -X.XX%)
- Winner:loser ratio: X.X:1 (target ≥2.5:1)
- Largest winner: $SYMBOL +X.XX% / $XX.XX
- Largest loser: $SYMBOL -X.XX% / $XX.XX

### Rule Adherence
- Hard rule violations: 0 / N attempted
- Any -7% stops hit manually? YES/NO — [which]
- Any mental stops? NO (should always be NO)
- Any entries during amateur hour? NO
- Any entries during market "Under Pressure"? NO
- Circuit breakers triggered? NO / [daily -3% YES on day X]
- Adherence score: XX/100

### Market Direction Accuracy
- Our M state for the week: [Confirmed Uptrend / Under Pressure / Correction]
- Was that right? [yes — SPY +X.X% // no — SPY -X.X% and we should have downgraded]
- Any distribution days we missed? [none // X on [date]]

### Sector Performance
- Sectors we traded: [list]
- Sector hit rate: N winners in sector X, N winners in sector Y
- Sectors to blacklist: [if 2 consecutive failed trades in a sector]

### Conviction Correlation
- Trades with conviction ≥85: N — avg outcome +X.X%
- Trades with conviction 75–85: N — avg outcome +X.X%
- Pattern: [high conviction outperforming? / no signal?]

### Research Source Impact
- Days on perplexity primary: N
- Days on websearch_fallback: N
- Days DEGRADED: N
- Did fallback days produce worse picks? [yes/no — analysis]

### Lessons

1. [One thing we learned this week about our execution]
2. [One thing we learned about the strategy]
3. [One thing we learned about the market]

### Proposed Rule Changes

(None unless a genuine pattern emerged. Proposed changes go here; Jason approves them in Monday review; then TRADING-STRATEGY.md gets updated with a changelog entry.)

### Next Week Setup

- Market direction thesis going in: [expectation]
- Sectors in focus: [list]
- Calendar risks: [earnings on watchlist names, FOMC, CPI, etc.]
- Emotional state check: [are we revenge-trading? fading the plan? if so, flag it]
```

---

## Reviews (appended chronologically)

---

## Week ending 2026-04-24 (Fri)

> **Context:** First operational week (week 1). Account live on Alpaca paper ($2,500). Alpaca API returned 403 "Host not in allowlist" every session beginning April 18 — blocking all execution, live quotes, and account data for 7 consecutive sessions through week-end.

### Performance

- Starting equity: $2,500.00 (Mon Apr 21 — 100% cash, no carry-in positions)
- Ending equity: $2,500.00 (Fri Apr 24 — unchanged; 0 trades executed)
- Weekly return: **0.00%** (vs. SPY approx. **+0.84%** Mon $704.08 → Fri ~$710 est. = **-0.84% alpha**)
- Trades taken: **0** (max 3/week, used 0)
- Winners: 0 (avg N/A)
- Losers: 0 (avg N/A)
- Winner:loser ratio: N/A (no closed trades)
- Largest winner: N/A
- Largest loser: N/A
- **Root cause of zero trades:** Alpaca API 403 error blocked all execution. Not a strategy failure — the watchlist correctly identified AVGO (broke out Apr 22), NVDA (retook $5T Apr 24), STX (multiple upgrades). Infrastructure prevented entry.

### Rule Adherence

- Hard rule violations: **0** / 0 attempted
- Any -7% stops hit manually? **N/A** (no positions)
- Any mental stops? **N/A** (no positions)
- Any entries during amateur hour? **NO** (no entries)
- Any entries during market "Under Pressure"? **NO** (market was Confirmed Uptrend all week)
- Circuit breakers triggered? **NONE**
  - Daily -3% circuit breaker: never triggered (no P&L)
  - Weekly -6% circuit breaker: never triggered
  - PDT count: 0 of 3
  - Drawdown from high-water mark: 0%
- **Adherence score: 100/100** *(trivially perfect — no trades = no violations to commit. Score is uninformative this week; do not extrapolate.)*

### Market Direction Accuracy

- Our M state all week: **Confirmed Uptrend** (Day 7 → Day 14)
- Was that right? **YES** — S&P 500 and Nasdaq closed at ALL-TIME HIGHS on Friday Apr 24. SPY held firmly above 50-day MA (~$675 est.) all week. Uptrend strengthening, not deteriorating.
- Distribution days correctly identified:
  - Apr 23: SPY -0.41% — **correctly logged** as distribution day #1 (software sector: IBM -7.94%, SFDC -8.88%, NOW -18%). Volume ratio unconfirmed (Alpaca blocked) but magnitude and sector breadth of selling supported the call.
  - Apr 24: SPY +~1.0% (record close) — **correctly NOT counted** as distribution. One-day pullback on Apr 23 fully reversed.
- Any missed distribution days? **None identified.** Apr 21–22 were up days; Apr 24 record close.
- Any late state transitions? **No transitions needed** — 1 distribution day remained well below 5-day Under Pressure threshold.
- Accuracy verdict: **CLEAN** — M calls were correct every day.

### Sector Performance

- Sectors traded: **NONE** (no trades)
- Sector RS call accuracy:
  - XLK Tech/Semis: called #1 at week build ✓ — semiconductor index rose 18 straight sessions; Intel +23.6%, AMD +13.9%, NVDA $5T. Dominant.
  - XLY Consumer Disc: called #2 ✓ — held up, though not as spectacular as semis
  - XLF Financials: called #3 ✓ — GS ~$926 area, resilient
  - XLE Energy: called laggard ✓ — oil volatility (Iran/Hormuz) but energy stocks not leading
  - XLP / XLU: called laggard ✓ — defensive sectors underperformed growth
- Sectors to blacklist: **None** (no trade history to trigger 2-consecutive-fail rule)
- Sectors for Week 2 focus: **XLK Semis** (strongest by wide margin), **XLF Financials** (secondary)

### Conviction Correlation

- Trades with conviction ≥85: 0 — N/A
- Trades with conviction 75–85: 0 — N/A
- Trades below 75: **0** (NVDA at 67/100 was correctly blocked)
- Pattern: **No data this week.** Pipeline validated — NVDA correctly rejected at 67/100 despite strong fundamental profile. System worked as designed.

### Research Source Impact

- Sessions on perplexity primary: **1** (Apr 22 /pre-market only)
- Sessions on websearch_fallback: **8** (Apr 22 market-check + eod; Apr 23 pre-market + market-check + eod; Apr 24 pre-market + market-check + eod)
- Sessions DEGRADED: **0** (WebSearch always available as fallback)
- Research source for trades placed: N/A
- Did fallback days produce worse picks? **Unable to assess** (no trades). However, websearch produced inconsistent price data — S&P 500 April 24 close cited as 7,165 (one source) vs. 7,121 (TradingEconomics), SPY Apr 22 cited as $706.14 (intraday est.) vs. $711.21 (all-time high close per later searches). Volume data from websearch is unreliable for the +40% threshold check. The AVGO volume non-trigger on Apr 24 (called at +30% pacing vs. +40% required) was based on websearch-estimated data with low confidence.

### Lessons

**Lesson 1 — Execution: Alpaca API was blocked for the entire first operational week.**
The API returned 403 "Host not in allowlist" beginning April 18 and persisted through April 24 (day 7). AVGO — our #1 candidate — broke out April 22 at the $406.75 pivot. We could not execute. New credentials (PK7N46M65LLJZTRF35BKX7GJD6) were tested April 24 with the same result, confirming it is a network/IP allowlist issue, not a credentials issue.
Fix: This weekend — investigate Alpaca paper account URL configuration; verify the correct BASE URL (`https://paper-api.alpaca.markets` vs. possible environment-specific endpoint); contact Alpaca support if blocked IP. Add API health check (`bash scripts/alpaca.sh account`) as Step 0 of /pre-market so failures surface immediately, not at /market-check 4 hours later.

**Lesson 2 — Strategy: CAN SLIM screening correctly identified every major mover before it moved.**
AVGO (pivot breakout Apr 22), NVDA (retook $5T Apr 24), STX (analyst upgrade wave all week) were all on the watchlist. The system's sector call (XLK semis #1) was validated by the semiconductor index running 18 consecutive up days. The pipeline's rejection of NVDA at 67/100 on Apr 22 (volume below avg + no valid base) was correct — the setup resolved April 24 with massive volume on the Intel/AMD earnings catalyst, which is when volume confirmation materialized. Patience + systematic scoring prevented a premature entry that would have required close management during a choppy mid-week (Apr 23 distribution day).

**Lesson 3 — Market: Earnings catalysts in adjacent stocks can resolve a borderline setup overnight.**
NVDA scored 67/100 on Apr 22 primarily because of weak volume (S-letter: -14.6% below 50-day avg) and no valid base pattern. Then Intel reported a blockbuster quarter (+23.6%) and AMD surged +13.9% on Apr 24. The sector tailwind almost certainly pushed NVDA above $201.75 pivot on massive volume — resolving both the volume deficit and potentially the base pattern. Lesson: when a stock is borderline on volume/base but fundamentals are excellent and it's in a leading sector, keep it prominently on the watchlist and re-score immediately after major sector catalysts. The canslim-screener re-score on Sunday is now **urgent** for NVDA.

### Proposed Rule Changes

**Proposal 1 — Add Alpaca API health check to /pre-market Step 0:**
Before evaluating any catalyst or watchlist item, run: `bash scripts/alpaca.sh account`. If this fails, immediately log `⚠️ ALPACA_BLOCKED — execution impossible today` and continue with research-only mode (watchlist management, no entry triggers). This surfaces infrastructure failures at 6 AM CT rather than 10 AM CT, giving 4 extra hours for triage.
Status: **Pending Jason approval.** Low-risk change, high operational value.

**Proposal 2 — Add `data_confidence` flag to /market-check trigger table:**
For each watchlist row, add a column: `Data Source: Alpaca | WebSearch`. Rows sourced from WebSearch require a note: "⚠️ volume data unconfirmed — websearch only. Entry requires Alpaca confirmation." This makes degraded-data decisions explicit and auditable, preventing false-confidence entries on unreliable volume checks.
Status: **Pending Jason approval.** Format-only change, no strategy logic change.

### Next Week Setup

- **Market direction thesis going in:** Confirmed Uptrend Day 14. S&P 500 and Nasdaq at all-time highs. Semiconductor sector 18 consecutive up days. Uptrend is strong and broadening. No distribution-day concern (1/25 — need 4 more before Under Pressure). Bull market: lean long, no hedges, hunt for breakouts.
- **Sectors in focus:** XLK Semis (dominant — AVGO, NVDA, LRCX, MU all candidates), XLF Financials (GS secondary candidate)
- **Calendar risks:**
  - STX earnings: **Monday April 28** — evaluate post-earnings at Sunday /weekly-prep (strong analyst setup: Barclays $625, UBS $515, Mizuho $565). Could produce gap-up entry or remove from watchlist depending on reaction.
  - PLTR, CRWD, GS: unscored — must complete canslim-screener at Sunday /weekly-prep before any entry.
  - Monitor mega-cap tech earnings schedule for anything affecting XLK sentiment.
- **Current book status:** 0 positions, **0% deployed**, $2,500.00 cash, **3/3 weekly trade slots available**. Starting Week 2 with maximum firepower.
- **Emotional state check:** DISCIPLINED. No FOMO trades despite watching AVGO break out while API was blocked. No attempts to "work around" infrastructure failure by estimating entries. No rule bending. The week was frustrating operationally, but the playbook held. Week 2 starts clean.

---

## Week ending 2026-05-01 (Fri)

> **Context:** Week 2 of live operation. Alpaca API remained blocked (403 "Host not in allowlist") for the entire week — Day 11 through Day 20 consecutive. Alpha Vantage and Perplexity also blocked (IP allowlist issue). All data via WebSearch fallback. No trades executed for the second consecutive week. Market hit new all-time highs (S&P 7,209.01 on Apr 30); uptrend strengthening despite our inability to participate.

### Performance

- Starting equity: $2,500.00 (Mon Apr 28 — 100% cash, carry-in from Week 1)
- Ending equity: $2,500.00 (Fri May 1 — unchanged; 0 trades executed)
- Weekly return: **0.00%** (vs. SPY approx. **+0.0% to +0.3%** Apr 25 close ~$716.52 → May 1 close est. ~$715–718 = **~0% alpha differential**; S&P range 7,165→7,209 ATH→7,162 open May 1 recovering; net flat-to-slight-positive week)
- Trades taken: **0** (max 3/week, used 0 — second consecutive 0-trade week)
- Winners: 0 (avg N/A)
- Losers: 0 (avg N/A)
- Winner:loser ratio: N/A (no closed trades)
- Largest winner: N/A
- Largest loser: N/A
- **Root cause of zero trades:**
  1. Alpaca API blocked all 5 sessions (Day 11–20) — execution impossible per hard rule ("Alpaca down → halt all activity")
  2. Wednesday: FOMC no-entry restriction (pre-1 PM CT) even if Alpaca had been available
  3. NVDA (only actionable setup): volume gate failed Mon/Tue; price gate failed Fri (below $201.75 pivot on RS deterioration); Thursday fell -4.1% on Google TPU news
  4. AVBO: 74/100 all week — 1 point below threshold; never entered buy zone cleanly
  5. LRCX: correctly removed mid-week (data error + China MATCH Act thesis risk)
  6. Earnings-calendar congestion eliminated XLC names entirely this week

### Rule Adherence

- Hard rule violations: **0** / 0 attempted
- Any -7% stops hit manually? **N/A** (no positions)
- Any mental stops? **N/A** (no positions)
- Any entries during amateur hour? **NO**
- Any entries during market "Under Pressure"? **NO** (market Confirmed Uptrend all week)
- Any entries on Alpaca-blocked days? **NO** — hard rule honored every session
- FOMC restriction honored? **YES** — no entry attempts Wednesday before 1 PM CT
- Any conviction-score workarounds? **NO** — AVBO held at 74/100 reject all week; LRCX removed cleanly; STX held at 68/100 reject despite massive analyst upgrade wave ($700–$1,000 PTs)
- Circuit breakers triggered? **NONE**
  - Daily -3%: never (no P&L)
  - Weekly -6%: never
  - PDT count: 0 of 3
  - Drawdown from high-water mark: 0%
- **Adherence score: 100/100** *(trivially perfect for second consecutive week — no trades = no violations. Score is structurally uninformative until Alpaca is restored. Note: the system correctly rejected multiple tempting near-threshold setups — this is real adherence.)*

### Market Direction Accuracy

- Our M state all week: **Confirmed Uptrend** (Day 14 → Day 20, then Day 20 at week-end)
- Was that right? **YES** — S&P 500 hit a new all-time high of 7,209.01 on Thursday April 30 (+1.02%). Best April since 2020 (S&P +10.4%, Nasdaq +15.3%). SPY held well above 50-day MA (~$676 est.) every session.
- Distribution day tracking this week:
  - Apr 27 (Mon): SPY -0.17% → **correctly NOT counted** (below -0.20% threshold)
  - Apr 28 (Tue): SPY -0.49% (7,138.80) → **correctly logged as dist day #2** (OpenAI revenue miss; chip sector -2–5%; magnitude + implied elevated volume). Effective count: 2/25.
  - Apr 29 (Wed): SPY -0.04% → **correctly NOT counted** (FOMC hold; below threshold)
  - Apr 30 (Thu): SPY +1.02% (ATH) → **correctly NOT a distribution day** (up day by definition)
  - May 1 (Fri): SPY gapped -0.66% from ATH, recovering intraday → **watch for EOD confirmation; not yet counted**
- Any missed distribution days? **None identified.** Borderline Mon/Wed calls were correctly excluded.
- Any late state transitions? **None required** — 2/25 is well below the 5-day Under Pressure threshold.
- Accuracy verdict: **CLEAN** — M calls were correct every day for the second consecutive week.

### Sector Performance

- Sectors traded: **NONE** (no trades executed)
- Sector RS call accuracy this week:
  - **XLK Technology/Semis:** Confirmed #1 — Mag-7 all beat AH (MSFT Azure +40%, AMZN AWS +28%, GOOGL Cloud +63%, META beat). AAPL $111.2B revenue +17% YoY. S&P +10.4% April = semis + tech dominated.
  - **XLF Financials:** Called #2 — held stable; GS resilient. Secondary thesis intact.
  - **XLY Consumer Disc:** Called #3/substitute — performed in-line.
  - **XLE Energy:** Called laggard → oil Brent spiked to $126 (Iran/Hormuz) then reversed to $114 intraday May 1. Volatile, non-directional. Correct to avoid.
  - **XLP / XLU:** Correctly ranked bottom-3.
- Sector-specific event: NVDA suffered **two consecutive sessions of -4%+ relative weakness** (Apr 30: -4.1% vs SPY +1.02%; May 1: -4.9% vs SPY +0.54%) driven by Google TPU direct-sales news and Amazon custom silicon disclosure. Within XLK, semi equipment (LRCX) hit by MATCH Act China risk. Sub-sector divergence within XLK is real.
- Sectors to blacklist: **None** (no trade history to trigger 2-consecutive-fail rule)
- Sectors for Week 3 focus: **XLK Semis** (dominant; AVGO META AI-chip story intact; MU HBM4 sold out), **XLF Financials** (secondary)

### Conviction Correlation

- Trades with conviction ≥85: 0 — N/A
- Trades with conviction 75–85: 0 — N/A
- Trades below 75: **0 correctly blocked** — AVBO 74/100 (held below threshold), STX 68/100 (held despite massive analyst PTs), LRCX removed (China thesis risk)
- Pattern: **No closed-trade data for second consecutive week.** However, the pipeline demonstrated discrimination: NVDA correctly tracked its score degradation 87→est.75–80 in real-time as Google TPU news eroded the L-letter (RS) score. System is functioning as designed — scoring is dynamic, not static.

### Research Source Impact

- Sessions on perplexity primary: **0** (blocked all week — IP allowlist issue, same as Week 1)
- Sessions on websearch_fallback: **10** (all 5 days × pre-market + market-check)
- Sessions DEGRADED: **0** (WebSearch consistently available as fallback)
- Research source for trades placed: N/A
- Did fallback days produce worse picks? **Cannot isolate from Alpaca blocking.** However, notable websearch data quality issues this week:
  - LRCX price estimated at $272.11 on Apr 28 (in watchlist) — actual close was ~$251.24 (-8.2% error). Error caught at Apr 29 /pre-market when cross-referenced. WebSearch estimation on Alpaca-blocked symbols has ±5–10% price error.
  - NVDA pre-market estimates were consistent across sources and within 1–2% of later confirmed prices. More liquid names are more reliably estimated.
  - Volume data: zero confirmed volume checks all week (Alpaca blocked). All volume calls are "implied by catalyst + magnitude" — not independently verifiable.

### Lessons

**Lesson 1 — Execution: Alpaca API blockage entered Week 3 with no resolution — infrastructure failure is now the #1 strategic risk.**
Two full operational weeks (Day 1 through Day 20) with zero execution capability. Every single pre-planned entry — NVDA at $201.75 pivot, AVGO near $406.75, STX post-earnings — was blocked not by strategy but by API access. The API credentials are correct (PK7N46M65LLJZTRF35BKX7GJD6); the issue is network-level IP allowlist on Alpaca's side. This must be resolved before Week 3 or the strategy cannot function. If Alpaca paper trading specifically requires server-side IP registration, that must happen over the weekend.
Fix (immediate, pre-market Sunday): Resolve Alpaca API access. Options: (a) contact Alpaca support to whitelist the hosting environment's IP, (b) test via VPN/alternative network path, (c) evaluate whether Alpaca live trading API has different allowlist requirements than paper. This is not optional — it is the system's critical path blocker.

**Lesson 2 — Strategy: NVDA's real-time RS deterioration demonstrates the L-letter is the most volatile component of the CAN SLIM score.**
NVDA entered the week at 87/100 — our highest-conviction setup. By Friday it was est. 75–80/100 and flagged CAUTION. Two pieces of news (Google direct TPU sales, Amazon custom silicon) eroded the competitive moat narrative (N-letter) and relative strength (L-letter) in two sessions. The stock fell -4.1% and -4.9% on days when SPY was +1.02% and +0.54% respectively — defining distribution. The score correctly degraded. The lesson: a conviction score is a snapshot, not a commitment. Re-score at every /pre-market when macro catalysts affect the thesis.
Fix: When any direct competitive threat news hits a watchlist name (new competing product/technology from a major player), trigger an immediate L-letter re-score the following morning — do not wait for Sunday /weekly-prep. Flag as `⚠️ THESIS RISK EVENT — L-LETTER RE-SCORE REQUIRED`.

**Lesson 3 — Market: April 2026 was the best month since 2020 (+10.4% S&P, +15.3% Nasdaq); the uptrend may be approaching extended territory entering May.**
The April 8 follow-through day at Day 6 of a rally attempt from the March 31 low generated a 20-session confirmed uptrend that took the S&P to a new all-time high (+14% from low to ATH in 17 sessions). This pace — combined with RSI 70.45 and the market up 20+ days from FTD — historically signals a period of increased distribution risk. "Sell in May" is a cliché, but the underlying dynamic (institutional profit-taking after a strong run) is real. The 2/25 distribution count is benign today; it could accelerate quickly in May.
Monitor: Track distribution day count carefully in first 2 weeks of May. If count reaches 4/25, prepare to tighten all stops to 7% immediately. If 5/25, transition plan to Under Pressure. Do not wait for 6/25 to begin reducing exposure.

### Proposed Rule Changes

**Proposal 1 — Alpaca API health check at /pre-market Step 0** *(carry from Week 1 — STILL PENDING)*
Status: Pending Jason approval. Critical — surfaces blocking at 6 AM CT vs. 10 AM CT.

**Proposal 2 — data_confidence flag in /market-check trigger table** *(carry from Week 1 — STILL PENDING)*
Status: Pending Jason approval. Prevents false-confidence entries on websearch-estimated volume.

**Proposal 3 — NEW: Automatic L-letter re-score trigger on competitive threat news.**
When a competitor product/technology announcement directly targets a watchlist name's moat (e.g., Google announces TPU direct sales while NVDA is on watchlist), flag `⚠️ THESIS RISK EVENT — L-LETTER RE-SCORE` at the /pre-market where the news breaks, and run a fresh canslim-screener at that session rather than waiting for the weekly cycle.
Rationale: NVDA's two-session score deterioration was predictable from the news but the system did not have a formal re-score trigger. The re-score happened informally through /eod-review commentary. Formalizing it ensures no setup decays below 75 while still "passing" in a stale score.
Status: **NEW — pending Jason approval.**

**Proposal 4 — NEW: WebSearch price estimation error flag for illiquid/Alpaca-blocked symbols.**
If Alpaca is blocked and a watchlist price is sourced from WebSearch, append ` (est. ±5%)` to the price field and add a note: "Do not use for pivot-distance calculations — error margin exceeds entry precision requirement." This prevents the LRCX $272.11 vs. $251.24 type of data error from silently informing a watchlist ranking.
Status: **NEW — pending Jason approval.**

### Next Week Setup

- **Market direction thesis going in:** Confirmed Uptrend Day 20 (from Apr 8 FTD). S&P 500 at near-ATH (~7,209 close, May 1 soft open recovering). 2/25 distribution days — well below Under Pressure threshold. Uptrend intact. May seasonality is historically weaker ("Sell in May" effect); RSI 70.45 is mildly overbought; extended run from FTD suggests increased distribution risk. **Bias: still long, but more vigilant on dist day count. Max patience — quality setups only.**
- **Sectors in focus:**
  1. **XLK Technology/Semis** — AVGO (META $300B+ AI chip commitment; above pivot post-Apr 30; needs re-score when APIs restore — expected 76–80/100), MU (HBM4 sold out 2026; $517, handle forming watch; expected 88+/100 on re-score), AMD (re-score immediately post-May 5 earnings if beats)
  2. **XLF Financials** — GS secondary if earnings re-confirm ≥25% growth
- **Calendar risks:**
  - **AMD earnings: Monday May 5** (pre-market) — if beats, re-score immediately. Could become primary entry candidate by /market-check Monday.
  - **PLTR earnings: Monday May 5 AH** — remove from watchlist candidate list until results + 5-day post-earnings clearance.
  - **STX: re-score when Alpha Vantage API restores** — 68/100 currently on A-letter cyclical issue; expected 83+/100 with live API. No base yet; watch for cup-with-handle formation.
  - **NVDA: full re-score required** — Google TPU + Amazon silicon risk; score est. 75–80; may be below threshold. Do NOT enter until fresh canslim-screener with live data.
  - **Oil/Iran/Hormuz:** Brent $114 after spike to $126. If Hormuz blockade escalates → XLE volatility, inflationary pressure, potential market pullback. Monitor daily.
  - **FOMC follow-up:** Fed held with 4 dissents at last meeting. No scheduled FOMC until June — no macro restriction for May entries.
- **Current book status:** 0 positions, **100% cash ($2,500.00)**, **0% deployed**, **3/3 weekly trade slots available**. Two weeks of enforced cash position. Capital is fully intact.
- **Critical pre-Week 3 prerequisite: Resolve Alpaca API access (Sunday).** If not resolved before /pre-market Monday, flag ALPACA_BLOCKED and continue research-only mode. Do NOT improvise execution workarounds.
- **Emotional state check:** DISCIPLINED but aware of accumulating operational frustration. Two consecutive weeks of 0 trades while watching correctly-identified setups (AVGO, NVDA) run without us is uncomfortable. The correct response is to fix the infrastructure, not to loosen the rules. No revenge-trading impulse. No FOMO on near-threshold setups. Playbook held. Week 3 starts clean with the same capital we started Week 1.

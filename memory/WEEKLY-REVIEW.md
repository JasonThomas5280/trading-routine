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

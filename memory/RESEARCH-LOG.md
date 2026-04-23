# Research Log

Daily research notes from `/pre-market` and `/weekly-prep`. Every entry is source-attributed so weekly review can measure research-source impact on trade outcomes.

---

## Format

```
## YYYY-MM-DD — /pre-market (or /weekly-prep)

**Research source:** perplexity | websearch_fallback | alpha_vantage_only | DEGRADED
**Market direction pull:** <Confirmed Uptrend | Under Pressure | Correction>
**Sector leaders (top 3):** Technology, Energy, Financials (or as applicable)
**Sector laggards (bottom 3):** REITs, Utilities, Consumer Staples

### Overnight catalysts affecting watchlist

- $NVDA: earnings beat after-hours, +3.2% AH — watch for gap-up entry
- $CRWD: analyst upgrade pre-market, within 2% of pivot

### Buy-zone status (open watchlist items)

- $ANET: pivot $112.50, last $111.80 — within 1% of pivot, ready
- $SMCI: pivot $42.00, last $39.20 — below pivot, watching
- $PANW: earnings 3 days out — remove from buy list per 5-day rule

### Open positions — overnight check

- $NVDA (entry $487.50): last $495.00 — above entry, stop $453.38 holding
- $META (entry $621.00): flat overnight, no catalysts

### New candidates flagged

- $APP (AppLovin): positive catalyst, will run canslim-screener scoring during /market-check

### Risks

- FOMC meeting tomorrow — no new entries before 1pm CT Wed
- CPI data at 7:30 AM CT Thu — reduce new-entry willingness
```

---

## Entries (appended chronologically)

## 2026-04-23 — /pre-market

**Research source:** websearch_fallback (Alpaca 403 — host not in network allowlist; Perplexity 403 — same; WebSearch used for all catalyst data)
**Market direction pull:** 🟢 Confirmed Uptrend (day 11 — no distribution day triggered yesterday, SPY +0.29%/QQQ +1.35%)
**Alpaca data:** UNAVAILABLE — all price quotes and account data blocked. No position data possible; circuit breaker check relies on trade-log (0 trades, $2,500 equity assumed).
**Futures overnight:** ES -0.5%, NQ -0.5% — pullback from record highs (S&P 500 closed at 7,137.90 +1.05%; Nasdaq 24,657.57 +1.64% on 4/22). Pullback is profit-taking, not distribution.

### Macro risks

- Oil: Brent crude back above $103/barrel — Iran/US ceasefire stalled, Strait of Hormuz remains blocked. Macro headwind for tech margins and sentiment if sustained.
- Futures soft but prior session was a record — no structural concern at this level of pullback.

### Overnight catalysts — open positions

- NONE (no open positions)

### Overnight catalysts — watchlist

- **AVGO:** Meta–Broadcom partnership extended through 2029 for AI accelerator design (announced April 22 after hours). Strengthens thesis materially. Q1 FY26 earnings already beat (5% after-hours gain, AI revenue $10.7B quarter). Google Cloud collaboration expanded April 15. Analyst consensus: Strong Buy, avg target $438.43. Earnings next ~June 5 — no blackout concern. Setup strengthened. Price still tracked below $406.75 pivot as of April 22 EOD (~$379–$396 per last available data); Meta deal could push it higher intraday.
- **NVDA:** Rubin GPU (5× Blackwell perf, shipping H2 2026) confirmed. $2B strategic investment in Marvell + NVLink Fusion partnership. Analyst consensus: Strong Buy, avg target $274.91. Earnings ~May 28 — outside blackout. No near-term negative catalysts. ⚠️ NOTE: canslim-screener test (Apr 22) scored NVDA 67/100 — BELOW 75 threshold — due to volume (-14.6% below 50d avg) and no valid base pattern. Catalysts improve N-letter but volume and base still need resolution before entry is valid.
- **STX:** Barclays upgraded to Overweight April 22 ($625 PT from $425). Stock at ~$576.99 (per search) = +4.1% above $554 pivot. However: **EARNINGS BLACKOUT ACTIVE — April 28 earnings = 3 trading days away.** Do not enter. Setup potentially extended above pivot even post-earnings.
- **CBOE:** Earnings May 1, 2026 confirmed. Today (April 23) = 7 trading days before; blackout starts April 25 (Friday = 5 trading days before). Analyst consensus: Hold (9 analysts), avg target $286.56 — BELOW $310 pivot. Morgan Stanley: Sell, PT $273. Piper Sandler raised PT to $321 (bullish outlier). TMX Group acquisition of Cboe Australia/Canada for $300M is minor catalyst. **Removed — entering blackout Friday + bearish analyst consensus vs. pivot.**

### Buy-zone status

- AVGO: 🟡 WATCHING — catalyst strengthened (Meta deal); price vs pivot unverifiable (Alpaca blocked). Expected at or approaching $406.75 zone on gap-up open.
- NVDA: 🟡 WATCHING — thesis intact; 67/100 score below entry threshold; needs volume surge confirmation.
- STX: ⛔ EARNINGS BLACKOUT (April 28 — 3 trading days)
- CBOE: 🔴 REMOVED — earnings blackout starts Friday, avg analyst target below pivot

### Circuit breakers

- NONE active (0 trades placed, $2,500 equity, 0% drawdown)
- Weekly trades used: 0 of 3
- PDT count: 0 of 3

### Risks

- Alpaca API blocked all session — if this persists at /market-check, **no entries can be placed** (trade-executor requires live quote for sizing).
- Oil >$103 — monitor for XLK sector pressure if macro sentiment shifts.
- NVDA sub-75 conviction until volume/base resolves — do not force entry based on fundamental strength alone.



## 2026-04-19 — /weekly-prep (JUMPSTART)

**Research source:** perplexity + alpaca_bars (direct computation)
**Market direction pull:** 🟢 Confirmed Uptrend (day 7 since FTD 2026-04-08)
**Sector leaders (top 3, 4-week):** XLK Tech (+11.2%), XLY Consumer Discretionary (+7.3%), XLF Financials (+6.4%)
**Sector laggards (bottom 3):** XLE Energy (-5.0%), XLP Staples (-3.0%), XLU Utilities (-2.3%)

### Scan stats

- Candidates seeded (Perplexity leader list): 8 (WDC, STX, MU, LRCX, AVGO, PANW, CBOE, SNEX)
- Added from manual check: 2 (NVDA, META)
- Passed momentum filter (within 5% of 52wk high): 7 of 10
- Rejected (too far from pivot): PANW (-13.5%), SNEX (-20.0%), META (-7.5%)
- Full canslim-screener scoring: **DEFERRED** — this is a jumpstart routine; full scoring next Sunday /weekly-prep

### Market thesis (summarized)

- SPY $710.14 — at or near all-time highs, recovered from March selloff (low $631.97 on 3/30)
- Follow-through day fired 4/8: +2.55% on higher volume — confirms new uptrend
- 4 historical distribution days (3/19-3/27) all faded per O'Neil 6% rule
- Tech sector dominant on 4-week perf; AI/semi/storage names leading
- Financials (CBOE, SNEX via Zacks momentum screens) also performing well
- Energy/Staples/Utilities laggards — avoid

### Calendar risks 2026-04-20 to 2026-04-24

- STX earnings est. 2026-04-28 (≤10 trading days — block from new entry per 5-day rule)
- Monitor major mega-cap earnings (NFLX, TSLA, BA, INTC etc all report this week per normal calendar cadence — none currently on watchlist)

### Open positions — overnight check

- NONE (paper account reset to $2,500 cash, 0 positions)

### Risks

- **Jumpstart limitations:** Conviction scores above are momentum estimates, not full CAN SLIM scoring. First /market-check Monday 2026-04-20 should still validate via canslim-screener skill before entering any trade.
- 7-day old follow-through — still young, volatility could return
- Price is near all-time highs — be selective, wait for proper breakouts with volume

---

## 2026-04-23 — /eod-review (3:15 PM CT)

**Research source:** websearch_fallback (Alpaca 403 — day 4; Perplexity unavailable same reason)
**Close:** SPY ~$703.23 (-0.41%) | QQQ $650.81 (-0.34%) | S&P 500 index 7,108.40 (-0.41%) | Nasdaq 24,438.50 (-0.89%)
**Distribution days:** 1 of 25 effective (today: NEW — SPY -0.41%, vol estimated elevated; vol ratio unconfirmed)
**Market state:** 🟢 Confirmed Uptrend Day 12 (no transition; 1 dist day well below 5-day threshold)
**Positions held:** 0
**Actions today:**
  - sell-rules-engine: SKIPPED — no open positions to evaluate
  - TIGHTEN: none — no positions
  - SELL: none — no positions
**Circuit breakers:** NONE (equity $2,500.00, 0% daily P&L, 0% weekly P&L)
**P&L today:** $0.00 (0.00%) — no positions
**Equity:** $2,500.00
**Weekly trade count:** 0 of 3

### Market context
- S&P 500 reversed from intraday ATH to close -0.41%; Nasdaq -0.89%
- Drivers: IBM -7.94%, Salesforce -8.88%, ServiceNow -18% (earnings disappointments + AI revenue growth concerns)
- Oil spiked: WTI +4% crossing $96.50, Brent +3.5% above $105 (Iran/Hormuz)
- Texas Instruments +strong, United Rentals +strong (non-tech holding up)
- SPY still well above 50-day MA (~$675 est.) and 200-day MA (~$666 est.)

### Watchlist near-close status
- AVGO: $418–$422 range (closed ~$420, vs $422.65 ATH Apr 22). Consolidating -0.6% to -1.1% below ATH. Still 3.3% above $406.75 pivot. Today's tech sell did NOT break AVGO below pivot — actually resilient vs software names. Flag for Sunday re-score: evaluate if this is building a handle or just drifting.
- NVDA: ~$202.50 flat (same as prior close). At/just above $201.75 pivot. Conviction 67/100 — still blocks entry regardless of price. Needs volume surge + base to re-score.
- STX: Earnings April 28 = 2 trading days. Blackout. Do not enter.
- MU: +8.48% yesterday — strong AI memory demand. No pivot defined. Re-score Sunday.
- LRCX: ~$266 vs $273.50 pivot. Q3 earnings beat Apr 22 (BofA PT $330). Approaching pivot zone. Re-score Sunday.

### Carry-forward for /pre-market tomorrow (2026-04-24 Fri)
- 1 distribution day logged — still 4 away from Under Pressure. Uptrend structurally intact.
- Software sector damage today (IBM, SFDC, NOW) = not in our watchlist, minimal impact on thesis
- Oil >$105 = watch for macro spillover into XLK
- AVGO resilience relative to software sell-off is a positive signal — monitor
- Alpaca API blocked day 4 — if still blocked Friday, flag for weekend investigation. No entries can be placed without live quote for sizing.

---

## 2026-04-23 — /market-check (10:00 AM CT)

**Research source:** websearch_fallback (Alpaca 403 — host not in network allowlist, day 3 of blockage; Perplexity unavailable same reason; WebSearch used for all price/volume data)
**Market direction:** 🟢 Confirmed Uptrend Day 12 (SPY $707.75–$712.06 intraday, +0.80% vs Apr 22 close — no distribution day)
**Circuit breakers:** NONE active (0 positions, $2,500 equity, 0% drawdown)
**Open positions:** 0 | **Weekly trades used:** 0 of 3

### Abort gates — CLEAR
All 8 gates passed. Entries allowed in principle.

### ⚠️ Critical discovery: AVGO breakout missed due to API blockage

AVGO closed at all-time high **$422.65 on April 22** (per web search / Morningstar). Our prior memory files showed AVGO "below $406.75 pivot" based on stale/blocked Alpaca data. The stock broke out on April 22 on AI chip demand catalyst (+4% day) and Meta partnership news. We were unable to observe this because Alpaca API returned 403 all day.

**Impact:** Entry opportunity on the breakout day (April 22) was missed. Today (April 23) AVGO consolidating at $418–$421 on very light volume (532K vs 22.49M ADV at 30–60 min into session — projects to ~3.5M full day vs required ≥31.5M for +40% surge). Not a valid CAN SLIM entry today.

### Watchlist trigger evaluation

| Symbol | Pivot | Today's Price | Delta | Volume Check | Verdict |
|---|---|---|---|---|---|
| AVGO | $406.75 | $418–$421 (current ~$420) | +3.3% above pivot | 532K vs 22.49M ADV (~2% of avg) — FAR below +40% requirement | 🔴 NOT TRIGGERED (consolidation day, no volume) |
| NVDA | $201.75 | $199–$202.75 (current ~$202.50) | +0.37% above pivot | ~80M vs 174M ADV — below average | 🔴 NOT TRIGGERED (conviction 67/100 < 75 AND volume below avg) |
| STX | $554.00 | — | — | — | ⛔ EARNINGS BLACKOUT (Apr 28 = 2 trading days) |
| CBOE | removed | — | — | — | 🔴 REMOVED |

### Mid-morning position health check
No open positions. Skipped.

### Bench promotion check

| Symbol | Pivot | Today | Delta | Status |
|---|---|---|---|---|
| LRCX | $273.50 | $265.55 (range $262.42–$268.76) | -2.9% below | Stays bench. High of day $268.76 was within 2% ($268.03 threshold) briefly, but current -2.9%. Q3 earnings released Apr 22; B of A raised PT $330. Re-score Sunday. |
| MU | undefined | +8.48% surge today | — | No pivot defined. Estimated ~70 conviction (below 75). Stays bench. Strong AI memory demand. Re-score Sunday. |
| PLTR | UNSCORED | ~$148 | — | Skip — unscored per directive |
| CRWD | UNSCORED | ~$454 | — | Skip — unscored per directive |
| GS | UNSCORED | ~$926 | — | Skip — unscored per directive |

### Result: NO ENTRIES — nothing triggered.

### Carry-forward for /eod-review (3:15 PM CT)
- AVGO: Watch whether consolidation tightens above $418 on any volume pickup. If volume surges while ≤$427 (5% chase ceiling), re-evaluate entry. Otherwise wait for Sunday re-score with fresh pivot.
- NVDA: Still at/near $201.75 pivot. Conviction 67/100 blocks entry regardless of price. Need base formation + volume to re-score above 75.
- STX: Earnings April 28. Do not enter. Post-earnings re-evaluation.
- LRCX: Watch for pivot retest near $273.50 with Q3 beat catalyst. Re-score Sunday.
- MU: Strong day (+8.48%). Flag for Sunday /weekly-prep scoring.

---

## 2026-04-22 — /market-check (10:00 AM CT)

**Research source:** websearch_fallback (Alpaca + Perplexity both returned 403 — host not in network allowlist; WebSearch used for price/volume data)
**Market direction:** 🟢 Confirmed Uptrend (day 10 — SPY +0.43% today, no distribution day)
**Circuit breakers:** NONE active
**Open positions:** 0 | **Weekly trades used:** 0 of 3

### Abort gates — CLEAR
All gates passed. Entries allowed.

### Watchlist trigger evaluation

| Symbol | Pivot | Current | Delta | Volume Check | Verdict |
|---|---|---|---|---|---|
| AVGO | $406.75 | ~$390–$396 | -2.6% to -4% below | Not at pivot | 🔴 NOT TRIGGERED |
| NVDA | $201.75 | ~$201.14 | -0.3% below | 1.31M at 90 min; pace 5.7M projected vs 199.7M required (3% threshold) | 🔴 NOT TRIGGERED |
| CBOE | $310.00 | ~$297.64 | -4.0% below | Not at pivot | 🔴 NOT TRIGGERED |
| STX | $554.00 | — | — | — | ⛔ EARNINGS BLACKOUT |

**NVDA note:** Intraday high touched $202.75 (above pivot) but returned below. Volume flat vs ADV 142.66M — no volume confirmation. Not a valid entry.

### Mid-morning position health check
No open positions. Skipped.

### Bench promotion check
- LRCX (~70): API blocked, no live quote. Remains bench — no change.
- MU (~70): API blocked, no live quote. Remains bench — no change.
- PLTR, CRWD, GS: ⚠️ UNSCORED — skip until Sunday /weekly-prep.

### Result: NO ENTRIES — nothing triggered.

---

## 2026-04-22 — /eod-review

**Research source:** websearch_fallback (Alpaca 403 — host not in allowlist)
**Close:** SPY $706.14 (+0.29%) | QQQ $653.01 (+1.35%)
**Distribution days:** 0 of 25 effective (today: NO — SPY up, QQQ up)
**Market state:** 🟢 Confirmed Uptrend Day 10 (no transition)
**Positions held:** 0
**Actions today:** None — no open positions; sell-rules-engine skipped (nothing to evaluate)
**Circuit breakers:** None (equity flat at $2,500, 0% day P&L)
**P&L today:** $0.00 (0.00%) — no positions
**Equity:** $2,500.00

### Watchlist near-close status
- NVDA: intraday high $201.44 vs $201.75 pivot — missed by $0.31 (−0.15%). Volume not checked (API blocked). No entry.
- AVGO: still below $406.75 pivot (bid ~$379–$396 range from pre-market). Not in zone.
- CBOE: still below $310 pivot (~$297–$301). Not in zone.
- STX: ⛔ earnings blackout (est. 2026-04-28)

### Carry-forward for /pre-market tomorrow (2026-04-22 Wed)
- NVDA within striking distance of $201.75 pivot — if tech gap-up overnight, could trigger early
- CBOE building toward $310 pivot with positive UBS upgrade backdrop
- Market uptrend intact, no circuit breakers, 0 weekly trades used (3 available)

---

## 2026-04-22 — /pre-market

**Research source:** perplexity
**Market direction pull:** 🟢 Confirmed Uptrend (day 9 since FTD 2026-04-08)
**Futures overnight:** ES +0.5%, NQ +0.6% — bullish lean into open
**Macro catalyst:** Iran ceasefire extended indefinitely (geopolitical relief); treasury specs adding net shorts (rate pressure watch)

### Overnight catalysts — watchlist

- **AVGO:** Dual signal — Google/Marvell partnership rumor raises competition concern (slight negative); Meta deepening chip push with Broadcom (positive). Apr 21 snapped nine-session win streak. Last bid ~$379 (Alpaca EOD) — data inconsistency noted (Perplexity showing ~$317). Regardless, WELL BELOW $406.75 pivot. Setup not ready.
- **NVDA:** No material overnight news. Partnership announcements (Adobe, WPP AI agents) = positive long-term but not price-moving. Last mid ~$197.42, pivot $201.75 — within 2.1%.
- **CBOE:** Positive — UBS raised PT to $305 (Neutral), hit all-time high close of $305.82 recently. Prediction market expansion + CNBC deal = incremental catalysts. Last ~$301, pivot $310 — within 3%.
- **STX:** BLOCKED — earnings ~2026-04-28, within 10 trading days. Do not enter per 5-day rule.

### Buy-zone status

- AVGO: 🔴 BELOW ZONE — $379 bid vs $406.75 pivot (~-6.8%); catalyst mixed. Watch only.
- NVDA: 🟡 WATCHING — ~$197.42 vs $201.75 pivot (-2.1%). No broken thesis. Volume breakout needed.
- CBOE: 🟡 WATCHING — ~$301 vs $310 pivot (-2.9%). Positive catalysts. Near zone.
- STX: ⛔ BLOCKED — earnings blackout

### Open positions

- NONE (account: $2,500 cash, 0 positions, no circuit breakers)

### Circuit breakers

- NONE active

---

## 2026-04-22 — Pipeline validation (canslim-screener end-to-end test)

**Purpose:** Validate the full CAN SLIM data pipeline after Tier 1–3 fixes (bars endpoint, preflight gate, I-letter proxy, universe seeder, caching tier).

### Test target: NVDA

**Preflight (all PASS):**
- Alpaca bars: 60 daily bars returned (2026-01-22 → 2026-04-17) ✅
- AV OVERVIEW: EPS=4.91, ROE=101.5%, SO=24.3B, PercentInst=69.74% ✅
- AV EARNINGS: 108 quarters, 27 annuals ✅
- Perplexity N-letter: 5 bullets, usable signal ✅

**Letter scores:**
| Letter | Score | Basis |
|---|---|---|
| C — Current qtrly EPS | 20/20 | Q4 FY26 +82% YoY, accelerating (32→54→60→82 over 4q) |
| A — Annual EPS + ROE | 15/15 | FY24/25/26 all ≥25%; ROE 101.5% |
| N — New catalyst + proximity | 10/15 | At new high ✅; no new product/mgmt catalyst (per Perplexity) |
| S — Supply/demand | 5/15 | Float 24.3B (huge); **volume -14.6% BELOW 50d avg**; active buyback |
| L — Leader | 10/15 | 60d return +9.1% vs SPY +3.1%; sector top-3 (XLK); RS estimated |
| I — Institutional | 7/10 | PercentInst 69.74% (healthy band); EDGAR tier unimplemented |
| Base pattern | 0/10 | `no_valid_base` — V-recovery, no handle or consolidation |
| **TOTAL** | **67/100** | **REJECT — conviction_below_threshold (<75)** |

**Data source contrast (Perplexity vs Alpha Vantage):** Perplexity incorrectly stated "Q4 earnings on April 23" — AV earnings_calendar authoritative source showed NVDA next earnings **2026-05-20** (28 days out). Pipeline correctly used AV as source of truth.

### Key finding (validates preflight design)

The pipeline correctly **rejected** a stock that *looks* like a breakout winner (NVDA at new 52w high with stellar fundamentals) because the **volume surge test failed (-14.6% below avg when +40% is required)** and **no valid base pattern** formed. Human intuition on this setup would likely be "buy" — the system correctly said "no." Fundstrat's analyst independently flagged false-breakout risk in the Perplexity research.

### Warnings emitted (honest uncertainty, not hidden)

- `breakout_volume_weak`
- `no_valid_base`
- `analyst_pt_cut` (HSBC 320→310)
- `perplexity_false_breakout_risk_flag`
- `rs_rank_estimated` (full universe percentile calc still pending — current impl compares to SPY only)
- `institutional_edgar_tier_unimplemented` (using AV PercentInstitutions as Tier 1 proxy)

### Pipeline status

| Gap item | Before | After |
|---|---|---|
| 1A Alpaca bars endpoint | ❌ returned null | ✅ 60 bars with date range + feed=iex |
| 1B Data coverage preflight | ❌ silent zeros | ✅ explicit INSUFFICIENT_DATA reject |
| 2A I-letter data source | ❌ EDGAR scaffold only | ✅ AV PercentInstitutions (Tier 1) |
| 2B Universe seeder | ❌ no script | ✅ scripts/build-universe.sh (47 tickers from XLK test) |
| 3A AV quota management | ❌ 24h TTL only | ✅ 7d fundamentals, 12s throttle, stale fallback |
| 4A End-to-end screen | ❌ never run | ✅ NVDA scored 67/100 with all 7 letters populated |

**Next:** Sunday's `/weekly-prep` can now run canslim-screener on the full ~120-name universe and produce a real scored watchlist to replace the jumpstart bucket.

---

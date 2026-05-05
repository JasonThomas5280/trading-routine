# Market Direction — The "M" in CAN SLIM

**3 out of 4 stocks follow the market.** This file is read by EVERY routine before deciding whether new entries are allowed. Updated by `/pre-market` daily and `/eod-review` daily (close-of-day truth).

---

## Current Status

**Status:** 🟢 **CONFIRMED UPTREND**

**Last updated:** 2026-05-05 (Tue) — `/eod-review`
**Confirmed Uptrend days:** 26 (since follow-through day 2026-04-08)
**Distribution days (last 25 sessions):** 3 effective (Apr 23, Apr 28, May 4) — unchanged; May 5 was UP day (+0.97%), cannot be distribution
**Most recent follow-through day:** 2026-04-08 (SPY +2.55%, volume 94M vs 70M prior = higher-volume confirmation)

**⚠️ SECTOR ROTATION ALERT:** RRG (Relative Rotation Graph) as of May 3 shows XLK (Technology) has moved into the LAGGING quadrant (below-average RS ratio, declining momentum). XLI (Industrials), XLE (Energy), XLB (Materials) are in the LEADING quadrant. By strict 4-week trailing return math, XLK still ranks #1 (Nasdaq +15.3% in April alone). The divergence between RRG momentum signal and 4-week trailing math is a WARNING: leadership is rotating. Flag all XLK entries this week with `sector_momentum_warning`. Monitor XLK's 4-week RS vs. XLI/XLE weekly — if XLK drops below #3 in trailing 4-week RS, sector blackout for new XLK entries.

**⚠️ ALPACA API BLOCKED — Day 27 consecutive.** 403 "Host not in allowlist." All order execution impossible. All live price/volume checks impossible. Research-only mode — no execution until API restored.

**SPY close 2026-05-05 (Tue — most recent session):** ~$727.22 est. (S&P 500: ~7,270, +0.97%, NEW ATH) | QQQ ~$680.08 est. (Nasdaq: ~25,343, +1.1%, NEW ATH) | Driver: Iran/UAE tensions easing (ceasefire signals; oil WTI retreating from $106.42 peak); Intel +10% (Apple/Samsung US chip manufacturing talks); broad risk-on recovery; Russell 2000 new intraday records | SPY 50d MA: ~$682 est. | SPY above 50d MA: ~+6.6% est. | NOT A DISTRIBUTION DAY (UP day) | `research_source: websearch_fallback` | **Alpaca blocked day 27**

**SPY close 2026-05-04 (Mon):** ~$720.33 est. (S&P 500: 7,200.75, −0.41%) | QQQ ~$673.50 est. (Nasdaq: 25,067.80, −0.19%) | Dow: 48,941.90 (−1.13%, −557 pts) | Driver: Iran launched missiles at UAE; UAE intercepted; oil WTI +4.39% to $106.42, Brent +5.8% to $114.44 | SPY 50d MA: ~$677.42 | SPY above 50d MA: +6.3% est. | `research_source: websearch_fallback` | **Alpaca blocked day 25** | ⚠️ DISTRIBUTION DAY #3 CONFIRMED

**SPY close 2026-05-01 (Fri):** ~$723.30 est. (S&P 500: 7,230.12, +0.29%, NEW ALL-TIME HIGH) | SPY 50d MA: $677.42 | SPY above 50d MA: +6.8% | SPY 200d MA: $666.46 | SPY above 200d MA: +8.5% | QQQ close: $674.78 | QQQ 50d MA: $612.66 | QQQ above 50d MA: +10.1% | QQQ RSI: 74.85 (mildly overbought, trend intact) | `research_source: websearch_fallback` | **Alpaca blocked day 22**

**SPY close 2026-04-30 (Thu):** ~$718.65 est. (S&P 500: 7,209.01, +1.02%; NEW ALL-TIME HIGH — first close above 7,200; `research_source: websearch_fallback`)
**SPY close 2026-04-29 (Wed):** ~$711.37 est. (S&P 500: 7,135.95, -0.04% — FOMC hold as expected; not a distribution day)
**SPY close 2026-04-25 (Fri):** ~$716.52 est. (S&P 500 index: 7,165.08, +0.80% Fri; `research_source: websearch_fallback`)
**SPY close 2026-04-24:** $713.94 (ALL-TIME HIGH; +4.32% day driven by Intel +23.6%, AMD +13.9%, NVDA $5T retake; semiconductor index up 18th consecutive session)
**SPY 50-day MA (2026-04-24):** ~$676.07 (est. per Barchart/TipRanks; `research_source: websearch_fallback` — Alpaca blocked)
**SPY above 50-day MA:** ~+6.0% est. (50d MA ~$678 est., SPY ~$718.65)
**SPY 200-day MA (2026-04-30):** ~$674 est.
**SPY above 200-day MA:** ~+6.6% est.
**SPY RSI (daily):** 70.45 — mildly overbought but trend intact; 12/12 MA timeframes = Strong Buy
**SPY technical trend:** Strong Buy across all MA timeframes (5d through 200d)

**QQQ close 2026-04-24:** ~$661.42 est. (Nasdaq +1.63% from $650.81; Alpaca blocked — estimate only; record close)
**QQQ 50-day MA (2026-04-24):** $649.42 (per Barchart)
**QQQ above 50-day MA:** +1.8% (+$11.99)
**QQQ 200-day MA (2026-04-24):** $607.11
**QQQ above 200-day MA:** +8.9%

**Key April 24 context:** S&P 500 and Nasdaq closed at NEW ALL-TIME HIGHS. Semiconductor index up 18th straight day. Intel +23.6% (blockbuster earnings), AMD +13.9%, Nvidia retook $5T market cap, AVGO at ATH $429.31 (Apr 23). SPY RSI 70.45 = mildly overbought but NOT a sell signal in a confirmed uptrend — overextension concerns are secondary to trend confirmation. **Uptrend strengthening, not deteriorating.**

**Monday April 27 open (actual):** SPY -0.17%, Nasdaq -0.35%, Dow -0.32%. Muted/slightly red open on Iran peace-deal-stall headlines. Consistent with pre-market forecast. No structural concern. `research_source: websearch_fallback`
**Monday April 27 close (est.):** SPY ~$715 est. (-0.17% from ~$716.52 Fri) — NOT a distribution day (< 0.2%). QQQ ~$661–663 est. (-0.35% intraday pace). Distribution day count unchanged: 1 effective (Apr 23 only). `research_source: websearch_fallback`
**NVDA Apr 27 ACTUAL close:** $216.61 (new 52-week high $216.83 — confirmed via WebSearch Apr 28 pre-market). EOD estimate was ~$210-211; actual was $216.61 (+$5-6 vs estimate). Stock continued rallying after /market-check.

**Tuesday April 28 pre-market (overnight check):**
- ES futures: 7,189.50 (-0.23%) | NQ futures: 27,259.75 (-0.66%) | Dow: +130 pts (+0.26%)
- Tech underperforming: oil spike (Iran/Hormuz stall) + software risk-off
- NVDA premarket: $200.64 (-7.4% from Mon close — below $201.75 pivot; tech-wide pullback, no company news)
- Market direction: Confirmed Uptrend intact. Futures weakness = normal pullback after ATH run. Not concerning.
- FOMC Day 1 today (no decision). Decision Wednesday ~12PM CT.
- `research_source: websearch_fallback`

**Tuesday April 28 regular session (10:00 AM CT /market-check):**
- SPY range: $712.30–$715.63, opened $713.17, intraday -0.46% (⚠️ above -0.20% dist day threshold — **not yet confirmed; volume unconfirmed, Alpaca blocked**)
- QQQ range: $642.21–$650.20, opened $648.41 (~-2% below Monday close est. $661–663)
- **Primary driver:** OpenAI revenue/user growth miss (WSJ April 28). Chipmakers NVDA/AVGO/AMD -3–5%; Oracle -6%+. AI capex sustainability narrative negative for tech sentiment.
- **Market state:** Confirmed Uptrend intact. No state change. SPY well above 50d MA (~$676 est.). Distribution day count = 1/25 pending today's close confirmation.
- **⚠️ Potential dist day #2:** If SPY closes at current levels (~-0.46%) on elevated volume = 2/25. Still far below 5-day "Under Pressure" threshold. Note for /eod-review.
- NVDA: $210.23 (range $208.70–$214.20) — above $201.75 pivot, volume pace 28% of required. No entry.
- `research_source: websearch_fallback` | Alpaca blocked day 12

**Wednesday April 29 pre-market (/pre-market check):**
- ES futures: -0.09% | NQ futures: +0.06% — essentially flat. Cautious pre-FOMC positioning.
- **⛔ FOMC decision today ~12 PM CT. No new entries before 1 PM CT.**
- **⛔ Mag-7 earnings AH tonight: MSFT, META, AMZN, GOOGL.** XLK sentiment wildcard for Thursday.
- NVDA pre-mkt: ~$209–$213 (in buy zone $201.75–$211.84; above pivot; JPMorgan cautionary note — not a downgrade).
- STX: Up ~18% pre-mkt on massive Q3 FY2026 beat (EPS $4.10 +115% YoY; rev $3.11B +44% YoY; Q4 guided $5.00 EPS).
- Market direction: Confirmed Uptrend Day 18 intact. 2/25 dist days (Apr 23 + Apr 28). No state change.
- AVGO ~$400 (below pivot); LRCX ~$251 (corrected — well below $273.60 pivot; China export risk flagged).
- `research_source: websearch_fallback` | Alpaca blocked day 14

**Wednesday April 29 /market-check (10:00 AM CT):**
- SPY ~$712 (flat/slightly down pre-FOMC) | QQQ ~$659.75 | `research_source: websearch_fallback` | Alpaca blocked day 15
- **⛔ FOMC restriction active — no entries before 1 PM CT.** No trades executed.
- NVDA intraday: opened $202.24, range $199.03–$202.75 (briefly dipped below $201.75 pivot in first 90 min; pre-FOMC drift). Setup 87/100 intact.
- STX: $660–$687 (post-earnings gap; 68/100 REJECT maintained — no entry).
- AVGO: ~$400 est. (below $406.75 pivot — no entry).
- Open positions: 0 | sell-rules-engine skipped (no positions) | P&L: $0 | Equity: $2,500
- Mag-7 earnings AH tonight: MSFT, META, AMZN, GOOGL (results critical for Thu XLK direction)
- Market state: Confirmed Uptrend Day 18 intact. 2/25 dist days. No state change.

**Wednesday April 29 close (/eod-review confirmed):**
- S&P 500: 7,135.95 (−0.04%) | Nasdaq: 24,673.24 (+0.04%) | `research_source: websearch_fallback` (Alpaca blocked day 16)
- Distribution day: NOT confirmed (−0.04% < −0.20% threshold). Dist count: **2/25**.
- FOMC: Held 3.5%–3.75%. 4 dissents (most since Oct 1992). Powell final meeting as chair. Oil +6% to Brent $118.
- NVDA close: $209.25 (above $201.75 pivot) | AVGO close: $405.54 (0.3% below $406.75 pivot)
- Market state: 🟢 Confirmed Uptrend Day 19. 0 positions.

**Thursday April 30 pre-market (/pre-market check):**
- ES futures: ~7,176.75 (+0.12%) | NQ futures: ~27,382.25 (+0.21%) | Alpaca blocked day 17
- Mag-7 AH April 29: ALL BEAT — MSFT $4.27 EPS (Azure +40%); AMZN AWS +28%, +4% AH; GOOGL Cloud +63%; META beat (capex raised $125-145B). Net: very positive for XLK.
- Hyperscaler AI capex 2026: MSFT $190B + GOOGL $190B + AMZN ~$200B + META $125-145B = ~$700B+ total.
- GDP Q1 + Core PCE release today before open. AAPL earnings AH tonight.

**Thursday April 30 /market-check (10:00 AM CT):**
- SPY ~+0.46% | Nasdaq ~+0.65% | Alpaca blocked day 18
- GDP Q1 +2.0% (mild miss vs +2.2%, big beat vs GDPNow 1.2%). Core PCE +0.3% MoM / +3.2% YoY — in line.
- Oil: Brent spiked to $126 (Iran/Hormuz), reversed to ~$114. Inflationary risk present but not escalating.
- NVDA: $209.35 (range $207.58–$212.72, in buy zone). Setup intact; Alpaca blocked = no execution.
- AVGO: ~$405.45 (below $406.75 pivot; 74/100 below threshold).

**Thursday April 30 close (/eod-review):**
- S&P 500: 7,209.01 (+1.02%) | Nasdaq: 24,892.31 (+0.89%) | Dow +1.62% | NOT a distribution day
- **NEW ALL-TIME HIGH** — first S&P close above 7,200. Best month since 2020: S&P +10.4%, Nasdaq +15.3%.
- **NVDA: -4.1% to $200.37** — BELOW $201.75 pivot. Google announced direct TPU chip sales to select customers. RS deterioration on an up-market day.
- **AVGO: ~$412.65 (+~3%)** — ABOVE $406.75 pivot. META $300B+ AI chip commitment confirmed.
- Dist day count: 2/25 unchanged. Uptrend Day 20. Alpaca blocked day 18.

**Friday May 1 pre-market (/pre-market check):**
- ES futures: +0.19% (~7,155) | NQ futures: near flat | `research_source: websearch_fallback` | Alpaca blocked day 19
- **AAPL Q2 FY2026 AH (April 30 — MASSIVE BEAT):** $111.2B revenue +17% YoY (record), EPS $2.01; AH +1.86%; pre-market +3%. China +28%.
- Jobless claims April 30: 189K (cycle low — bullish).
- **NVDA pre-market:** ~$210 (+4.8% bounce from $200.37 close). Back ABOVE $201.75 pivot. Google TPU competition risk noted; score may degrade on re-score. Watch /market-check.
- **AVGO pre-market:** ~$415 est. (above $412.65 April 30 close; positive XLK). Score 74/100 — needs re-score.
- Dist count: 2/25 unchanged. Uptrend Day 20 intact. No new entries until Alpaca API restored.

**Friday May 1 /market-check (10:00 AM CT):**
- S&P 500 opened 7,161.75 (-0.66% gap from Apr 30 ATH 7,209.01); recovering intraday, est. +0.54% from open → ~7,200 area | `research_source: websearch_fallback` | **Alpaca blocked day 20**
- **⛔ Abort gate: Alpaca API 403 "Host not in allowlist" — Day 20 consecutive. All order execution impossible. No trades.**
- **NVDA:** Opened ~$209.93, current ~$199.57 (range $198.70–$210.30). **BELOW $201.75 pivot (-$2.18 / -1.1%).** Volume: 53.3M at 90 min → pace ~231M/day (above 208M req threshold — volume gate would pass). **Price gate FAILS.** ⚠️ **RS DETERIORATION: -4.9% intraday on up-market day (+0.54%). Heavy distribution volume on down move. 2nd consecutive session of -4%+ relative weakness vs. market (Apr 30: -4.1% vs +1.02%; May 1: -4.9% vs +0.54%). Score degrading from 87 → est. 75–80; ≥75 threshold at risk. No entry; full re-score needed when APIs restore.**
- **AVGO:** ~$402–$410 est. (below $406.75 pivot). 74/100 (below threshold). No entry.
- Open positions: 0 → sell-rules-engine skipped. Weekly trade count: 0/3.
- Distribution day watch: S&P opened lower but recovering. NOT a distribution day if close holds above open level. Confirm at /eod-review.
- **Market state: 🟢 Confirmed Uptrend Day 20. 2/25 dist days unchanged. No state change.**

**Friday May 1 close (/eod-review 3:15 PM CT):**
- S&P 500: 7,230.12 (+0.29%, NEW ATH) | Nasdaq: 25,114.44 (+0.89%, NEW ATH) | Dow: 49,499.27 (-0.31%) | `research_source: websearch_fallback` | **Alpaca blocked day 21**
- SPY est. ~$723.30 (range $719.75–$724.77) | QQQ close $674.78 (+1.05%)
- Distribution day: **NOT CONFIRMED** — UP day, +0.29%. Cannot be distribution. Dist count: **2/25 unchanged.**
- **NVDA close: ~$199.57 est.** — BELOW $201.75 pivot for 2nd consecutive session. 3 sessions of severe RS underperformance vs market (Apr 30: -4.1%; May 1: -4.63% est.). Score degrading from 87 → est. 75–80; full re-score at Monday /pre-market.
- **AVGO close: $405.45** — BELOW $406.75 pivot. Score 74/100. No entry.
- Open positions: 0 | sell-rules-engine: SKIPPED | Actions: NONE | Circuit breakers: NONE
- **Market state: 🟢 Confirmed Uptrend Day 21. 2/25 dist days. No state change.**

**Monday May 4 pre-market (/pre-market check):**
- ES futures: opened +0.2% at 6 PM ET Sun; dipped -0.1% on Iran/Hormuz US warship reports (ship turned back); recovered +0.2%. Net: cautious/flat.
- NQ futures: near flat to +0.2% | Dow: dipped -193pts, recovered to +102pts
- **⚠️ GEOPOLITICAL:** Iran Strait of Hormuz — US warship turned back; oil elevated. Persistent risk.
- MU pre-market: $554.20 (+2.21%) — **NEW ATH**. Setup: 🟢 READY (est. +1.5% above ~$545-546 pivot). Contingent on Alpaca restore + score ≥75.
- NVDA pre-market: $201.76 — **AT $201.75 PIVOT**. Score est. 71/100 (below threshold). Pentagon AI contracts positive. No volume data.
- AVGO: session ~$414-421 — above $406.75 pivot (+3.5%). Score expected 76-80 with live data.
- PLTR earnings AH tonight; AMD blackout (earnings tomorrow AH May 5)
- Market state: 🟢 Confirmed Uptrend Day 22 (pre-market; session not yet open). 2/25 dist days unchanged.
- `research_source: websearch_fallback` | **Alpaca blocked day 23**

**Monday May 4 /market-check (10:00 AM CT):**
- S&P 500: -0.1% intraday | Nasdaq: ~flat | Dow: -0.4% | `research_source: websearch_fallback` | **Alpaca blocked day 24**
- ⛔ **Abort gate: Alpaca API 403 "Host not in allowlist" — Day 24 consecutive. All order execution impossible. No trades.**
- Geopolitical: Iran Strait of Hormuz — two strikes on US patrol boat; US warship turned back; oil Brent +1.5% to ~$110 (WTI ~$102). Vessels successfully transiting. Risk elevated but contained.
- FedEx/UPS: -8%+ each (Amazon opening distribution network = competition shock). Logistics sector drag; no direct watchlist impact.
- PHLX semiconductor index: 22nd win in last 23 sessions; 15th intraday ATH of 2026 — semi leadership intact.
- **Distribution day: NOT a dist day — S&P 500 -0.1% < -0.20% threshold. Count remains 2/25.** (Confirm at /eod-review)
- **MU:** ~$584 intraday est. (opened +4.06% from $539.91 Fri close; D.A. Davidson $1,000 PT catalyst). 7.1% above ~$545-546 pivot → **EXTENDED** (outside 5% buy zone). Volume 40.22M vs ADV 37.84M = +6.3% (BELOW +40% required). Price gate FAILS + volume gate FAILS. 🔴 NO ENTRY. `climax_top_risk_flag` active (+8.3% from Fri close + D.A. Davidson $1,000 PT = potential exhaustion signal).
- **NVDA:** ~$198.61 (-0.48% intraday). BELOW $201.75 pivot. Score 71/100 (below 75 threshold). 🔴 NO ENTRY.
- **AVGO:** ~$421.09 (+0.88% intraday). 3.5% above $406.75 pivot (within buy zone). Score 72/100 (below 75 threshold + Alpaca volume unverifiable). 🔴 NO ENTRY.
- **PLTR earnings AH tonight:** Q1 EPS consensus $0.28 (+115% YoY); revenue $1.54B (+74% YoY); options pricing 10.55% swing. XLC sector direction setter for Tuesday.
- Open positions: 0 | sell-rules-engine: skipped (no positions) | Actions: NONE | Weekly trades: 0/3
- Market state: 🟢 Confirmed Uptrend Day 22. 2/25 dist days. No state change.

**Tuesday May 5 pre-market (/pre-market check):**
- ES futures: 7,231.25 (+0.01%) | NQ futures: 27,776.00 (flat) | Dow futures: +0.04% — essentially flat open expected
- No major macro data today. AMD earnings AH (key event; blackout all day).
- **PLTR Q1 AH (May 4):** EPS $0.33 vs $0.28 cons.; Rev $1.63B vs $1.54B (+85% YoY); Q2 guide $1.8B vs $1.68B; FY2026 $7.65-7.66B vs $7.27B. AH reaction: only +2% (46× fwd revenue — beat already priced). PLTR watchlist status unchanged (removed).
- **MU pre-market $596.57 (+8.2% from ~$542 close):** Sandisk Q3 massive beat = peer read-through. $596.57 vs ~$545-546 pivot = **+9.4% EXTENDED** (>5% buy zone ceiling ~$572). `climax_top_risk_flag` ESCALATED. 🔴 DO NOT CHASE.
- **NVDA ~$198.12 (below $201.75 pivot):** CEO Jensen Huang confirms **China market share = ZERO** due to US export restrictions. Material revenue headwind. Score drops 71 → est. 60-65/100. **REMOVED from Primary watchlist.**
- **AVGO ~$416-420 est. (+2.4% above $406.75 pivot):** No negative catalyst. AI chip $100B 2027 target intact. Est. 72/100 (expected 76-80 with live data). 🟡 WATCHING.
- **AMD blackout all day (earnings AH tonight):** EPS cons. $1.29 (+33% YoY), Rev $9.90B. High bar (stock +66% past month). Re-score at /pre-market May 6.
- Dist count: 3/25 unchanged. Market state: 🟢 Confirmed Uptrend Day 24. No state change.
- `research_source: websearch_fallback` | **Alpaca blocked day 26**

**Tuesday May 5 /market-check (10:00 AM CT):**
- S&P 500: ~+0.5% intraday (7,236 est.) | QQQ ~$672.12 (range $668.90–$676.73) | Russell 2000: +1.39% | `research_source: websearch_fallback` | **Alpaca blocked day 26 — live test confirmed 403**
- ⛔ **Abort gate: Alpaca API 403 "Host not in allowlist" — Day 26 consecutive. All order execution impossible. No trades.**
- Market driver: Iran tensions easing (UAE ceasefire signals, oil pulling back from WTI $106 peak). Broad risk-on recovery. Intel +10% (Apple/Samsung US chip manufacturing talks). Semi sector broadly strong.
- **Not a distribution day — UP day, dist count 3/25 unchanged.**
- **MU:** ~$607 intraday (+5% from $577.79 actual May 4 close). ⚠️ **DATA CORRECTION: prior EOD estimate of $542 was materially wrong; actual May 4 close = $577.79.** $607 vs ~$546 pivot = **+11.2% EXTENDED** (buy zone ceiling ~$573). `climax_top_risk_flag` ACTIVE. 🔴 **DO NOT CHASE.** Trigger: FAILS price gate (>5% above pivot).
- **AVGO:** $422.85 (range $419.70–$426.69, +1.5% from prev close $416.50). Volume 15.14M at ~90 min vs ADV 19.15M → pace ~65.5M/day = **+242% above ADV** (volume gate ✅ PASSES). Price: +3.9% above $406.75 pivot (within 5% buy zone ✅). **But score 72/100 < 75 threshold** ❌. Trigger: FAILS conviction gate. If Alpaca restores AND AV confirms score ≥75 at /eod-review → enter tomorrow.
- **AMD:** $341.54 close yesterday (-5.27% pre-earnings pullback; ATH $362.79 May 1). ⛔ BLACKOUT. Earnings AH tonight. No entry.
- **STX, GEV, META, GOOGL:** No change from pre-market. No triggers.
- Open positions: 0 | sell-rules-engine: skipped | Actions: NONE | Weekly trades: 0/3
- Market state: 🟢 Confirmed Uptrend Day 25. 3/25 dist days. No state change.

**Tuesday April 28 close (/eod-review confirmed):**
- S&P 500: 7,138.80 (−0.49% from Monday) | Nasdaq: 24,663.80 (−0.9%) | `research_source: websearch_fallback` (Alpaca blocked day 13)
- SPY est. ~$711.66 | QQQ est. ~$658.27
- Distribution day: **CONFIRMED** — magnitude −0.49% exceeds −0.20% threshold; elevated volume strongly implied by chip-wide selloff (NVDA/AVGO/AMD/ORCL all −2–5% on OpenAI revenue miss); vol ratio unconfirmed (Alpaca blocked)
- Dist day count: **2/25** (Apr 23 + Apr 28). Confirmed Uptrend Day 17 intact. No state change.
- Watchlist EOD: NVDA ~$209 est. (−3.4% from $216.61 Mon close); AVGO ~$409 est. (−2.2%); LRCX ~$265 est. (chip capex sentiment drag); STX earnings AH tonight
- Open positions: 0 | sell-rules-engine: skipped (no positions) | P&L: $0 (0%) | Equity: $2,500

**⚠️ FOMC DATE CORRECTION (2026-04-27 market-check):** Prior MARKET-DIRECTION note incorrectly stated "FOMC decision comes Tuesday." Confirmed via web search: FOMC decision is **Wednesday April 29** (standard schedule). Powell press conference Wednesday ~12:30 PM CT. Corrected entry restriction below.

**Week-ahead risk note (2026-04-27 to 2026-05-01):**
- **Today (Mon April 27):** Normal trading. No restrictions.
- **Tue April 28:** FOMC Day 1 (meeting starts, no decision). STX earnings AH. Normal trading but prepare for volatility.
- **Wed April 29:** ⛔ **NO new entries before 1 PM CT** — FOMC decision ~12:00 PM CT, Powell press conf ~12:30 PM CT. Mag-7 earnings AH (MSFT, META, AMZN, GOOGL) — position sizing discipline critical.
- **Thu April 30:** GDP Advance Q1 (est. +2.2%) + Core PCE (est. +0.3%) before open. AAPL earnings AH.
- FOMC: 100% probability NO change (CME FedWatch; rates stay 3.5%–3.75%).
- March CPI 3.3% YoY (elevated) — rate cuts pushed to late 2026 at earliest.
- Iran/Hormuz: oil spike risk; inflationary if escalates. Monitor.
- Risk: elevated event density this week. Stick to plan; no entries before 1 PM CT Wednesday.

---

## State Definitions (reference)

### 🟢 Confirmed Uptrend
- SPY above 50-day MA
- <5 distribution days in trailing 25 sessions
- Most recent trigger: a follow-through day (day 4–7 of a rally attempt closing +1.25%+ on higher volume)
- **Agent behavior:** New long entries allowed. Normal sizing. No hedges.

### 🟡 Uptrend Under Pressure
- 5 distribution days in trailing 25 sessions, OR
- SPY tagging 50-day MA repeatedly without breaking it
- **Agent behavior:** No new entries. Tighten stops on all positions. Prepare hedge candidates (SH, SQQQ) but don't enter yet.

### 🔴 Market in Correction
- 6+ distribution days in trailing 25 sessions, OR
- SPY closes below 50-day MA on volume, OR
- SPY closes below 200-day MA
- **Agent behavior:** Sell any position with RS < 85. Enter inverse ETF hedge (1 position, max 25%). No new long entries. Wait for follow-through day.

---

## Distribution Day Log (trailing 25 sessions)

Format: `YYYY-MM-DD | Index | % Change | Volume Ratio vs. Prior | Expires on YYYY-MM-DD`

A distribution day expires after 25 sessions OR if index gains 6%+ from the day's close (O'Neil's "day fades" rule).

| Date | Index | % Change | Vol Ratio | Status |
|---|---|---|---|---|
| 2026-03-27 | SPY | -1.73% | 1.07x | **FADED** (gain from 634.09 to 713.94 = +12.6%) |
| 2026-03-26 | SPY | -1.79% | 1.06x | **FADED** (gain from 645.09 = +10.7%) |
| 2026-03-20 | SPY | -1.70% | 1.47x | **FADED** (gain from 648.57 = +10.1%) |
| 2026-03-19 | SPY | -0.25% | 1.35x | **FADED** (gain from 659.80 = +8.2%) |
| 2026-04-23 | SPY | -0.41% | est. >1.0x | **ACTIVE** (expires 2026-06-01; vol ratio unconfirmed — Alpaca + data sources blocked; software sector carnage IBM -7.94%, SFDC -8.88%, NOW -18% implies elevated volume; magnitude -0.41% > -0.20% threshold met) |
| 2026-04-23 | QQQ | -0.34% | est. >1.0x | **ACTIVE** (reference only — count tracks SPY; Nasdaq -0.89% close; expires 2026-06-01) |
| 2026-04-27 | SPY | -0.17% | unconfirmed | **NOT A DIST DAY** — magnitude -0.17% < -0.20% threshold. Not counted. |
| 2026-04-28 | SPY | −0.49% | est. >1.0x | **ACTIVE** (expires 2026-06-03; S&P 500 7,138.80 −0.49%; OpenAI revenue miss driver; chips NVDA/AVGO/AMD/ORCL −2–5%; elevated volume implied by catalyst + magnitude; Alpaca blocked — vol ratio unconfirmed; data_confidence: websearch_fallback) |
| 2026-04-29 | SPY | −0.04% | N/A | **NOT A DIST DAY** — magnitude −0.04% < −0.20% threshold; Nasdaq +0.04%. FOMC held rates (4 dissents, Powell last meeting), oil +6% (Brent $118), Mag-7 AH earnings. Market flat/resilient into event risk. |
| 2026-04-30 | SPY | +1.02% | n/a | **NOT A DIST DAY** — UP day (+1.02% to 7,209.01 ATH). Cannot be distribution by definition. |
| 2026-05-01 | SPY | +0.29% | n/a | **NOT A DIST DAY** — UP day (S&P 500 7,230.12, NEW ATH; Nasdaq 25,114.44, NEW ATH). Cannot be distribution by definition. |
| 2026-05-04 | SPY | −0.41% | est. >1.0x | **ACTIVE** (expires 2026-06-08; S&P 500 7,200.75 −0.41%; Iran launched missiles at UAE — UAE intercepted multiple missiles; oil WTI +4.39% to $106.42, Brent +5.8% to $114.44; geopolitical shock = elevated volume confidence; Alpaca blocked day 25 — vol ratio unconfirmed; data_confidence: websearch_fallback) |
| 2026-05-05 | SPY | +0.97% | n/a | **NOT A DIST DAY** — UP day (S&P 500 ~7,270, new ATH; Nasdaq ~25,343, new ATH; Iran/UAE tensions easing, oil retreating, broad risk-on). Cannot be distribution by definition. |

**Effective count: 3/25** (Apr 23, Apr 28, May 4 SPY dist days; Apr 29 + Apr 30 + May 1 + May 5 were UP days; vol ratios unconfirmed — Alpaca blocked; magnitude threshold met with high confidence on all 3 active days)
**⚠️ data_confidence: websearch_fallback** — SPY/QQQ MAs estimated via web sources; Alpaca API blocked (403 Host not in allowlist). Volume ratios for all 3 dist days unconfirmed; magnitude threshold met with high confidence. MA estimates reliable from multiple consistent sources.

---

## Follow-Through Day Log

Format: `YYYY-MM-DD | Index | % Gain | Volume vs. Prior | Day # of Rally Attempt`

| Date | Index | % Gain | Vol vs Prior | Rally Day # |
|---|---|---|---|---|
| 2026-04-08 | SPY | +2.55% | 94M vs 70M (+34%) | Day 6 (from 3/31 low at $631.97) |

---

## Rally Attempt Tracking

**Current rally status:** Confirmed (FTD fired 2026-04-08, uptrend in day 14). S&P 500 and Nasdaq hit ALL-TIME HIGHS April 24. Rally is broadening and strengthening.

---

## Rules for Updating This File

1. **Only `/pre-market` and `/eod-review` edit this file.** No ad-hoc edits. (Exception: `/weekly-prep` Sunday updates per this note.)
2. On state change, log the transition at the bottom of this file with date, trigger, and expected agent behavior change.
3. If the state is ambiguous, default to the more conservative state (e.g., between Uptrend and Under Pressure → choose Under Pressure).

---

## State Change Log

| Date | From → To | Trigger |
|---|---|---|
| 2026-04-19 | NOT INITIALIZED → CONFIRMED UPTREND | Jumpstart init by /weekly-prep. SPY +2.55% follow-through on 2026-04-08, sustained rally +12% from 3/30 low. No active distribution days (4 historical, all faded). |
| 2026-04-26 | CONFIRMED UPTREND → CONFIRMED UPTREND (strengthened) | /weekly-prep Sunday update. S&P 500 + Nasdaq at ALL-TIME HIGHS as of April 24. SPY $713.94, +5.6% above 50d MA. 1 distribution day (April 23, software selloff — now fully reversed). No state change; uptrend strengthening. |
| 2026-04-27 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change) | /eod-review. SPY -0.17% (below 0.2% threshold — not a distribution day). 1 effective dist day unchanged. SPY ~$715 est., well above 50d MA ~$676. Uptrend Day 15 intact. Alpaca API blocked day 10 — no trades possible. |
| 2026-04-28 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change) | /eod-review. SPY -0.49% (S&P 500 7,138.80) = dist day #2 confirmed. Count 2/25, well below 5-day Under Pressure threshold. Uptrend Day 17. 0 open positions. No trades possible (Alpaca blocked day 13). |
| 2026-04-29 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change) | /eod-review. S&P 500 7,135.95 (−0.04%) — not a dist day. FOMC held rates (4 dissents; Powell's final meeting). Oil +6% Brent $118. Uptrend Day 19. Alpaca blocked day 16. |
| 2026-04-30 | CONFIRMED UPTREND → CONFIRMED UPTREND (strengthening) | Mag-7 all beat. GDP Q1 +2.0% (benign). S&P +1.02% to 7,209.01 — NEW ATH; best month since 2020 (S&P +10.4%, Nasdaq +15.3%). NVDA -4.1% (Google TPU news, pivot breached). AVBO +3% (above pivot). 2/25 unchanged. Day 20. Alpaca blocked day 18. |
| 2026-05-01 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change) | /pre-market. AAPL massive beat AH ($111.2B +17%). Jobless claims 189K cycle low. ES +0.19%, NQ near flat. NVDA pre-mkt $210 (pivot recovered). AVGO ~$415 (above pivot). Day 20 intact. Alpaca blocked day 19. |
| 2026-05-01 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change) | /market-check. S&P opened 7,161.75 (-0.66% from ATH), recovered intraday +0.54%. Not a dist day (confirm at EOD). NVDA -4.9% intraday on up-market (below $201.75 pivot; heavy distribution; RS deterioration — 2nd consecutive session of -4%+ relative weakness). AVGO below pivot, 74/100. No trades (Alpaca blocked day 20). Uptrend Day 20 intact. 2/25 dist days. |
| 2026-05-01 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change) | /eod-review. S&P 500 7,230.12 (+0.29%, NEW ATH), Nasdaq 25,114.44 (+0.89%, NEW ATH). NOT a distribution day (UP day). Dist count: 2/25 unchanged. NVDA ~$199.57 (below $201.75 pivot, RS deteriorating — 3 consecutive sessions of heavy relative weakness vs market). AVGO $405.45 (below $406.75 pivot). 0 open positions. Alpaca blocked day 21. Uptrend Day 21 confirmed. |
| 2026-05-03 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change; sector rotation warning issued) | /weekly-prep Sunday. SPY ~$723.30 (May 1 NEW ATH close), +6.8% above 50d MA ($677.42). QQQ $674.78, +10.1% above 50d MA ($612.66). 2/25 dist days unchanged. Uptrend Day 22. ⚠️ Sector rotation: XLK moved to LAGGING quadrant on RRG; XLI/XLE/XLB now in LEADING quadrant. By trailing 4-week RS math, XLK still ranks #1 (Nasdaq +15.3% April alone) but forward momentum clearly rotating. XLF and XLY ranked #10 and #11 respectively on RRG. Flag all XLK entries with `sector_momentum_warning`. 0 candidates scored ≥75/100 with confirmed entry conditions. 0 open positions. Alpaca blocked day 22. `research_source: websearch_fallback`. |
| 2026-05-04 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change) | /pre-market. ES futures: opened +0.2%, dipped -0.1% on Iran/Hormuz US warship incident (turned back), recovered to +0.2%. NQ: near flat/+0.2%. Cautious open. No state change — uptrend intact. MU pre-mkt $554.20 (+2.21%, new ATH). NVDA pre-mkt $201.76 (at $201.75 pivot, +1.1% from Friday close). AVGO session ~$414-421 (above $406.75 pivot). PLTR earnings AH tonight. AMD blackout (earnings tomorrow AH). 0 open positions. Alpaca blocked day 23. `research_source: websearch_fallback`. |
| 2026-05-04 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change) | /market-check. S&P -0.1% intraday (not a dist day; confirm EOD). Nasdaq ~flat. PHLX semi index 22nd win in 23 sessions (15th intraday ATH of 2026). Iran/Hormuz oil spike (+1.5% Brent ~$110); vessels transiting successfully. MU ~$584 intraday (7.1% extended from ~$545-546 pivot, volume only +6% vs +40% required — NOT TRIGGERED; climax_top_risk_flag). NVDA ~$198.61 (below pivot, 71/100 — NOT TRIGGERED). AVGO ~$421.09 (in zone but 72/100 < threshold — NOT TRIGGERED). PLTR earnings AH tonight (XLC sector setter). 0 positions. Alpaca blocked day 24. `research_source: websearch_fallback`. |
| 2026-05-04 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change; dist day #3 added) | /eod-review. S&P 500 7,200.75 (−0.41%) = DISTRIBUTION DAY #3 confirmed — Iran launched missiles at UAE; UAE intercepted; oil WTI +4.39% to $106.42, Brent +5.8% to $114.44; magnitude −0.41% > −0.20% threshold; vol ratio elevated by geopolitical shock (Alpaca blocked day 25 — unconfirmed). Dist count 3/25 — still well below 5-day Under Pressure threshold. Nasdaq 25,067.80 (−0.19%, below −0.20% threshold; not a QQQ dist day). NVDA ~$198.63 (below $201.75 pivot; 4th consecutive session; score 71/100). MU ~$542 est. (opened +4.06%, surged to $584 intraday, reversed to close near flat — bearish reversal; climax_top_risk_flag escalated to ACTIVE). AVGO ~$420.27 (above $406.75 pivot; 72/100 est.). PLTR massive AH beat: EPS $0.34 vs $0.28 consensus; Q2 guide $1.8B vs $1.68B; FY2026 guide $7.65B vs $7.27B; AH +1.3%. 0 positions. Alpaca blocked day 25. Uptrend Day 23 confirmed. `research_source: websearch_fallback`. |
| 2026-05-05 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change) | /pre-market. ES futures +0.01%, NQ flat — essentially flat open. PLTR massive beat (+85% rev YoY) but only +2% reaction (46× fwd revenue; beat already priced). MU $596.57 pm (+8.2% — 9.4% extended from ~$546 pivot; `climax_top_risk_flag` ESCALATED; Sandisk Q3 beat peer read-through). NVDA ~$198.12 (China market share = ZERO confirmed by CEO Jensen Huang — material negative; score ~60-65; REMOVED from primary watchlist). AVGO ~$416-420 (above $406.75 pivot; 🟡 WATCHING). AMD earnings AH tonight (high bar: +66% stock past month). 0 positions. Alpaca blocked day 26. 3/25 dist days unchanged. Uptrend Day 24. research_source: websearch_fallback. |
| 2026-05-05 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change; recovering from Iran shock) | /market-check. S&P 500 +~0.5% intraday (Iran tensions easing — US/UAE ceasefire signals; oil retreating from WTI $106 peak); Russell 2000 +1.39% (small caps leading = broad recovery). QQQ ~$672.12. SPY est. ~$723.7. NOT a distribution day (UP day). Dist count 3/25 unchanged. Intel +10% (Apple/Samsung chip-manufacturing discussions). Semi sector broadly strong. MU ~$607 (+5% from $577.79 actual May 4 close — NOTE: prior EOD estimate $542 was materially wrong; actual close confirmed $577.79); EXTENDED ~+11.2% above ~$546 pivot; DO NOT CHASE. AVGO $422.85 (+1.5%); in buy zone (+3.9% above $406.75 pivot); volume pace ~+242% vs ADV — volume gate PASSES; score 72/100 < 75 threshold — ENTRY REJECTED. AMD $341.54 yesterday (BLACKOUT — earnings AH tonight). 0 positions. Abort gate: Alpaca API blocked day 26 (403 confirmed by live test). No trades possible. Uptrend Day 25. `research_source: websearch_fallback`. |
| 2026-05-05 | CONFIRMED UPTREND → CONFIRMED UPTREND (no change; new ATHs; Iran shock fully reversed) | /eod-review. S&P 500 ~7,270 (+0.97%, NEW ATH; from 7,200.75 May 4). Nasdaq ~25,343 (+1.1%, NEW ATH). Russell 2000 + small caps led. Iran/UAE ceasefire signals = oil retreating; geopolitical risk premium unwinding. NOT a distribution day (UP day). Dist count 3/25 UNCHANGED. AVGO $430.66 (+3.39% — extended +5.88% above $406.75 pivot; now outside 5% buy zone ceiling $427.09; score 72/100 below threshold). MU ~$640.47 (+10.8% — `climax_top_risk_flag` CRITICAL; +17.4% above pivot; bench only). AMD results AH (5 PM ET = after this review window). 0 positions. Alpaca API blocked day 27. Uptrend Day 26 confirmed. `research_source: websearch_fallback`. |

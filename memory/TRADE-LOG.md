# Trade Log

**The most important file.** This is the agent's memory of every trade — what it bought, why, what stop was set, and what happened. Without this file, each routine would be stateless.

Entries are chronological. New entries appended to the bottom. **Never edit past entries** — log corrections as new entries referencing the original.

---

## Format for New Entry

```
## YYYY-MM-DD HH:MM CT | <SYMBOL> | <BUY|SELL|STOP_ADJUST>

**Action:** BUY 12 shares $NVDA @ $487.50 ($585.00 / 23% position)
**Conviction score:** 87/100 (C:20 A:15 N:15 S:13 L:14 I:8 Base:+10)
**Base pattern:** Cup-with-handle, 8 weeks, pivot $485.00
**Entry trigger:** Pivot breakout, volume +180% vs 50-day avg
**Stop (hard):** $453.38 (-7% from entry)
**Stop (trailing GTC):** 10% trail via Alpaca order #abc123
**Thesis:** [2–3 sentences from RESEARCH-LOG.md that day]
**Exit signals to watch:** Climax top if single-day gain >2× 20d ATR; 50d MA break on volume
**Market direction at entry:** Confirmed Uptrend (Day 23)
**Research source:** perplexity
**Order ID:** <alpaca_order_id>
**Day trade count:** 0 of 3
```

For SELL entries, additionally log:

```
**Exit reason:** <one of: HARD_STOP_7PCT, TRAIL_HIT, DIST_DAY_CLUSTER, MA50_BREAK_VOLUME, 
                          CLIMAX_TOP, BASE_FAILURE, 8_WEEK_RULE, SECTOR_BLACKLIST, 
                          CIRCUIT_BREAKER, MANUAL_OVERRIDE>
**Hold period:** 7 trading days
**P&L:** +$47.50 (+8.12%)
**Rule adherence:** clean / <note any deviation>
```

---

## Open Positions Summary

*(Updated by /eod-review daily. Mirror of Alpaca state + our thesis/stop tracking.)*

| Symbol | Shares | Entry | Entry $ | Current $ | Stop | Trail | P&L | Days Held |
|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — |

*(Updated 2026-06-15 /market-check 10:00 AM CT — 0 open positions; Alpaca Day 94 BLOCKED (network egress: "Host not in allowlist: paper-api.alpaca.markets"); S&P ~7,527 (+1.28% intraday) DAY 3 CONFIRMED >> 7,266.99 ✅; Iran deal "COMPLETE" — signing ceremony Jun 19 Switzerland; Oil WTI $80.83 (−4.8%); dist 6/25 NOT dist day ✅; State: 🔴 **MARKET IN CORRECTION UNCHANGED**; FTD window Day 4–6 Jun 16 (FOMC ⚠️)–Jun 18 (LAST; Jun 19 Juneteenth CLOSED); SH hedge QUEUED (blocked); P&L today: $0; Equity: $2,500 HWM; circuit breakers: ALL CLEAR; `research_source: websearch_fallback`)*

---

## Weekly Trade Count (rolling)

**Week of 2026-06-15 ← CURRENT:** 0/3 positions opened | Market: 🔴 Correction (6/25 dist; **DAY 3 = Jun 15** — FTD window Jun 16-18 ⚠️ Jun 19 Juneteenth CLOSED) | Iran deal COMPLETE = gap-up Day 3 | FOMC Jun 16-17 (no entries before 1 PM CT) | Alpaca Day 93 BLOCKED | SH $625 QUEUED | P&L: $0 | Equity: $2,500 (HWM) | `research_source: websearch_fallback`
**Week of 2026-06-09 ← CLOSED (Mon Jun 15):** 0/3 positions opened | Market: 🔴 Correction (6/25 dist; **DAY 2 CONFIRMED Jun 12** — FTD window Jun 16–19) | Jun 8: S&P 7,405.73 (+0.30% Day 1 prior attempt) | Jun 9: S&P 7,386.65 (−0.26% DIST #6) | Jun 10: S&P 7,266.99 (−1.6% **DIST #7**; US-Iran military strikes; rally attempt DEAD; new low) | Jun 11: S&P 7,393 (+1.74% **DAY 1 CONFIRMED**; Iran deal signals; NOT dist ✅) | Jun 12: S&P **7,431.46 (+0.52% DAY 2 CONFIRMED** ✅; Dow 51,202.26; Nasdaq 25,888.84; SPCX $161.11 +19%; Iran "final text agreed" — Trump signs weekend 🟢; NOT dist day ✅) | Alpaca blocked Day 91 | Circuit breakers: ALL CLEAR | P&L: $0 | Weekly trades: 0/3
**Week of 2026-06-02 ← CLOSED (Mon Jun 8):** 0/3 positions opened | Market: 🔴 **CORRECTION** (⚠️ prior "CONFIRMED UPTREND" label was WRONG — Jun 5 was Dist Day #6 −2.64%, not FTD) | Jun 2: S&P 7,609.78 (+0.13% ATH) | Jun 3: S&P 7,553.68 (−0.74% DIST #5) | Jun 4: S&P 7,584.31 (+0.41% Dow ATH) | Jun 5: S&P **7,383.74 (−2.64% DIST #6 → CORRECTION)** | Jun 8 (Mon): S&P ~7,452 (+0.93% Day 1 rally) | May 4 expired Jun 8 → 5/25 | AVGO re-score Jun 9 | circuit breakers ALL CLEAR | P&L week: $0 | `research_source: websearch_fallback`
**Week of 2026-05-26 ← CLOSED (Fri May 29):** 0/3 positions opened | Market: 🟡 Under Pressure (5/25 dist days) | May 29 close: S&P 7,580.06 (+0.22%, NEW ATH — 9th straight winning week) | Nasdaq 26,972.62 (+0.20%, NEW ATH) | Dow 51,032.46 (+0.72%, NEW ATH) | Late FTD NOT triggered (+0.22% < +1.25%; 7,580.06 < 7,658.67) | DELL AI mega-beat (+88% rev, +757% AI servers) absorbed; VRT faded -0.62%; GOOGL -2.8% vs market | Alpaca Day 67 blocked | circuit breakers ALL CLEAR | P&L week: $0
**Week of 2026-05-18 ← CLOSED:** 0/3 positions opened | Market: 🟡 Under Pressure (5/25 dist days) | S&P week +0.9% (8th straight winning week) | Dow week +2.1% RECORD | Alpaca Day 53 blocked entire week | Hedge SH $625 queued | P&L week: $0 (0%) | FTD Day 4 NOT confirmed (May 22 +0.37% vs +1.25% needed) | FTD window: May 26/27/28 | May 25 = Memorial Day (closed) | circuit breakers ALL CLEAR
**Week of 2026-05-11:** 0 new positions opened (max 3/week) ← WEEK CLOSED (reset Mon May 11; Alpaca blocked all week Day 43 by Fri /eod-review; zero tradeable setups; 0/3 trades used; market state changed to Uptrend Under Pressure on final day)
**Week of 2026-05-04:** 0 new positions opened (max 3/week) ← CLOSED (Fri May 8 EOD — 0/3 used; Alpaca blocked all week + NFP gate Fri)
**Week of 2026-04-28:** 0 new positions opened (max 3/week) — CLOSED Fri May 1 (Alpaca API blocked entire week; 0/3 used)
**Week of 2026-04-21:** 0 new positions opened (max 3/week)

*(Reset every Monday by /pre-market)*

---

## Day Trade Counter (PDT)

**Rolling 5-session count:** 0 of 3 (Alpaca-sourced, checked before every intraday sell)

---

## Trade History (appended below)

*(No trades logged yet — first live trade will appear here)*

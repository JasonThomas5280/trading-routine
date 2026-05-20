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

*(Updated 2026-05-20 /eod-review — 0 open positions; Alpaca API blocked Day 49; SPY est. ~$736.10 close (+0.32%); S&P 500 est. ~7,377 (+0.32%); QQQ est. ~$703.80 (+0.55%); dist count 6/25 UNCHANGED — **🔴 MARKET IN CORRECTION** state active; NOT a distribution day (UP day); rally attempt Day 2 (Day 1 = May 19, SPY low $733.39); FTD window: May 22 (Day 4), May 26-28; NVDA Q1 FY2027 earnings AH pending confirmation at /pre-market May 21; SH/SQQQ hedge queued $625/25% — Alpaca Day 49 blocked, HIGHEST PRIORITY on restore; `research_source: websearch_fallback`)*

---

## Weekly Trade Count (rolling)

**Week of 2026-05-18:** 0 new positions opened (max 3/week) | Market: 🔴 IN CORRECTION — NO new long entries | Alpaca Day 49 blocked | Hedge SH $625 queued (highest priority) | P&L week: $0 (0%) | /eod-review May 20: dist count 6/25 UNCHANGED; rally attempt Day 2 (Day 1=May 19 SPY low $733.39); FTD window May 22 (Day 4)-May 28 (Day 7); NVDA Q1 FY2027 earnings AH results pending /pre-market May 21; FOMC minutes hawkish (absorbed); WMT earnings Thu May 21 AM (next dist day risk)
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

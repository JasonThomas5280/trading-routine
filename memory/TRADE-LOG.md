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

*(Updated 2026-05-28 /eod-review — 0 open positions; Alpaca API blocked Day 64; S&P close 7,563.63 (+0.58%, NEW ATH) — Nasdaq 26,917.47 (+0.91%, NEW ATH) — Dow 50,668.97 (+0.05%); SPY est. close ~$754.78; QQQ est. close ~$736 (Nasdaq proxy, Alpaca blocked); dist count **5/25 UNCHANGED** — **🟡 UPTREND UNDER PRESSURE**; FTD Day 7 NOT CONFIRMED (+0.58% < +1.25% threshold; S&P 7,563.63 < 7,614 target — 50 pts short); **FTD window EXPIRED** — no FTD this rally attempt (Day 1 = May 19); rally attempt technically INTACT (SPY >> $733.39 Day 1 low); market reversed from intraday lows on SNOW +36.7% ($6B AWS deal) + Iran ceasefire extended; SH/SQQQ hedge queued $625/25% — HIGHEST PRIORITY on Alpaca restore; P&L today: $0; P&L week: $0; Equity: $2,500 HWM; circuit breakers: ALL CLEAR; `research_source: websearch_fallback`)*

---

## Weekly Trade Count (rolling)

**Week of 2026-05-26 (current — Tue-Fri):** 0/3 positions opened | Market: 🟡 Under Pressure (5/25 dist days) | May 28 close: S&P 7,563.63 (+0.58%, NEW ATH) | Nasdaq 26,917.47 (+0.91%, NEW ATH) | FTD Day 7 NOT confirmed (+0.58% < +1.25%; 7,563.63 < 7,614 — **FTD window EXPIRED**) | SNOW +36.7% (AI trade revived); Iran ceasefire +60 days | Alpaca Day 64 blocked | circuit breakers ALL CLEAR | P&L week: $0
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

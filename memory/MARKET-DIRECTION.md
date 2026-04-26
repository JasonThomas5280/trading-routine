# Market Direction — The "M" in CAN SLIM

**3 out of 4 stocks follow the market.** This file is read by EVERY routine before deciding whether new entries are allowed. Updated by `/pre-market` daily and `/eod-review` daily (close-of-day truth).

---

## Current Status

**Status:** 🟢 **CONFIRMED UPTREND**

**Last updated:** 2026-04-26 (Sun) — `/weekly-prep`
**Confirmed Uptrend days:** 14 (since follow-through day 2026-04-08; Day 15 opens Monday April 28)
**Distribution days (last 25 sessions):** 1 effective (Apr 23 only)
**Most recent follow-through day:** 2026-04-08 (SPY +2.55%, volume 94M vs 70M prior = higher-volume confirmation)

**SPY close 2026-04-24:** $713.94 (ALL-TIME HIGH; +4.32% day driven by Intel +23.6%, AMD +13.9%, NVDA $5T retake; semiconductor index up 18th consecutive session)
**SPY 50-day MA (2026-04-24):** ~$676.07 (est. per Barchart/TipRanks; `research_source: websearch_fallback` — Alpaca blocked)
**SPY above 50-day MA:** +5.6% (+$37.87)
**SPY 200-day MA (2026-04-24):** ~$673.80 (est.)
**SPY above 200-day MA:** +5.96% (+$40.14)
**SPY RSI (daily):** 70.45 — mildly overbought but trend intact; 12/12 MA timeframes = Strong Buy
**SPY technical trend:** Strong Buy across all MA timeframes (5d through 200d)

**QQQ close 2026-04-24:** ~$661.42 est. (Nasdaq +1.63% from $650.81; Alpaca blocked — estimate only; record close)
**QQQ 50-day MA (2026-04-24):** $649.42 (per Barchart)
**QQQ above 50-day MA:** +1.8% (+$11.99)
**QQQ 200-day MA (2026-04-24):** $607.11
**QQQ above 200-day MA:** +8.9%

**Key April 24 context:** S&P 500 and Nasdaq closed at NEW ALL-TIME HIGHS. Semiconductor index up 18th straight day. Intel +23.6% (blockbuster earnings), AMD +13.9%, Nvidia retook $5T market cap, AVGO at ATH $429.31 (Apr 23). SPY RSI 70.45 = mildly overbought but NOT a sell signal in a confirmed uptrend — overextension concerns are secondary to trend confirmation. **Uptrend strengthening, not deteriorating.**

**Week-ahead risk note (2026-04-28 to 2026-05-02):**
- FOMC meeting April 28-29: 99.7% probability NO change (rates stay 3.5%-3.75%). Powell press conf April 29 ~1 PM CT. NO new entries Wednesday morning per entry rules.
- Mag-7 earnings Wednesday April 29 after close: MSFT, META, AMZN, GOOGL. Market-moving event — position sizing discipline critical.
- AAPL earnings Thursday April 30 after close + GDP Advance Q1 (est. 2.2%) + Core PCE (est. 0.3%).
- March CPI 3.3% YoY (elevated) — rate cuts pushed to late 2026 at earliest.
- Risk: elevated event density this week. Stick to plan; no chasing into FOMC window.

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

**Effective count: 1/25** (1 SPY dist day; QQQ logged for reference)
**⚠️ data_confidence: websearch_fallback** — SPY/QQQ MAs estimated via web sources; Alpaca API blocked (403 Host not in allowlist). Volume ratios for April 23 unconfirmed. Magnitude threshold met with high confidence. MA estimates reliable from multiple consistent sources.

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

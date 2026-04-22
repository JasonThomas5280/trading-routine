# /pre-market — Mon–Fri 6:00 AM CT

Overnight news check, watchlist refresh, and gap-risk review on open positions.

---

## Read memory first

1. `memory/TRADING-STRATEGY.md` (rulebook)
2. `memory/MARKET-DIRECTION.md` (state)
3. `memory/WATCHLIST.md` (primary + bench candidates)
4. `memory/TRADE-LOG.md` (open positions)

---

## Steps

### 1. Overnight gap check on open positions (CRITICAL — do this FIRST)

For each open position:
- Pull pre-market quote: `bash scripts/alpaca.sh quote <SYMBOL>` 
  - Note: pre-market quotes may be thin; falls back to most recent quote + extended-hours data
- Compare to `hard_stop` price from TRADE-LOG.md

**If any position is trading below hard stop in pre-market:**
- Call `sell-rules-engine` with `evaluation_mode: quick_overnight_gap_check`
- If verdict = `SELL_NOW` at open → queue a market sell for the open via `trade-executor` (action will execute at 8:30 CT or once market opens)
- Flag in ClickUp IMMEDIATELY — this is a ⚠️ alert, not part of the normal summary

### 2. Catalyst scan — open positions

For each open position, query Perplexity:
```
bash scripts/perplexity.sh "Overnight news for <SYMBOL> relevant to short-term stock price. Any earnings, guidance, rating changes, major customer/product news, or legal/regulatory events in the last 18 hours. Answer in 3 bullets. Cite. No fluff."
```

If any catalyst materially changes the thesis (stock-specific: earnings miss, guidance cut, material investigation), flag for MANUAL_OVERRIDE consideration at `/market-check`. Do NOT sell at pre-market prices on news alone — wait for regular session price action.

### 3. Catalyst scan — primary watchlist

For each primary watchlist name (max 4):
```
bash scripts/perplexity.sh "Overnight news for <SYMBOL>. Earnings dates, guidance, analyst actions, catalysts. 3 bullets. Cite. No fluff."
```

Update WATCHLIST.md: 
- If a name has a catalyst that PULLS IT FORWARD (earnings beat after-hours, upgrade), note in "buy-zone status" — may gap into entry zone today
- If a catalyst BREAKS the setup (earnings miss, guidance cut, investigation), REMOVE from watchlist, note in "Removed this week" with reason
- Update buy-zone proximity: how far is each name from its pivot now?

### 4. Market overnight check

```
bash scripts/perplexity.sh "What happened in US equity futures overnight? Where are ES and NQ futures now vs. yesterday's close? Any major economic data or geopolitical news overnight that will affect open? Expected market direction for today's session? 4 bullets. No fluff."
```

Append summary to `memory/RESEARCH-LOG.md` with today's date + `research_source: perplexity` (or `websearch_fallback` if degraded).

### 5. Update buy-zone readiness

For each watchlist name, check via `bash scripts/alpaca.sh quote <SYMBOL>`:
- Last price
- Distance from pivot (%)
- Volume pre-market (if available)

Classify:
- 🟢 **READY** — within 0–3% of pivot, no broken catalyst
- 🟡 **WATCHING** — within 3–5% of pivot
- 🔴 **REMOVED** — moved out of entry zone OR catalyst broke

### 6. Circuit breaker check

Pull account state. If any circuit breaker is active (daily -3%, weekly -6%, drawdown -12%), FLAG at top of the RESEARCH-LOG entry:

```
⚠️ CIRCUIT BREAKER ACTIVE: <which> — no new entries allowed today
```

### 7. ClickUp summary

```
🌅 Pre-market [YYYY-MM-DD]
Market: [state] | Futures: ES [+/-X.XX%] NQ [+/-X.XX%]
Open positions: [N] | Circuit breakers: [NONE | which]
Overnight gaps: [none | SYMBOL gapped to $X — AT HARD STOP]
Watchlist ready: [list 🟢s with pivots]
Watchlist watching: [🟡s]
Removed: [🔴s with reason]
Key catalyst today: [if any]
Plan: [1-sentence entry plan for the session, or "no entries — circuit breaker active"]
```

---

## Success criteria

- All open positions checked for gap below hard stop
- All watchlist names re-scored against overnight news
- RESEARCH-LOG.md appended with today's entry
- ClickUp received pre-market summary

## Failure modes

- **Perplexity AND WebSearch both fail:** Log `research_source: DEGRADED`. Skip new-entry planning for the day. Sell-rule checks still proceed using Alpaca data only.
- **Pre-market data thin (no quote for a ticker):** Skip that name for overnight check, flag as "no pre-market data" in log. Regular session will resolve.
- **Alpaca down:** HALT. Alert immediately. Do not proceed with any trading.

# /market-check — Mon–Fri 10:00 AM CT

The execution window. Check if any watchlist names triggered buy zones on volume during the first 30 minutes of trade, execute pre-planned entries.

**Timing rationale:** 10:00 AM CT = 11:00 AM ET = 30 minutes after the opening bell. The amateur hour (9:30–10:00 ET = 8:30–9:00 CT) is over. Volume patterns have clarified. This is when O'Neil-style disciplined entries happen.

---

## Read memory first

1. `memory/TRADING-STRATEGY.md`
2. `memory/MARKET-DIRECTION.md` — confirm "Confirmed Uptrend" before any entry
3. `memory/WATCHLIST.md` — primary watchlist with pivots + buy zones
4. `memory/TRADE-LOG.md` — open positions + weekly trade count + PDT status
5. `memory/RESEARCH-LOG.md` — today's /pre-market entry (research source, warnings)

---

## Steps

### 1. Abort gates (check BEFORE any action)

Check in order. Any hit → log reason and skip to step 6 (write summary, no trades).

| Gate | Abort if |
|---|---|
| Market state | `MARKET-DIRECTION.md` ≠ "Confirmed Uptrend" (exception: inverse ETF if state is Under Pressure/Correction) |
| Research unavailable | Today's /pre-market logged `research_source: DEGRADED` |
| Daily circuit breaker | Account down -3%+ today already |
| Weekly circuit breaker | Account down -6%+ this week |
| Drawdown halt | Account -12% from high-water mark |
| Weekly trade count | Already took 3 new positions this week |
| Position count | Already holding 4 positions |
| Cash buffer | Less than 10% cash (no room) |

### 2. Overnight gap follow-up (if /pre-market flagged any)

If /pre-market queued any "sell at open" actions for positions that gapped below hard stop:
- Verify the position has already sold (check `bash scripts/alpaca.sh orders filled`)
- If not sold (e.g., halted / couldn't fill at open), call `sell-rules-engine` in `emergency_news` mode, then `trade-executor` for a market sell
- Log to TRADE-LOG.md immediately

### 3. Watchlist triggers — the main loop

For each 🟢 READY item in WATCHLIST.md (primary only, not bench):

**A. Pull current quote + today's volume:**
```
bash scripts/alpaca.sh quote <SYMBOL>
bash scripts/alpaca.sh bars <SYMBOL> 1Day 1     # today's bar so far
```

**B. Check trigger conditions (ALL required):**
- Current price ≥ pivot point
- Current price ≤ pivot × 1.05 (not extended/chasing)
- Today's cumulative volume (annualized to full-day pace) ≥ 40% above 50-day avg
  - Quick calc: `today_vol_so_far / (minutes_elapsed / 390) ≥ 1.4 * sma50_volume`
  - At 10 AM CT (1.5 hours into session) we've used ~1.5/6.5 = 23% of session → volume pace = today_vol / 0.23

**C. If triggered, run final-check `canslim-screener` on the symbol:**
```
canslim-screener(symbol=<X>, purpose=final_check, market_state=<current>)
```

This is a second scoring pass specifically to:
- Confirm conviction still ≥ 75 given today's action
- Re-verify no earnings in next 5 days (calendar may have updated)
- Re-verify base pattern is intact (a gap-down before 10 AM breaks the pattern)

**D. If screener returns `pass: true`, call `trade-executor`:**
```
trade-executor.buy(
  symbol=<X>,
  conviction_score=<score>,
  pivot_point=<pivot>,
  entry_zone=<zone>,
  thesis=<pull from RESEARCH-LOG today's entry>,
  target_position_pct=0.30  # or 0.35 if conviction ≥ 85 AND uptrend ≥ 10 sessions
)
```

**E. If executed:**
- trade-executor handles order placement + trailing stop + TRADE-LOG entry + ClickUp alert
- Update WATCHLIST.md: move the symbol from primary → "opened positions" note at top

**F. If rejected:**
- trade-executor returns a rejection_reason
- Log to RESEARCH-LOG with the reason
- Leave the symbol on watchlist IF the rejection was temporary (outside_valid_entry_window, price_out_of_entry_zone) — remove if the rejection was structural (conviction_below_threshold)

### 4. Mid-morning position health check

For each open position, run `sell-rules-engine` in `full` mode. Even though the main sell check is at /eod-review, we look for:
- **Rule 1 (-7% hard stop)** breached intraday on volume → immediate sell
- **Rule 3 (50-MA break on volume)** if it's happening intraday with heavy volume → immediate sell

Other rules (climax top, 8-week rule, etc.) — defer to /eod-review unless situation is extreme.

**Intraday refinement (per sell-checklist.md):** Intraday Rule 1 triggers require volume confirmation, not just a spike through the stop price. Pre-market thin-liquidity spikes don't count.

### 5. Bench promotion check

For each 🟡 WATCHING item on the bench:
- Is it now within 2% of pivot? If yes, promote to primary watchlist for tomorrow
- Has its setup deteriorated (broke below 50-MA on volume in the base)? If yes, remove

Write promotions/demotions to WATCHLIST.md.

### 6. ClickUp summary

```
📈 Market-check [YYYY-MM-DD HH:MM CT]
Market: [state] | Circuit breakers: [NONE | which]
Actions taken:
  [🟢 BOUGHT X shrs $SYMBOL @ $X.XX (XX% pos)]
  [🔴 SOLD X shrs $SYMBOL @ $X.XX — TRIGGER (Pre-market gap)]
  [No new entries — nothing triggered / gate: reason]
Watchlist status: [N ready, N watching, N removed]
Open positions: [count + total % deployed]
Weekly trade count: [X of 3 used]
Next check: /eod-review 3:15 PM
```

(Per-trade alerts from trade-executor already went out separately for each fill.)

---

## Success criteria

- Abort gates respected (no entries when any circuit breaker active)
- Every watchlist 🟢 item evaluated against trigger conditions
- Every open position evaluated for intraday Rule 1/Rule 3 triggers
- TRADE-LOG.md updated with any entries/exits
- ClickUp summary received

## Failure modes

- **Screener rejects a ticker that /pre-market had READY:** That's the system working. Conditions changed — log it and move on. Don't override.
- **Limit order fails to fill within 30 seconds:** trade-executor handles this (cancel + log `entry_window_missed`). Stay disciplined — don't chase by raising the limit.
- **Multiple watchlist names trigger simultaneously:** Take them in rank order (highest conviction first). Stop when position count would exceed 4 OR weekly trade count would exceed 3 OR cash buffer violated.
- **Unexpected position in Alpaca not in TRADE-LOG:** HALT trading, alert Jason. State drift = potential bug.

# /weekly-review — Friday 3:30 PM CT

The learning loop. Every Friday after /eod-review, generate a postmortem of the week's trading. This is where the strategy improves.

---

## Read memory first

1. `memory/TRADING-STRATEGY.md`
2. `memory/TRADE-LOG.md` — this week's entries
3. `memory/RESEARCH-LOG.md` — this week's daily logs
4. `memory/MARKET-DIRECTION.md` — state transitions this week
5. `memory/WATCHLIST.md` — this week's watchlist (last Sunday's)
6. `memory/WEEKLY-REVIEW.md` — last week's review (for format continuity)

---

## Steps

### 1. Performance calculation

Pull weekly equity from Alpaca:
```
bash scripts/alpaca.sh portfolio_history 5D
```

Compute:
- Starting equity (Monday open)
- Ending equity (today close)
- Weekly return % (absolute and relative to SPY same window)
- Number of trades taken (new BUYS this week)
- Winners count + average winner size
- Losers count + average loser size
- Winner:loser ratio
- Largest winner (symbol + $)
- Largest loser (symbol + $)

### 2. Rule adherence audit

Review every BUY and SELL in TRADE-LOG.md from this week. For each:
- Was conviction score ≥ 75 at entry?
- Was position sizing within 30% (or 35% if conviction ≥85)?
- Was cash buffer ≥ 10% maintained?
- Was market state "Confirmed Uptrend" at entry time?
- For sells: did it follow a SELL_NOW verdict from sell-rules-engine OR a MANUAL_OVERRIDE with explicit rationale?
- Any -7% hard stops hit? If yes, were they executed promptly (no holding past -7%)?
- Any mental stops? (should be ZERO)

Score rule adherence 0-100. Below 95 requires Monday review with Jason.

### 3. Market direction accuracy

Review MARKET-DIRECTION.md state calls each day this week. Compare to actual market behavior:
- Did "Confirmed Uptrend" days actually see SPY hold its 50-MA?
- Did any state transition occur AT the right signal (dist count hit 5/6, SPY broke 50-MA on vol)?
- Were we late on any transition (should have downgraded sooner)?
- Were there any distribution days we miscounted?

### 4. Sector analysis

For each trade taken this week, check which sector it was in and whether that sector was in top-3 at entry.

Compute:
- Hit rate per sector (winners / total trades in that sector)
- Identify sectors to consider blacklisting (2 consecutive failed trades → 2-week blacklist)
- Identify sectors to add to next week's focus list

### 5. Conviction correlation

Group this week's completed trades (any that closed) by conviction score at entry:
- ≥85 bucket: avg outcome, hit rate
- 75–84 bucket: avg outcome, hit rate
- Any trades below 75 that somehow got through? That's a bug — log it.

Does high-conviction outperform mid-conviction this week? Is it statistically noise (N too small) or a real signal?

### 6. Research source impact

From RESEARCH-LOG.md, tally which days used:
- `perplexity` (primary)
- `websearch_fallback`
- `DEGRADED`

Of the trades taken, did any originate from a fallback/degraded day? Did those trades perform differently?

### 7. Lessons — the key section

Write 1-3 lessons, concrete and specific. Template:

```
**Lesson 1 — Execution:** 
We entered $NVDA 2% above pivot instead of at pivot because quote latency spiked.
Fix: add 1-second re-pull of quote before final entry limit-price calc.

**Lesson 2 — Strategy:**
All 3 energy-sector trades failed despite top-3 sector RS.
Pattern: energy reversed mid-week on geopolitical news we didn't catch.
Fix: add a "sector-specific news scan" to /pre-market for sectors we're actively trading.

**Lesson 3 — Market:**
Distribution day on Wed was a false signal — Fri's follow-through erased it.
No action needed — counting logic was correct.
```

### 8. Proposed rule changes

If a lesson suggests a rule change, propose it here. Examples:
- "Tighten base-pattern handle-volume threshold from <60% avg to <50% avg"
- "Add pre-market 'sector news scan' subroutine"
- "Increase conviction floor from 75 to 78 during Under Pressure (when it's revoked)"

**Don't implement rule changes here.** Proposals go to Jason for Monday review. Approved changes get edited into TRADING-STRATEGY.md with a changelog entry.

### 9. Next week setup

```
Market direction thesis going into next week: [narrative]
Sectors in focus: [list]
Calendar risks: [earnings on current positions, FOMC, major data]
Current book status: [N positions, X% deployed, any in 8-week-rule window]
Emotional state check: [are we revenge-trading, FOMO-ing, or disciplined?]
```

### 10. Append to WEEKLY-REVIEW.md

Use the format template at the top of that file. Append a new review section for this week.

### 11. ClickUp weekly doc

Unlike daily summaries (messages), the weekly review is a **document** in ClickUp. Send via:
```
bash scripts/clickup.sh_doc "Week ending <YYYY-MM-DD>" "<full review markdown>"
```

(If the clickup.sh doc helper isn't implemented yet, fall back to sending the full markdown as a long message.)

### 12. Watchlist reset prep

Note in WATCHLIST.md header: "Archived week of [dates] — rebuild via /weekly-prep on Sunday." This tells Sunday's /weekly-prep routine that this week's watchlist is stale and needs a full rebuild (not a refresh).

---

## Success criteria

- WEEKLY-REVIEW.md has a new entry for this week
- All 9 template sections filled
- Rule adherence scored
- Lessons articulated (minimum 1)
- Proposed rule changes (or "none")
- Next-week setup thesis written
- ClickUp weekly doc/message delivered
- WATCHLIST.md flagged for Sunday rebuild

## Why this routine matters most

The trades make the money. The review compounds it.

Every lesson turned into a rule change makes every future week slightly better. Six months of weekly reviews = 26 micro-improvements to the playbook. That compounding is where consistency above top-5% comes from.

Don't phone in this routine. If the week was boring (no trades, flat market), write a shorter review but write one. Gaps in WEEKLY-REVIEW.md are gaps in learning.

## Failure modes

- **No trades taken this week:** Still write the review. "Why no trades?" is a valuable entry. (Watchlist quality? Market state? Waiting for setups?)
- **Account down significantly:** Extra scrutiny on rule adherence section. Most bad weeks come from rule violations, not "bad luck."
- **Conflict with Jason's read of the week:** Propose rule changes but don't unilaterally implement. Collaboration gate.

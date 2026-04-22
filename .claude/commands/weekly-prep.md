# /weekly-prep — Sunday 4:00 PM CT

Build next week's ranked watchlist and establish the market-direction thesis.

**This is the most important routine of the week.** Your edge for the next 5 trading days is built here.

---

## Read memory first

Open in order:
1. `memory/TRADING-STRATEGY.md` — rulebook
2. `memory/MARKET-DIRECTION.md` — current state, trailing distribution days
3. `memory/WATCHLIST.md` — last week's watchlist (for reference, before overwriting)
4. `memory/TRADE-LOG.md` — open positions, last week's entries/exits
5. `memory/WEEKLY-REVIEW.md` — last Friday's postmortem + any proposed rule changes

---

## Steps

### 1. Update Market Direction

Pull SPY + QQQ daily bars via `bash scripts/alpaca.sh bars SPY 1Day 40` and `bash scripts/alpaca.sh bars QQQ 1Day 40`.

Compute:
- SPY vs. 50-day MA (above/below, by what %)
- SPY vs. 200-day MA
- QQQ vs. 50-day MA
- Distribution day count in trailing 25 sessions (index down ≥0.2% on higher volume than prior day)
- Most recent follow-through day

Determine market state per the rules in TRADING-STRATEGY.md. Write the update to `memory/MARKET-DIRECTION.md`.

### 2. Market thesis (Perplexity)

Query Perplexity:
```
bash scripts/perplexity.sh "Summarize the current US stock market regime as of this weekend. Specifically: (1) Where are SPY and QQQ vs. their 50-day and 200-day moving averages? (2) How many distribution days have occurred in the last 25 sessions? (3) Which sectors are leading on 4-week relative performance? (4) What are the 3 most important macro catalysts this coming week (earnings, Fed speakers, economic data)? (5) What is the broad analyst consensus on market direction? Answer in 5 bullets. Cite sources. No fluff."
```

Fallback to native WebSearch if Perplexity fails — log `research_source: websearch_fallback` in RESEARCH-LOG.md.

### 3. Sector leadership

Pull weekly bars for sector ETFs: XLK (Tech), XLE (Energy), XLF (Financials), XLV (Healthcare), XLY (Consumer Discretionary), XLP (Consumer Staples), XLI (Industrials), XLU (Utilities), XLRE (Real Estate), XLB (Materials), XLC (Communication).

Compute 4-week % change for each. Rank descending. Top 3 = this week's focus sectors. Bottom 3 = avoid.

Check blacklisted sectors from WEEKLY-REVIEW.md (2 consecutive failed trades = 2-week blacklist).

### 4. Universe scan

Build the candidate universe by seeding from the top-3 sector ETFs (from step 3):

```
bash scripts/build-universe.sh XLK XLY XLF
```

(Substitute the actual top-3 tickers from step 3. Sector blacklist: drop any blacklisted ETFs before calling.)

This script:
- Pulls constituents of each top-3 sector ETF via Alpha Vantage `ETF_PROFILE`
- Dedupes across ETFs (some names appear in multiple)
- Drops holdings with weight <0.3% (ETF noise tail)
- Applies the $10–$500 price filter via Alpaca quotes
- Returns a filtered ticker list to stdout (~100–180 names expected)

**Additional filters to apply on the returned list BEFORE calling canslim-screener** (cheap pre-filters save AV quota):
- 50-day ADV ≥ 500K shares (pull via `bash scripts/alpaca.sh bars <SYM> 1Day 60` — compute average of `v` field; reject if <500K)
- Not on sector blacklist from WEEKLY-REVIEW.md
- No earnings announcement in next 10 trading days (pull via `bash scripts/alphavantage.sh earnings_calendar 3month` once, then filter locally by symbol+date)

Expected output after all pre-filters: **60–120 candidates** feeding into step 5.

### 5. Score each candidate via canslim-screener

For each candidate, call `canslim-screener` skill with:
- `symbol`: <ticker>
- `purpose`: `screen`
- `market_state`: (from step 1)

Collect: conviction scores, base patterns, pivots.

Filter: keep only candidates with `conviction_score ≥ 75`.

Rank by conviction score descending.

### 6. Build the watchlist

Take top 4 ranked candidates → **Primary watchlist** (ready to trade this week).
Next 4 → **Bench** (setups forming, not yet at pivot).

Write to `memory/WATCHLIST.md` per its format. Include:
- Rank, symbol, conviction, letter scores, base, pivot, stop-if-entered, earnings date, notes
- Removed-this-week reasons for anything that was on last week's list but didn't make this one

### 7. ClickUp summary

Send a single weekend message via `bash scripts/clickup.sh`:

```
📋 Week prep [YYYY-MM-DD]
Market: [state] (Dist: X/25, SPY vs 50MA: +X.X%)
Top sectors: [3 sectors]
Watchlist primary:
1. $SYMBOL (conviction/100) pivot $X.XX
2. ...
3. ...
4. ...
Bench: $S1, $S2, $S3, $S4
Calendar risks: [FOMC? CPI? earnings on watchlist names?]
Entry plan Mon: [what specific triggers we're watching]
```

### 8. Log to research log

Append a `/weekly-prep` entry to `memory/RESEARCH-LOG.md` with the full scan stats (how many scanned, how many passed, rejection breakdown) — this helps spot regime changes later.

---

## Success criteria

- `MARKET-DIRECTION.md` updated with today's numbers
- `WATCHLIST.md` rewritten with ranked candidates
- `RESEARCH-LOG.md` has /weekly-prep entry with scan stats
- ClickUp received the weekend summary
- Zero errors; if any data source failed, the fallback behavior per TRADING-STRATEGY.md was logged

## Failure modes to watch

- **<3 candidates pass conviction 75.** That's information. Write it clearly: "Only X candidates passed — market may be transitioning. Reduce entries expectation for week." Do NOT lower the conviction threshold to fill slots.
- **Market state = Correction.** No new-entry watchlist. Build hedge candidates (SH, SQQQ) instead. Note current longs to evaluate for culling at Monday /pre-market.
- **Alpha Vantage rate-limited.** Cache fundamentals from prior week; flag affected tickers' scores as `cached_fundamentals` in canslim-screener output.

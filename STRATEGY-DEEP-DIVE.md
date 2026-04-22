# Strategy Deep-Dive — FireLit Swing

The full breakdown. Every signal, every sub-agent, every research question, every learning loop. This is the document that connects the rulebook to the *why*.

---

## 1. The Thesis

**CAN SLIM on a $2,500 account with signal-based exits, in a long + inverse-ETF-hedge structure, targeting top-5% weekly returns over a rolling 12-month window.**

Why this specific configuration:

1. **CAN SLIM because it's the rare system that backs a 40-year winning track record with a *falsifiable ruleset*.** Most retail strategies don't survive contact with a rule-following agent because the rules are squishy ("buy strength", "cut losers"). CAN SLIM gives us exact numbers — 25% EPS growth, RS rank ≥80, -7% stop, 40% volume surge, 5 distribution days = under pressure. An agent can execute these.

2. **Signal-based exits, not time-based, because the asymmetry lives in letting winners run.** Classic swing trading caps hold time at 5–10 days — that's the rule that kills the 100% gainers. O'Neil's 8-week rule captures this: stocks up 20%+ in 3 weeks deserve to be held. Time-based exits would sell them halfway up.

3. **$2,500 because that's the capital available and it's enough to matter.** On a paper-thin account, commissions and spreads would eat returns. On $2,500 with Alpaca's zero commissions and fractional shares, we have enough surface area for the 4-position book to be meaningful. Below ~$1,500 this architecture becomes uneconomic.

4. **4 positions at 30% instead of 5 at 20%, because top-5% requires concentration.** Diversification is the anti-alpha. You can't diversify your way into top-decile returns; you diversify your way into index returns. But concentration without circuit breakers is how you blow up — hence the -3% daily / -6% weekly / -12% drawdown halts.

5. **Inverse ETF hedges instead of full short book, because short selling on $2,500 creates borrow-availability and margin-call complexity that would distract the agent from its actual edge (long leader selection).** SH and SQQQ give us ONE lever to add when the market flips, without a second universe to scan.

6. **Top-5% as a framing, not a guarantee.** In any given week, "top 5%" varies from +3% (choppy tape) to +15% (trending tape). The *real* claim is: a rule-following CAN SLIM agent compounds into top-decile over 12+ months because it loses small (circuit breakers, -7% stops) during regimes when the playbook doesn't work, and presses hard during confirmed uptrends when it does.

---

## 2. The Signals — What Triggers a New Trade

A new position requires **every** condition below to be true simultaneously. Any one missing → no trade.

### Entry preconditions (market-level, checked first)

| Condition | Source | Why |
|---|---|---|
| Market state = "Confirmed Uptrend" | MARKET-DIRECTION.md | 3/4 stocks follow the market; fighting the tape is how you die |
| Distribution day count < 5 | MARKET-DIRECTION.md | 5+ = uptrend weakening, institutions distributing |
| No circuit breaker active | Account state | If we're already bleeding, stop digging |
| Weekly trade count < 3 | TRADE-LOG.md | Overtrading kills edge; 3-per-week forces quality |
| Open position count < 4 | Alpaca | Concentration ceiling |
| Cash buffer ≥ 10% | Alpaca | Dry powder for opportunities and gap protection |

### Entry signals (stock-level, from canslim-screener)

Each stock needs a **conviction score ≥ 75/100** built from:

| Signal | Weight | Data | What specifically triggers it |
|---|---|---|---|
| **C** — Current quarterly EPS YoY | 0–20 | Alpha Vantage EARNINGS | ≥80%=20, 40-79%=15, 25-39%=10, <25%=disqualify |
| **A** — Annual EPS growth 3yr + ROE | 0–15 | Alpha Vantage EARNINGS+OVERVIEW | All 3yrs ≥25%=10, ROE≥17%=+5 |
| **N** — New catalyst + new high | 0–15 | Perplexity + Alpaca | New 52wk high from base=10; new product/CEO=+5 |
| **S** — Float + volume + buybacks | 0–15 | Alpha Vantage + Alpaca | Float<50M=5, volume surge ≥+40%=5, active buyback=5 |
| **L** — RS rank + sector leadership | 0–15 | Alpaca bars + sector ETF comparison | RS≥95=10, 90-94=8; sector top-3=+5 |
| **I** — Institutional sponsorship | 0–10 | SEC EDGAR 13F (cached weekly) | ≥10 holders + increasing=7; smart money adding=+3 |
| **Base pattern bonus** | 0–10 | Alpaca bars (see base-patterns.md) | Cup-with-handle/flat base/double bottom/high-tight flag = 10 |

**M** is a gate, not a score — if it's not green, no score matters.

### Entry triggers (pivot-level, from /market-check)

Once a stock scores ≥75 and sits on the watchlist with a valid pivot:

- **Price crosses pivot point** (not just approaches)
- **Volume ≥ +40% above 50-day average** during the breakout day
- **Entry zone respected** — pivot to pivot × 1.05 (no chasing)
- **Time window respected** — no entries 8:30–9:00 CT (amateur hour) or after 2:45 CT (late-day fakes)
- **No macro risk** — not pre-1pm CT on FOMC day, not pre-7:30am CT on CPI/NFP day
- **Earnings buffer** — next earnings announcement ≥5 trading days out

All conditions true → limit buy at pivot × 1.05, with immediate 10% trailing stop GTC placed on fill.

---

## 3. The Sell Rules — When to Exit

The sell-rules-engine evaluates every position against 8 rules at every EOD. **First rule that fires wins. No overrides.**

### Rule-by-rule summary

| # | Rule | Trigger | Action | Why |
|---|---|---|---|---|
| 1 | **-7% hard stop** | Close ≤ entry × 0.93 | Market sell immediately | Biggest winners come from 40% hit rate × 2.5:1 asymmetry. Losers must be capped. |
| 2 | **Trailing stop hit** | Alpaca GTC stop fills | Log + reconcile | Alpaca does the work; we just record. |
| 3 | **50-MA break on volume** | Close below 50MA AND vol ≥ 1.5× avg | Market sell | Institutional selling signal. Don't argue. |
| 4 | **Distribution cluster** | Market has 6+ dist days in 25 sessions | Sell weak half of book | Market regime has flipped; rotate to cash. |
| 5 | **Climax top** | Position +25%, single day +2× ATR on vol 1.5×, late in rally | Sell 50%, tighten rest | Capture the euphoria profit; let half ride. |
| 6 | **Base failure** | Entered <5 days ago, retreated to pivot on heavy vol | Sell full position | Breakout was false. Get out. |
| 7 | **8-week hold (deferral)** | Position +20% in <3 weeks of entry | Defer rules 3–8, keep Rule 1 | Big-winner rule. Give multi-baggers room. |
| 8 | **Late-stage base** | Entered on 4th-stage+ base | Tighten to 5% trail | 75% failure rate for late bases; preserve profit. |

### Stop-tightening (always evaluated, separate from 8 rules)

| Position gain | New trail % |
|---|---|
| +15% | 7% |
| +20% | 5% |
| +25% | 4% + climax watch |
| +50%+ | 3% (rare; multi-bagger) |

**Never loosen a stop.** **Never move a stop within 3% of current price** (whipsaw protection).

---

## 4. The Sub-Agent Pattern

Claude Code supports sub-agents via the Task tool. This architecture uses a **hybrid model** — 3 skills as durable reasoners + on-demand sub-agent spawning for parallelizable research.

### The 3 persistent skills (durable reasoners)

These don't spin up and down per request — they're called like functions from the slash commands.

| Skill | What it owns | Why it's a skill, not a sub-agent |
|---|---|---|
| `canslim-screener` | CAN SLIM scoring rubric, base detection, pivot calc | Same logic used by multiple routines; must stay consistent |
| `trade-executor` | Order placement, sizing, PDT gauntlet, trailing stops | Order bugs are most expensive bugs; centralize them |
| `sell-rules-engine` | The 8 sell rules evaluated against every open position | Exit discipline is where emotion kills edge; centralize |

### When to actually spin up sub-agents

Claude Code's Task tool is worth using for **parallel research** during `/weekly-prep`:

When scanning 100–200 candidate tickers, sequential scoring is slow. Sub-agents can score in parallel:

```
/weekly-prep spawns 4 sub-agents in parallel:
├─ SubAgent A: Score tickers 1-50 via canslim-screener
├─ SubAgent B: Score tickers 51-100 via canslim-screener  
├─ SubAgent C: Score tickers 101-150 via canslim-screener
└─ SubAgent D: Score tickers 151-200 via canslim-screener

Parent agent: Collect results, rank by conviction, build watchlist
```

Why sub-agents for this specifically:
- It's genuinely parallelizable (each ticker is independent)
- Sequential would take 30+ minutes; parallel takes ~5
- The work product is structured (JSON scores) — easy to merge

### When NOT to spin up sub-agents

- `/market-check` — sequential by design (limited order slots, need to respect weekly trade count across entries)
- `/eod-review` — all positions need to be evaluated together (portfolio-level distribution day check affects individual decisions)
- `/pre-market` — few open positions + few watchlist items; parallelism not worth coordination cost
- `/trade` — interactive, single-ticker focus

### Sub-agent spawning example (pseudocode for `/weekly-prep`)

```python
candidates = build_universe()  # ~150-200 tickers
batches = chunk(candidates, batch_size=40)  # 4-5 batches

sub_agent_results = []
for batch in batches:
    result = spawn_sub_agent(
        task="Score each ticker against canslim-screener and return JSON array",
        tickers=batch,
        timeout=180,  # 3 minutes per batch
    )
    sub_agent_results.append(result)

scored = merge_and_rank(sub_agent_results)
top_4 = scored[:4]   # primary watchlist
bench = scored[4:8]  # bench
```

### A note on sub-agent discipline

Sub-agents should NOT have order-placement capability. Only the parent routine can call `trade-executor`. This prevents:
- Sub-agent race conditions (two sub-agents deciding to buy the same ticker simultaneously)
- Loss of circuit-breaker visibility (sub-agent doesn't see the parent's week-to-date P&L)
- Memory-file corruption from parallel writes

Skill permissions are configured so sub-agents can READ all memory + call `canslim-screener`, but NOT call `trade-executor` or `sell-rules-engine`. Those live in parent-routine execution.

---

## 5. Research Question Templates

### For /weekly-prep (Sunday market thesis)

```
Prompt to Perplexity:
"Summarize the current US stock market regime as of this weekend. Specifically:
1. Where are SPY and QQQ vs. their 50-day and 200-day moving averages?
2. How many distribution days have occurred in the last 25 sessions?
3. Which sectors are leading on 4-week relative performance?
4. What are the 3 most important macro catalysts this coming week (earnings, 
   Fed speakers, economic data)?
5. What is the broad analyst consensus on market direction?
Answer in 5 bullets. Cite sources. No fluff."
```

### For /weekly-prep (per-ticker CAN SLIM "N" research)

```
"Research <SYMBOL> for CAN SLIM 'N' (New) letter. Answer in 5 bullets:
1. New product, service, or management change in last 12 months (yes/no + brief)
2. Trading within 15% of 52-week high? (yes/no)
3. Analyst price target changes in last 30 days (up/down/flat)
4. Any pending catalyst in next 30 days (earnings aside)
5. Primary risk to the thesis
No fluff. One line per bullet."
```

### For /pre-market (overnight catalyst scan)

```
"Overnight news for <SYMBOL> relevant to short-term stock price. Any earnings, 
guidance, rating changes, major customer/product news, or legal/regulatory events 
in the last 18 hours. Answer in 3 bullets. Cite. No fluff."
```

### For /pre-market (market overnight)

```
"What happened in US equity futures overnight? Where are ES and NQ futures now 
vs. yesterday's close? Any major economic data or geopolitical news overnight 
that will affect open? Expected market direction for today's session? 4 bullets. 
No fluff."
```

### For emergency news mid-session

```
"<SYMBOL> has moved X% in the last Y minutes. What catalyst is driving this? 
Is this a material change to the thesis (earnings revision, guidance cut, 
regulatory action) or a market-wide move? Be definitive. 3 bullets. Cite."
```

---

## 6. The Learning Loop

This is what separates a bot from an agent. Every Friday /weekly-review runs 9 questions. The answers → rule changes → better next week.

### The 9 weekly review questions

1. **Performance** — What were the numbers? Return %, winners, losers, winner:loser ratio, biggest winner, biggest loser.

2. **Rule adherence** — Did we violate any hard rule this week? (Target: 0 violations. Below 95% adherence triggers Monday review with Jason.)

3. **Market direction accuracy** — Did our M state calls match how the market actually behaved? Any missed distribution days? Any state transitions we were late on?

4. **Sector hit rate** — Which sectors produced winners? Which produced losers? Any sector to blacklist (2 consecutive failed trades = 2-week blacklist)?

5. **Conviction correlation** — Did the ≥85 conviction trades outperform the 75–84 trades? If yes, consider raising the threshold. If no, we know conviction scoring needs tuning.

6. **Research source impact** — Did websearch-fallback weeks underperform Perplexity weeks? If yes, prioritize Perplexity uptime. If no, we can tolerate the cheaper fallback.

7. **Lessons** — 1-3 concrete, specific lessons. Format: "We observed X. Pattern: Y. Fix: Z."

8. **Proposed rule changes** — If a lesson points to a rule change, propose it here. Jason reviews Monday. Approved changes get edited into TRADING-STRATEGY.md.

9. **Next-week setup** — Market thesis going in, sector focus, calendar risks, current book status, emotional state check.

### How rule changes propagate

```
Friday: /weekly-review writes proposed rule change to WEEKLY-REVIEW.md
↓
Monday: Jason reads review, approves / rejects / modifies
↓
Jason: Edits TRADING-STRATEGY.md directly (or tells Claude to)
↓
TRADING-STRATEGY.md changelog entry appended with date + rationale
↓
Next week: The new rule is live — all routines re-read TRADING-STRATEGY.md at session start
```

This is the improvement flywheel. 26 weekly reviews per year = 26 micro-improvements to the playbook. Most won't be significant. A few will be.

### What rule changes look like in practice (hypothetical examples)

- "Tighten handle-volume threshold from <60% of base avg to <50%" — because we saw 2 base failures this month on loose handles
- "Raise earnings-proximity buffer from 5 to 7 days" — because one earnings-surprise-miss hit us with 6 days of buffer
- "Add 'financial sector news scan' to /pre-market when holding financials" — because a rate announcement blindsided a regional bank position
- "Lower conviction floor to 72 when holding <2 positions for 2+ weeks" — because we're missing valid B+ setups during thin markets (controversial — probably rejected)

---

## 7. The Research Findings (What 45+ Years of CAN SLIM Taught Us)

From O'Neil's own research + subsequent academic validation:

### Signal strength (what actually drives returns)

1. **Market direction (M) is the single most important factor.** 3 out of 4 stocks follow the market. Fighting the tape erases any stock-selection edge. Don't fight.

2. **Earnings growth (C + A) is the 2nd most important factor.** Stocks with accelerating EPS growth outperform by 2–3×. This is the robustest finding in the literature.

3. **Base patterns are the 3rd most important factor.** Cup-with-handle breakouts from proper bases succeed 60%+ of the time. Late-stage bases fail 75%+.

4. **Volume confirmation is non-negotiable.** Breakouts on light volume fail >60% of the time. Breakouts on +40% volume succeed >60% of the time.

5. **RS rank (L) is the 4th most important factor.** Leaders lead. Laggards lag. This is tautological but systematically ignored.

### What *doesn't* matter as much as people think

1. **Valuation.** O'Neil's research showed P/E is a *weak* predictor of forward returns. High-P/E leaders (paying for growth) outperform low-P/E laggards. This is counter to value investing.

2. **Dividend yield.** CAN SLIM is a growth system. Dividend yield is mostly signal for mature/slow companies.

3. **Short interest.** Interesting but not predictive enough to be a primary signal.

4. **Insider buying.** Directional at best, noisy, lagged.

5. **Macro narratives.** Most macro predictions are wrong more often than right. Follow the market's actual state (M), not pundits.

### What kills CAN SLIM traders (and how we avoid it)

| Failure mode | How we prevent it |
|---|---|
| Ignoring the -7% stop | Sell-rules-engine enforces deterministically; no override path |
| Chasing extended breakouts | Entry zone capped at pivot × 1.05 |
| Overtrading | Max 3 new positions per week, enforced by trade-executor |
| Holding losers through bad market | -6% weekly circuit breaker halts new entries |
| Selling winners too early | 8-week rule defers other exits for +20%-in-3-weeks winners |
| Buying into corrections | Market state gate — no entries outside Confirmed Uptrend |
| Not learning from losses | Weekly review is mandatory; rule changes are tracked |
| Emotional override ("this one's different") | Skills deny override paths; Jason must edit TRADING-STRATEGY.md to change |

---

## 8. What This Architecture Doesn't Do (Honest Limitations)

1. **It doesn't predict the market.** No attempts to call tops, bottoms, or macro regime changes beyond measurable criteria (distribution days, MA breaks, follow-through days).

2. **It doesn't backtest itself.** There's no historical simulation engine. Phase 0 paper trading is the validation step. If you want historical backtests, that's a separate Phase 3 project.

3. **It doesn't handle earnings plays.** Earnings are binary gap risk. The system explicitly avoids positions within 5 days of earnings.

4. **It doesn't trade pre-market or after-hours.** Only regular session entries. Gap risk management via the hard stop, not via extended-hours trading.

5. **It doesn't do news-momentum day trading.** The -7% stop and 10% trailing stop are swing-trading rules. Intraday scalping would require different infrastructure.

6. **It doesn't guarantee top-5% returns.** That's a goal, and a regime-dependent one. In choppy markets, the system sits on cash. That's the feature — surviving weak weeks is what lets you dominate strong ones.

7. **It doesn't replace Jason's judgment on:**
   - Whether to change hard rules (Jason approves all rule changes)
   - Whether to run the live account (Phase 0 must pass first)
   - Whether to take the /trade manual override (Jason owns these decisions)
   - Weekly reviews (agent drafts, Jason reads and directs)

---

## 9. What Top-5% Actually Looks Like

To calibrate expectations: running this system faithfully for 12 months, assuming CAN SLIM's historical edge holds:

- **Weekly returns in strong uptrends:** +2% to +8% typical, +15% possible on multi-bagger weeks
- **Weekly returns in choppy markets:** -1% to +2% typical (agent is mostly in cash)
- **Weekly returns in corrections:** -2% to +1% typical (agent in cash + hedges; losing small is winning)
- **Annual return expectation (IF the year includes 3-4 months of confirmed uptrend):** +40% to +100%
- **Annual return in mostly choppy/bear year:** -5% to +15%
- **Max drawdown expected:** -15% (designed-for), with -20% halt trigger
- **Number of trades per year:** 80–130 entries (2-3 per week average)
- **Winner percentage:** 45–55%
- **Avg winner:** +15-25%
- **Avg loser:** -6-8% (-7% stop fires some, others closer)

This gets you to top-decile most years if executed perfectly. Top-5% is the stretch goal — hit in years with 4+ months of confirmed uptrend and strong sector leadership.

---

## 10. How to Stress-Test This (Before and During Live)

### Phase 0 tests (before going live)

- [ ] Run `/weekly-prep` on 3 consecutive Sundays. Does it produce a ranked watchlist each time? Any crashes?
- [ ] Run full weekday cycle for 2 weeks. Every routine fires? No errors?
- [ ] Deliberately trigger a -7% scenario on paper. Does sell-rules-engine fire? Does trade-executor cancel trailing stop and place market sell?
- [ ] Deliberately simulate a distribution-day cluster. Does MARKET-DIRECTION.md transition states? Does next /pre-market block new entries?
- [ ] Unplug Perplexity API key. Does the fallback to WebSearch work cleanly? Are logs annotated correctly?

### Live-account tests (first 60 days)

- [ ] 2 clean weekly cycles with 100% rule adherence
- [ ] At least 1 complete trade entry-through-exit lifecycle
- [ ] No state drift (Alpaca vs. TRADE-LOG reconcile every /portfolio call)
- [ ] No PDT violations
- [ ] Weekly review rule-change proposals at the appropriate rate (1-2 per month is healthy)

### Warning signs to watch for

- **Rule adherence slipping.** If weeks start showing overrides, the agent or Jason is drifting. Recalibrate.
- **Watchlist quality degrading.** If weeks regularly show <3 conviction-≥75 candidates, the market is shifting. Don't force trades — the system is correctly signaling "sit out."
- **Winners getting cut early.** If the 8-week rule isn't activating for positions that "felt strong," investigate whether Rule 3 (50-MA break) is over-triggering.
- **Stop-losses not protecting.** If -7% hard stops are missing by 2%+, investigate timing — are they getting checked on market open only? Adjust frequency.

---

## 11. Integration with FireLit Consulting

This architecture is also a reference implementation for what the FireLit consulting practice sells to PMO clients — **agentic infrastructure deployed against a concrete, measurable outcome (trading P&L)**. 

The pattern that transfers to PM clients:
- **Always-loaded CLAUDE.md** = agent identity + hard rules
- **Memory files** = persistent state across sessions (their project tracker, risk log, etc.)
- **Heavy skills** = domain-specific reasoning (their risk assessor, their resource planner)
- **Slash commands** = scheduled or on-demand routines (daily standup, weekly status, monthly exec summary)
- **Bash scripts** = integration layer (their Jira, Confluence, Salesforce, ClickUp)
- **Weekly review loop** = continuous improvement discipline

Every element of FireLit Swing maps to an element of a FireLit PMO deployment. The difference is domain (CAN SLIM vs. project status) and data sources (Alpaca vs. their stack).

---

## Appendix A — Alpaca Gotchas Checklist

Re-stated here for quick reference (full detail in `trade-executor/references/alpaca-order-api.md`):

1. `trail_percent` must be a STRING: `"10"`, not `10`
2. Data base URL is `data.alpaca.markets`, not `api.alpaca.markets`
3. Env var names use underscores (`APCA_API_KEY_ID`); headers use hyphens (`APCA-API-KEY-ID`)
4. Fractional orders are market-hours-only
5. Trailing stops only evaluate during market hours (no overnight gap protection)
6. Can't have opposing orders on same symbol — cancel existing stop before placing sell
7. All numeric fields in responses are strings — cast before math
8. Alpaca enforces PDT at placement time — check `daytrade_count` before same-day sells

## Appendix B — Key Numbers Cheat Sheet

| Rule | Value |
|---|---|
| Account size | $2,500 |
| Max positions | 4 |
| Max position size | 30% ($750), 35% on conviction ≥85 + uptrend ≥10 sessions |
| Min cash buffer | 10% |
| Max new positions per week | 3 |
| Min conviction score | 75/100 |
| Hard stop | -7% from entry |
| Initial trailing stop | 10% (GTC on Alpaca) |
| Trail tighten at +15% gain | 7% |
| Trail tighten at +20% gain | 5% |
| Trail tighten at +25% gain | 4% |
| Never trail within | 3% of current price |
| Daily circuit breaker | -3% account loss |
| Weekly circuit breaker | -6% account loss |
| Drawdown halt | -12% from high-water mark |
| Earnings buffer | 5 trading days |
| Liquidity floor | 500K ADV |
| Price range | $10–$500 |
| Distribution day threshold | Index close ≤-0.2% on higher volume than prior day |
| Distribution day expiry | 25 sessions OR index +6% from that close |
| Follow-through day | Day 4-7 of rally closing ≥+1.25% on higher volume |
| Under Pressure trigger | 5 distribution days in 25 sessions |
| Correction trigger | 6 dist days OR SPY closes below 50-MA on volume |
| Inverse ETF max size | 25%, 1 position max |
| CAN SLIM volume breakout threshold | +40% vs 50-day avg |
| Pivot chase limit | +5% above pivot |

---

Built by Claude Opus 4.7 for Jason's FireLit Swing — 2026-04-17.

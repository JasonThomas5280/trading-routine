# Project Charter — FireLit Swing

## Mission

Deploy a disciplined CAN SLIM swing trading agent that aims to rank in the top 5% of swing traders by weekly returns over a rolling 12-month window, while preserving capital through strict risk rules.

## Definition of "Top 5%"

"Top 5% in weekly returns" is a goal, not a guarantee. Honest framing:

- **Market-regime dependent:** CAN SLIM shines in confirmed uptrends and struggles in choppy/bear tapes. The agent's job is to go to cash (or hedges) when the playbook doesn't work, which is how it ends up top-decile over rolling 12-month windows even when not every week is a winner.
- **Weekly top-5% varies widely:** In a strong uptrend week, top-5% might be +5% to +8%. In a choppy week, top-5% might be +1.5% to +3%. In a down week, top-5% might be −1% (relative outperformance).
- **The real edge:** Rule execution without emotional drift. Retail swing traders lose most of their edge to emotional sell decisions (riding losers past the -7% stop, selling winners too early). A disciplined agent removes that error.

## Performance Targets

| Metric | Target | Hard floor |
|---|---|---|
| Weekly return (in uptrends) | Top 20% of CAN SLIM benchmark | ≥ 0% |
| Max drawdown | <15% | <20% (halt trigger) |
| Winner:loser ratio | ≥ 2.5:1 | ≥ 2.0:1 |
| Rule adherence rate | 100% | ≥ 95% (below = halt + human review) |
| Win rate | 45–60% (CAN SLIM is low-winrate, high-payoff) | ≥ 35% |

## Phase Tracking

| Phase | Capital | Goal | Status |
|---|---|---|---|
| Phase 0 — Dry run | $2,500 paper | Validate all 5 routines fire, all 3 skills score correctly, no hard rule violations over 2 weeks | Not started |
| Phase 1 — Live small | $2,500 live | Survive first 60 days with <-10% drawdown, build real TRADE-LOG | Not started |
| Phase 2 — Scale | $5,000+ | Proof earned, scale capital if Phase 1 shows rule adherence + target hit rate | Future |

## Stakeholders

- **Jason** — Principal. Owns the strategy, reviews weekly postmortems, decides rule changes.
- **Claude (this agent)** — Executor. Runs routines, calls skills, updates memory files.
- **Alpaca** — Broker.
- **Alpha Vantage / Perplexity / SEC EDGAR** — Data sources.
- **ClickUp** — Communication channel.

## Not-Goals

- This is not a high-frequency system. No intraday signals. No scalping.
- This is not a market-timing system beyond the "M" in CAN SLIM.
- This is not an options, futures, crypto, or forex system.
- This is not a "beat the S&P every week" system. It's a "survive choppy weeks and crush uptrend weeks" system.

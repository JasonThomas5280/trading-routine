# 🐂 FireLit Swing

A disciplined CAN SLIM swing trading agent that runs on Claude Code, trades via Alpaca, and uses a suite of skills + slash commands to execute William O'Neil's methodology without emotional drift.

**Capital:** $2,500 | **Style:** CAN SLIM swing (long + inverse ETF hedges) | **Goal:** top-5% swing trader weekly returns over rolling 12mo

---

## What this is

A complete agent architecture including:
- **Always-loaded identity + rules** (`CLAUDE.md`)
- **The rulebook** (`memory/TRADING-STRATEGY.md` — the single source of truth for every entry, exit, sizing, and circuit breaker rule)
- **Three strategy skills** (`canslim-screener`, `trade-executor`, `sell-rules-engine`) that own the expensive logic
- **Seven slash commands** (`/weekly-prep`, `/pre-market`, `/market-check`, `/eod-review`, `/weekly-review`, `/portfolio`, `/trade`)
- **Five bash wrappers** for Alpaca, Alpha Vantage, Perplexity, ClickUp, SEC EDGAR
- **Stateful memory files** (trading log, research log, watchlist, market direction, weekly review)

## Directory layout

```
trading-routine/
├── CLAUDE.md                              ← always-loaded agent instructions
├── README.md                              ← this file
├── STRATEGY-DEEP-DIVE.md                  ← full strategy breakdown, signals, sub-agents, learning loop
├── .env.template                          ← placeholder env vars
├── .gitignore
│
├── memory/                                ← agent's persistent state
│   ├── TRADING-STRATEGY.md                ← THE RULEBOOK — the source of truth
│   ├── PROJECT-CHARTER.md                 ← mission, phase tracking
│   ├── MARKET-DIRECTION.md                ← M status, updated daily
│   ├── TRADE-LOG.md                       ← every trade, thesis, outcome
│   ├── RESEARCH-LOG.md                    ← daily research notes, source-attributed
│   ├── WATCHLIST.md                       ← weekly ranked candidates
│   └── WEEKLY-REVIEW.md                   ← Friday postmortems
│
├── .claude/
│   ├── settings.local.json                ← permissions for Bash/WebSearch/WebFetch
│   ├── skills/
│   │   ├── canslim-screener/              ← scoring rubric + base patterns
│   │   ├── trade-executor/                ← order placement + sizing + PDT
│   │   └── sell-rules-engine/             ← the 8 sell rules
│   └── commands/
│       ├── weekly-prep.md                 ← Sun 4pm: build watchlist
│       ├── pre-market.md                  ← M-F 6am: overnight check
│       ├── market-check.md                ← M-F 10am: execute entries
│       ├── eod-review.md                  ← M-F 3:15pm: sell-rules + summary
│       ├── weekly-review.md               ← Fri 3:30pm: postmortem
│       ├── portfolio.md                   ← ad-hoc snapshot
│       └── trade.md                       ← ad-hoc manual trade
│
└── scripts/
    ├── alpaca.sh                          ← trades, positions, market data
    ├── alphavantage.sh                    ← fundamentals (with caching)
    ├── perplexity.sh                      ← research synthesis
    ├── clickup.sh                         ← reporting (with placeholder fallback)
    └── edgar.sh                           ← 13F institutional data
```

---

## Setup (first time)

### Step 1 — Clone and configure

```bash
cd /path/to/trading-routine
cp .env.template .env
# Edit .env with your real keys
```

Required keys to get:
- **Alpaca** — https://app.alpaca.markets (start with paper trading)
- **Alpha Vantage** — https://www.alphavantage.co/support/#api-key
- **SEC EDGAR** — no key, but set `EDGAR_USER_AGENT="Firstname Lastname email@example.com"` per SEC policy

Recommended:
- **Perplexity** — https://www.perplexity.ai/settings/api (if unset, routines fall back to Claude's native WebSearch)
- **ClickUp** — optional; if unset, summaries write to `memory/DAILY-SUMMARY.md`

### Step 2 — Make scripts executable

```bash
chmod +x scripts/*.sh
```

### Step 3 — Source your env before running

```bash
set -a; source .env; set +a
```

(Or use a `direnv`, `mise`, `dotenv` integration if you prefer.)

### Step 4 — Verify the plumbing

Run the dry-run checklist:

```bash
# 1. Secrets clean
git status                      # Should NOT show .env
grep -r AKIA .                  # Should return nothing (no AWS-style keys leaked)

# 2. Alpaca wired
bash scripts/alpaca.sh account  # Should return JSON with equity ~$2,500
bash scripts/alpaca.sh positions # Empty array if fresh paper account

# 3. Alpha Vantage wired
bash scripts/alphavantage.sh overview NVDA
bash scripts/alphavantage.sh earnings NVDA

# 4. Perplexity wired (optional)
bash scripts/perplexity.sh "What is the current state of the US stock market?"

# 5. ClickUp graceful placeholder
bash scripts/clickup.sh message "test"    # with empty key → appends to DAILY-SUMMARY.md

# 6. EDGAR wired
bash scripts/edgar.sh ticker_to_cik NVDA  # Should return 0001045810
```

### Step 5 — First session in Claude Code

```bash
cd /path/to/trading-routine
claude
```

When Claude Code opens:
- `CLAUDE.md` auto-loads
- Type `/` to see the 7 slash commands
- Start with `/portfolio` — pure read-only, safe to run anytime
- Test `/weekly-prep` (Sunday only) or `/pre-market` to see the full flow

---

## Phase 0: Dry run (2 weeks minimum before going live)

With `APCA_API_BASE_URL=https://paper-api.alpaca.markets`:

- Run `/weekly-prep` on a Sunday
- Let the 4 weekday routines run for 2 full weeks
- Verify TRADE-LOG.md fills correctly, no duplicate entries, no missed stops
- Run `/weekly-review` each Friday
- Read the reviews — do they make sense? Any rule violations?

Phase 0 success criteria:
- [ ] 2 clean weekly cycles (Sun → Fri)
- [ ] All routines fired on schedule
- [ ] Rule adherence 100% (no overrides of conviction floor, no -7% stops missed)
- [ ] Memory files consistent (no state drift between Alpaca and TRADE-LOG.md)
- [ ] At least 1 complete trade lifecycle (entry → exit) logged cleanly

Only then flip `APCA_API_BASE_URL` to the live URL.

---

## Scheduling the routines

Claude Code has a built-in `schedule` skill / `CronCreate` that runs slash commands on a cron schedule. Use it to fire the routines:

| Slash command | Cron (America/Chicago) | Purpose |
|---|---|---|
| `/weekly-prep` | `0 16 * * 0` (Sun 4:00 PM) | Build watchlist + market thesis |
| `/pre-market` | `0 6 * * 1-5` (M–F 6:00 AM) | Overnight check |
| `/market-check` | `0 10 * * 1-5` (M–F 10:00 AM) | Execute entries |
| `/eod-review` | `15 15 * * 1-5` (M–F 3:15 PM) | Sell-rules sweep + summary |
| `/weekly-review` | `30 15 * * 5` (Fri 3:30 PM) | Weekly postmortem |

`/portfolio` and `/trade` are ad-hoc — no schedule needed.

---

## Daily rhythm (what the agent does, what you do)

**You on Sunday:** read `/weekly-prep` summary in ClickUp, skim the watchlist, sanity-check.

**Agent Mon–Fri:** Runs the 4 weekday routines. Fires per-trade ClickUp alerts when it enters/exits. Sends EOD summary.

**You Mon–Fri:** Check ClickUp morning alert + EOD summary. 10 minutes of attention. Weekly review on Friday afternoon.

**You any time:** `/portfolio` to see current state. `/trade $X buy` for ad-hoc plays.

---

## What to read next

- **`STRATEGY-DEEP-DIVE.md`** — the full strategy breakdown: every CAN SLIM signal, every sell rule, the research question templates, the sub-agent pattern, the learning loop. **Read this second.**
- **`memory/TRADING-STRATEGY.md`** — the authoritative rulebook. The agent reads this every session — you should too.
- **`memory/PROJECT-CHARTER.md`** — mission, performance targets, honest framing of what "top 5%" means.
- **`.claude/skills/canslim-screener/SKILL.md`** — the brain. How stocks get scored.
- **`.claude/skills/sell-rules-engine/SKILL.md`** — the exits. How losers get cut.

---

## Philosophy

This agent isn't trying to predict the market. It's trying to **execute a proven playbook without emotional error**.

CAN SLIM has a ~40-50 year track record of identifying market leaders during confirmed uptrends. The strategy itself is not the edge — *disciplined execution is the edge*. Most retail traders know the rules; few follow them through a drawdown.

The agent's job:
- Follow the playbook. Every time.
- Cut losers at -7% without hesitation.
- Let winners run with the trailing stop and 8-week rule.
- Sit on cash (or hedges) when the market isn't offering clean setups.
- Learn from every week via the weekly review.

Over a rolling 12-month window, that discipline is what puts you in the top-5% of swing traders — not any single week's return.

---

## Support

This agent was designed for Jason's FireLit consulting practice as a reference implementation of agentic trading infrastructure. For operational issues, start with `/portfolio` to see state, then check `memory/RESEARCH-LOG.md` for the most recent routine output.

Built by Claude Opus 4.7. Rulebook v1.0 (2026-04-17). Paper-trade before live-trading.

# /portfolio — ad-hoc

Read-only snapshot of current account state. No state changes. Safe to run anytime.

---

## Steps

### 1. Pull current state

```
bash scripts/alpaca.sh account
bash scripts/alpaca.sh positions  
bash scripts/alpaca.sh orders open
```

### 2. Format the snapshot

Output in a single, scannable block:

```
📋 PORTFOLIO SNAPSHOT — [YYYY-MM-DD HH:MM CT]

Account
  Equity:       $X,XXX.XX
  Cash:         $X,XXX.XX (XX.X% of equity)
  Buying power: $X,XXX.XX
  Day-trade count: X of 3 in rolling 5 sessions
  PDT flag:     [NO | YES]

Positions (N open, XX.X% deployed)
  SYMBOL   SHARES    AVG_ENTRY   CURRENT    P&L $     P&L %    STOP      TRAIL   DAYS
  NVDA     1.5384    $487.50     $495.20    +$11.85   +1.58%   $453.38   10%     3
  META     1.1274    $621.00     $624.15    +$3.55    +0.50%   $577.53   10%     1
  CRWD     3.2145    $201.50     $215.80    +$45.97   +7.10%   $187.40   7%      6

Open orders
  SYMBOL   SIDE    TYPE           QTY       PRICE/TRAIL    STATUS
  NVDA     sell    trailing_stop  1.5384    trail 10%      accepted
  META     sell    trailing_stop  1.1274    trail 10%      accepted
  CRWD     sell    trailing_stop  3.2145    trail 7%       accepted

Market direction: [Confirmed Uptrend | Under Pressure | Correction]
Distribution days: X of 5 (trailing 25 sessions)
This week: X of 3 new positions used; weekly P&L +X.XX%

Circuit breakers: [NONE | daily_3pct_active | weekly_6pct_active | drawdown_halt]
```

### 3. Reconciliation check (silent alert)

Compare Alpaca positions vs. TRADE-LOG.md open positions section:
- If a symbol in Alpaca is not in TRADE-LOG → ⚠️ STATE DRIFT DETECTED
- If a symbol in TRADE-LOG open section is not in Alpaca → ⚠️ STATE DRIFT DETECTED

State drift = potential bug. Do NOT trade. Flag to Jason for manual resolution.

---

## When to use

- Jason asks "where do we stand?"
- Before any ad-hoc /trade
- After any unexpected market event (to check gap effects)
- As the first step of debugging anything

## What it does NOT do

- Doesn't place orders
- Doesn't modify memory files
- Doesn't run sell-rules-engine (use /eod-review or /trade for that)
- Doesn't update MARKET-DIRECTION.md

Pure snapshot. Safe.

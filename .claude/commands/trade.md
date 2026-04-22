# /trade — ad-hoc manual trade helper

For when Jason says "trade $SYMBOL" outside of scheduled routines. Runs full CAN SLIM validation before placing any order. **Manual trades get the same scrutiny as automated trades.**

---

## Usage

```
/trade <SYMBOL> <buy|sell> [shares|"all"]
```

Examples:
```
/trade NVDA buy           # ask me to size it
/trade CRWD sell all      # exit the position now
/trade SMCI buy 1.5       # buy exactly 1.5 shares
```

---

## BUY flow

### 1. Full screener pass

Call `canslim-screener(symbol=<X>, purpose=final_check, market_state=<current>)`.

If `pass: false`, STOP. Report the rejection reason to Jason. Don't ask "proceed anyway?" — the rules are the rules.

If `pass: true`, proceed with the returned pivot/entry zone/conviction.

### 2. Run /portfolio internally

Verify cash, position count, weekly trade count, circuit breakers — standard pre-trade gauntlet.

### 3. If no share count specified, use sizing math

Call position sizing from `trade-executor/references/position-sizing.md`. Show the calc to Jason:

```
Sizing proposal for $NVDA:
  Conviction: 87 (≥85 + market confirmed 12 sessions → 35% allowed)
  Equity: $2,500 × 0.35 = $875 target
  Cash after buffer: $2,500 - $250 = $2,250 (plenty)
  Current price: $487.50
  Shares: $875 / $487.50 = 1.7949 (fractional)
  Position value: $875.00 (35.0% of equity)
  Hard stop: $453.38 (-7%)
```

Confirm with Jason: "Proceed with 1.7949 shares at $487.50?"

### 4. If Jason confirms, execute via trade-executor

`trade-executor.buy(...)` handles the rest — order placement, trailing stop, logging, ClickUp alert.

### 5. If Jason overrides sizing (e.g., "buy only 1 share")

Log the override in TRADE-LOG.md with `override_reason: jason_manual_sizing`. Don't refuse — but log the deviation for weekly review.

---

## SELL flow

### 1. Verify the position exists

Pull Alpaca positions. If symbol not held → "Not currently holding $SYMBOL."

### 2. Run sell-rules-engine

Call `sell-rules-engine(symbol=<X>, evaluation_mode=full, market_state=<current>, distribution_day_count=<N>)`.

Show Jason the output:

```
$CRWD sell-rules-engine verdict: HOLD
  Position: +7.10% (3.2145 @ $201.50, now $215.80)
  Rule 1 (-7% stop): not triggered
  Rule 3 (50MA break): not triggered (above MA)
  Rule 5 (climax): not triggered
  Gain threshold: +7.10% — no stop tighten yet (needs +15%)
```

### 3. If engine says HOLD and Jason wants to sell anyway

That's a `MANUAL_OVERRIDE` sell. Ask Jason for a rationale to log.

```
MANUAL_OVERRIDE sell — please state reason:
  • Thesis change (news, company-specific)
  • Rebalancing
  • Stop-out reconsideration
  • Other (free text)
```

Log the reason in TRADE-LOG.md. Do NOT refuse a manual sell — but make sure the reason is captured for weekly review.

### 4. Execute via trade-executor

Standard sell flow through `trade-executor.sell(symbol=<X>, quantity=<N|"all">, sell_reason=MANUAL_OVERRIDE, sell_rules_engine_output=<JSON>)`.

---

## Scenarios this command handles well

- "I just read news on $X — sell it" → instant override-sell with reason logged
- "What do you think about $ABCD?" → screener pass with detailed scoring, no trade placed
- "Top up $NVDA by $200 more" → ⚠️ **NOT supported.** CAN SLIM rule: don't add to positions (no averaging up past initial entry). Explain and refuse.
- "Average down on $META" → ⚠️ refuse. Averaging down on losers is explicitly prohibited.

---

## Scenarios it refuses

- Any ticker that fails canslim-screener (even if Jason "really wants" the trade) — "Doesn't pass the ruleset. Skipping."
- Any buy during a circuit breaker
- Any buy that would exceed 4 positions or 30%/35% sizing
- Any buy within 5 days of earnings
- Any options trade (stocks only)
- Any sell via this command that bypasses the sell-rules-engine verification

The agent is allowed to be firm here. The rules are protecting Jason's capital. Making exceptions once means making exceptions always.

---

## Logging

Every /trade invocation (even if no order placed) gets logged to RESEARCH-LOG.md with timestamp + request + outcome. Audit trail for weekly review.

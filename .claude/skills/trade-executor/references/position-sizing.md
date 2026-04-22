# Position Sizing — $2,500 Account

The math behind every BUY order. Called by `trade-executor` SKILL.md.

---

## Core Formula

```python
def size_position(
    account_equity: float,
    cash_available: float,
    current_price: float,
    conviction_score: int,
    market_confirmed_uptrend_days: int,
    symbol_fractionable: bool,
    current_open_positions: int,
) -> SizingResult:

    # 1. Pick target position %
    if conviction_score >= 85 and market_confirmed_uptrend_days >= 10:
        target_pct = 0.35  # aggressive sizing allowed
    else:
        target_pct = 0.30  # standard

    # 2. Compute target dollars
    target_dollars_by_equity = account_equity * target_pct

    # 3. Reserve the 10% cash buffer
    max_deployable_now = cash_available - (account_equity * 0.10)
    if max_deployable_now <= 0:
        return SizingResult(rejected="insufficient_cash_after_buffer")

    target_dollars = min(target_dollars_by_equity, max_deployable_now)

    # 4. Minimum trade size floor
    if target_dollars < 200:
        return SizingResult(rejected="position_too_small_to_matter")

    # 5. Compute share count
    raw_shares = target_dollars / current_price

    if symbol_fractionable:
        shares = round(raw_shares, 4)  # Alpaca supports 4-decimal precision
    else:
        shares = int(raw_shares)  # round down for whole shares only
        if shares == 0:
            return SizingResult(
                rejected="price_too_high_for_position_and_not_fractionable"
            )

    # 6. Final sanity check: does this actually fit?
    actual_dollars = shares * current_price
    if actual_dollars > max_deployable_now:
        # this shouldn't happen but belt-and-suspenders
        shares = int(max_deployable_now / current_price)
        if shares == 0:
            return SizingResult(rejected="cannot_size_any_shares")

    return SizingResult(
        shares=shares,
        position_value=shares * current_price,
        position_pct=(shares * current_price) / account_equity,
    )
```

---

## Worked Examples

### Example 1: Standard entry, mid-priced stock

- Equity: $2,500
- Cash available: $2,500 (no open positions)
- NVDA current price: $487.50
- Conviction: 82
- Market state: Confirmed Uptrend day 6
- Fractional: yes

Calc:
- target_pct = 0.30 (conviction <85 OR uptrend days <10)
- target_dollars_by_equity = $750.00
- max_deployable_now = $2,500 − $250 = $2,250
- target_dollars = min($750, $2,250) = $750.00
- raw_shares = $750 / $487.50 = 1.5384
- fractional → round to 4 decimal → **1.5384 shares**
- position_value = $750.00 (matches target)
- position_pct = 30.0%

### Example 2: High conviction override

- Equity: $2,500
- Cash available: $1,800 (already have 1 position ~$700)
- META current price: $621.00
- Conviction: 92
- Market state: Confirmed Uptrend day 18
- Fractional: yes

Calc:
- target_pct = 0.35 (conviction ≥85 AND uptrend ≥10)
- target_dollars_by_equity = $2,500 × 0.35 = $875.00
- max_deployable_now = $1,800 − $250 = $1,550
- target_dollars = min($875, $1,550) = $875.00
- raw_shares = $875 / $621 = 1.4090
- → **1.4090 shares**
- position_value = $875.00
- position_pct = 35.0%

### Example 3: Expensive non-fractional

- Equity: $2,500
- Cash: $1,500
- Ticker SPGI price: $485.00
- Fractional: NO (assume)

Calc:
- target_dollars = min($750, $1,500 − $250) = min($750, $1,250) = $750
- raw_shares = $750 / $485 = 1.5463
- not fractional → floor to 1 share
- position_value = $485.00 = 19.4% of equity
- → **1 share at $485** (under target 30% but acceptable)

### Example 4: Should reject (too small)

- Equity: $2,500
- Cash: $300 (already 3 positions deployed)
- Target ticker price: $150

Calc:
- max_deployable_now = $300 − $250 = $50
- target_dollars = min($750, $50) = $50
- **Reject: position_too_small_to_matter** (50 < 200 floor)

### Example 5: Should reject (buffer violation)

- Equity: $2,500
- Cash: $240

Calc:
- max_deployable_now = $240 − $250 = −$10
- **Reject: insufficient_cash_after_buffer**

---

## Inverse ETF Sizing (Hedge Mode)

When market is Under Pressure or in Correction and we're adding a hedge:

```python
def size_hedge(account_equity, cash_available):
    # Hedges cap at 25% of portfolio (smaller than stock positions)
    target_dollars = min(
        account_equity * 0.25,
        cash_available - (account_equity * 0.10)  # respect cash buffer
    )
    # SQQQ and SH are NOT fractionable on Alpaca — verify per symbol
    return target_dollars
```

Only ONE hedge at a time. Max 25%.

---

## PDT Awareness in Sizing

Sizing doesn't change based on PDT count for BUYS — the PDT rule is about exits. However, if PDT count is already 3 (no day-trades available), sizing adds a warning to the result:

```
warnings: ["at_pdt_limit_no_same_day_exit_available"]
```

This tells the agent: if news hits and you'd normally exit same-day, you can't (except for -7% emergency). Size considering that constraint.

---

## The Math Behind 30% on $2,500

Why 30%, not 25% or 35% as baseline?

- At 25% × 4 positions = 100% deployed → no cash buffer; fails the 10% rule
- At 30% × 4 positions = 120% → can't actually hold 4 positions, so in practice 3 positions at 30% + ~10% cash = 100% equity, which is the intended structure
- At 35% × 4 = 140% → too concentrated; one gap-down wipes a week

**In practice the book usually looks like:**
- 2–3 positions at 30% each = 60–90% deployed
- 10–40% cash
- Max 4 positions ever (never 4 × 30% because that violates buffer — if 4th is taken, earlier ones must be smaller)

**Never chase the 4th position at forced small size.** If all 4 slots would require <15% sizing to fit, don't take the 4th. Stay with 3.

---

## Rounding Rules

| Situation | Rule |
|---|---|
| Fractional-eligible symbol | Round to 4 decimal places (Alpaca precision) |
| Non-fractional symbol | Floor to integer shares |
| Position value after rounding < $200 | Reject, too small to matter |
| Position value after rounding > target | Reduce share count by 1 (don't overshoot buffer) |

---

## Commission & Slippage Model

Alpaca charges $0 commission for stocks. But we must account for:
- Bid/ask spread: ~0.02% on S&P 500, 0.05–0.10% on mid-caps
- Limit order slippage: minimal (we're using limits, not market, for entries)
- Borrow fees: N/A (long only + inverse ETFs, no shorts)

Total round-trip cost estimate: ~0.10–0.25% per trade on our universe. Worth knowing — a 7% stop loss is actually closer to a 7.2% effective loss.

No adjustment needed to sizing math for this, but it's why the min-trade floor is $200 (not $100) — at smaller sizes the friction eats returns.

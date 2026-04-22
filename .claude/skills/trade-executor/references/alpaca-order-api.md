# Alpaca Order API — Reference + Gotchas

Called by `trade-executor` SKILL.md. Don't hand-craft Alpaca calls inline — use `scripts/alpaca.sh` which wraps these endpoints. This reference exists so you can reason about what's happening and debug when something fails.

---

## Environment

```
APCA_API_KEY_ID=<from Alpaca dashboard>
APCA_API_SECRET_KEY=<from Alpaca dashboard>
APCA_API_BASE_URL=https://paper-api.alpaca.markets   # paper
# or
APCA_API_BASE_URL=https://api.alpaca.markets         # live
APCA_DATA_BASE_URL=https://data.alpaca.markets       # always this for market data
```

### Gotcha 1: Env var name vs. header name

Env vars use **underscores**. HTTP headers use **hyphens**. And they must be uppercase.

```
env:    APCA_API_KEY_ID
header: APCA-API-KEY-ID
```

Mixing these up silently fails auth. The script wraps it correctly.

---

## Account endpoint

`GET /v2/account`

Returns:
```json
{
  "equity": "2500.00",
  "buying_power": "2500.00",
  "cash": "2500.00",
  "daytrade_count": 0,
  "pattern_day_trader": false,
  "trading_blocked": false,
  "account_blocked": false,
  ...
}
```

All numeric fields come back as **strings** — cast before math.

**`daytrade_count`** — rolling 5-business-day window. Alpaca enforces this at order-placement time.

---

## Positions endpoint

`GET /v2/positions`

Returns array. Each position:
```json
{
  "symbol": "NVDA",
  "qty": "1.5384",
  "avg_entry_price": "487.50",
  "current_price": "491.20",
  "market_value": "755.77",
  "unrealized_pl": "5.69",
  "unrealized_plpc": "0.0076"
}
```

Again — string fields, cast them.

---

## Place a limit BUY

`POST /v2/orders`

Body:
```json
{
  "symbol": "NVDA",
  "qty": "1.5384",
  "side": "buy",
  "type": "limit",
  "limit_price": "509.36",
  "time_in_force": "day"
}
```

**Gotcha 2: Fractional shares require `qty` as string with decimals, NOT `notional`.** The `notional` field (buying X dollars worth) works for market orders only. Limit orders need explicit share quantity.

**Gotcha 3: Fractional orders are market-hours-only.** If fractional and placed outside market hours, you'll get an error. Script checks and defers or rejects.

---

## Place a trailing stop (the GTC stop)

`POST /v2/orders`

Body:
```json
{
  "symbol": "NVDA",
  "qty": "1.5384",
  "side": "sell",
  "type": "trailing_stop",
  "trail_percent": "10",
  "time_in_force": "gtc"
}
```

**Gotcha 4: `trail_percent` MUST be a string.** `"10"`, not `10`. This is the most common Alpaca integration bug.

**Gotcha 5: Trailing stops only evaluate during market hours.** The high-water mark updates during regular session only. Overnight gaps are not protected by the trailing stop — only by our mental hard-stop check during `/pre-market` and `/eod-review`.

**Gotcha 6: Alpaca won't let you have two opposing orders.** If there's an existing SELL trailing_stop, you can't add a SELL limit for the same symbol without canceling the trailing_stop first.

---

## Place a market SELL (for hard stops, fast exits)

```json
{
  "symbol": "NVDA",
  "qty": "1.5384",
  "side": "sell",
  "type": "market",
  "time_in_force": "day"
}
```

Use market orders for:
- -7% hard stop triggers (speed matters)
- 50d MA break on heavy volume
- Circuit breaker liquidations

Never use market orders for entries — they pay the spread.

---

## Cancel an order

`DELETE /v2/orders/<order_id>`

Returns 204 on success.

---

## Quote for current price

`GET https://data.alpaca.markets/v2/stocks/<SYMBOL>/quotes/latest`

**Gotcha 7: The data base URL is different from the trading base URL.** It's `data.alpaca.markets`, not `api.alpaca.markets`.

Response shape differs by feed (IEX vs SIP). `scripts/alpaca.sh quote <SYMBOL>` normalizes it to `{bid, ask, last, spread}`.

---

## Historical bars

`GET https://data.alpaca.markets/v2/stocks/<SYMBOL>/bars?timeframe=1Day&limit=130`

Returns the last 130 daily bars. Used by canslim-screener for base detection.

`timeframe` options: `1Min`, `5Min`, `15Min`, `1Hour`, `1Day`, `1Week`. We only use `1Day` and `1Week`.

---

## Order status polling

`GET /v2/orders/<order_id>`

Status values:
- `new` — accepted, not yet routed
- `accepted` — routed, waiting
- `partially_filled` — some shares filled
- `filled` — all shares filled
- `canceled`, `expired`, `rejected` — terminal failure states

After placing a limit order: poll with exponential backoff (1s, 2s, 4s, 8s, 16s, 30s). If not filled by 30 seconds and price moved outside entry zone → cancel and log missed entry.

---

## Common rejection codes

| Alpaca error | Meaning | Our handling |
|---|---|---|
| `pattern_day_trader` | Would trip PDT | Defer if possible, accept flag for hard stop only |
| `insufficient_buying_power` | Not enough cash for order | Recompute sizing, try smaller |
| `position_not_found` | Tried to sell something we don't own | Log and investigate state drift |
| `asset_not_tradable` | Market closed, delisted, halted | Wait or skip |
| `invalid_request` | Usually a payload issue | Dump request, debug |

---

## PDT enforcement details

Alpaca enforces PDT at order-placement time. The check: "If this order fills, will the account have 4+ day trades in the rolling 5-business-day window AND equity < $25K?" If yes, Alpaca rejects with `pattern_day_trader`.

This protects us from accidentally over-trading, but it also means we can't rely on our own PDT counter — we should cross-check with Alpaca's `daytrade_count` before every sell.

---

## Paper vs. Live

During Phase 0 (dry run), set `APCA_API_BASE_URL=https://paper-api.alpaca.markets`. The agent runs identically. Switch to live only after 2 clean weeks of paper trading with zero rule violations.

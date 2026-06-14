# ✦ Math Quest — Arithmetic Flashcards

A beautiful, zero-dependency arithmetic flashcards web app. Practice addition,
subtraction, multiplication, and division (or a mixed set) with three engaging
modes.

## Run it

No build step, no install. Just open the file:

```bash
open flashcards/index.html        # macOS
xdg-open flashcards/index.html    # Linux
```

Or serve it (recommended so fonts/audio behave on all browsers):

```bash
cd flashcards && python3 -m http.server 8000
# then visit http://localhost:8000
```

## Features

- **Three modes**
  - 🎯 **Multiple Choice** — tap the right answer (or press `1`–`4`)
  - ⌨️ **Type It** — key the answer in; wrong answers flip the card to reveal it
  - 🃏 **Flip Cards** — self-check, tap to reveal (or press `Space`)
- **All four operations** — ➕ ➖ ✖️ ➗, individually or 🎲 Mixed. Subtraction never
  goes negative and division is always whole-number
- **Pick your numbers** — any combination of 1–12, with Easy / Tricky shortcuts
- **Round length** — 10, 20, or endless (∞)
- **🎺 Victory fanfare** — a triumphant melody (Web Audio) plays on a perfect score
- **Adaptive practice** — tracks accuracy per fact and weights each round toward
  your weak/unseen facts. A live **Mastery %** shows progress per table, and
  ⚡ **My tricky ones** auto-selects your four weakest tables.
- **Progression**
  - ✨ **XP + levels** with a level-up celebration (XP bar on the home screen)
  - 🏅 **Achievements** — Flawless, Sharpshooter, On Fire, Speed Demon, Centurion, Dedicated
- **Engaging UX**
  - Animated 3D card flips, shake-on-wrong, glow-on-right
  - 🔥 Streak meter with escalating score bonuses + ⚡ speed bonuses (timer bar)
  - Confetti, sound effects (Web Audio), and 📳 haptic feedback on supported phones
  - Live progress bar and per-card timing; toast notifications
- **Results screen** — accuracy, best streak, avg time per card, a
  "worth another look" list, and a one-tap **Practice missed** replay
- **Remembers your setup** (tables, mode, length) and all stats via `localStorage`
- **Responsive** and touch-friendly — works great on phones

## Files

| File | Purpose |
|---|---|
| `index.html` | Markup for the three screens (setup / quiz / results) |
| `styles.css` | All styling, animations, and the aurora background |
| `app.js` | Game logic — deck building, modes, scoring, confetti, persistence |

All vanilla HTML/CSS/JS. No frameworks, no network calls (fonts load from Google
Fonts but the app works offline without them).

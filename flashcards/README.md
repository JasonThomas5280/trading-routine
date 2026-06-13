# ✦ Times Tables — Multiplication Flashcards

A beautiful, zero-dependency multiplication flashcards web app. Open it, pick
your tables, and practice with three engaging modes.

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
- **Pick your tables** — any combination of 1–12, with Easy / Tricky shortcuts
- **Round length** — 10, 20, or endless (∞)
- **Engaging UX**
  - Animated 3D card flips, shake-on-wrong, glow-on-right
  - 🔥 Streak meter with escalating score bonuses
  - Confetti + sound effects (Web Audio, no files)
  - Live progress bar and per-card timing
- **Results screen** — accuracy, best streak, avg time per card, and a
  "worth another look" list of every missed fact
- **Persistent best scores** via `localStorage` (best %, top streak, rounds played)
- **Responsive** and touch-friendly — works great on phones

## Files

| File | Purpose |
|---|---|
| `index.html` | Markup for the three screens (setup / quiz / results) |
| `styles.css` | All styling, animations, and the aurora background |
| `app.js` | Game logic — deck building, modes, scoring, confetti, persistence |

All vanilla HTML/CSS/JS. No frameworks, no network calls (fonts load from Google
Fonts but the app works offline without them).

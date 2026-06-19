/* ✦ Math Quest — arithmetic flashcards
   Vanilla JS, no dependencies. State machine: setup → quiz → results.
   v3: all four operations (+ − × ÷ / mixed), adaptive practice, XP/levels,
       achievements, speed bonuses, haptics, persisted settings,
       "practice missed" replay, and a victory fanfare on a perfect score. */

(() => {
  "use strict";

  // ---------- element refs ----------
  const $ = (id) => document.getElementById(id);

  const screens = { setup: $("setup"), quiz: $("quiz"), results: $("results") };

  const tableGrid = $("tableGrid");
  const opRow = $("opRow");
  const modeRow = $("modeRow");
  const lengthSeg = $("lengthSeg");
  const bestStrip = $("bestStrip");
  const masteryEl = $("mastery");

  const lvlBadge = $("lvlBadge");
  const xpFill = $("xpFill");
  const xpText = $("xpText");
  const badgeCount = $("badgeCount");

  const flashcard = $("flashcard");
  const questionEl = $("question");
  const answerReveal = $("answerReveal");
  const flipHint = $("flipHint");
  const choicesEl = $("choices");
  const typeForm = $("typeForm");
  const typeInput = $("typeInput");
  const flipControls = $("flipControls");
  const timerBar = $("timerBar");
  const timerFill = $("timerFill");

  const progressFill = $("progressFill");
  const streakBadge = $("streakBadge");
  const streakNum = $("streakNum");
  const qCount = $("qCount");
  const scoreNum = $("scoreNum");
  const toastWrap = $("toastWrap");

  // daily streak panel + customize
  const streakPanel = $("streakPanel");
  const flameEl = $("flame");
  const streakDays = $("streakDays");
  const streakSub = $("streakSub");
  const freezeBadge = $("freezeBadge");
  const freezeNum = $("freezeNum");
  const goalFill = $("goalFill");
  const goalNow = $("goalNow");
  const goalTarget = $("goalTarget");
  const goalWrap = streakPanel ? streakPanel.querySelector(".goal") : null;
  const customizeEl = $("customize");
  const customizeToggle = $("customizeToggle");

  // ---------- config ----------
  const TABLES = Array.from({ length: 12 }, (_, i) => i + 1);
  const OPS = ["+", "−", "×", "÷"];
  const STORE_KEY = "timesTables.v2";
  const CARD_SECONDS = 7; // timer-bar fill duration (cosmetic urgency, no fail)

  const ACHIEVEMENTS = {
    first_perfect: { emoji: "🏆", name: "Flawless", desc: "100% in a round" },
    sharpshooter:  { emoji: "🎯", name: "Sharpshooter", desc: "90%+ in a round" },
    streak_10:     { emoji: "🔥", name: "On Fire", desc: "10-answer streak" },
    speed_demon:   { emoji: "⚡", name: "Speed Demon", desc: "Correct under 1.2s" },
    centurion:     { emoji: "💯", name: "Centurion", desc: "100 correct all-time" },
    dedicated:     { emoji: "📚", name: "Dedicated", desc: "Played 10 rounds" },
    polymath:      { emoji: "🧠", name: "Polymath", desc: "Perfect round on all 4 ops" },
  };

  // ---------- persistent store ----------
  const defaultStore = () => ({
    bestPct: 0, bestStreak: 0, games: 0,
    xp: 0, totalCorrect: 0,
    facts: {},            // opKey -> { s: seen, c: correct }
    achievements: {},     // id -> true
    settings: { tables: [2, 3, 4, 5], mode: "choice", length: 10, ops: ["+", "−", "×", "÷"] },
    // daily streak
    dayStreak: 0, lastDay: null, freezes: 0,
    dailyGoal: 10, todayCorrect: 0, todayDay: null, goalDoneDay: null,
  });
  function loadStore() {
    try { return Object.assign(defaultStore(), JSON.parse(localStorage.getItem(STORE_KEY)) || {}); }
    catch { return defaultStore(); }
  }
  function saveStore() { try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch {} }
  const store = loadStore();

  // ---------- live settings (mirror of store.settings) ----------
  const settings = {
    tables: new Set(store.settings.tables),
    mode: store.settings.mode,
    length: store.settings.length,
    ops: new Set(store.settings.ops && store.settings.ops.length ? store.settings.ops : OPS),
  };
  function persistSettings() {
    store.settings = { tables: [...settings.tables], mode: settings.mode, length: settings.length, ops: [...settings.ops] };
    saveStore();
  }

  // ---------- level math ----------
  const levelFromXp = (xp) => Math.floor(Math.sqrt(xp / 40)) + 1;
  const xpForLevel = (lvl) => 40 * (lvl - 1) ** 2;

  // ---------- daily streak ----------
  const dayKey = (d) => {
    // local YYYY-MM-DD (avoids UTC off-by-one)
    const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };
  const todayKey = () => dayKey(new Date());
  function daysBetween(aKey, bKey) {
    const a = new Date(aKey + "T00:00:00"), b = new Date(bKey + "T00:00:00");
    return Math.round((b - a) / 86400000);
  }

  // Reset the daily goal counter when a new calendar day begins.
  function ensureDailyState() {
    const tk = todayKey();
    if (store.todayDay !== tk) { store.todayDay = tk; store.todayCorrect = 0; saveStore(); }
  }

  // Called once per day the first time the user practises. Advances or resets
  // the day-over-day streak, spending a freeze to cover a single missed day.
  function registerPracticeDay() {
    const tk = todayKey();
    if (store.lastDay === tk) return; // already counted today
    const gap = store.lastDay ? daysBetween(store.lastDay, tk) : null;
    if (gap === null || gap <= 0) {
      store.dayStreak = Math.max(1, store.dayStreak || 0);
      if (gap === null) store.dayStreak = 1;
    } else if (gap === 1) {
      store.dayStreak = (store.dayStreak || 0) + 1;
    } else if (gap === 2 && (store.freezes || 0) > 0) {
      store.freezes--; store.dayStreak = (store.dayStreak || 0) + 1;
      setTimeout(() => toast("❄️", "Streak freeze used", "Your streak is safe!"), 400);
    } else {
      store.dayStreak = 1; // streak broke — start over
    }
    store.lastDay = tk;
    // earn a freeze every 5 days (max 2 banked)
    if (store.dayStreak > 0 && store.dayStreak % 5 === 0 && (store.freezes || 0) < 2) {
      store.freezes = (store.freezes || 0) + 1;
      setTimeout(() => toast("❄️", "Streak freeze earned", "Banked — one for a rainy day"), 700);
    }
    saveStore();
  }

  // Count a correct answer toward today's goal; celebrate when it's hit.
  function bumpDailyGoal() {
    ensureDailyState();
    store.todayCorrect = (store.todayCorrect || 0) + 1;
    const goal = store.dailyGoal || 10;
    if (store.todayCorrect === goal && store.goalDoneDay !== store.todayDay) {
      store.goalDoneDay = store.todayDay;
      toast("🎯", "Daily goal complete!", `${goal} correct today — nice`);
      burstConfetti();
    }
    saveStore();
  }

  function renderStreak() {
    if (!streakPanel) return;
    ensureDailyState();
    const d = store.dayStreak || 0;
    const practicedToday = store.lastDay === todayKey();
    streakDays.textContent = d;
    flameEl.classList.toggle("cold", !practicedToday && d === 0);
    streakSub.textContent = practicedToday
      ? "Practiced today ✓ — see you tomorrow!"
      : d > 0 ? "Practice today to keep your streak 🔥" : "Practice today to start your streak";
    if ((store.freezes || 0) > 0) { freezeBadge.hidden = false; freezeNum.textContent = store.freezes; }
    else freezeBadge.hidden = true;
    const goal = store.dailyGoal || 10;
    const now = store.todayCorrect || 0;
    goalFill.style.width = Math.min(100, Math.round((now / goal) * 100)) + "%";
    goalNow.textContent = now;
    goalTarget.textContent = goal;
    if (goalWrap) goalWrap.classList.toggle("done", now >= goal);
    if (practicedToday) litFlame();
  }
  function litFlame() {
    if (!flameEl) return;
    flameEl.classList.remove("lit"); void flameEl.offsetWidth; flameEl.classList.add("lit");
  }

  // ---------- arithmetic facts ----------
  // Each fact keeps both operands as shown plus the answer. We build them so
  // that subtraction never goes negative and division is always whole.
  function makeFact(op, n, b) {
    switch (op) {
      case "+": return { op, a: n, b, ans: n + b };
      case "−": return { op, a: n + b, b, ans: n };
      case "×": return { op, a: n, b, ans: n * b };
      case "÷": return { op, a: n * b, b, ans: n };
    }
  }
  const factKey = (card) => card.op + card.a + "_" + card.b;

  // ---------- game state ----------
  let deck = [];
  let idx = 0, score = 0, streak = 0, bestStreakRound = 0;
  let locked = false, cardStart = 0, totalTime = 0, answered = 0;
  let roundXp = 0, fastCorrect = false;
  let lastMissed = [];
  const missed = [];

  // ===================================================================
  // SETUP SCREEN
  // ===================================================================
  function buildTableGrid() {
    TABLES.forEach((n) => {
      const b = document.createElement("button");
      b.className = "tbtn" + (settings.tables.has(n) ? " is-on" : "");
      b.textContent = n;
      b.dataset.n = n;
      b.setAttribute("aria-pressed", settings.tables.has(n));
      b.addEventListener("click", () => {
        if (settings.tables.has(n)) settings.tables.delete(n);
        else settings.tables.add(n);
        b.classList.toggle("is-on");
        b.setAttribute("aria-pressed", settings.tables.has(n));
        persistSettings(); renderMastery();
      });
      tableGrid.appendChild(b);
    });
  }

  function reflectTableGrid() {
    [...tableGrid.children].forEach((b) => {
      const on = settings.tables.has(+b.dataset.n);
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on);
    });
  }

  function applyQuickSelect(kind) {
    if (kind === "weak") { selectWeakTables(); return; }
    const map = { all: TABLES, none: [], easy: [1, 2, 3, 4, 5], hard: [6, 7, 8, 9, 10, 11, 12] };
    settings.tables = new Set(map[kind]);
    reflectTableGrid(); persistSettings(); renderMastery();
  }

  // Pick the (up to 4) number families with the lowest accuracy across the
  // currently selected operations.
  function selectWeakTables() {
    const ops = settings.ops.size ? [...settings.ops] : OPS;
    const scored = TABLES.map((n) => {
      let s = 0, c = 0;
      ops.forEach((op) => { for (let b = 1; b <= 12; b++) { const f = store.facts[factKey(makeFact(op, n, b))]; if (f) { s += f.s; c += f.c; } } });
      const acc = s ? c / s : 1;
      return { n, score: acc + (s ? 0 : 0.5), seen: s };
    });
    const weak = scored.filter((x) => x.seen > 0).sort((p, q) => p.score - q.score).slice(0, 4).map((x) => x.n);
    settings.tables = new Set(weak.length ? weak : [6, 7, 8]);
    reflectTableGrid(); persistSettings(); renderMastery();
    if (!weak.length) toast("📊", "Play a few rounds first", "so I can spot your tricky ones");
  }

  function setAllOps() {
    settings.ops = new Set(OPS);
    reflectOps(); persistSettings(); renderMastery();
  }
  function reflectOps() {
    opRow.querySelectorAll(".op-btn").forEach((b) => b.classList.toggle("is-on", settings.ops.has(b.dataset.op)));
  }

  function renderMastery() {
    const tables = [...settings.tables];
    const ops = [...settings.ops];
    if (!tables.length || !ops.length) { masteryEl.innerHTML = ""; return; }
    let total = 0, sum = 0;
    ops.forEach((op) => tables.forEach((n) => {
      for (let b = 1; b <= 12; b++) {
        total++;
        const f = store.facts[factKey(makeFact(op, n, b))];
        sum += f && f.s ? f.c / f.s : 0;
      }
    }));
    const pct = total ? Math.round((sum / total) * 100) : 0;
    masteryEl.innerHTML = `Mastery <div class="bar"><i style="width:${pct}%"></i></div> <b>${pct}%</b>`;
  }

  function renderProfile() {
    const lvl = levelFromXp(store.xp);
    const base = xpForLevel(lvl), nextAt = xpForLevel(lvl + 1);
    const into = store.xp - base, span = nextAt - base;
    lvlBadge.textContent = "Lv " + lvl;
    xpFill.style.width = Math.round((into / span) * 100) + "%";
    xpText.textContent = `${into} / ${span} XP`;
    badgeCount.textContent = "🏅 " + Object.keys(store.achievements).length;
  }

  // chips (number quick-selects + mixed ops)
  document.querySelectorAll(".quick-row .chip").forEach((c) =>
    c.addEventListener("click", () => {
      if (c.dataset.ops === "mixed") setAllOps();
      else if (c.dataset.select) applyQuickSelect(c.dataset.select);
    })
  );

  opRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".op-btn");
    if (!btn) return;
    const op = btn.dataset.op;
    if (settings.ops.has(op)) settings.ops.delete(op);
    else settings.ops.add(op);
    btn.classList.toggle("is-on", settings.ops.has(op));
    persistSettings(); renderMastery();
  });

  modeRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".mode-btn");
    if (!btn) return;
    settings.mode = btn.dataset.mode;
    modeRow.querySelectorAll(".mode-btn").forEach((b) => b.classList.toggle("is-on", b === btn));
    persistSettings();
  });

  lengthSeg.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    settings.length = +btn.dataset.len;
    lengthSeg.querySelectorAll("button").forEach((b) => b.classList.toggle("is-on", b === btn));
    persistSettings();
  });

  function reflectModeAndLength() {
    modeRow.querySelectorAll(".mode-btn").forEach((b) => b.classList.toggle("is-on", b.dataset.mode === settings.mode));
    lengthSeg.querySelectorAll("button").forEach((b) => b.classList.toggle("is-on", +b.dataset.len === settings.length));
  }

  // ===================================================================
  // DECK BUILDING (adaptive)
  // ===================================================================
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Weight = base + penalty for low accuracy + boost for unseen facts.
  function factWeight(card) {
    const f = store.facts[factKey(card)];
    if (!f || !f.s) return 5;
    return 1 + (1 - f.c / f.s) * 6;
  }

  function allPairs() {
    const pairs = [];
    const ops = [...settings.ops];
    [...settings.tables].forEach((n) => ops.forEach((op) => {
      for (let b = 1; b <= 12; b++) pairs.push(makeFact(op, n, b));
    }));
    return pairs;
  }

  function weightedPick(pool) {
    const total = pool.reduce((s, x) => s + x.w, 0);
    let r = Math.random() * total;
    for (const x of pool) { r -= x.w; if (r <= 0) return x.p; }
    return pool[pool.length - 1].p;
  }

  function buildDeck() {
    const pairs = allPairs();
    if (settings.length === 0) return shuffle(pairs); // endless = plain shuffle
    const pool = pairs.map((p) => ({ p, w: factWeight(p) }));
    const out = [];
    let lastQ = null, guard = 0;
    while (out.length < settings.length) {
      const pick = weightedPick(pool);
      const q = factKey(pick);
      if (pairs.length > 1 && q === lastQ && guard++ < 8) continue; // avoid back-to-back repeats
      out.push(pick); lastQ = q; guard = 0;
    }
    return out;
  }

  // Multiple-choice distractors (operation-agnostic).
  function buildChoices(card) {
    const correct = card.ans;
    const opts = new Set([correct]);
    const candidates = [
      correct + 1, correct - 1, correct + 2, correct - 2, correct + 3,
      correct + card.b, correct - card.b, correct + 10, correct - 10,
      Math.abs(card.a - card.b), card.a + card.b,
    ];
    shuffle(candidates);
    for (const c of candidates) { if (opts.size >= 4) break; if (c >= 0 && c !== correct && !opts.has(c)) opts.add(c); }
    let pad = 1;
    while (opts.size < 4) { const v = correct + pad; if (v >= 0 && !opts.has(v)) opts.add(v); pad++; }
    return shuffle([...opts]);
  }

  // ===================================================================
  // QUIZ FLOW
  // ===================================================================
  function startGame(customDeck) {
    if (!customDeck) {
      if (settings.tables.size === 0) { flash(bestStrip, "Pick at least one number to practise ✦"); return; }
      if (settings.ops.size === 0) { flash(bestStrip, "Pick at least one operation ✦"); return; }
    }
    deck = customDeck || buildDeck();
    idx = 0; score = 0; streak = 0; bestStreakRound = 0;
    answered = 0; totalTime = 0; roundXp = 0; fastCorrect = false; missed.length = 0;
    scoreNum.textContent = "0"; streakNum.textContent = "0";
    show("quiz");
    renderCard();
  }

  function roundLength() { return settings.length === 0 ? 0 : deck.length; }

  function currentCard() {
    if (settings.length === 0 && idx >= deck.length) { deck = buildDeck(); idx = 0; }
    return deck[idx];
  }

  function renderCard() {
    locked = false;
    const card = currentCard();

    flashcard.classList.remove("flipped", "shake", "correct-glow", "wrong-glow");
    questionEl.textContent = `${card.a} ${card.op} ${card.b}`;
    answerReveal.textContent = card.ans;

    const len = roundLength();
    qCount.textContent = idx + 1;
    const pct = len === 0 ? ((idx % 20) / 20) * 100 : (idx / len) * 100;
    progressFill.style.width = pct + "%";

    choicesEl.style.display = "none";
    typeForm.classList.remove("is-active");
    flipControls.classList.remove("is-active");
    flashcard.classList.remove("is-flip-mode");
    flipHint.style.visibility = "hidden";

    if (settings.mode === "choice") renderChoiceMode(card);
    else if (settings.mode === "type") renderTypeMode();
    else renderFlipMode();

    if (settings.mode === "flip") stopTimer();
    else startTimer();

    cardStart = performance.now();
  }

  function renderChoiceMode(card) {
    choicesEl.style.display = "grid";
    choicesEl.innerHTML = "";
    buildChoices(card).forEach((val) => {
      const b = document.createElement("button");
      b.className = "choice";
      b.textContent = val;
      b.addEventListener("click", () => handleChoice(b, val, card.ans));
      choicesEl.appendChild(b);
    });
  }

  function renderTypeMode() {
    typeForm.classList.add("is-active");
    typeInput.value = "";
    typeInput.className = "type-input";
    setTimeout(() => typeInput.focus(), 50);
  }

  function renderFlipMode() {
    flashcard.classList.add("is-flip-mode");
    flipHint.style.visibility = "visible";
    flipHint.textContent = "tap to reveal";
  }

  // ---------- timer bar ----------
  function startTimer() {
    timerBar.classList.add("is-on");
    timerFill.style.transition = "none";
    timerFill.style.transform = "scaleX(1)";
    void timerFill.offsetWidth;
    timerFill.style.transition = `transform ${CARD_SECONDS}s linear`;
    timerFill.style.transform = "scaleX(0)";
  }
  function freezeTimer() {
    const m = getComputedStyle(timerFill).transform;
    timerFill.style.transition = "none";
    timerFill.style.transform = m === "none" ? "scaleX(0)" : m;
  }
  function stopTimer() {
    timerBar.classList.remove("is-on");
    timerFill.style.transition = "none";
    timerFill.style.transform = "scaleX(1)";
  }

  // ---------- answer handlers ----------
  function handleChoice(btn, val, correct) {
    if (locked) return;
    locked = true; freezeTimer();
    const ok = val === correct;
    [...choicesEl.children].forEach((b) => {
      b.disabled = true;
      if (+b.textContent === correct) b.classList.add("right");
      else if (b === btn) b.classList.add("wrong");
      else b.classList.add("dim");
    });
    grade(ok);
    setTimeout(next, ok ? 650 : 1100);
  }

  typeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (locked) return;
    const raw = typeInput.value.trim();
    if (raw === "") return;
    locked = true; freezeTimer();
    const card = currentCard();
    const ok = +raw === card.ans;
    typeInput.classList.add(ok ? "right" : "wrong");
    if (!ok) flashcard.classList.add("flipped");
    grade(ok);
    setTimeout(next, ok ? 650 : 1300);
  });

  flipControls.addEventListener("click", (e) => {
    const btn = e.target.closest(".flip-btn");
    if (!btn || locked) return;
    locked = true;
    grade(btn.dataset.flip === "right");
    setTimeout(next, 350);
  });

  flashcard.addEventListener("click", () => {
    if (settings.mode !== "flip" || locked) return;
    const isFlipped = flashcard.classList.toggle("flipped");
    if (isFlipped) flipControls.classList.add("is-active");
  });

  // ---------- grading ----------
  function grade(ok) {
    const t = (performance.now() - cardStart) / 1000;
    totalTime += t * 1000;
    answered++;
    const card = currentCard();

    registerPracticeDay(); // first answer of the day advances the daily streak

    // per-fact stats
    const key = factKey(card);
    const f = store.facts[key] || (store.facts[key] = { s: 0, c: 0 });
    f.s++; if (ok) f.c++;

    if (ok) {
      streak++;
      bestStreakRound = Math.max(bestStreakRound, streak);
      const streakBonus = Math.min(streak - 1, 10) * 2;
      const speedBonus = settings.mode === "flip" ? 0 : t < 1.5 ? 5 : t < 3 ? 3 : t < 5 ? 1 : 0;
      if (settings.mode !== "flip" && t < 1.2) fastCorrect = true;
      const gained = 10 + streakBonus + speedBonus;
      score += gained; roundXp += gained;
      store.totalCorrect++;
      bumpDailyGoal();
      flashcard.classList.add("correct-glow");
      popStreak();
      tone(true); haptic(true);
    } else {
      streak = 0;
      missed.push({ op: card.op, a: card.a, b: card.b, q: `${card.a} ${card.op} ${card.b}`, ans: card.ans });
      flashcard.classList.add("wrong-glow", "shake");
      tone(false); haptic(false);
    }
    scoreNum.textContent = score;
    streakNum.textContent = streak;
  }

  function popStreak() {
    streakBadge.classList.remove("pop");
    void streakBadge.offsetWidth;
    streakBadge.classList.add("pop");
  }

  function next() {
    idx++;
    const done = roundLength() > 0 && idx >= roundLength();
    if (done) finish();
    else renderCard();
  }

  // ===================================================================
  // RESULTS
  // ===================================================================
  function finish() {
    stopTimer();
    progressFill.style.width = "100%";
    const total = roundLength();
    const correctCount = total - missed.length;
    const pct = total ? Math.round((correctCount / total) * 100) : 0;
    const avg = answered ? (totalTime / answered / 1000) : 0;

    $("resultScore").textContent = correctCount;
    $("resultPct").textContent = pct + "%";
    $("resultBest").textContent = bestStreakRound;
    $("resultTime").textContent = avg.toFixed(1) + "s";
    document.querySelector(".result-of").textContent = "/ " + total;

    let emoji = "🎉", title = "Brilliant!";
    if (pct === 100) { emoji = "🏆"; title = "Perfect score!"; }
    else if (pct >= 80) { emoji = "🌟"; title = "Awesome work!"; }
    else if (pct >= 60) { emoji = "💪"; title = "Nice — keep going!"; }
    else { emoji = "📚"; title = "Good practice!"; }
    $("resultEmoji").textContent = emoji;
    $("resultTitle").textContent = title;

    const wrap = $("reviewWrap");
    wrap.innerHTML = "";
    if (missed.length) {
      const t = document.createElement("div");
      t.className = "review-title";
      t.textContent = "Worth another look:";
      wrap.appendChild(t);
      missed.slice(0, 8).forEach((m) => {
        const row = document.createElement("div");
        row.className = "review-row";
        row.innerHTML = `<span class="q">${m.q}</span><span class="a">= ${m.ans}</span>`;
        wrap.appendChild(row);
      });
    }

    // "practice missed" replay
    lastMissed = missed.slice();
    const rbtn = $("reviewBtn");
    if (lastMissed.length) { rbtn.hidden = false; rbtn.textContent = `Practice missed (${lastMissed.length})`; }
    else rbtn.hidden = true;

    // persist round outcome + XP + achievements
    store.bestPct = Math.max(store.bestPct, pct);
    store.bestStreak = Math.max(store.bestStreak, bestStreakRound);
    store.games += 1;
    const before = levelFromXp(store.xp);
    store.xp += roundXp;
    const after = levelFromXp(store.xp);
    saveStore();

    renderProfile(); renderMastery(); renderBestStrip();
    show("results");

    if (pct === 100) { burstConfetti(); playFanfare(); }     // 🎺 celebration music
    else if (pct >= 80) burstConfetti();
    if (after > before) celebrateLevel(after);
    checkAchievements(pct);
  }

  // ===================================================================
  // ACHIEVEMENTS
  // ===================================================================
  function award(id) {
    if (store.achievements[id]) return;
    store.achievements[id] = true; saveStore();
    const a = ACHIEVEMENTS[id];
    toast(a.emoji, "Achievement: " + a.name, a.desc);
    renderProfile();
  }
  function checkAchievements(pct) {
    if (pct === 100) award("first_perfect");
    if (pct >= 90) award("sharpshooter");
    if (bestStreakRound >= 10) award("streak_10");
    if (fastCorrect) award("speed_demon");
    if (store.totalCorrect >= 100) award("centurion");
    if (store.games >= 10) award("dedicated");
    if (pct === 100 && settings.ops.size === 4) award("polymath");
  }
  function celebrateLevel(lvl) {
    toast("✨", "Level " + lvl + "!", "Keep it up — XP unlocked", true);
    lvlBadge.classList.remove("bump"); void lvlBadge.offsetWidth; lvlBadge.classList.add("bump");
    burstConfetti();
  }

  // ===================================================================
  // BEST STRIP
  // ===================================================================
  function renderBestStrip() {
    if (!store.games) { bestStrip.textContent = "Your first round awaits ✦"; return; }
    bestStrip.innerHTML =
      `🏅 Best <b>${store.bestPct}%</b> · 🔥 Top streak <b>${store.bestStreak}</b> · 🎮 <b>${store.games}</b> rounds · ✅ <b>${store.totalCorrect}</b> correct`;
  }

  // ===================================================================
  // FEEDBACK: sound, haptics, toasts, confetti
  // ===================================================================
  let audioCtx = null;
  function ensureAudio() {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }
  function tone(ok) {
    try {
      const ac = ensureAudio();
      const now = ac.currentTime;
      const notes = ok ? [523.25, 659.25, 783.99] : [196, 155.56];
      notes.forEach((f, i) => {
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        osc.type = ok ? "triangle" : "sawtooth";
        osc.frequency.value = f;
        const t = now + i * 0.07;
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
        osc.connect(gain).connect(ac.destination);
        osc.start(t); osc.stop(t + 0.2);
      });
    } catch {}
  }

  // 🎺 Triumphant fanfare for a flawless round.
  function playFanfare() {
    try {
      const ac = ensureAudio();
      const now = ac.currentTime;
      const master = ac.createGain();
      master.gain.value = 0.0001;
      master.gain.setValueAtTime(0.22, now);
      master.connect(ac.destination);

      const note = (f, t, d, type, vol) => {
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.type = type || "triangle";
        o.frequency.value = f;
        const s = now + t;
        g.gain.setValueAtTime(0.0001, s);
        g.gain.exponentialRampToValueAtTime(vol || 0.9, s + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, s + d);
        o.connect(g).connect(master);
        o.start(s); o.stop(s + d + 0.05);
      };

      const C5 = 523.25, E5 = 659.25, G5 = 783.99, C6 = 1046.5, E6 = 1318.5, G6 = 1568.0;
      const C4 = 261.63, G4 = 392.0;

      // bright ascending melody resolving up high
      [[C5, 0.0, 0.18], [E5, 0.16, 0.18], [G5, 0.32, 0.18], [C6, 0.48, 0.42],
       [G5, 0.66, 0.34], [C6, 0.86, 0.7]].forEach(([f, t, d]) => note(f, t, d, "triangle", 0.85));
      // sparkly top harmony
      [[E6, 0.48, 0.3], [G6, 0.86, 0.5]].forEach(([f, t, d]) => note(f, t, d, "square", 0.18));
      // marching bass
      note(C4, 0.0, 0.5, "sawtooth", 0.5);
      note(G4, 0.5, 0.34, "sawtooth", 0.4);
      note(C4, 0.86, 0.85, "sawtooth", 0.55);
    } catch {}
  }

  function haptic(ok) {
    try { if (navigator.vibrate) navigator.vibrate(ok ? 15 : [25, 40, 25]); } catch {}
  }

  function toast(emoji, title, desc, levelup) {
    const el = document.createElement("div");
    el.className = "toast" + (levelup ? " levelup" : "");
    el.innerHTML = `<span class="t-emoji">${emoji}</span><span><b>${title}</b>${desc ? "<br><small>" + desc + "</small>" : ""}</span>`;
    toastWrap.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }

  const canvas = $("confetti");
  const ctx = canvas.getContext("2d");
  let confetti = [];
  let confettiRAF = null;
  function sizeCanvas() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
  }
  window.addEventListener("resize", sizeCanvas);
  sizeCanvas();

  function burstConfetti() {
    const colors = ["#6d5efc", "#b66bff", "#2ad6c8", "#ffce4f", "#2fd07a", "#ff5a7a"];
    const W = canvas.width;
    confetti = Array.from({ length: 140 }, () => ({
      x: W / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.3,
      vx: (Math.random() - 0.5) * 16 * devicePixelRatio,
      vy: (Math.random() * -14 - 4) * devicePixelRatio,
      g: 0.4 * devicePixelRatio,
      size: (Math.random() * 8 + 4) * devicePixelRatio,
      color: colors[(Math.random() * colors.length) | 0],
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      life: 1,
    }));
    if (!confettiRAF) animateConfetti();
  }
  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((p) => {
      p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= 0.006;
      ctx.save();
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.globalAlpha = Math.max(p.life, 0);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    confetti = confetti.filter((p) => p.life > 0 && p.y < canvas.height + 50);
    if (confetti.length) confettiRAF = requestAnimationFrame(animateConfetti);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); confettiRAF = null; }
  }

  // ===================================================================
  // SCREEN HELPERS + WIRING
  // ===================================================================
  function show(name) {
    Object.values(screens).forEach((s) => s.classList.remove("is-active"));
    screens[name].classList.add("is-active");
    if (name === "setup") renderStreak();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  let flashTimer = null;
  function flash(el, msg) {
    el.textContent = msg;
    el.style.color = "var(--warn)";
    clearTimeout(flashTimer);
    flashTimer = setTimeout(() => { el.style.color = ""; renderBestStrip(); }, 2200);
  }

  $("startBtn").addEventListener("click", () => startGame());
  $("againBtn").addEventListener("click", () => startGame());
  $("menuBtn").addEventListener("click", () => show("setup"));
  $("quitBtn").addEventListener("click", () => { stopTimer(); show("setup"); });

  // Customize: collapse the config behind a toggle so the home screen stays a game, not a form.
  if (customizeToggle && customizeEl) {
    customizeToggle.addEventListener("click", () => {
      const open = customizeEl.hasAttribute("hidden");
      if (open) customizeEl.removeAttribute("hidden");
      else customizeEl.setAttribute("hidden", "");
      customizeToggle.setAttribute("aria-expanded", String(open));
      customizeToggle.classList.toggle("is-open", open);
      customizeToggle.textContent = open ? "⚙ Customize ▲" : "⚙ Customize";
    });
  }
  $("reviewBtn").addEventListener("click", () => {
    if (!lastMissed.length) return;
    const d = shuffle(lastMissed.map((m) => ({ op: m.op, a: m.a, b: m.b, ans: m.ans })));
    startGame(d);
  });

  document.addEventListener("keydown", (e) => {
    if (!screens.quiz.classList.contains("is-active")) return;
    if (settings.mode === "choice" && /^[1-4]$/.test(e.key)) {
      const b = choicesEl.children[+e.key - 1];
      if (b && !b.disabled) b.click();
    }
    if (settings.mode === "flip" && (e.key === " " || e.key === "Enter")) {
      e.preventDefault();
      flashcard.click();
    }
  });

  // ---------- init ----------
  buildTableGrid();
  reflectOps();
  reflectModeAndLength();
  renderProfile();
  renderMastery();
  renderBestStrip();
  renderStreak();
})();

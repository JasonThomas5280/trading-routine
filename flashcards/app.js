/* ✦ Times Tables — multiplication flashcards
   Vanilla JS, no dependencies. State machine: setup → quiz → results.
   v2: XP/levels, adaptive practice, achievements, speed bonuses,
       haptics, persisted settings, "practice missed" replay. */

(() => {
  "use strict";

  // ---------- element refs ----------
  const $ = (id) => document.getElementById(id);

  const screens = { setup: $("setup"), quiz: $("quiz"), results: $("results") };

  const tableGrid = $("tableGrid");
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

  // ---------- config ----------
  const TABLES = Array.from({ length: 12 }, (_, i) => i + 1);
  const STORE_KEY = "timesTables.v2";
  const CARD_SECONDS = 7; // timer-bar fill duration (cosmetic urgency, no fail)

  const ACHIEVEMENTS = {
    first_perfect: { emoji: "🏆", name: "Flawless", desc: "100% in a round" },
    sharpshooter:  { emoji: "🎯", name: "Sharpshooter", desc: "90%+ in a round" },
    streak_10:     { emoji: "🔥", name: "On Fire", desc: "10-answer streak" },
    speed_demon:   { emoji: "⚡", name: "Speed Demon", desc: "Correct under 1.2s" },
    centurion:     { emoji: "💯", name: "Centurion", desc: "100 correct all-time" },
    dedicated:     { emoji: "📚", name: "Dedicated", desc: "Played 10 rounds" },
  };

  // ---------- persistent store ----------
  const defaultStore = () => ({
    bestPct: 0, bestStreak: 0, games: 0,
    xp: 0, totalCorrect: 0,
    facts: {},            // "axb" -> { s: seen, c: correct }
    achievements: {},     // id -> true
    settings: { tables: [2, 3, 4, 5], mode: "choice", length: 10 },
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
  };
  function persistSettings() {
    store.settings = { tables: [...settings.tables], mode: settings.mode, length: settings.length };
    saveStore();
  }

  // ---------- level math ----------
  const levelFromXp = (xp) => Math.floor(Math.sqrt(xp / 40)) + 1;
  const xpForLevel = (lvl) => 40 * (lvl - 1) ** 2;
  const factKey = (a, b) => `${a}x${b}`;

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

  // Pick the (up to 4) tables with the lowest accuracy so far.
  function selectWeakTables() {
    const scored = TABLES.map((a) => {
      let s = 0, c = 0;
      for (let b = 1; b <= 12; b++) { const f = store.facts[factKey(a, b)]; if (f) { s += f.s; c += f.c; } }
      const acc = s ? c / s : 1;        // unseen tables count as "mastered" so we don't force them
      const seenWeight = s ? 0 : 1;     // tiebreak: prefer practised-but-weak
      return { a, score: acc + seenWeight * 0.5, seen: s };
    });
    const weak = scored.filter((x) => x.seen > 0).sort((p, q) => p.score - q.score).slice(0, 4).map((x) => x.a);
    settings.tables = new Set(weak.length ? weak : [6, 7, 8]);
    reflectTableGrid(); persistSettings(); renderMastery();
    if (!weak.length) toast("📊", "Play a few rounds first", "so I can spot your tricky ones");
  }

  function renderMastery() {
    const tables = [...settings.tables];
    if (!tables.length) { masteryEl.innerHTML = ""; return; }
    let total = 0, sum = 0;
    tables.forEach((a) => {
      for (let b = 1; b <= 12; b++) {
        total++;
        const f = store.facts[factKey(a, b)];
        sum += f && f.s ? f.c / f.s : 0;
      }
    });
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

  document.querySelectorAll(".quick-row .chip").forEach((c) =>
    c.addEventListener("click", () => applyQuickSelect(c.dataset.select))
  );

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
    const f = store.facts[factKey(card.a, card.b)];
    if (!f || !f.s) return 5;           // unseen → practise it
    const acc = f.c / f.s;
    return 1 + (1 - acc) * 6;           // weaker → much likelier
  }

  function allPairs() {
    const pairs = [];
    [...settings.tables].forEach((a) => { for (let b = 1; b <= 12; b++) pairs.push({ a, b, ans: a * b }); });
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
    let last = null, guard = 0;
    while (out.length < settings.length) {
      const pick = weightedPick(pool);
      if (pairs.length > 1 && pick === last && guard++ < 8) continue; // avoid back-to-back repeats
      out.push(pick); last = pick; guard = 0;
    }
    return out;
  }

  // Multiple-choice distractors.
  function buildChoices(card) {
    const correct = card.ans;
    const opts = new Set([correct]);
    const candidates = [
      correct + card.a, correct - card.a, correct + card.b, correct - card.b,
      card.a * (card.b + 1), card.a * (card.b - 1), (card.a + 1) * card.b,
      correct + 1, correct - 1, correct + 2, correct + 10,
    ];
    shuffle(candidates);
    for (const c of candidates) { if (opts.size >= 4) break; if (c > 0 && !opts.has(c)) opts.add(c); }
    let pad = 1;
    while (opts.size < 4) { if (correct + pad > 0) opts.add(correct + pad); pad++; }
    return shuffle([...opts]);
  }

  // ===================================================================
  // QUIZ FLOW
  // ===================================================================
  function startGame(customDeck) {
    if (!customDeck && settings.tables.size === 0) {
      flash(bestStrip, "Pick at least one table to practise ✦");
      return;
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
    questionEl.textContent = `${card.a} × ${card.b}`;
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

    // per-fact stats
    const key = factKey(card.a, card.b);
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
      flashcard.classList.add("correct-glow");
      popStreak();
      tone(true); haptic(ok);
    } else {
      streak = 0;
      missed.push({ a: card.a, b: card.b, q: `${card.a} × ${card.b}`, ans: card.ans });
      flashcard.classList.add("wrong-glow", "shake");
      tone(false); haptic(ok);
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

    if (pct >= 80) burstConfetti();
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
  function tone(ok) {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const now = audioCtx.currentTime;
      const notes = ok ? [523.25, 659.25, 783.99] : [196, 155.56];
      notes.forEach((f, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = ok ? "triangle" : "sawtooth";
        osc.frequency.value = f;
        const t = now + i * 0.07;
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(0.18, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
        osc.connect(gain).connect(audioCtx.destination);
        osc.start(t); osc.stop(t + 0.2);
      });
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
  $("reviewBtn").addEventListener("click", () => {
    if (!lastMissed.length) return;
    const d = shuffle(lastMissed.map((m) => ({ a: m.a, b: m.b, ans: m.ans })));
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
  reflectModeAndLength();
  renderProfile();
  renderMastery();
  renderBestStrip();
})();

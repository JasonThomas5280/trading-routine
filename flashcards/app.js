/* ✦ Times Tables — multiplication flashcards
   Vanilla JS, no dependencies. State machine: setup → quiz → results. */

(() => {
  "use strict";

  // ---------- element refs ----------
  const $ = (id) => document.getElementById(id);
  const screens = {
    setup: $("setup"),
    quiz: $("quiz"),
    results: $("results"),
  };

  const tableGrid = $("tableGrid");
  const modeRow = $("modeRow");
  const lengthSeg = $("lengthSeg");
  const bestStrip = $("bestStrip");

  const flashcard = $("flashcard");
  const questionEl = $("question");
  const answerReveal = $("answerReveal");
  const flipHint = $("flipHint");
  const choicesEl = $("choices");
  const typeForm = $("typeForm");
  const typeInput = $("typeInput");
  const flipControls = $("flipControls");

  const progressFill = $("progressFill");
  const streakBadge = $("streakBadge");
  const streakNum = $("streakNum");
  const qCount = $("qCount");
  const scoreNum = $("scoreNum");

  // ---------- config ----------
  const TABLES = Array.from({ length: 12 }, (_, i) => i + 1); // 1..12
  const STORE_KEY = "timesTables.v1";

  const settings = {
    tables: new Set([2, 3, 4, 5]),
    mode: "choice", // choice | type | flip
    length: 10, // 0 = endless
  };

  // ---------- game state ----------
  let deck = [];
  let idx = 0;
  let score = 0;
  let streak = 0;
  let bestStreakRound = 0;
  let locked = false;
  let cardStart = 0;
  let totalTime = 0;
  let answered = 0;
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
      });
      tableGrid.appendChild(b);
    });
  }

  function applyQuickSelect(kind) {
    const map = {
      all: TABLES,
      none: [],
      easy: [1, 2, 3, 4, 5],
      hard: [6, 7, 8, 9, 10, 11, 12],
    };
    settings.tables = new Set(map[kind]);
    [...tableGrid.children].forEach((b) => {
      const on = settings.tables.has(+b.dataset.n);
      b.classList.toggle("is-on", on);
      b.setAttribute("aria-pressed", on);
    });
  }

  document.querySelectorAll(".quick-row .chip").forEach((c) =>
    c.addEventListener("click", () => applyQuickSelect(c.dataset.select))
  );

  modeRow.addEventListener("click", (e) => {
    const btn = e.target.closest(".mode-btn");
    if (!btn) return;
    settings.mode = btn.dataset.mode;
    modeRow.querySelectorAll(".mode-btn").forEach((b) => b.classList.toggle("is-on", b === btn));
  });

  lengthSeg.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    settings.length = +btn.dataset.len;
    lengthSeg.querySelectorAll("button").forEach((b) => b.classList.toggle("is-on", b === btn));
  });

  // ===================================================================
  // DECK BUILDING
  // ===================================================================
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function buildDeck() {
    const tables = [...settings.tables];
    const pairs = [];
    tables.forEach((a) => {
      for (let b = 1; b <= 12; b++) pairs.push({ a, b, ans: a * b });
    });
    shuffle(pairs);

    if (settings.length > 0) {
      // Repeat/trim to exactly `length` cards.
      const out = [];
      while (out.length < settings.length) {
        out.push(...shuffle(pairs.slice()));
      }
      return out.slice(0, settings.length);
    }
    return pairs; // endless = one shuffled pass, reshuffled when exhausted
  }

  // Build 4 plausible multiple-choice options around the answer.
  function buildChoices(card) {
    const correct = card.ans;
    const opts = new Set([correct]);
    const candidates = [
      correct + card.a, correct - card.a,
      correct + card.b, correct - card.b,
      card.a * (card.b + 1), card.a * (card.b - 1),
      (card.a + 1) * card.b, correct + 1, correct - 1,
      correct + 2, correct + 10,
    ];
    shuffle(candidates);
    for (const c of candidates) {
      if (opts.size >= 4) break;
      if (c > 0 && !opts.has(c)) opts.add(c);
    }
    let pad = 1;
    while (opts.size < 4) { if (correct + pad > 0) opts.add(correct + pad); pad++; }
    return shuffle([...opts]);
  }

  // ===================================================================
  // QUIZ FLOW
  // ===================================================================
  function startGame() {
    if (settings.tables.size === 0) {
      flash(bestStrip, "Pick at least one table to practise ✦");
      return;
    }
    deck = buildDeck();
    idx = 0; score = 0; streak = 0; bestStreakRound = 0;
    answered = 0; totalTime = 0; missed.length = 0;
    scoreNum.textContent = "0";
    streakNum.textContent = "0";
    show("quiz");
    renderCard();
  }

  function currentCard() {
    if (settings.length === 0 && idx >= deck.length) {
      deck = buildDeck(); idx = 0; // endless reshuffle
    }
    return deck[idx];
  }

  function renderCard() {
    locked = false;
    const card = currentCard();

    // reset visuals
    flashcard.classList.remove("flipped", "shake", "correct-glow", "wrong-glow");
    questionEl.textContent = `${card.a} × ${card.b}`;
    answerReveal.textContent = card.ans;

    // progress + counters
    qCount.textContent = idx + 1;
    const pct = settings.length === 0 ? ((idx % 20) / 20) * 100 : (idx / settings.length) * 100;
    progressFill.style.width = pct + "%";

    // hide all input modes
    choicesEl.style.display = "none";
    typeForm.classList.remove("is-active");
    flipControls.classList.remove("is-active");
    flashcard.classList.remove("is-flip-mode");
    flipHint.style.visibility = "hidden";

    if (settings.mode === "choice") renderChoiceMode(card);
    else if (settings.mode === "type") renderTypeMode();
    else renderFlipMode();

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

  // ---------- answer handlers ----------
  function handleChoice(btn, val, correct) {
    if (locked) return;
    locked = true;
    const ok = val === correct;
    const buttons = [...choicesEl.children];
    buttons.forEach((b) => {
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
    locked = true;
    const card = currentCard();
    const ok = +raw === card.ans;
    typeInput.classList.add(ok ? "right" : "wrong");
    if (!ok) {
      flashcard.classList.add("flipped"); // reveal correct answer on the back
    }
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

  // Flip the card in flip-mode (and reveal controls).
  flashcard.addEventListener("click", () => {
    if (settings.mode !== "flip" || locked) return;
    const isFlipped = flashcard.classList.toggle("flipped");
    if (isFlipped) flipControls.classList.add("is-active");
  });

  // ---------- grading ----------
  function grade(ok) {
    totalTime += performance.now() - cardStart;
    answered++;
    const card = currentCard();

    if (ok) {
      streak++;
      bestStreakRound = Math.max(bestStreakRound, streak);
      const bonus = 10 + Math.min(streak - 1, 10) * 2; // streak rewards
      score += bonus;
      flashcard.classList.add("correct-glow");
      popStreak();
      tone(true);
    } else {
      streak = 0;
      missed.push({ q: `${card.a} × ${card.b}`, a: card.ans });
      flashcard.classList.add("wrong-glow", "shake");
      tone(false);
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
    const done = settings.length > 0 && idx >= settings.length;
    if (done) finish();
    else renderCard();
  }

  // ===================================================================
  // RESULTS
  // ===================================================================
  function finish() {
    progressFill.style.width = "100%";
    const total = settings.length;
    const correctCount = total - missed.length;
    const pct = total ? Math.round((correctCount / total) * 100) : 0;
    const avg = answered ? (totalTime / answered / 1000) : 0;

    $("resultScore").textContent = correctCount;
    $("resultPct").textContent = pct + "%";
    $("resultBest").textContent = bestStreakRound;
    $("resultTime").textContent = avg.toFixed(1) + "s";
    document.querySelector(".result-of").textContent = "/ " + total;

    // headline
    let emoji = "🎉", title = "Brilliant!";
    if (pct === 100) { emoji = "🏆"; title = "Perfect score!"; }
    else if (pct >= 80) { emoji = "🌟"; title = "Awesome work!"; }
    else if (pct >= 60) { emoji = "💪"; title = "Nice — keep going!"; }
    else { emoji = "📚"; title = "Good practice!"; }
    $("resultEmoji").textContent = emoji;
    $("resultTitle").textContent = title;

    // review list of missed cards
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
        row.innerHTML = `<span class="q">${m.q}</span><span class="a">= ${m.a}</span>`;
        wrap.appendChild(row);
      });
    }

    saveBest(pct, bestStreakRound);
    show("results");
    if (pct >= 80) burstConfetti();
  }

  // ===================================================================
  // PERSISTENCE
  // ===================================================================
  function loadBest() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch { return {}; }
  }
  function saveBest(pct, bestStreak) {
    const data = loadBest();
    data.bestPct = Math.max(data.bestPct || 0, pct);
    data.bestStreak = Math.max(data.bestStreak || 0, bestStreak);
    data.games = (data.games || 0) + 1;
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch {}
    renderBestStrip();
  }
  function renderBestStrip() {
    const d = loadBest();
    if (!d.games) { bestStrip.textContent = "Your first round awaits ✦"; return; }
    bestStrip.innerHTML = `🏅 Best <b>${d.bestPct || 0}%</b> · 🔥 Top streak <b>${d.bestStreak || 0}</b> · 🎮 <b>${d.games}</b> rounds`;
  }

  // ===================================================================
  // FEEDBACK: sound + confetti
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

  $("startBtn").addEventListener("click", startGame);
  $("againBtn").addEventListener("click", startGame);
  $("menuBtn").addEventListener("click", () => show("setup"));
  $("quitBtn").addEventListener("click", () => show("setup"));

  // keyboard: 1-4 select choices, Enter handled by form
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
  renderBestStrip();
})();

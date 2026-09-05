// ===== Vocabulary Data =====
const vocabulary = [
  // --- Greetings ---
  { english: "Hello",                   french: "Bonjour",                    category: "Greetings" },
  { english: "Good evening",            french: "Bonsoir",                    category: "Greetings" },
  { english: "Good night",              french: "Bonne nuit",                 category: "Greetings" },
  { english: "Goodbye",                 french: "Au revoir",                  category: "Greetings" },
  { english: "See you soon",            french: "À bientôt",                  category: "Greetings" },
  { english: "See you tomorrow",        french: "À demain",                   category: "Greetings" },

  // --- Politeness ---
  { english: "Please",                  french: "S'il vous plaît",            category: "Politeness" },
  { english: "Thank you",               french: "Merci",                      category: "Politeness" },
  { english: "Thank you very much",     french: "Merci beaucoup",             category: "Politeness" },
  { english: "You're welcome",          french: "De rien",                    category: "Politeness" },
  { english: "Excuse me",               french: "Excusez-moi",                category: "Politeness" },
  { english: "I'm sorry",               french: "Je suis désolé(e)",          category: "Politeness" },
  { english: "No problem",              french: "Pas de problème",            category: "Politeness" },

  // --- Introductions ---
  { english: "Yes",                     french: "Oui",                        category: "Basics" },
  { english: "No",                      french: "Non",                        category: "Basics" },
  { english: "How are you?",            french: "Comment allez-vous ?",       category: "Introductions" },
  { english: "I'm fine",                french: "Je vais bien",               category: "Introductions" },
  { english: "My name is...",           french: "Je m'appelle...",            category: "Introductions" },
  { english: "Nice to meet you",        french: "Enchanté(e)",                category: "Introductions" },
  { english: "Where are you from?",     french: "D'où venez-vous ?",          category: "Introductions" },
  { english: "I am from...",            french: "Je viens de...",             category: "Introductions" },
  { english: "How old are you?",        french: "Quel âge avez-vous ?",       category: "Introductions" },

  // --- Getting Around ---
  { english: "Where is...?",            french: "Où est... ?",                category: "Getting Around" },
  { english: "To the left",             french: "À gauche",                   category: "Getting Around" },
  { english: "To the right",            french: "À droite",                   category: "Getting Around" },
  { english: "Straight ahead",          french: "Tout droit",                 category: "Getting Around" },
  { english: "Near / Close",            french: "Près d'ici",                 category: "Getting Around" },
  { english: "Far away",                french: "Loin d'ici",                 category: "Getting Around" },

  // --- Shopping ---
  { english: "How much does it cost?",  french: "Combien ça coûte ?",         category: "Shopping" },
  { english: "That's too expensive",    french: "C'est trop cher",            category: "Shopping" },
  { english: "I would like...",         french: "Je voudrais...",             category: "Shopping" },
  { english: "Do you have...?",         french: "Avez-vous... ?",             category: "Shopping" },
  { english: "The bill please",         french: "L'addition s'il vous plaît", category: "Shopping" },

  // --- Communication ---
  { english: "I don't understand",      french: "Je ne comprends pas",        category: "Communication" },
  { english: "Can you repeat that?",    french: "Pouvez-vous répéter ?",      category: "Communication" },
  { english: "Do you speak English?",   french: "Parlez-vous anglais ?",      category: "Communication" },
  { english: "I speak a little French", french: "Je parle un peu français",   category: "Communication" },
  { english: "I need help",             french: "J'ai besoin d'aide",         category: "Communication" },
  { english: "Can you help me?",        french: "Pouvez-vous m'aider ?",      category: "Communication" },

  // --- Daily Life ---
  { english: "Have a good day!",        french: "Bonne journée !",            category: "Daily Life" },
  { english: "Have a good weekend!",    french: "Bon week-end !",             category: "Daily Life" },
  { english: "Enjoy your meal!",        french: "Bon appétit !",              category: "Daily Life" },
  { english: "Congratulations!",        french: "Félicitations !",            category: "Daily Life" },
  { english: "Happy birthday!",         french: "Joyeux anniversaire !",      category: "Daily Life" },
  { english: "Good luck!",              french: "Bonne chance !",             category: "Daily Life" }
];

// ===== Encouraging Messages =====
const correctMessages = [
  "✅ Magnifique! That's exactly right!",
  "✅ Oui, oui! Perfectly done!",
  "✅ Brilliant! You're on a roll!",
  "✅ Spot on! Keep it up!",
  "✅ Correct! You're doing wonderfully!",
  "✅ Fantastique! That's the one!",
  "✅ Nailed it! Your French is shining!",
  "✅ Excellent work! Keep going!",
  "✅ That's right! You should be proud!",
  "✅ Très bien! Well done!",
  "✅ Perfect! Paris would be proud of you!",
  "✅ Incroyable! You got it!",
  "✅ Yes! You're becoming a French star! ⭐",
  "✅ Right on! Every card makes you stronger!",
  "✅ Super! You're making great progress!"
];

const streakMessages = {
  5:  "🔥 5 in a row! You're on fire! Fantastique!",
  10: "🔥🔥 10 streak! Incroyable! You're unstoppable!",
  15: "🔥🔥🔥 15 streak! Absolument parfait! Legend!",
  20: "🏆 20 streak! You are a French master! Bravo!"
};

const streakFallback = (n) =>
  `🏆 ${n} streak! Extraordinaire! You're legendary!`;

const wrongMessages = [
  "💪 Not quite, but you're learning! The answer is",
  "📖 Almost there! Take a look at this one:",
  "🌱 Every mistake is a step forward! It's",
  "💡 Good try! Here's the correct answer:",
  "🤔 Tricky one! Don't worry, it's",
  "😊 Keep going, you've got this! The answer is",
  "🌟 You're still doing great! The answer was",
  "🧠 Learning in progress! The correct answer is",
  "🎯 Close! Let's remember this one:",
  "💬 French can be tricky! The answer is",
  "🌈 No worries at all! Take note of this one:",
  "🚀 You're building something great! It's",
  "📚 Each one you learn sticks with you! The answer is",
  "🤗 That's okay! You'll get it next time! It's",
  "✨ Courage! The correct French is"
];

const streakBrokenMessages = [
  "💔 Streak reset — but you were so close! Keep going!",
  "😤 Streak broken! Shake it off and build it back up!",
  "🔄 Streak reset! You've done it before, you'll do it again!",
  "💪 Don't let that stop you! Start a new streak right now!",
  "🌟 Streaks reset, but your progress never does!"
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ===== XP & Streak Config =====
const XP_PER_CORRECT   = 10;
const XP_PER_WRONG     = 2;
const XP_BONUS_STREAK  = 5;
const XP_TO_LEVEL_UP   = 50;
const STREAK_MILESTONE = 5;
const STREAK_DOT_COUNT = 5;
const MAX_HISTORY      = 10;  // keep last 10 sessions

// ===== localStorage Keys =====
const LS_TOTAL_XP    = "frenchApp_totalXP";
const LS_LEVEL       = "frenchApp_level";
const LS_XP_INTO     = "frenchApp_xpIntoLevel";
const LS_HISTORY     = "frenchApp_scoreHistory";

// ===== Load Persisted Data =====
let totalXP      = parseInt(localStorage.getItem(LS_TOTAL_XP)  || "0");
let currentLevel = parseInt(localStorage.getItem(LS_LEVEL)     || "1");
let xpIntoLevel  = parseInt(localStorage.getItem(LS_XP_INTO)   || "0");
let scoreHistory = JSON.parse(localStorage.getItem(LS_HISTORY) || "[]");

// ===== Session State (resets each session) =====
let currentIndex  = 0;
let correctCount  = 0;
let sessionXP     = 0;
let streak        = 0;
let bestStreak    = 0;
let isSpeaking    = false;
let answeredCards = new Array(vocabulary.length).fill(false);

// ===== Save Persistent Data =====
function saveData() {
  localStorage.setItem(LS_TOTAL_XP, totalXP);
  localStorage.setItem(LS_LEVEL,    currentLevel);
  localStorage.setItem(LS_XP_INTO,  xpIntoLevel);
  localStorage.setItem(LS_HISTORY,  JSON.stringify(scoreHistory));
}

// ===== DOM Elements =====
const englishWord       = document.getElementById("englishWord");
const frenchWord        = document.getElementById("frenchWord");
const cardInner         = document.getElementById("cardInner");
const userAnswer        = document.getElementById("userAnswer");
const feedback          = document.getElementById("feedback");
const progressBar       = document.getElementById("progressBar");
const progressText      = document.getElementById("progressText");
const scoreSection      = document.getElementById("scoreSection");
const scoreText         = document.getElementById("scoreText");
const xpSummary         = document.getElementById("xpSummary");
const streakSummary     = document.getElementById("streakSummary");
const checkBtn          = document.getElementById("checkBtn");
const nextBtn           = document.getElementById("nextBtn");
const prevBtn           = document.getElementById("prevBtn");
const restartBtn        = document.getElementById("restartBtn");
const flashcard         = document.getElementById("flashcard");
const xpValue           = document.getElementById("xpValue");
const xpLevel           = document.getElementById("xpLevel");
const xpBar             = document.getElementById("xpBar");
const xpNext            = document.getElementById("xpNext");
const xpToast           = document.getElementById("xpToast");
const streakToast       = document.getElementById("streakToast");
const streakNumber      = document.getElementById("streakNumber");
const streakFire        = document.getElementById("streakFire");
const bestStreakNumber  = document.getElementById("bestStreakNumber");
const streakDots        = document.getElementById("streakDots");
const pronounceBtn      = document.getElementById("pronounceBtn");
const pronounceBtnMain  = document.getElementById("pronounceBtnMain");
const pronounceHint     = document.getElementById("pronounceHint");
const totalXPBanner     = document.getElementById("totalXPBanner");
const totalXPLevelBadge = document.getElementById("totalXPLevelBadge");
const historyList       = document.getElementById("historyList");
const historyEmpty      = document.getElementById("historyEmpty");
const clearHistoryBtn   = document.getElementById("clearHistoryBtn");

// ===== Level Up Banner =====
const levelUpBanner = document.createElement("div");
levelUpBanner.className = "level-up-banner";
document.body.appendChild(levelUpBanner);

// ===== Update Total XP Banner =====
function updateTotalXPBanner() {
  totalXPBanner.textContent     = `${totalXP} XP`;
  totalXPLevelBadge.textContent = `Level ${currentLevel}`;
}

// ===== Speech Synthesis =====
const synth = window.speechSynthesis;
let frenchVoice = null;

if (!synth) {
  const warning = document.createElement("p");
  warning.className   = "no-speech-warning";
  warning.textContent =
    "⚠️ Your browser does not support audio pronunciation. Try Chrome or Edge.";
  pronounceBtnMain.parentElement.appendChild(warning);
  pronounceBtnMain.disabled = true;
  pronounceBtn.disabled     = true;
}

function loadVoices() {
  const voices = synth.getVoices();
  frenchVoice =
    voices.find(v => v.lang === "fr-FR") ||
    voices.find(v => v.lang.startsWith("fr")) ||
    null;

  pronounceHint.textContent = frenchVoice
    ? `🎙️ Voice: ${frenchVoice.name}`
    : "🎙️ Using default voice (no French voice found)";
}

if (synth) {
  loadVoices();
  synth.onvoiceschanged = loadVoices;
}

function speakFrench(text) {
  if (!synth) return;
  synth.cancel();

  const cleanText  = text.replace(/$$.*?$$/g, "").replace(/\.\.\./g, "").trim();
  const utterance  = new SpeechSynthesisUtterance(cleanText);
  utterance.lang   = "fr-FR";
  utterance.rate   = 0.88;
  utterance.pitch  = 1.0;
  utterance.volume = 1.0;

  if (frenchVoice) utterance.voice = frenchVoice;

  utterance.onstart = () => {
    isSpeaking = true;
    pronounceBtn.classList.add("speaking");
    pronounceBtnMain.classList.add("speaking");
    pronounceBtnMain.textContent = "🔊 Speaking...";
  };

  const resetSpeakBtn = () => {
    isSpeaking = false;
    pronounceBtn.classList.remove("speaking");
    pronounceBtnMain.classList.remove("speaking");
    pronounceBtnMain.textContent = "🔊 Pronounce French";
  };

  utterance.onend   = resetSpeakBtn;
  utterance.onerror = resetSpeakBtn;

  synth.speak(utterance);
}

pronounceBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  speakFrench(vocabulary[currentIndex].french);
});

pronounceBtnMain.addEventListener("click", () => {
  speakFrench(vocabulary[currentIndex].french);
});

// ===== Load Card =====
function loadCard(index) {
  const card = vocabulary[index];

  if (synth) synth.cancel();
  isSpeaking = false;
  pronounceBtnMain.classList.remove("speaking");
  pronounceBtnMain.textContent = "🔊 Pronounce French";

  cardInner.classList.remove("flipped");
  englishWord.textContent = card.english;
  frenchWord.textContent  = card.french;
  userAnswer.value        = "";
  feedback.textContent    = "";
  feedback.className      = "feedback";

  const cardNumber = index + 1;
  const total      = vocabulary.length;
  progressText.textContent = `Card ${cardNumber} of ${total}`;
  progressBar.style.width  = `${(cardNumber / total) * 100}%`;
}

// ===== Flip Card =====
flashcard.addEventListener("click", () => {
  cardInner.classList.toggle("flipped");
});

// ===== Normalize =====
function normalize(str) {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s']/g, "")
    .replace(/\s+/g, " ");
}

// ===== Streak Display =====
function updateStreakDisplay() {
  streakNumber.textContent    = streak;
  bestStreakNumber.textContent = bestStreak;

  streakNumber.classList.toggle("on-fire", streak >= 3);

  streakFire.classList.remove("pop");
  void streakFire.offsetWidth;
  streakFire.classList.add("pop");

  streakDots.innerHTML   = "";
  const dotsProgress     = streak % STREAK_MILESTONE;

  for (let i = 0; i < STREAK_DOT_COUNT; i++) {
    const dot = document.createElement("div");
    dot.className = "streak-dot";
    if (i < dotsProgress) dot.classList.add("filled");
    if (dotsProgress === 0 && streak > 0 && i === STREAK_DOT_COUNT - 1)
      dot.classList.add("milestone");
    streakDots.appendChild(dot);
  }
}

// ===== Streak Toast =====
let streakToastTimer = null;
function showStreakToast(message) {
  streakToast.textContent = message;
  streakToast.classList.add("show");
  if (streakToastTimer) clearTimeout(streakToastTimer);
  streakToastTimer = setTimeout(() =>
    streakToast.classList.remove("show"), 2200);
}

// ===== XP =====
function addXP(amount, label) {
  totalXP     += amount;
  sessionXP   += amount;
  xpIntoLevel += amount;

  while (xpIntoLevel >= XP_TO_LEVEL_UP) {
    xpIntoLevel  -= XP_TO_LEVEL_UP;
    currentLevel += 1;
    showLevelUp();
  }

  saveData();
  updateXPDisplay();
  updateTotalXPBanner();
  showXPToast(`+${amount} XP ${label}`);
}

function updateXPDisplay() {
  xpValue.textContent = totalXP;
  xpLevel.textContent = `Level ${currentLevel}`;

  const percent     = Math.min((xpIntoLevel / XP_TO_LEVEL_UP) * 100, 100);
  xpBar.style.width = `${percent}%`;

  const remaining    = XP_TO_LEVEL_UP - xpIntoLevel;
  xpNext.textContent = `${remaining} XP to next level`;
}

let toastTimer = null;
function showXPToast(message) {
  xpToast.textContent = message;
  xpToast.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => xpToast.classList.remove("show"), 1800);
}

function showLevelUp() {
  levelUpBanner.innerHTML = `🎉 Level Up!<br>
    <span style="font-size:2rem">Level ${currentLevel}</span><br>
    <span style="font-size:1rem;opacity:0.8">Keep it up!</span>`;
  levelUpBanner.classList.add("show");
  setTimeout(() => levelUpBanner.classList.remove("show"), 2500);
}

// ===== Check Answer =====
checkBtn.addEventListener("click", checkAnswer);
userAnswer.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkAnswer();
});

function checkAnswer() {
  const userInput = normalize(userAnswer.value);
  const correct   = normalize(vocabulary[currentIndex].french);

  if (userInput === "") {
    feedback.textContent = "Please type an answer first!";
    feedback.className   = "feedback";
    return;
  }

  if (userInput === correct) {
    streak++;
    if (streak > bestStreak) bestStreak = streak;

    feedback.className = "feedback correct";
    cardInner.classList.add("flipped");

    let xpGained = XP_PER_CORRECT;
    let xpLabel  = "✅";

    if (streak % STREAK_MILESTONE === 0) {
      xpGained += XP_BONUS_STREAK;
      const milestoneMsg = streakMessages[streak] || streakFallback(streak);
      feedback.textContent = milestoneMsg;
      showStreakToast(milestoneMsg);
      xpLabel = "🔥 Streak bonus!";
    } else {
      feedback.textContent = pickRandom(correctMessages);
      xpLabel = "✅ Correct!";
    }

    speakFrench(vocabulary[currentIndex].french);

    if (!answeredCards[currentIndex]) {
      correctCount++;
      answeredCards[currentIndex] = true;
    }

    addXP(xpGained, xpLabel);

  } else {
    const previousStreak = streak;
    streak = 0;

    cardInner.classList.add("flipped");
    feedback.className = "feedback incorrect";

    const wrongIntro = pickRandom(wrongMessages);

    if (previousStreak >= 3) {
      const brokenMsg = pickRandom(streakBrokenMessages);
      feedback.textContent =
        `${brokenMsg} ${wrongIntro}: ${vocabulary[currentIndex].french}`;
    } else {
      feedback.textContent =
        `${wrongIntro}: ${vocabulary[currentIndex].french}`;
    }

    speakFrench(vocabulary[currentIndex].french);
    addXP(XP_PER_WRONG, "📖 Keep trying!");
  }

  updateStreakDisplay();
}

// ===== Navigation =====
nextBtn.addEventListener("click", () => {
  if (currentIndex < vocabulary.length - 1) {
    currentIndex++;
    loadCard(currentIndex);
  } else {
    showScore();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadCard(currentIndex);
  }
});

// ===== Score History Helpers =====

// Medal emoji based on rank in history list
function getMedal(index) {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return `#${index + 1}`;
}

// Format a saved timestamp into a readable string
function formatDate(isoString) {
  const d = new Date(isoString);
  return d.toLocaleDateString(undefined, {
    month: "short",
    day:   "numeric",
    year:  "numeric",
    hour:  "2-digit",
    minute:"2-digit"
  });
}

// Render the full history list from the scoreHistory array
function renderHistory() {
  historyList.innerHTML = "";

  if (scoreHistory.length === 0) {
    historyList.appendChild(historyEmpty);
    return;
  }

  // Sort by percent descending so best scores show medals correctly
  const sorted = [...scoreHistory].sort((a, b) => b.percent - a.percent);

  scoreHistory.forEach((entry, i) => {
    // Find this entry's rank in the sorted list
    const rank = sorted.findIndex(
      s => s.date === entry.date && s.percent === entry.percent
    );

    const card = document.createElement("div");
    card.className = "history-card";

    card.innerHTML = `
      <div class="history-rank">${getMedal(rank)}</div>
      <div class="history-details">
        <div class="history-score-line">
          ${entry.correct} / ${entry.total} correct
          (${entry.percent}%)
        </div>
        <div class="history-percent-bar-container">
          <div class="history-percent-bar"
               style="width: ${entry.percent}%"></div>
        </div>
        <div class="history-meta">
          🕐 ${formatDate(entry.date)}
        </div>
      </div>
      <div class="history-stats">
        <span class="history-xp-badge">+${entry.xpEarned} XP</span>
        <span class="history-streak-badge">
          🔥 Best ${entry.bestStreak}
        </span>
      </div>
    `;

    historyList.appendChild(card);
  });
}

// Save a new session result into history
function saveSessionToHistory(correct, total, percent, xpEarned, best) {
  const entry = {
    correct,
    total,
    percent,
    xpEarned,
    bestStreak: best,
    date: new Date().toISOString()
  };

  // Newest first
  scoreHistory.unshift(entry);

  // Keep only the last MAX_HISTORY sessions
  if (scoreHistory.length > MAX_HISTORY) {
    scoreHistory = scoreHistory.slice(0, MAX_HISTORY);
  }

  saveData();
  renderHistory();
}

// ===== Clear History =====
clearHistoryBtn.addEventListener("click", () => {
  if (confirm("Clear all score history? This cannot be undone.")) {
    scoreHistory = [];
    saveData();
    renderHistory();
  }
});

// ===== Show Score =====
function showScore() {
  scoreSection.style.display = "block";
  const total   = vocabulary.length;
  const percent = Math.round((correctCount / total) * 100);

  let message = "";
  if (percent === 100) {
    message = pickRandom([
      "Perfect score! You're absolutely magnifique! 🌟",
      "Flawless! A true French champion! 🏆",
      "100%! Paris is calling your name! 🗼"
    ]);
  } else if (percent >= 75) {
    message = pickRandom([
      "Great job! You're well on your way to fluency! 💪",
      "Impressive! A little more practice and you'll be perfect! 🌟",
      "Très bien! You should be really proud of yourself! 🎉"
    ]);
  } else if (percent >= 50) {
    message = pickRandom([
      "Good effort! Review the tricky ones and try again. 📚",
      "You're halfway there! Keep at it and you'll fly! 🚀",
      "Solid work! Every session makes you stronger. 💡"
    ]);
  } else {
    message = pickRandom([
      "Keep going! Every expert was once a beginner. 🌱",
      "Practice makes progress! You've got this. 💬",
      "Don't give up! French takes time and you're doing great. 🤗"
    ]);
  }

  scoreText.textContent     =
    `You got ${correctCount} out of ${total} correct (${percent}%). ${message}`;
  xpSummary.textContent     =
    `⭐ You earned ${sessionXP} XP this session! Total XP: ${totalXP}`;
  streakSummary.textContent =
    `🔥 Best streak this session: ${bestStreak} in a row!`;

  // Save this session to history
  saveSessionToHistory(correctCount, total, percent, sessionXP, bestStreak);
}

// ===== Restart =====
restartBtn.addEventListener("click", () => {
  currentIndex  = 0;
  correctCount  = 0;
  sessionXP     = 0;
  streak        = 0;
  bestStreak    = 0;
  answeredCards = new Array(vocabulary.length).fill(false);
  scoreSection.style.display = "none";
  updateStreakDisplay();
  loadCard(0);
});

// ===== Initialize =====
loadCard(0);
updateXPDisplay();
updateTotalXPBanner();
updateStreakDisplay();
renderHistory();

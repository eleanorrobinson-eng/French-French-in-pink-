// ===== Vocabulary Data =====
// 40 French conversation words and phrases
const vocabulary = [
  // --- Greetings & Basics ---
  { english: "Hello",                   french: "Bonjour",                  category: "Greetings" },
  { english: "Good evening",            french: "Bonsoir",                  category: "Greetings" },
  { english: "Good night",              french: "Bonne nuit",               category: "Greetings" },
  { english: "Goodbye",                 french: "Au revoir",                category: "Greetings" },
  { english: "See you soon",            french: "À bientôt",                category: "Greetings" },
  { english: "See you tomorrow",        french: "À demain",                 category: "Greetings" },

  // --- Politeness ---
  { english: "Please",                  french: "S'il vous plaît",          category: "Politeness" },
  { english: "Thank you",               french: "Merci",                    category: "Politeness" },
  { english: "Thank you very much",     french: "Merci beaucoup",           category: "Politeness" },
  { english: "You're welcome",          french: "De rien",                  category: "Politeness" },
  { english: "Excuse me",               french: "Excusez-moi",              category: "Politeness" },
  { english: "I'm sorry",               french: "Je suis désolé(e)",        category: "Politeness" },
  { english: "No problem",              french: "Pas de problème",          category: "Politeness" },

  // --- Introductions ---
  { english: "Yes",                     french: "Oui",                      category: "Basics" },
  { english: "No",                      french: "Non",                      category: "Basics" },
  { english: "How are you?",            french: "Comment allez-vous ?",     category: "Introductions" },
  { english: "I'm fine",                french: "Je vais bien",             category: "Introductions" },
  { english: "My name is...",           french: "Je m'appelle...",          category: "Introductions" },
  { english: "Nice to meet you",        french: "Enchanté(e)",              category: "Introductions" },
  { english: "Where are you from?",     french: "D'où venez-vous ?",        category: "Introductions" },
  { english: "I am from...",            french: "Je viens de...",           category: "Introductions" },
  { english: "How old are you?",        french: "Quel âge avez-vous ?",     category: "Introductions" },

  // --- Getting Around ---
  { english: "Where is...?",            french: "Où est... ?",              category: "Getting Around" },
  { english: "To the left",             french: "À gauche",                 category: "Getting Around" },
  { english: "To the right",            french: "À droite",                 category: "Getting Around" },
  { english: "Straight ahead",          french: "Tout droit",               category: "Getting Around" },
  { english: "Near / Close",            french: "Près d'ici",               category: "Getting Around" },
  { english: "Far away",                french: "Loin d'ici",               category: "Getting Around" },

  // --- Shopping & Money ---
  { english: "How much does it cost?",  french: "Combien ça coûte ?",       category: "Shopping" },
  { english: "That's too expensive",    french: "C'est trop cher",          category: "Shopping" },
  { english: "I would like...",         french: "Je voudrais...",           category: "Shopping" },
  { english: "Do you have...?",         french: "Avez-vous... ?",           category: "Shopping" },
  { english: "The bill please",         french: "L'addition s'il vous plaît", category: "Shopping" },

  // --- Communication ---
  { english: "I don't understand",      french: "Je ne comprends pas",      category: "Communication" },
  { english: "Can you repeat that?",    french: "Pouvez-vous répéter ?",    category: "Communication" },
  { english: "Do you speak English?",   french: "Parlez-vous anglais ?",    category: "Communication" },
  { english: "I speak a little French", french: "Je parle un peu français", category: "Communication" },
  { english: "I need help",             french: "J'ai besoin d'aide",       category: "Communication" },
  { english: "Can you help me?",        french: "Pouvez-vous m'aider ?",    category: "Communication" },

  // --- Daily Life ---
  { english: "Have a good day!",        french: "Bonne journée !",          category: "Daily Life" },
  { english: "Have a good weekend!",    french: "Bon week-end !",           category: "Daily Life" },
  { english: "Enjoy your meal!",        french: "Bon appétit !",            category: "Daily Life" },
  { english: "Congratulations!",        french: "Félicitations !",          category: "Daily Life" },
  { english: "Happy birthday!",         french: "Joyeux anniversaire !",    category: "Daily Life" },
  { english: "Good luck!",              french: "Bonne chance !",           category: "Daily Life" }
];

// ===== XP System Config =====
const XP_PER_CORRECT     = 10;   // XP for a correct answer
const XP_PER_WRONG       = 2;    // XP for trying even if wrong
const XP_BONUS_STREAK    = 5;    // Bonus XP for every 3-card streak
const XP_TO_LEVEL_UP     = 50;   // XP needed per level

// ===== State =====
let currentIndex   = 0;
let correctCount   = 0;
let totalXP        = 0;
let sessionXP      = 0;
let currentLevel   = 1;
let xpIntoLevel    = 0;
let streak         = 0;
let answeredCards  = new Array(vocabulary.length).fill(false);

// ===== DOM Elements =====
const englishWord  = document.getElementById("englishWord");
const frenchWord   = document.getElementById("frenchWord");
const cardInner    = document.getElementById("cardInner");
const userAnswer   = document.getElementById("userAnswer");
const feedback     = document.getElementById("feedback");
const progressBar  = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const scoreSection = document.getElementById("scoreSection");
const scoreText    = document.getElementById("scoreText");
const xpSummary    = document.getElementById("xpSummary");
const checkBtn     = document.getElementById("checkBtn");
const nextBtn      = document.getElementById("nextBtn");
const prevBtn      = document.getElementById("prevBtn");
const restartBtn   = document.getElementById("restartBtn");
const flashcard    = document.getElementById("flashcard");
const xpValue      = document.getElementById("xpValue");
const xpLevel      = document.getElementById("xpLevel");
const xpBar        = document.getElementById("xpBar");
const xpNext       = document.getElementById("xpNext");
const xpToast      = document.getElementById("xpToast");

// ===== Create Level Up Banner =====
const levelUpBanner = document.createElement("div");
levelUpBanner.className = "level-up-banner";
document.body.appendChild(levelUpBanner);

// ===== Load Card =====
function loadCard(index) {
  const card = vocabulary[index];

  cardInner.classList.remove("flipped");
  englishWord.textContent = card.english;
  frenchWord.textContent  = card.french;
  userAnswer.value        = "";
  feedback.textContent    = "";
  feedback.className      = "feedback";

  const cardNumber = index + 1;
  const total      = vocabulary.length;
  progressText.textContent  = `Card ${cardNumber} of ${total}`;
  progressBar.style.width   = `${(cardNumber / total) * 100}%`;
}

// ===== Flip Card =====
flashcard.addEventListener("click", () => {
  cardInner.classList.toggle("flipped");
});

// ===== Normalize Answer =====
function normalize(str) {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s']/g, "")
    .replace(/\s+/g, " ");
}

// ===== Add XP =====
function addXP(amount, label) {
  totalXP      += amount;
  sessionXP    += amount;
  xpIntoLevel  += amount;

  // Check for level up
  while (xpIntoLevel >= XP_TO_LEVEL_UP) {
    xpIntoLevel  -= XP_TO_LEVEL_UP;
    currentLevel += 1;
    showLevelUp();
  }

  updateXPDisplay();
  showXPToast(`+${amount} XP ${label}`);
}

// ===== Update XP Display =====
function updateXPDisplay() {
  xpValue.textContent = totalXP;
  xpLevel.textContent = `Level ${currentLevel}`;

  const percent = Math.min((xpIntoLevel / XP_TO_LEVEL_UP) * 100, 100);
  xpBar.style.width   = `${percent}%`;

  const remaining     = XP_TO_LEVEL_UP - xpIntoLevel;
  xpNext.textContent  = `${remaining} XP to next level`;
}

// ===== Show XP Toast =====
let toastTimer = null;
function showXPToast(message) {
  xpToast.textContent = message;
  xpToast.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    xpToast.classList.remove("show");
  }, 1800);
}

// ===== Show Level Up Banner =====
function showLevelUp() {
  levelUpBanner.innerHTML = `🎉 Level Up!<br><span style="font-size:2rem">Level ${currentLevel}</span><br><span style="font-size:1rem;opacity:0.8">Keep it up!</span>`;
  levelUpBanner.classList.add("show");

  setTimeout(() => {
    levelUpBanner.classList.remove("show");
  }, 2500);
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
    feedback.className   = "feedback correct";
    cardInner.classList.add("flipped");

    let xpGained = XP_PER_CORRECT;
    let toastMsg = "✅ Correct!";

    // Streak bonus every 3 correct in a row
    if (streak % 3 === 0) {
      xpGained += XP_BONUS_STREAK;
      toastMsg  = `🔥 ${streak} streak! Bonus XP!`;
      feedback.textContent = `✅ Correct! 🔥 ${streak} card streak! Bonus XP earned!`;
    } else {
      feedback.textContent = `✅ Correct! Well done!`;
    }

    if (!answeredCards[currentIndex]) {
      correctCount++;
      answeredCards[currentIndex] = true;
    }

    addXP(xpGained, toastMsg);

  } else {
    streak = 0;
    feedback.textContent = `❌ Not quite. The answer is: ${vocabulary[currentIndex].french}`;
    feedback.className   = "feedback incorrect";
    cardInner.classList.add("flipped");
    addXP(XP_PER_WRONG, "📖 Keep trying!");
  }
}

// ===== Next Card =====
nextBtn.addEventListener("click", () => {
  if (currentIndex < vocabulary.length - 1) {
    currentIndex++;
    loadCard(currentIndex);
  } else {
    showScore();
  }
});

// ===== Previous Card =====
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadCard(currentIndex);
  }
});

// ===== Show Score =====
function showScore() {
  scoreSection.style.display = "block";
  const total   = vocabulary.length;
  const percent = Math.round((correctCount / total) * 100);

  let message = "";
  if (percent === 100) {
    message = "Perfect score! You're amazing! 🌟";
  } else if (percent >= 75) {
    message = "Great job! Keep practicing! 💪";
  } else if (percent >= 50) {
    message = "Good effort! Review the tricky ones and try again. 📚";
  } else {
    message = "Keep going! Practice makes progress. 🌱";
  }

  scoreText.textContent  = `You got ${correctCount} out of ${total} correct (${percent}%). ${message}`;
  xpSummary.textContent  = `⭐ You earned ${sessionXP} XP this session! Total XP: ${totalXP}`;
}

// ===== Restart =====
restartBtn.addEventListener("click", () => {
  currentIndex  = 0;
  correctCount  = 0;
  sessionXP     = 0;
  streak        = 0;
  answeredCards = new Array(vocabulary.length).fill(false);
  scoreSection.style.display = "none";
  loadCard(0);
});

// ===== Initialize =====
loadCard(0);
updateXPDisplay();

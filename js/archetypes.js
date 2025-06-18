const questions = [
  {
    text: "How do you usually make financial decisions?",
    options: [
      { label: "I get anxious and prefer safe choices", type: "Worrier" },
      { label: "I compare all options and run the numbers", type: "Analyzer" },
      { label: "I move fast and trust my instincts", type: "Hustler" },
      { label: "I usually delay or avoid thinking about them", type: "Procrastinator" },
      { label: "I choose the most efficient strategy I can find", type: "Optimizer" }
    ]
  }
]; 

const archetypeDescriptions = {
  Worrier: "...",
  Analyzer: "...",
  Hustler: "...",
  Procrastinator: "...",
  Optimizer: "..."
};

let archetypeScores = {
  Worrier: 0,
  Analyzer: 0,
  Hustler: 0,
  Procrastinator: 0,
  Optimizer: 0
};

const userInfo = {};
let currentQuestionIndex = 0;

function resetArchetypeQuiz() {
  for (let key in archetypeScores) archetypeScores[key] = 0;
  for (let field in userInfo) delete userInfo[field];
}

function recordAnswer(type) {
  archetypeScores[type]++;
}

function recordInput(key, value) {
  userInfo[key] = value;
}

function calculateArchetype() {
  return Object.entries(archetypeScores).sort((a, b) => b[1] - a[1])[0][0];
}

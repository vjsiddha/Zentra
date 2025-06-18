function renderStartScreen() {
  document.getElementById("app").innerHTML = `
    <div class="container">
      <h2>Welcome to Investra</h2>
      <p>Let's find out your financial archetype and get to know your financial profile.</p>
      <button onclick="startQuiz()">Start Quiz</button>
    </div>
  `;
}

function startQuiz() {
  resetArchetypeQuiz();
  currentQuestionIndex = 0;
  showQuestion();
}

function showQuestion() {
  console.log("Question Index:", currentQuestionIndex);
  console.log("Questions array:", questions);
  const q = questions[currentQuestionIndex];
  let content = `<div class="container"><h3>Question ${currentQuestionIndex + 1}</h3><p>${q.text}</p>`;

  if (q.options) {
    content += q.options.map(opt => `<button onclick="selectAnswer('${opt.type}')">${opt.label}</button>`).join("");
  } else if (q.input) {
    content += `
      <input type="${q.input}" id="userInput" placeholder="Enter your answer..." />
      <br /><button onclick="submitInput('${q.key}')">Next</button>
    `;
  }

  content += `</div>`;
  document.getElementById("app").innerHTML = content;
}

function selectAnswer(type) {
  recordAnswer(type);
  nextQuestion();
}

function submitInput(key) {
  const value = document.getElementById("userInput").value;
  if (!value) return alert("Please enter a value to proceed.");
  recordInput(key, value);
  setTimeout(() => nextQuestion(), 100);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    const result = calculateArchetype();
    localStorage.setItem("archetype", result);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    showResult(result);
  }
}

function showResult(archetype) {
  const summary = archetypeDescriptions[archetype] || "No description available.";
  document.getElementById("app").innerHTML = `
    <div class="container">
      <h2>Your Archetype: ${archetype}</h2>
      <p><strong>Why?</strong> ${summary}</p>
      <p><strong>Your Info Summary:</strong></p>
      <pre>${JSON.stringify(userInfo, null, 2)}</pre>
      <button onclick="startSimulation()">Continue to Simulation</button>
    </div>
  `;
}

renderStartScreen();

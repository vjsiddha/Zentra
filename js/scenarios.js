function startSimulation() {
  document.getElementById("app").innerHTML = `
    <div class="container">
      <h2>Scenario 1: Survive a Bear Market</h2>
      <p>You’re down 25% in 3 months. What will you do?</p>
      <button onclick="handleChoice('sell')">Sell</button>
      <button onclick="handleChoice('hold')">Hold</button>
      <button onclick="handleChoice('rebalance')">Rebalance</button>
      <div id="result"></div>
    </div>
  `;
}

function handleChoice(choice) {
  let result;
  if (choice === "sell") {
    result = {
      outcome: "You locked in your losses. Historically, markets tend to recover after downturns.",
      xp: 5
    };
  } else if (choice === "hold") {
    result = {
      outcome: "You stayed calm and waited out the volatility. Good long-term thinking!",
      xp: 10
    };
  } else if (choice === "rebalance") {
    result = {
      outcome: "You adjusted your portfolio to match your target allocation — smart strategy!",
      xp: 15
    };
  }
  document.getElementById("result").innerHTML = `<p>${result.outcome}</p>`;
}

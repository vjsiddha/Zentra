// This will eventually render your scenario and handle transitions
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

function handleChoice(choice) {
  const result = getScenarioResult("bear-market", choice);
  document.getElementById("result").innerHTML = `<p>${result.outcome}</p>`;
  addXP(result.xp);
}

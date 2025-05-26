const scenarios = {
  "bear-market": {
    title: "Survive a Bear Market",
    choices: {
      sell: {
        outcome: "You missed the recovery. Your portfolio value stayed low.",
        xp: 0
      },
      hold: {
        outcome: "You stayed invested. The market recovered. Great job!",
        xp: 20
      },
      rebalance: {
        outcome: "You reduced risk, but your gains were moderate.",
        xp: 10
      }
    }
  }
};

function getScenarioResult(id, choice) {
  return scenarios[id].choices[choice];
}

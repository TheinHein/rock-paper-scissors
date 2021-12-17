function computerPlay() {
  const selection = ["rock", "paper", "scissors"];
  return selection[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "Lose";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Win";
  }
}

function game() {
  let win = 0;
  let lose = 0;
  for (let i = 1; i <= 5; i++) {
    const playerSelection = window.prompt(
      "Type one of these: Rock, Paper, Scissors"
    );
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result === "Win") {
      win += 1;
    } else if (result === "Lose") {
      lose += 1;
    }
  }
  if (win > lose) {
    console.log("You win");
  } else if (win < lose) {
    console.log("You lose");
  } else {
    console.log("No one win");
  }
}

game();

function computerPlay() {
  const selection = ["rock", "paper", "scissors"];
  const randomPick = selection[Math.floor(Math.random() * 3)];
  return randomPick;
}
let userScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
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

const buttons = document.querySelectorAll(".btn");
const userPickEle = document.querySelector("#user-pick");
const userScoreEle = document.querySelector("#user-score");
const computerPickEle = document.querySelector("#computer-pick");
const computerScoreEle = document.querySelector("#computer-score");
const body = document.querySelector("body");
const title = document.querySelector("#title");
const info = document.querySelector(".info");
const rules = document.querySelector(".rules");
const resultEle = document.querySelector("#result");

const announcement = document.createElement("div");
announcement.classList.add("border", "box-shadow", "announcement");
const userPickImg = document.createElement("img");
const computerPickImg = document.createElement("img");
const result = document.createElement("p");
const bg = document.createElement("div");
bg.classList.add("bg");

function setAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    const userPick = e.target.dataset.key;
    setAttributes(userPickImg, { src: `images/${userPick}.png`, id: userPick });
    userPickEle.appendChild(userPickImg);
    userPickEle.classList.add("animate-score");
    const computerPick = computerPlay();
    setAttributes(computerPickImg, {
      src: `images/${computerPick}.png`,
      id: computerPick,
    });
    computerPickEle.appendChild(computerPickImg);
    computerPickEle.classList.add("animate-score");
    setTimeout(() => {
      userPickEle.classList.remove("animate-score");
      computerPickEle.classList.remove("animate-score");
    }, 1000);
    const play = playRound(userPick, computerPick);
    if (play === "Lose") {
      computerScore = computerScore + 1;
      result.textContent = "You Lose!";
      resultEle.appendChild(result);
    } else if (play === "Win") {
      userScore = userScore + 1;
      result.textContent = "You Win!";
      resultEle.appendChild(result);
    } else if (play === "Draw") {
      result.textContent = "Draw!";
      resultEle.appendChild(result);
    }
    userScoreEle.textContent = userScore;
    computerScoreEle.textContent = computerScore;
    if (userScore === 5) {
      announcement.textContent = "Amazing! You beat me!";
      bg.classList.add("win");
      body.insertBefore(bg, title);
      body.appendChild(announcement);
    } else if (computerScore === 5) {
      announcement.textContent = "You Lose. Try again.";
      bg.classList.add("lose");
      body.insertBefore(bg, title);
      body.appendChild(announcement);
    }
  })
);

function reset() {
  body.removeChild(bg);
  body.removeChild(announcement);
  userPickEle.removeChild(userPickImg);
  computerPickEle.removeChild(computerPickImg);
  userScore = 0;
  computerScore = 0;
  userScoreEle.textContent = userScore;
  computerScoreEle.textContent = computerScore;
  bg.classList.remove("lose", "win");
}

bg.addEventListener("click", reset);

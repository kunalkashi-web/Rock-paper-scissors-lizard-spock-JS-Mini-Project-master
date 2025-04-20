const PAPER = "paper";
const SCISSOR = "scissors";
const ROCK = "rock";
const LIZARD = "lizard";
const SPOCK = "spock";

const paperElement = document.querySelector("#paper");
const scissorElement = document.querySelector("#scissors");
const rockElement = document.querySelector("#rock");
const lizardElement = document.querySelector("#lizard");
const spockElement = document.querySelector("#spock");
const playAgainBtn = document.querySelector("#btn_play_again");
let score = 0;

paperElement.addEventListener("click", () => startGame(PAPER));
scissorElement.addEventListener("click", () => startGame(SCISSOR));
rockElement.addEventListener("click", () => startGame(ROCK));
lizardElement.addEventListener("click", () => startGame(LIZARD));
spockElement.addEventListener("click", () => startGame(SPOCK));
playAgainBtn.addEventListener("click", () => playAgain());

function startGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);
  const resultElement = document.querySelector("#result");

  setupResult(winner, playerChoice, computerChoice);
  toggleElementVisibility(resultElement);
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === ROCK && computerChoice === PAPER) {
    return 0;
  } else if (playerChoice === SCISSOR && computerChoice === PAPER) {
    return 1;
  } else if (playerChoice === LIZARD && computerChoice === PAPER) {
    return 1;
  } else if (playerChoice === SPOCK && computerChoice === PAPER) {
    return 0;
  } else if (playerChoice === ROCK && computerChoice === SCISSOR) {
    return 1;
  } else if (playerChoice === PAPER && computerChoice === SCISSOR) {
    return 0;
  } else if (playerChoice === LIZARD && computerChoice === SCISSOR) {
    return 0;
  } else if (playerChoice === SPOCK && computerChoice === SCISSOR) {
    return 1;
  } else if (playerChoice === SCISSOR && computerChoice === ROCK) {
    return 0;
  } else if (playerChoice === PAPER && computerChoice === ROCK) {
    return 1;
  } else if (playerChoice === LIZARD && computerChoice === ROCK) {
    return 0;
  } else if (playerChoice === SPOCK && computerChoice === ROCK) {
    return 1;
  } else if (playerChoice === SCISSOR && computerChoice === LIZARD) {
    return 1;
  } else if (playerChoice === ROCK && computerChoice === LIZARD) {
    return 1;
  } else if (playerChoice === PAPER && computerChoice === LIZARD) {
    return 0;
  } else if (playerChoice === SPOCK && computerChoice === LIZARD) {
    return 0;
  } else if (playerChoice === SCISSOR && computerChoice === SPOCK) {
    return 1;
  } else if (playerChoice === ROCK && computerChoice === SPOCK) {
    return 0;
  } else if (playerChoice === PAPER && computerChoice === SPOCK) {
    return 1;
  } else if (playerChoice === LIZARD && computerChoice === SPOCK) {
    return 1;
  } else {
    return -1;
  }
}

function toggleElementPresence(element) {
  element.classList.toggle("invisible");
}

function toggleElementVisibility(element) {
  console.log(element.style.display);
  if (element.style.display === "none" || element.style.display === "") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

function setupResult(winner, playerChoice, computerChoice) {
  const playerChoiceEle = document.querySelector("#player_choice");
  const computerChoiceEle = document.querySelector("#computer_choice");
  const resultText = document.querySelector(".player_result");
  const scoreText = document.querySelector("#player_score");
  const playerBorder = document.querySelector("#player_choice .border");
  const computerBorder = document.querySelector("#computer_choice .border");

  //   Change the images of selected chips
  playerChoiceEle.querySelector("img").src = `/images/icon-${playerChoice}.svg`;
  computerChoiceEle.querySelector(
    "img"
  ).src = `/images/icon-${computerChoice}.svg`;

  //   Change the border color
  playerBorder.className = `border ${playerChoice}_border`;
  computerBorder.className = `border ${computerChoice}_border`;

  if (winner === 0) {
    resultText.innerHTML = "You lost";
    scoreText.innerHTML = score > 0 ? --score : 0;
  } else if (winner === 1) {
    resultText.innerHTML = "You won";
    scoreText.innerHTML = ++score;
  } else {
    resultText.innerHTML = "Draw";
  }
}

function getComputerChoice() {
  const choices = [ROCK, PAPER, SCISSOR, LIZARD, SPOCK];
  let randomNum = Math.floor(Math.random() * 5);

  return choices[randomNum];
}

function playAgain() {
  const resultElement = document.querySelector("#result");
  toggleElementVisibility(resultElement);
}

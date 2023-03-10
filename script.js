// Create function getComputerChoice that will randomly return either "rock", "paper", or "scissors"
// Create rock, paper, and scissor variables
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

// Generate random integer between 0 and 2
function randomInt() {
  let number = Math.floor(Math.random() * 3);
  return number;
}

// Use switch statement to assign integers to variables
function getComputerChoice() {
  switch (randomInt()) {
    case 0:
      return rock;
      break;
    case 1:
      return paper;
      break;
    case 2:
      return scissors;
      break;
  }
}

// Create function playRound that plays a single round of the game and return a string as a result (case insensitive input)
function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  if (playerSelection == "Rock" && computerSelection == "Rock") {
    return "It's a tie! Both of you picked Rock.";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return "You lose! Paper beats Rock.";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return "You win! Rock beats Scissors.";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return "You win! Paper beats Rock.";
  } else if (playerSelection == "Paper" && computerSelection == "Paper") {
    return "It's a tie! Both of you picked Paper.";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return "You lose! Scissors beats Paper.";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return "You lose! Rock beats Scissors.";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return "You win! Scissors beats Paper.";
  } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    return "It's a tie! Both of you picked Scissors.";
  } else {
    return "Hey, something went wrong. You might want to try again.";
  }
}

// DOM manipulation items that  play rounds and report score
let playerScore = 0;
let computerScore = 0;
const rockSelection = document.querySelector("#player-rock");
rockSelection.addEventListener("click", function () {
  resultDisplay.textContent = playRound(rock, getComputerChoice());
  updateScore();
});

const paperSelection = document.querySelector("#player-paper");
paperSelection.addEventListener("click", function () {
  resultDisplay.textContent = playRound(paper, getComputerChoice());
  updateScore();
});

const scissorsSelection = document.querySelector("#player-scissors");
scissorsSelection.addEventListener("click", function () {
  resultDisplay.textContent = playRound(scissors, getComputerChoice());
  updateScore();
});

const resultDisplay = document.querySelector("#result-display");
resultDisplay.textContent =
  "Round results will display here. Choose your weapon!";

const scoreDisplay = document.querySelector("#score-display");
scoreDisplay.textContent = "The score is 0 - 0";

const gameOverMessage = document.querySelector("#game-over-message");

// The function that actually plays games until 5 points are scored by either player
function updateScore() {
  let round = resultDisplay.textContent;

  if (round.slice(0, 2) == "It") {
    // Checks if result is a tie
    scoreDisplay.textContent = `The score is ${playerScore} - ${computerScore}`;
  } else if (round.slice(0, 8) == "You win!") {
    playerScore++;
    scoreDisplay.textContent = `The score is ${playerScore} - ${computerScore}`;
  } else if (round.slice(0, 8) == "You lose") {
    computerScore++;
    scoreDisplay.textContent = `The score is ${playerScore} - ${computerScore}`;
  } else {
    scoreDisplay.textContent =
      "Hey, something went wrong. You might want to try again.";
  }
  if (playerScore == 5 && computerScore < 5) {
    scoreDisplay.textContent = `The score is ${playerScore} - ${computerScore}`;
    gameOverMessage.textContent =
      "You won the game! Choose your weapon again to start a new game.";
  } else if (computerScore == 5 && playerScore < 5) {
    scoreDisplay.textContent = `The score is ${playerScore} - ${computerScore}`;
    gameOverMessage.textContent =
      "Sorry, you lost the game! Choose your weapon again to start a new game.";
  } else if (playerScore == 5 && computerScore == 5) {
    scoreDisplay.textContent = `The score is ${playerScore} - ${computerScore}`;
    gameOverMessage.textContent =
      "It's a tie! Choose your weapon again to start a new game.";
  }
  if (playerScore >= 5 || computerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
  } else if (
    playerScore + computerScore == 0 ||
    playerScore + computerScore == 1
  ) {
    gameOverMessage.textContent = ""; // resets the game over message at the beginning of the next round
  }
}

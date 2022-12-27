const buttons = document.querySelectorAll("button");
const scorePlayer = document.querySelector(".player-score");
const scoreComputer = document.querySelector(".computer-score");
const result = document.querySelector(".round-result");
// GLoval Variable
let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (playerScore >= 5 || computerScore >= 5) {
      return;
    }
    game(button.value);
  })
);
/**
 * Your game is going to play against the computer, so begin with a
 * function called getComputerChoice that will randomly return either
 * ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game
 * to make the computer’s play. Tip: use the console to make sure this
 * is returning the expected output before moving to the next step!
 */
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(randomNumber);
  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
    default:
      break;
  }
}

/**
 * Write a function that plays a single round of Rock Paper Scissors.
 * The function should take two parameters - the playerSelection and
 * computerSelection - and then return a string that declares the winner
 * of the round like so: "You Lose! Paper beats Rock"
 *
 * Make your function’s playerSelection parameter case-insensitive
 * (so users can input rock, ROCK, RocK or any other variation).
 * @param {*} playerSelection
 * @param {*} computerSelection
 */
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toUpperCase();
  let computer = computerSelection.toUpperCase();
  console.log("Player: " + playerSelection);
  console.log("Computer: " + computerSelection);
  if (player === "ROCK") {
    if (computer === "ROCK") {
      return "It's a tie";
    } else if (computer === "PAPER") {
      return "You Lose!";
    } else if (computer === "SCISSORS") {
      return "You Win!";
    }
  } else if (player === "PAPER") {
    if (computer === "ROCK") {
      return "You Win!";
    } else if (computer === "PAPER") {
      return "It's a tie";
    } else if (computer === "SCISSORS") {
      return "You Lose!";
    }
  } else if (player === "SCISSORS") {
    if (computer === "ROCK") {
      return "You Lose!";
    } else if (computer === "PAPER") {
      return "You Win!";
    } else if (computer === "SCISSORS") {
      return "It's a tie";
    }
  }
  return "ERROR! No Win, Lose, or Tie???";
}

function game(player) {
  let roundResult = playRound(player, getComputerChoice());
  if (roundResult === "You Win!") playerScore++;
  if (roundResult === "You Lose!") computerScore++;
  scorePlayer.textContent = "Player Score: " + playerScore;
  scoreComputer.textContent = "Computer Score: " + computerScore;
  result.textContent = roundResult;
  if (playerScore >= 5 && computerScore < 5) {
    result.textContent = "Game Over. You Win!";
  } else if (playerScore < 5 && computerScore >= 5) {
    result.textContent = "Game Over. You Lose!";
  }
}

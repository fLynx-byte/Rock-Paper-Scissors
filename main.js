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

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

/**
 * Write a NEW function called game(). Call the playRound function inside
 * of this one to play a 5 round game that keeps score and reports a winner
 * or loser at the end.
 * @returns
 */
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Choose: Rock, Paper, or Scissors");
    let result = playRound(playerChoice, getComputerChoice());
    if (result === "You Win!") playerScore++;
    if (result === "You Lose!") computerScore++;
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
  }
  if (playerScore > computerScore) console.log("You Win in a 5 round game!");
  if (computerScore > playerScore) console.log("You Lose in a 5 round game!");
  if (playerScore === computerScore)
    return console.log("The game is a Tie in a 5 round game");
}
game();

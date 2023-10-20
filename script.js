const choiceBtn = document.querySelectorAll(".btn");
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const computerSign = document.querySelector('computerSign');
const playerSign = document.querySelector('playerSign');

//function for randomize computer choices
function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// console.log(getComputerChoice())
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

//function for round play
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    roundWinner = "tie";
  } else if (
    (playerChoice == "PAPER" && computerChoice == "ROCK") ||
    (playerChoice == "SCISSORS" && computerChoice == "PAPER") ||
    (playerChoice == "ROCK" && computerChoice == "SCISSORS")
  ) {
    playerScore++;
    roundWinner = "player";
  } else {
    computerScore++;
    roundWinner = "computer";
  }
}

// function to update choices ui
function choiceUpdate(playerChoice, computerChoice) {
  switch (playerSelection) {
    case 'ROCK':
      playerSign.textContent = '✊'
      break
    case 'PAPER':
      playerSign.textContent = '✋'
      break
    case 'SCISSORS':
      playerSign.textContent = '✌'
      break
  }

  switch (computerSelection) {
    case 'ROCK':
      computerSign.textContent = '✊'
      break
    case 'PAPER':
      computerSign.textContent = '✋'
      break
    case 'SCISSORS':
      computerSign.textContent = '✌'
      break
  }
}


// function to determine if game is over
function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

//function to handle user choice

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ROCK";
      break;
    case 1:
      return "PAPER";
      break;
    case 2:
      return "SCISSORS";
      break;
  }
}

// console.log(getComputerChoice());

function playRound(playerChoice, computerChoice) {
  if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
    return `player choice is ${playerChoice} and computer choice is ${computerChoice}. The game is a tie.`;
  } else if (
    (computerChoice == "ROCK" && playerChoice == "paper") ||
    (computerChoice == "PAPER" && playerChoice == "scissor") ||
    (computerChoice == "SCISSORS" && playerChoice == "rock")
  ) {
    return `player choice is ${playerChoice} and computer choice is ${computerChoice}. Player wins`;
  } else if (
    (playerChoice == "scissor" && computerChoice == "ROCK") ||
    (playerChoice == "rock" && computerChoice == "PAPER") ||
    (playerChoice == "paper" && computerChoice == "SCISSORS")
  ) {
    return `player choice is ${playerChoice} and computer choice is ${computerChoice}. Computer wins`
  }
}

const computerChoice =  getComputerChoice();
const playerChoice = 'rock';

console.log(playRound(playerChoice, computerChoice))
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else if (choice === 2) {
    return "Scissor";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice (Rock, Paper, Scissor)").toLowerCase();
  if (choice === "rock") {
    return "Rock";
  }
  else if (choice === "paper") {
    return "Paper";
  }
  else if (choice === "scissor") {
    return "Scissor";
  } else {
    return "Invalid Choice";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Rock") {
    console.log("Tie! Rock vs. Rock");
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    console.log("You Lose! Paper beats Rock");
    return computerScore += 1;
  } else if (humanChoice === "Rock" && computerChoice === "Scissor") {
    console.log("You Win! Rock beats Scissor");
    return humanScore += 1;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    console.log("You Win! Paper beats Rock");
    return humanScore += 1;
  } else if (humanChoice === "Paper" && computerChoice === "Paper") {
    console.log("Tie! Paper vs. Paper");
  } else if (humanChoice === "Paper" && computerChoice === "Scissor") {
    console.log("You Lose! Scissor beats Paper");
    return computerScore += 1;
  } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
    console.log("You Lose! Rock beats Scissor");
    return computerScore += 1;
  } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
    console.log("You Win! Scissor beats Paper");
    return humanScore += 1;
  } else if (humanChoice === "Scissor" && computerChoice === "Scissor") {
    console.log("Tie! Scissor vs. Scissor");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

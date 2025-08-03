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
  let choice = prompt("Enter your choice (Rock, Paper, Scissor)");
  const choiceCapitalized = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
  if (choiceCapitalized === "Rock") {
    return "Rock";
  }
  else if (choiceCapitalized === "Paper") {
    return "Paper";
  }
  else if (choiceCapitalized === "Scissor") {
    return "Scissor";
  } else {
    return "Invalid Choice";
  }
}

console.log(getComputerChoice());
console.log(getHumanChoice());

function getCpuChoice() {
  let cpuThink = Math.random() * 3;
  let cpuChoice = "";
  cpuThink = parseInt(cpuThink);
  switch(cpuThink){
    case 0:
      cpuChoice = "rock";
      break;
    case 1 :
      cpuChoice = "paper";
      break;
    case 2:
      cpuChoice = "scissors";
      break;
  }
  return cpuChoice;
}

function playMatch(humanChoice, cpuChoice) {
  humanChoice = humanChoice.toLowerCase();
  let result;
  if(humanChoice == cpuChoice) {
    result = 0;
    console.log(displayMessage(result, humanChoice, cpuChoice));
  } else if(humanChoice == "rock") {
    result = cpuChoice == "paper" ? -1 : 1;
    console.log(displayMessage(result, humanChoice, cpuChoice));
  } else if(humanChoice == "paper") {
    result = cpuChoice == "scissors" ? -1 : 1;
    console.log(displayMessage(result, humanChoice, cpuChoice));
  } else if(humanChoice == "scissors") {
    result = cpuChoice == "rock" ? -1 : 1;
    console.log(displayMessage(result, humanChoice, cpuChoice));
  }
  return result;
}

function displayMessage(result, humanChoice, cpuChoice) {
  let winner;
  let condition;
  humanChoice = capitalizeFirst(humanChoice);
  switch (result) {
    case -1:
      winner = "You Lose! ";
      condition = " loses to ";
      break;
    case 0:
      winner = "Tie! ";
      condition = " ties with ";
      break;
    case 1:
      winner = "You Win! ";
      condition = " beats ";
      break;
  }
  let message = winner + humanChoice + condition + cpuChoice + ".";
  return message
}

function capitalizeFirst(word) {
  let firstLetter = word.charAt(0);
  let theRest = word.slice(1);
  firstLetter = firstLetter.toUpperCase();
  word = firstLetter + theRest;
  return word;
}

let playerChoice = getCpuChoice();
let computerChoice = getCpuChoice();
console.log(playerChoice);
console.log(computerChoice);
playMatch(playerChoice, computerChoice);

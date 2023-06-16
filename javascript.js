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
  } else if(humanChoice == "rock") {
    result = cpuChoice == "paper" ? -1 : 1;
  } else if(humanChoice == "paper") {
    result = cpuChoice == "scissors" ? -1 : 1;
  } else if(humanChoice == "scissors") {
    result = cpuChoice == "rock" ? -1 : 1;
  }
  return result;
}


let playerChoice = getCpuChoice();
let computerChoice = getCpuChoice();
console.log(playerChoice);
console.log(computerChoice);
console.log(playMatch(playerChoice, computerChoice));

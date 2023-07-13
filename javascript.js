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

function playMatch(playerChoice) {
  let cpuChoice = getCpuChoice();
  if (playerChoice == null) {
    console.log("You're a coward. You lose.");
    return -1;
  }
  playerChoice = playerChoice.toLowerCase();
  let result;
  if(playerChoice == cpuChoice) {
    result = 0;
    console.log(displayMessage(result, playerChoice, cpuChoice));
  } else if(playerChoice == "rock") {
    result = cpuChoice == "paper" ? -1 : 1;
    console.log(displayMessage(result, playerChoice, cpuChoice));
  } else if(playerChoice == "paper") {
    result = cpuChoice == "scissors" ? -1 : 1;
    console.log(displayMessage(result, playerChoice, cpuChoice));
  } else if(playerChoice == "scissors") {
    result = cpuChoice == "rock" ? -1 : 1;
    console.log(displayMessage(result, playerChoice, cpuChoice));
  } else {
    result = -1;
    console.log("You didn't follow the rules. You lose!");
  }
  return result;
}

function displayMessage(result, playerChoice, cpuChoice) {
  let winner;
  let condition;
  let message = document.querySelector('.message');
  playerChoice = capitalizeFirst(playerChoice);
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
  let line = winner + playerChoice + condition + cpuChoice + ".";
  message.innerHTML = line;
  return line
}

function capitalizeFirst(word) {
  let firstLetter = word.charAt(0);
  let theRest = word.slice(1);
  firstLetter = firstLetter.toUpperCase();
  word = firstLetter + theRest;
  return word;
}

let playerScore = 0;
let cpuScore = 0;
let matches = 0;

function playGame(playerChoice) {
  let matchResult;
  matchResult = playMatch(playerChoice);
  if(matchResult == 1){
    playerScore++;
    matches++;
  } else if (matchResult == -1){
    cpuScore++;
    matches++;
  }
  console.log("Your score: " + playerScore);
  console.log("My score: " + cpuScore);
}

const choices = document.querySelectorAll('.choice');

choices.forEach((choice) => {
  choice.addEventListener('click', function() {
    playGame(choice.id);
  })
});
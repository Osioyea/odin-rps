function getComputerChoice() {
  let computerThink = Math.random() * 3;
  let computerChoice = "";
  computerThink = parseInt(computerThink);
  switch(computerThink){
    case 0:
      computerChoice = "Rock";
      break;
    case 1 :
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
}
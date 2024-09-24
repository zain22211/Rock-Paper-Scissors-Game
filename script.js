function getComputerChoice() {
  const rock = "rock";
  const paper = "paper";
  const scissor = "scissor";

  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    return rock;
  } else if (random == 1) {
    return paper;
  } else return scissor;
}
// const ComputerSelection = getComputerChoice();
// console.log(getComputerChoice());

function getHumanChoice() {
  const userInput = prompt("Enter your choice");
  let popo = userInput.toLowerCase();
  if (popo === "rock" || popo === "paper" || popo === "scissor") {
    return popo;
  } else alert("Please enter the correct input");
}

let humanScore = 0;
let computerScore = 0;
function playGame() {
  let test;
  function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase();
    if (humanChoice === "rock" && computerChoice === "scissor") {
      test = true;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      test = false;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      test = true;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      test = false;
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      test = true;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      test = false;
    } else alert("Match is tie");
  }
  function tester() {
    if (test === true) {
      return humanScore += 1;
    } else if (test === false) {
      return computerScore += 1;
    } else {
      console.log("No Change in Score");
    }
  }

  return playRound(getHumanChoice(), getComputerChoice()), tester();
}

playGame();
playGame();
playGame();
playGame();
playGame();
if (humanScore > computerScore) {
  console.log("Congratulations! You are the Winner");
} else console.log("You lose");


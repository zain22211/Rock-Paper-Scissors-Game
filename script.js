let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const rock = "rock";
    const paper = "paper";
    const scissor = "scissor";

    let random =Math.floor(Math.random() * 3);
    if(random==0){
        return rock;
    }
    else if(random==1){
        return paper;
    }
    else
        return scissor;

}
const ComputerSelection = getComputerChoice();
console.log(ComputerSelection);

function getHumanChoice(){
    const userInput = prompt("Enter your choice");
    let popo = userInput.toLowerCase();
    if(popo==="rock"||popo==="paper"||popo==="scissor"){
        return popo;
    }
    else alert("Please enter the correct input");

}

const HumanSelection = getHumanChoice();


function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase();
    if(humanChoice==="rock" && computerChoice==="scissor"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } 
    else if(humanChoice==="scissor" && computerChoice==="rock"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } 
    else if(humanChoice==="rock" && computerChoice==="paper"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }  
    else if(humanChoice==="scissor" && computerChoice==="paper"){
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } 
    else if(humanChoice==="paper" && computerChoice==="scissor"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }       
    else alert("Match is tie")        
}  
    playRound(HumanSelection,ComputerSelection);
    console.log(`Computer Score is ${computerScore}`);
    console.log(`Human Score is ${humanScore}`);

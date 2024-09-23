let humanScore = 0;
let compterScore = 0;
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
    userInput.toLowerCase();
    if(userInput==="rock"||userInput==="paper"||userInput==="scissor"){
        return userInput;
    }
    else alert("Please enter the correct input");

}


function playRound(humanChoice, computerChoice){
    if(humanChoice==="rock" && computerChoice==="scissor"){
        alert('Human is the Winner');
    } 
    else if(humanChoice==="scissor" && computerChoice==="rock"){
        alert('Computer is the Winner');
    }
    else if(humanChoice==="paper" && computerChoice==="rock"){
        alert('Human is the Winner');
    } 
    else if(humanChoice==="rock" && computerChoice==="paper"){
        alert('Computer is the Winner');
    }  
    else if(humanChoice==="scissor" && computerChoice==="paper"){
        alert('Human is the Winner');
    } 
    else if(humanChoice==="paper" && computerChoice==="scissor"){
        alert('Computer is the Winner');
    }       
    else alert("Match is tie")
        
}

    const HumanSelection = getHumanChoice();

    playRound(HumanSelection,ComputerSelection);

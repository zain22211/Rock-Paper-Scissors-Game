function getComputerChoice(){
    const rock = "Rock";
    const paper = "Paper";
    const scissor = "Scissor";

    let random =Math.floor(Math.random() * 3);
    if(random==0){
        return console.log(rock);
    }
    else if(random==1){
        return console.log(paper);
    }
    else
        return console.log(scissor);

}
getComputerChoice();

function getHumanChoice(){
    const userInput = prompt("Enter your choice");
    if(userInput==="Rock"||userInput==="Paper"||userInput==="Scissor"){
        console.log("Correct Input");
    }
    else alert("Please enter the correct input");

}
getHumanChoice();

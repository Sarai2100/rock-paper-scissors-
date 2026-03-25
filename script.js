

// Pseudocode -- 
// we need to let the player know what game are we playing

//then we are going to let them chose what  item they are going to chose rock paper or scissors 
// then we are going to make the computer chose a random item as well.
//if the player chose rock and the computer chooses scissors the player wins
//if the player chose paper and the computer chooses scissors the player loses. 
// if the player chose scissors and the computer chooses scissors they are tie
let humanScore = 0;
let computerScore = 0;

// let message = prompt("Hi! Welcome to rock paper scissors, What would you chose?").toLowerCase();
// alert (results)
    //  COMPUTER GETS RANDOM CHOICE
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random () * 3)
        if (randomNumber == 0) {
        return "rock"
    }
           if (randomNumber == 1) {
        return "paper"
    }
           if (randomNumber == 2) {
        return "scissors"
    }
}



function getHumanChoice() {
    let message = prompt("Hi! Welcome to rock paper scissors, What would you chose?").toLowerCase();
    return message
}




function playRound(humanChoice, computerChoice) {
    // let computerChoice = getComputerChoice()
    // let humanChoice = message

    if (computerChoice == "scissors" && humanChoice == "rock") {
        alert("You Win!")
        humanScore++ 
    }  else if ( computerChoice == "rock" && humanChoice == "scissors") {
        alert("You Lose!")
        computerScore++
    } else if (computerChoice == "paper" && humanChoice == "scissors" ) {
         alert("You Win!")
         humanScore++ 
    }  else if (computerChoice == "scissors" && humanChoice == "paper") {
        alert(" You Lose!")
        computerScore++
    } else if (computerChoice == "rock" && humanChoice == "paper") {
        alert("You Win!")
        humanScore++ 
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        alert("You Lose!")
        computerScore++
    } else if (computerChoice == "rock" && humanChoice == "rock") {
        alert("Its a tie!")
    } else if (computerChoice == "paper" && humanChoice == "paper") {
        alert("Its a tie!")
    } else if (computerChoice == "scissors" && humanChoice == "scissors") {
        alert("Its a tie!")
    }
    
}


function playGame() {
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }
    if( humanScore > computerScore){
        console.log("You win the Game!")

    } else if (computerScore > humanScore) {
        console.log("You lose the game!")
    } else {
        console.log("It's a tie!")
    }

        
}
playGame()

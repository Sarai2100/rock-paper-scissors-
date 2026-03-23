console.log("hello")

// Pseudocode -- 
// we need to let the player know what game are we playing

//then we are going to let them chose what  item they are going to chose rock paper or scissors 
// then we are going to make the computer chose a random item as well.
//if the player chose rock and the computer chooses scissors the player wins
//if the player chose paper and the computer chooses scissors the player loses. 
// if the player chose scissors and the computer chooses scissors they are tie


let message = prompt("Hi! Welcome to rock paper scissors, What would you chose?").toLowerCase();
// alert (results)
    //  COMPUTER GETS RANDOM CHOICE
function getRandomInt () {
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

function results() {
    let computerChoice = getRandomInt()
    let playerChoice = message
    console.log(computerChoice)
    console.log(playerChoice)
    if (computerChoice == "scissors" && playerChoice == "rock") {
        alert("You Win!") 
    }  else if ( computerChoice == "rock" && playerChoice == "scissors") {
        alert("You Lose!")
    } else if (computerChoice == "paper" && playerChoice == "scissors" ) {
         alert("You Win!")
    }  else if (computerChoice == "scissors" && playerChoice == "paper") {
        alert(" You Lose!")
    } else if (computerChoice == "rock" && playerChoice == "paper") {
        alert("You Win!")
    } else if (computerChoice == "paper" && playerChoice == "rock") {
        alert("You Lose!")
    } else if (computerChoice == "rock" && playerChoice == "rock") {
        alert("Its a tie!")
    } else if (computerChoice == "paper" && playerChoice == "paper") {
        alert("Its a tie!")
    } else if (computerChoice == "scissors" && playerChoice == "scissors") {
        alert("Its a tie!")
    }
}

results ()

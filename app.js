function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3) + 1;
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper, or scissor?").toLowerCase();

    if (playerChoice === "rock") {
        playerChoice = 1;
    } else if (playerChoice === "paper") {
        playerChoice = 2;
    } else if (playerChoice === "scissor") {
        playerChoice = 3;
    } 

    return playerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    //Tell computer choice

    if (computerChoice === 1) {
        console.log("Computer choice: Rock");
    } else if (computerChoice === 2) {
        console.log("Computer choice: Paper");
    } else if (computerChoice === 3) {
        console.log("Computer choice: Scissor");
    }

    // Tell player choice

    if (playerChoice === 1) {
        console.log("Player choice: Rock");
    } else if (playerChoice === 2) {
        console.log("Player choice: Paper");
    } else if (playerChoice === 3) {
        console.log("Player choice: Scissor");
    }

    //Decide who wins

    if (computerChoice === 3 && playerChoice === 1) {
        alert("Player has won");
        humanScore += 1;
    } else if (computerChoice === 1 && playerChoice === 3) {
        alert("Computer has won");
        computerScore += 1;
    } else if (computerChoice === 2 && playerChoice === 3) {
        alert("Player has won");
        humanScore += 1;
    } else if (computerChoice === 3 && playerChoice === 2) {
        alert("Computer has won");
        computerScore += 1;
    } else if (computerChoice === 1 && playerChoice === 2) {
        alert("Player has won");
        humanScore += 1;
    } else if (computerChoice === 2 && playerChoice === 1) {
        alert("Computer has won");
        computerScore += 1;
    } else if (computerChoice === playerChoice) {
        alert("It's a tie");
    } else {
        alert("Error.");
    }
}

    //Game play

function playGame() {
    for (let i=1; i<= 5; i++) {
        console.log(`Round ${i}`);
        playRound();
    }

    if (humanScore === computerScore) {
        console.log("Game finished, the result was a tie")
    } else if (humanScore > computerScore) {
        console.log("Game finished, player won")
    } else if (!(humanScore > computerScore)) {
        console.log("Game finished, computer won")
    }
}

playGame()
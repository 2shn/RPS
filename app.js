// import main elements
const gameSetting = document.querySelector('.game-settings');
const numberOfRoundsInput = document.querySelector('.rounds-input');
const startButton = document.querySelector('.start-game-btn');

const roundNumber = document.querySelector('.round-number');
const playerOption = document.querySelector('.player-choice');
const computerChoiceOutput = document.querySelector('.computer-choice');
const playerScoreOutput = document.querySelector('.player-score');
const computerScoreOutput = document.querySelector('.computer-score');
const newRoundButton = document.querySelector('.new-round');
const messageAppear = document.querySelector('.left')
const gameContainer = document.querySelector('.container')

// global variables
let numberOfRounds = 3;
let roundNumberChanger = 1;
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

// functions

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const random = Math.floor(Math.random() * 3);
    computerChoice = choices[random];
    computerChoiceOutput.textContent = computerChoice;
}

function getWinner() {
    if (playerScore > computerScore) {
        playerScoreOutput.style.backgroundColor = 'rgba(206, 158, 0, 1)';
    } else if (playerScore < computerScore) {
        computerScoreOutput.style.backgroundColor = 'rgba(206, 158, 0, 1)';
    } else {
        computerScoreOutput.style.backgroundColor = 'rgba(206, 158, 0, 1)';
        playerScoreOutput.style.backgroundColor = 'rgba(206, 158, 0, 1)';
    }
}

function setNewRound() {
    const nodeChildren = playerOption.children;
    for (let i = 0; i < nodeChildren.length; i++) {
        nodeChildren[i].removeAttribute('id');
    }
    computerChoiceOutput.textContent = '';
    computerChoiceOutput.style.color = ''; 
    roundNumber.textContent = roundNumberChanger;

    playerOption.style.pointerEvents = 'auto';
}

function resetGame() {

    playerScore = 0;
    computerScore = 0;
    roundNumberChanger = 1;

    playerScoreOutput.textContent = '0';
    computerScoreOutput.textContent = '0';
    playerScoreOutput.style.backgroundColor = '';
    computerScoreOutput.style.backgroundColor = '';

    gameSetting.style.display = 'flex';
    gameContainer.style.display = 'none';
    numberOfRoundsInput.value = '';
    setNewRound();
}

function checkIfGameFinished() {
    if (roundNumberChanger > numberOfRounds) {
        const announcement = document.createElement('p');
        if (playerScore > computerScore) {
            announcement.textContent = `Game finished! You won by a score of ${playerScore} to ${computerScore}!`;
        } else if (playerScore < computerScore) {
            announcement.textContent = `Game finished! The computer won by a score of ${playerScore} to ${computerScore}!`;
        } else {
            announcement.textContent = `Game finished! It's a tie, with a score of ${playerScore} to ${computerScore}.`;
        }
        announcement.setAttribute('style', 'font-size:15px; color: rgba(206, 158, 0, 1)')
        messageAppear.appendChild(announcement);
        
        getWinner();
        
        
        playerOption.style.display = 'none';
        newRoundButton.style.display = 'block';

    } else {
        setNewRound();
    }
}

function getRoundWinner() {
    const message = document.createElement('p');
    message.setAttribute('style', 'color:rgb(156, 53, 53); font-size: 16px;');
    
    
    playerOption.style.pointerEvents = 'none';

    let roundMessage;
    if (playerChoice === computerChoice) {
        roundMessage = 'It\'s a draw!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        roundMessage = 'Player has won!';
        playerScore++;
    } else {
        roundMessage = 'Computer has won!';
        computerScore++;
    }

    message.textContent = roundMessage;
    messageAppear.appendChild(message);
    
    
    playerScoreOutput.textContent = playerScore;
    computerScoreOutput.textContent = computerScore;
    
    
    setTimeout(() => {
        messageAppear.removeChild(message);
        roundNumberChanger++;
        checkIfGameFinished();
    }, 2000);
}

// event listeners
startButton.addEventListener('click', () => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "ERROR: You must enter a number!";
    errorMessage.setAttribute('style', 'color:rgb(156, 53, 53); font-size: 16px;');

    if (numberOfRoundsInput.value === '' || isNaN(Number(numberOfRoundsInput.value))) {
        gameSetting.appendChild(errorMessage);
        setTimeout(() => {
            if (gameSetting.contains(errorMessage)) {
                gameSetting.removeChild(errorMessage);
            }
        }, 1500);
    } else {
        numberOfRounds = Number(numberOfRoundsInput.value);
        gameSetting.style.display = 'none';
        setNewRound();
    }
});

playerOption.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
        playerChoice = e.target.textContent.toLowerCase();
        e.target.id = 'clicked';
        getComputerChoice();
        computerChoiceOutput.setAttribute('style', 'color: rgba(158, 5, 5, 1);');
        getRoundWinner();
    }
});

newRoundButton.addEventListener('click', () => {
    newRoundButton.style.display = 'none';
    playerOption.style.display = 'flex';
    resetGame();
});
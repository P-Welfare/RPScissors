
let computerSelection = '';
let playerSelection = ' ';
let playerScore = 0;
let computerScore = 0;
const arrayChoices = ["rock", "paper", "scissors"]

function getComputerSelection() {
    computerSelection = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
} 

function getPlayerSelection() {
playerSelection = prompt("Please enter your choice").toLowerCase();
       
}

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        return `You win! Rock Beats Scissors. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computerScore;
        return `You lose! Paper Beat Rock. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        
        return `Its a draw! The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerScore;
        return `You win! Paper Beats Rock. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        ++computerScore;
        return `You lose! Scissors Beat Paper. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return `Its a draw! The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computerScore;
        return `You lose! Rock beats Scissors. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
        return `You win! Scissors Beat Paper. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return `Its a draw! The current score is You: ${playerScore} : ${computerScore} Robotman.`;

    }
    }

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerSelection();
        getPlayerSelection();
        console.log(playRound(playerSelection, computerSelection));
                       }
        
    if (playerScore > computerScore)  {
        console.log(`You win with a score of ${playerScore} to ${computerScore}`);
    
    } else if (computerScore > playerScore) {
        console.log(`You lose with a score of Robotman  ${computerScore} to You: ${playerScore}`);
    } else {
        console.log(`Its a draw with a score of You : ${playerScore} to Robotman ${computerScore}`)
    }
}
game()
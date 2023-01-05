
let computerSelection = '';
let playerSelection = ' ';
let playerScore = 0;
let computerScore = 0;
const arrayChoices = ["rock", "paper", "scissors"]

function getComputerSelection() {
    computerSelection = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
} 
document.getElementById('results').innerHTML = `The score is You: ${playerScore} Robotman : ${computerScore}`;

       



    
var rock = document.getElementById('rock');
rock.addEventListener('click', () => { 
    (playRound('rock', computerSelection));
   
    
    

})
var paper = document.getElementById('paper');
paper.addEventListener('click', () => { 
    (playRound('paper', computerSelection));
    
    
})

var scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => { 
    (playRound('scissors', computerSelection));

    
    
  

    
})

function playRound(playerSelection, computerSelection) {
    getComputerSelection();


    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        ++playerScore;
        document.getElementById('current').innerHTML = `Current Round: You win! Rock Beats Scissors.`;
        
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        ++computerScore;
        document.getElementById('current').innerHTML = `Current Round: You lose! Paper Beat Rock.`;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        ++playerScore;
        ++computerScore
        document.getElementById('current').innerHTML = `Current Round: Its a draw!`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        ++playerScore;
        document.getElementById('current').innerHTML = `Current Round: You win! Paper Beats Rock.`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        ++computerScore;
        document.getElementById('current').innerHTML = `Current Round: You lose! Scissors Beat Paper.`;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        ++playerScore;
        ++computerScore
        document.getElementById('current').innerHTML = `Current Round: Its a draw!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        ++computerScore;
        document.getElementById('current').innerHTML = `Current Round: You lose! Rock beats Scissors.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        ++playerScore;
        document.getElementById('current').innerHTML = `Current Round: You win! Scissors Beat Paper.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        ++playerScore;
        ++computerScore;
        document.getElementById('current').innerHTML = `Current Round: Its a draw!`;
    }
    

        
    
    document.getElementById('results').innerHTML = `The score is You: ${playerScore} Robotman : ${computerScore}`;
    if (playerScore === 5 && playerScore > computerScore) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Result of 5: You are the winner!';
        container.appendChild(content);
        playerScore = 0
        computerScore = 0
    } else if (computerScore === 5 && computerScore > playerScore) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Result of 5: You are the loser!';
        container.appendChild(content);
        playerScore = 0;
        computerScore = 0;
        
    } else if (computerScore === 5 && playerScore === 5) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `Result of 5: It's a draw!`;
        container.appendChild(content);
        playerScore = 0;
        computerScore = 0;
    
    }
}

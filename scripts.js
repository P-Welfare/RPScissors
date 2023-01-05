
let computerSelection = '';
let playerSelection = ' ';
let playerScore = 0;
let computerScore = 0;
const arrayChoices = ["rock", "paper", "scissors"]

function getComputerSelection() {
    computerSelection = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
} 

       


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
  
    }
    
var rock = document.getElementById('rock');
rock.addEventListener('click', () => { 
    console.log(playRound('rock', computerSelection));
    if (playerScore === 5 && playerScore > computerScore) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Final Result: You are the winner!';
        container.appendChild(content);
    } else if (computerScore === 5 && computerScore > playerScore) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'Final Result: You are the loser!';
        container.appendChild(content);
        
    } else if (computerScore === 5 && playerScore === 5) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `Final Result: It's a draw!`;
        container.appendChild(content);
    }
    document.getElementById('results').innerHTML = `The score is You: ${playerScore} Robotman : ${computerScore}`;

})
var paper = document.getElementById('paper');
paper.addEventListener('click', () => { 
    console.log(playRound('paper', computerSelection));
    if (playerScore === 5 && playerScore > computerScore) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'You are the winner!';
        container.appendChild(content);
    } else if (computerScore === 5 && computerScore > playerScore) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'You are the loser!';
        container.appendChild(content);
        
    } else if (computerScore === 5 && playerScore === 5) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `It's a draw!`;
        container.appendChild(content);
    }
    document.getElementById('results').innerHTML = `The score is You: ${playerScore} Robotman : ${computerScore}`;
})

var scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => { 
    console.log(playRound('scissors', computerSelection));
    if (playerScore === 5 && playerScore > computerScore) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'You are the winner!';
        container.appendChild(content);
    } else if (computerScore === 5 && computerScore > playerScore) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'You are the loser!';
        container.appendChild(content);
        
    } else if (computerScore === 5 && playerScore === 5) {
        const results = document.querySelector('#results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `It's a draw!`;
        container.appendChild(content);
    }
    document.getElementById('current').innerHTML = `The score is You: ${playerScore} Robotman : ${computerScore}`;
  

    
})

 


function game() {
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


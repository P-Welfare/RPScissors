let computerSelection = '';
let playerSelection = ' ';
let playerScore = 0;
let computerScore = 0;
function getComputerSelection() {
    //* Create 'Rock', 'Paper', or 'Scissors choice randomly for computer */
    createComputerValue = Math.floor(Math.random() * 100) + 1;
    if (createComputerValue <= 33) {
        computerSelection = 'rock';
    } else if (createComputerValue <= 66 && createComputerValue > 33) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
} // Prompt the player for input in chat box, change to lower case to make it case insensitive
function getPlayerSelection() {
playerSelection = prompt("Please enter your choice").toLowerCase();
        if (playerSelection === 'rock') {
        playerSelection = 'rock'; 
    } else if (playerSelection === 'paper') {
        playerSelection = 'paper';
    } else if (playerSelection === 'scissors') {
        playerSelection = 'scissors';
    } else {
        alert("invalid answer, stop cheating!")
    }
}
     // generate a value for computerChoice

// play one round of the game, compare the playerSelection to the computerSelection
function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock Beats Scissors.';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper Beat Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Its a draw!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper Beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors Beat Paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Its a draw!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors Beat Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Its a draw!';

    }
    }
    

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerSelection();
        getPlayerSelection();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
            if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock') ) {
                ++playerScore;
            } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock') ) {
                ++computerScore;
            }
    }
    if (playerScore > 3 || playerScore > computerScore)  {
        console.log(`You win with a score of ${playerScore} to ${computerScore}`);
    
    } else if (computerScore > 3 || computerScore > playerScore) {
        console.log(`You lose with a score of ${computerScore} to ${playerScore}`);
    } else {
        console.log(`It is a draw! Play again to try to best the computer!`);
    }
 }
game()
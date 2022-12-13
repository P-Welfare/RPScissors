// Rock Paper Scissors script using math.random and functions to play against the computer.

// variables are defined as empty strings and 0 to call outside of the generating function.
let computerSelection = '';
let playerSelection = ' ';
let playerScore = 0;
let computerScore = 0;
function getComputerSelection() {
    //* Create 'Rock', 'Paper', or 'Scissors' choice randomly for computer */
    createComputerValue = Math.floor(Math.random() * 100) + 1; // generates a random number 0-99.
    
    if (createComputerValue <= 33) {
        computerSelection = 'rock';
    } else if (createComputerValue <= 66 && createComputerValue > 33) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
} // Prompt the player for input in chat box, change to lower case to make it case insensitive. Outputs rock / paper / scissors.
function getPlayerSelection() {

playerSelection = prompt("Please enter your choice").toLowerCase();
   
    if (playerSelection === 'rock') {
        playerSelection = 'rock'; 
    } else if (playerSelection === 'paper') {
        playerSelection = 'paper';
    } else if (playerSelection === 'scissors') {
        playerSelection = 'scissors';
    }
      else {
        alert("invalid answer, stop cheating!")
    }
}

// play one round of the game, compare the playerSelection to the computerSelection. Output string with results of comparison.
function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You win! Rock Beats Scissors. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `You lose! Paper Beat Rock. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return `Its a draw! The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You win! Paper Beats Rock. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You lose! Scissors Beat Paper. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return `Its a draw! The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! Rock beats Scissors. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win! Scissors Beat Paper. The current score is You: ${playerScore} : ${computerScore} Robotman.`;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return `Its a draw! The current score is You: ${playerScore} : ${computerScore} Robotman.`;

    }
    }
    // game function loops the game 5 times creating new values for computerSelection and playerSelection each loop. 
    // Each loop can either add 1 to playerScore, 1 to computerScore or do nothing in case of draw.

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerSelection();
        getPlayerSelection();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
            if ((playerSelection === 'rock' && computerSelection === 'scissors')
            ||  (playerSelection === 'scissors' && computerSelection === 'paper') 
            ||  (playerSelection === 'paper' && computerSelection === 'rock')) {
                ++playerScore;
            } else if ((playerSelection === 'rock' && computerSelection === 'paper') 
            || (playerSelection === 'paper' && computerSelection === 'scissors') 
            || (playerSelection === 'scissors' && computerSelection === 'rock') ) {
                ++computerScore;
            }
        
    }
    // Outputs the final tally and result of the 5 games to the user by console.log
    if (playerScore > 3 || playerScore > computerScore)  {
        console.log(`You win with a score of ${playerScore} to ${computerScore}`);
    
    } else if (computerScore > 3 || computerScore > playerScore) {
        console.log(`You lose with a score of Robotman  ${computerScore} to You: ${playerScore}`);
    } else {
        console.log(`It is a draw! Play again to try to best the computer!`);
    }
 }
 // Prompts the user when opening the website.
game()
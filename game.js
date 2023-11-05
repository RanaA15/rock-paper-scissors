const buttons = document.querySelectorAll('button');

const playerScoreContainer = document.querySelector('#player_score');
const playerScoreContent = document.createElement('h1');

const cpuScoreContainer = document.querySelector('#cpu_score');
const cpuScoreContent = document.createElement('h1');

const resultContainer = document.querySelector('#result_outcome');
const resultContent = document.createElement('h1');

let playerScore = 0;
let cpuScore = 0;
let gameResult = "";

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(singleRound(button.id, getComputerChoice()));
        gameOver();
    });
});

function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors']
    return choice[Math.floor(Math.random() * choice.length)];
};
function singleRound(playerSelection, computerSelection) {
    playerScoreContent.textContent = `Player Score: ${playerScore}`;
    playerScoreContainer.appendChild(playerScoreContent);
    cpuScoreContent.textContent = `CPU Score: ${cpuScore}`;
    cpuScoreContainer.appendChild(cpuScoreContent);

    if (playerSelection === computerSelection) {
        resultContent.textContent = `It's a tie! You both picked ${playerSelection}`;
        resultContainer.appendChild(resultContent);
        let gameResult  = `It's a tie! You both picked ${playerSelection}`;
    }

    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        cpuScore ++ ;

        cpuScoreContent.textContent = `CPU Score: ${cpuScore}`;
        resultContent.textContent = "You lose! Paper beats Rock!";

        cpuScoreContainer.appendChild(cpuScoreContent);
        resultContainer.appendChild(resultContent);

        gameResult = "You lose! Paper beats Rock!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {

        playerScore ++;

        playerScoreContent.textContent = `Player Score: ${playerScore}`;
        resultContent.textContent = "You win! Paper beats Rock!";

        resultContainer.appendChild(resultContent);
        playerScoreContainer.appendChild(playerScoreContent);

        gameResult = "You win! Paper beats Rock!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        cpuScore ++ ;
        cpuScoreContent.textContent = `CPU Score: ${cpuScore}`;
        resultContent.textContent = "You lose! Rock beats Scissors!";

        resultContainer.appendChild(resultContent);
        cpuScoreContainer.appendChild(cpuScoreContent);

        gameResult = "You lose! Rock beats Scissors!"
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore ++ ;

        playerScoreContent.textContent = `Player Score: ${playerScore}`;
        resultContent.textContent= "You win! Rock beats Scissors!";

        resultContainer.appendChild(resultContent);
        playerScoreContainer.appendChild(playerScoreContent);

        gameResult = "You win! Rock beats Scissors"
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        cpuScore ++ ;

        cpuScoreContent.textContent = `CPU Score: ${cpuScore}`;
        resultContent.textContent = "You lose! Scissors beats Paper!"

        resultContainer.appendChild(resultContent);
        cpuScoreContainer.appendChild(cpuScoreContent);

        gameResult = "You lose! Scissors beats Paper!"
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore ++ ;

        playerScoreContent.textContent = `Player Score: ${playerScore}`;
        resultContent.textContent = "You win! Scissors beats Paper!";

        resultContainer.appendChild(resultContent);
        playerScoreContainer.appendChild(playerScoreContent);

        gameResult = "You win! Scissors beats Paper!"
    }
};

function gameOver () {
    if (playerScore == 5 || cpuScore == 5) {
        if (playerScore == 5) {
            resultContent.textContent = gameResult + "\nYou win the game!  Refresh to play again!";

        }
        else {
            resultContent.textContent = gameResult + "CPU wins the game!  Refresh to play again!";
        }
        resultContainer.appendChild(resultContent);
    }
        
    }

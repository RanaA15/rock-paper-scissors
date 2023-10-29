const buttons = document.querySelectorAll('button');

const playerScoreContainer = document.querySelector('#playerscore')
const playerScoreContent = document.createElement('h1')

const cpuScoreContainer = document.querySelector('#cpuscore')
const cpuScoreContent = document.createElement('h1')

const resultContainer = document.querySelector('#result_outcome')
const resultContent = document.createElement('h1')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        singleRound(button.id, getComputerChoice());
        console.log(singleRound(button.id, getComputerChoice()));
    });
});

function getComputerChoice(){
    const choice = ['Rock', 'Paper', 'Scissors']
    return choice[Math.floor(Math.random() * choice.length)];
};
function singleRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let cpuScore = 0;
    if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        cpuScore += 1;
        cpuScoreContent.textContent = cpuScore;
        cpuScoreContainer.append(cpuScoreContent);
        return "You lose! Paper beats Rock!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore += 1;
        playerScoreContent.textContent = playerScore
        playerScoreContainer.append(playerScoreContent);
        return "You win! Paper beats Rock!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        cpuScore += 1;
        cpuScoreContent.textContent = cpuScore;
        cpuScoreContainer.append(cpuScoreContent);
        return "You lose! Rock beats Scissors!"
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore +=1 ;
        playerScoreContent.textContent = playerScore;
        playerScoreContainer.append(playerScoreContent);
        return "You win! Rock beats Scissors"
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        cpuScore +=1;
        cpuScoreContent.textContent = cpuScore;
        cpuScoreContainer.append(cpuScoreContent);
        return "You lose! Scissors beats Paper!"
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore +=1;
        playerScoreContent.textContent = playerScore;
        playerScoreContainer.append(playerScoreContent);
        return "You win! Scissors beats Paper!"
    }
    if (playerScore == 5 || cpuScore == 5);

};
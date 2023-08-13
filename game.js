const buttons = document.querySelectorAll('button');

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
    if (playerSelection === computerSelection) {
        return `It's a tie! You both picked ${playerSelection}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock!";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock!";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors!"
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors"
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper!"
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper!"
    }
    
};
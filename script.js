let humanScore = 0;
let computerScore = 0;
const maxWins = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    const resultMessage = document.getElementById('result-message');
    const scoreDisplay = document.getElementById('score');

    if (humanChoice === computerChoice) {
        resultMessage.textContent = `It's a tie! You both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function setupGame() {
    const choices = document.querySelectorAll('.choice-btn');
    choices.forEach(button => {
        button.addEventListener('click', () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        });
    });
}



setupGame();

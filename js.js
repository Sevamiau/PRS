let humanScore = 0;
let computerScore = 0;

const weapons = ['rock', 'paper', 'scissors'];

// COMPUTERS CHOICE
function getComputerChoice() {
    const cChoice = weapons;
    const cInput = cChoice[Math.floor(Math.random() * cChoice.length)];
    return cInput;
}

// HUMANS CHOICE
function getHumanChoice() {
    // Prompt the user for their choice
    let hChoice = prompt('Choose: rock, paper, or scissors');

    // Keep prompting until a valid choice is entered
    while (!weapons.includes(hChoice.toLowerCase())) {
        hChoice = prompt('Invalid choice. Please choose: rock, paper, or scissors');
    }

    const hInput = hChoice.toLowerCase();
    return hInput;
}

function playRound(humanSelection, computerSelection) {
    console.log(`You chose: ${humanSelection}`);
    console.log(`The computer chose: ${computerSelection}`);

    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
    }
    else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'scissors' && computerSelection === 'paper') ||
        (humanSelection === 'paper' && computerSelection === 'rock')
    ) {
        humanScore++;
        console.log(`You win this round! ${humanSelection} beats ${computerSelection}.`);
    }
    else {
        computerScore++;
        console.log(`You lose this round! ${computerSelection} beats ${humanSelection}.`);
    }

    console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
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
    let hChoice = prompt('Choose: rock, paper, or scissors');
    while (!weapons.includes(hChoice.toLowerCase())) {
        hChoice = prompt('Elegi bien manco: rock, paper, or scissors');
    }

    const hInput = hChoice.toLowerCase();
    return hInput;
}

function playRound(humanSelection, computerSelection) {
    console.log(`Elegiste: ${humanSelection}`);
    console.log(`La maquinola eligio: ${computerSelection}`);

    if (humanSelection === computerSelection) {
        console.log("EMPATE");
    }
    else if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'scissors' && computerSelection === 'paper') ||
        (humanSelection === 'paper' && computerSelection === 'rock')
    ) {
        humanScore++;
        console.log(`Ganaste la ronda perro! ${humanSelection} beats ${computerSelection}.`);
    }
    else {
        computerScore++;
        console.log(`Perdiste amigazo :( ${computerSelection} beats ${humanSelection}.`);
    }

    console.log(`Vos: ${humanScore} | Coputadora: ${computerScore}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
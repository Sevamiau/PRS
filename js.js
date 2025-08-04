let humanScore = 0;
let computerScore = 0;
    
const weapons = ['rock', 'paper', 'scissors'];

    

function getComputerSelection() {
    const cChoice = weapons;
    const cInput = cChoice[Math.floor(Math.random() * cChoice.length)];
        return cInput;
    }



function playRound(humanSelection, computerSelection) {
    console.log(`Elegiste: ${humanSelection}`);
    console.log(`La computadora eligió: ${computerSelection}`);

    if (humanSelection === computerSelection) {
        console.log("¡EMPATE en esta ronda!");
    } else if ((humanSelection === 'rock' && computerSelection === 'scissors') ||
               (humanSelection === 'scissors' && computerSelection === 'paper') ||
               (humanSelection === 'paper' && computerSelection === 'rock')) {
        humanScore++;
        console.log(`¡Ganaste la ronda! ${humanSelection} le gana a ${computerSelection}.`);
        } else {
            computerScore++;
            console.log(`Perdiste la ronda :( ${computerSelection} le gana a ${humanSelection}.`);
        }

        console.log(`Marcador: Tú ${humanScore} - Computadora ${computerScore}`)
    }



function playGame(){

    const rockBtn = document.querySelector('#rockBtn');
    rockBtn.addEventListener('click', () => {
        if (humanScore < 5 && computerScore < 5){
            playRound('rock', getComputerSelection())
        }
    });

    const paperBtn = document.querySelector('#paperBtn');
    paperBtn.addEventListener('click', () => {
        if(humanScore < 5 && computerScore < 5){
            playRound('paper', getComputerSelection());
        }
    })

    const scissorsBtn = document.querySelector('#scissorsBtn');
    scissorsBtn.addEventListener('click', () => {
        if(humanScore < 5 && computerScore <5){
            playRound('scissors', getComputerSelection());
        }
    })
}


playGame();
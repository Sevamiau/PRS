let humanScore = 0;
let computerScore = 0;
    
const weapons = ['rock', 'paper', 'scissors'];

const humanScoreDisplay = document.querySelector('#humanScoreDisplay');
const computerScoreDisplay = document.querySelector('#computerScoreDisplay');
const roundResult = document.querySelector('#roundResult');
const gameWinner = document.querySelector('#gameWinner');
const scissorsBtn = document.querySelector('#scissorsBtn');
const paperBtn = document.querySelector('#paperBtn');
const rockBtn = document.querySelector('#rockBtn');
const humanChoice = document.querySelector('#humanChoice');
const computerChoice = document.querySelector('#computerChoice');


function updteScoreDisplay() {
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

}    

function getComputerSelection() {
    const cChoice = weapons;
    const cInput = cChoice[Math.floor(Math.random() * cChoice.length)];
        return cInput;
}

function playRound(humanSelection, computerSelection) {
    if ((humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'scissors' && computerSelection === 'paper') ||
        (humanSelection === 'paper' && computerSelection === 'rock')) {

        humanScore++;
    } else {
        computerScore++;
}



    function choiceDisplay(){
    humanChoice.textContent = humanSelection;
    computerChoice.textContent = computerSelection;
}

    choiceDisplay();
    updteScoreDisplay();
    checkWinner();
}


function checkWinner(){
    if (humanScore === 5){
        gameWinner.textContent = 'GANASTE PERROOOO';
    } else if (computerScore === 5){
        gameWinner.textContent = 'MAL AHI PERDISTE AMIGO'
    } 
}


function resetGame(){
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    gameWinner.textContent = '';
}

function playGame(){
    rockBtn.addEventListener('click', () => {
        if (humanScore < 5 && computerScore < 5){
            playRound('rock', getComputerSelection())
        }
    });


    paperBtn.addEventListener('click', () => {
        if(humanScore < 5 && computerScore < 5){
            playRound('paper', getComputerSelection());
        }
    })

    
    scissorsBtn.addEventListener('click', () => {
        if(humanScore < 5 && computerScore <5){
            playRound('scissors', getComputerSelection());
        }
    })

    resetBtn.addEventListener('click', resetGame);
}

playGame();
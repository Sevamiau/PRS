const divResults = document.querySelector('#resultados');

function playRound(playerSelection) {

    
    divResults.innerHTML = ''; 

    
    const playerChoiceP = document.createElement('p');
    playerChoiceP.textContent = `Elegiste: ${playerSelection}`;

    const cChoice = ['piedra', 'papel', 'tijera'];
    const computerSelection = cChoice[Math.floor(Math.random() * cChoice.length)];

    const computerSelectionP = document.createElement('p');
    computerSelectionP.textContent = `La computadora eligió: ${computerSelection} !!`;
    
    
    const roundWinner = document.createElement('p');

    
    if (playerSelection === computerSelection) {
        roundWinner.textContent = 'EMPATE!!';
    } else if (
        (playerSelection === 'piedra' && computerSelection === 'tijera') ||
        (playerSelection === 'papel' && computerSelection === 'piedra') ||
        (playerSelection === 'tijera' && computerSelection === 'papel')
    ) {
        roundWinner.textContent = 'Le ganaste a la máquina, maquinola!';
        
        roundWinner.style.color = 'green'; 
        roundWinner.style.fontWeight = 'bold';
    } else {
        roundWinner.textContent = 'Te ganó la maquinola, mortadela!';
        
        roundWinner.style.color = 'red';
        roundWinner.style.fontWeight = 'bold';
    }

    
    divResults.appendChild(playerChoiceP);
    divResults.appendChild(computerSelectionP);
    divResults.appendChild(roundWinner);
}



const rockButton = document.querySelector('#piedra');
const paperButton = document.querySelector('#papel');
const scissorButton = document.querySelector('#tijera');

rockButton.addEventListener('click', function() {
    playRound('piedra');
});

paperButton.addEventListener('click', function() {
    playRound('papel');
});

scissorButton.addEventListener('click', function() {
    playRound('tijera');
});




const resultadosDiv = document.querySelector('#resultados');

function playRound(playerSelection) {

    
    resultadosDiv.innerHTML = ''; 

    
    const eleccionJugadorP = document.createElement('p');
    eleccionJugadorP.textContent = `Elegiste: ${playerSelection}`;

    const cchoice = ['piedra', 'papel', 'tijera'];
    const computerSeleciton = cchoice[Math.floor(Math.random() * cchoice.length)];

    const eleccionComputadoraP = document.createElement('p');
    eleccionComputadoraP.textContent = `La computadora eligió: ${computerSeleciton} !!`;
    
    
    const resultadoFinalP = document.createElement('p');

    
    if (playerSelection === computerSeleciton) {
        resultadoFinalP.textContent = 'EMPATE!!';
    } else if (
        (playerSelection === 'piedra' && computerSeleciton === 'tijera') ||
        (playerSelection === 'papel' && computerSeleciton === 'piedra') ||
        (playerSelection === 'tijera' && computerSeleciton === 'papel')
    ) {
        resultadoFinalP.textContent = 'Le ganaste a la máquina, ¡maquinola!';
        
        resultadoFinalP.style.color = 'green'; 
        resultadoFinalP.style.fontWeight = 'bold';
    } else {
        resultadoFinalP.textContent = 'Te ganó la maquinola, ¡mortadela!';
        
        resultadoFinalP.style.color = 'red';
        resultadoFinalP.style.fontWeight = 'bold';
    }

    
    resultadosDiv.appendChild(eleccionJugadorP);
    resultadosDiv.appendChild(eleccionComputadoraP);
    resultadosDiv.appendChild(resultadoFinalP);
}



const botonPiedra = document.querySelector('#piedra');
const botonPapel = document.querySelector('#papel');
const botonTijera = document.querySelector('#tijera');

botonPiedra.addEventListener('click', function() {
    playRound('piedra');
});

botonPapel.addEventListener('click', function() {
    playRound('papel');
});

botonTijera.addEventListener('click', function() {
    playRound('tijera');
});
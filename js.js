function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    const weapons = ['rock', 'paper', 'scissors'];

    function getComputerSelection() {
            const cChoice = weapons;
            const cInput = cChoice[Math.floor(Math.random() * cChoice.length)];
            return cInput;
    }

    function getHumanSelection() {
        while (true) {
            let choice = prompt("Elige piedra, papel o tijera:").toLowerCase();
            const hInput = choice.toLocaleLowerCase();
            if (weapons.includes(hInput)) {
                return choice;
            } else {
                alert("Opción no válida. Elegi bien manco");
            }
        }
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

        console.log(`Marcador: Tú ${humanScore} - Computadora ${computerScore}`);
    }

    while (humanScore < 5 && computerScore < 5) {
        const humanSelection = getHumanSelection();
        const computerSelection = getComputerSelection();
        playRound(humanSelection, computerSelection);
    }

    console.log("¡Juego terminado!");
    if (humanScore === 5) {
        console.log("¡FELICIDADES! Ganaste el juego!");
    } else {
        console.log("La computadora te gano. ¡Mejor suerte la próxima vez!");
    }
}

playGame();
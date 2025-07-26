function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerSelection() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getHumanSelection() {
        while (true) {
            let choice = prompt("Elige piedra, papel o tijera:").toLowerCase();
            if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
                return choice;
            } else {
                alert("Opción no válida. Por favor, elige piedra, papel o tijera.");
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
        console.log("¡FELICIDADES! ¡Has ganado el juego!");
    } else {
        console.log("La computadora ha ganado el juego. ¡Mejor suerte la próxima vez!");
    }
}

playGame();
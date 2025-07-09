// piedra papel o tijera. 
// necesito que la persona elija 1 con un input (prompt en js) it has to be case sens
//la maquina tiene que elegir el suyo con un random gen (no se como en js) 
// establecer que le gana a que y que comparar las respuestas para saber quien gano.


let playerScore = 0;
let computerScore = 0;


function playRound() {


    // PLAYERS CHOICE

    let playerChoice = null;

    let rawInput = prompt('elegi piedra papel o tijera: ')
     processedInput = rawInput.toLowerCase();

    if (processedInput === 'piedra' || processedInput === 'papel' || processedInput === 'tijera'){
        playerChoice = processedInput;
    } else {
        alert('deja de tirar fruta siome')
    }

    console.log('vos elegiste: ', playerChoice)

    // COMPUTADORA CHOICE

    let computerNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if (computerNumber === 0) {
        computerChoice = 'piedra';
    } else if (computerNumber === 1) {
        computerChoice = 'papel';
    } else {
        computerChoice = 'tijera';
    }

    console.log('La maquina eligio: ', computerChoice)

    // COMPUTADORA WINS

    if (computerChoice === 'piedra' && playerChoice === 'tijera'){
        console.log('Perdiste!');
        return 'computer';
    } else if (computerChoice === 'papel' && playerChoice === 'piedra'){
        console.log('Perdiste!'); 
        return 'computer'  
    } else if (computerChoice === 'tijera' && playerChoice === 'papel'){
        console.log('Perdiste!')
        return 'computer'
    }

    // PLAYER WINS

    if (playerChoice === 'piedra' && computerChoice === 'tijera') {
        console.log('GANASTE!');
        return 'player'
    } else if (playerChoice === 'papel' && computerChoice === 'piedra'){
        console.log('GANASTE!');
        return 'player'
    } else if(playerChoice === 'tijera' && computerChoice === 'papel'){
        console.log('GANASTE!');
        return 'player'
    }

    // TIE

    if (playerChoice === computerChoice){
        console.log('EMPATE!');
        return 'tie'
    }

    }

// playRound()


while (playerScore < 5 && computerScore < 5){
    const roundWinner = playRound();
    if (roundWinner === 'player'){
        playerScore += 1;
    } else if (roundWinner === 'computer'){
        computerScore +=1;
    }

    console.log(`Puntuacion: jugador ${playerScore} - computadora ${computerScore} `)

}



console.log("--------------------");
console.log("¡JUEGO TERMINADO!");

if (playerScore === 5) {
    console.log("LE GANASTE A LA MAQUINA!");
} else {
    console.log("TE GANO LA MAQUINA MANCO ");
}








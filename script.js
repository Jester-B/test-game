
let randomNumber;
let currentPlayer = 1;
let player1Turns = 0;
let player2Turns = 0;
let maxTurns = 5;
let player1Correct = 0;
let player2Correct = 0; 




    
document.getElementById('generate').onclick = function () { 

    randomNumber = Math.floor(Math.random()* 5) + 1;
    let result = document.getElementById('number').value;
    let message = document.getElementById('displayGuess');
    let turnBox = document.getElementById('turnInfo');

    let guessList = (currentPlayer === 1) ? document.getElementById('player1Guess'): document.getElementById('player2Guess');

    if (result == ''){
        message.innerHTML = 'Please enter a Number:';
        setTimeout(() => {
            message.innerHTML = '';
        }, 1000);

        // The 'return' statement is used here to exit the function early
        // if the input 'result' is an empty string, preventing further code execution.
        return;
    }

    result = Number(result);

    if(result > 5 || result < 1){
        message.innerHTML = 'Enter a number from 1-5 only!';
        setTimeout(() => {
            message.innerHTML = '';
        }, 1000);

        document.getElementById('number').value = '';
        
        // The 'return' statement is used here to exit the function early
        // if the input 'result' is an empty string, preventing further code execution.
        return;
    }

    let item = document.createElement('li');

    //check if result is same to the number generated
    if(result === randomNumber) {
        message.innerHTML = `Player ${currentPlayer} got it!, Congratulations!`;
        item.textContent = `✅ Correct`;

        document.getElementById('number').value = '';

        //track the correct answer
        if(currentPlayer === 1){
            player1Correct++
        }
        else {
            player2Correct++
        }
    }
    else {
        message.innerHTML = `Try again! The number is ${randomNumber}`;
        item.textContent = `❌ Wrong`;

        document.getElementById('number').value = '';
    }
    
    guessList.appendChild(item);

    //Player's turn
    if(currentPlayer === 1){
        player1Turns++;
    }
    else {
        player2Turns++;
    }

    //check if game over
    if(player1Turns === maxTurns && player2Turns === maxTurns){
        
        message.innerHTML = 'Game Over! Click reset to play Again!';
        document.getElementById('generate').disabled = true;


        if(player1Correct > player2Correct){
            document.getElementById('winner').innerHTML = "🎉 Player 1 Wins! 🏆";
        }
        else if(player2Correct > player1Correct){
            document.getElementById('winner').innerHTML = "🎉 Player 2 Wins! 🏆";
        }
        else {
            document.getElementById('winner').innerHTML = "🤝 It's a Draw!";
        }
    }
    else {
        turnBox.innerHTML = `Player ${currentPlayer}'s turn`;
    }

    currentPlayer = (currentPlayer === 1) ? 2: 1;
    turnBox.innerHTML = `Player ${currentPlayer}'s turn`;

}


document.getElementById('resetNumber').onclick = function () {

    document.getElementById('winner').innerHTML = '';
    document.getElementById('player1Guess').innerHTML = '';
    document.getElementById('player2Guess').innerHTML = '';
    document.getElementById('displayGuess').innerHTML = '';
    document.getElementById('number').value = '';
    document.getElementById('turnInfo').innerHTML = "Player 1's turn";
    document.getElementById('generate').disabled = false;

    // Reset game state
    player1Turns = 0;
    currentPlayer = 1;
    player2Turns = 0;
    player1Correct = 0;
    player2Correct = 0;

}


// usefull string properties and methods



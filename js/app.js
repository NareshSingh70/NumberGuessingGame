let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

let submit = document.querySelector("#subt");
let userInput = document.querySelector(".guessfield");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastresult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".result-paras");

const p = document.createElement("p");

let prevGuess = [];
console.log(prevGuess);
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('submit', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
};

function validateGuess(guess) {

    if (isNaN(guess)) {
        alert('Please Enter Valid Number');
    }
    else if (guess < 1) {
        alert('Please Enter Valid Number');
    }
    else if (guess > 100) {
        alert('Please Enter a Number less the 100');
    }
    else {
        prevGuess.push(guess);

        if (numGuess <= 10) {
            console.log(numGuess);
            displayGuess(guess);
            displayMessage(`Game Over Random Number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    };
}

function checkGuess(guess) {

    if (guess == randomNumber) {
        displayMessage("You Guessed Right Number");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Number is Tooo Low");
    }
    else if (guess > randomNumber) {
        displayMessage("Number is Tooo High");
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${5 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add("button");
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    let newGameButton = document.querySelector("#newgame");
    newGameButton.addEventListener("click", (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${5 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
};

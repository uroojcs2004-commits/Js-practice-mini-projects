let randomNumber = parseInt(Math.random() * 100 + 1);


const submit = document.querySelector("#sub")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

let body = document.body
body.style.color = "white"
body.style.background = "black"
body.style.fontSize = "20px"
body.style.display = "flex"
// body.style.flexDirection = "column"
body.style.justifyContent = "center"
body.style.height = "100vh"

let form = document.querySelector(".form")
form.style.display = "flex"
form.style.flexDirection = "column"
form.style.alignItems = "center"

userInput.style.width="300px"
userInput.style.padding="10px"
userInput.style.margin = "10px 5px"

submit.style.padding="10px"
submit.style.backgroundColor = "black"
submit.style.border = "1px solid white"
submit.style.color = "white"
submit.style.cursor = "pointer"


const p = document.createElement("p")

let prevGuess = []
let numOfGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click", (e) => {
        e.preventDefault()

        const guess = parseInt(userInput.value)
        validateGuess (guess)
    })
}

function validateGuess (guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    }
    else if (guess < 1) {
        alert("Please enter a number more than 1")
    }
    else if (guess > 100) {
        alert ("Please enter a number less than 100")
    }
    else {
        prevGuess.push(guess)
        if (numOfGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess) {
    if (guess === randomNumber) {
        displayMessage("You guested it right")
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage("Number is too low")
    }
    else if (guess > randomNumber) {
        displayMessage("Number is too high")
    }
}

function displayGuess (guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess}, `
    numOfGuess++;
    remaining.innerHTML = `${11 - numOfGuess}`;
}

function displayMessage (message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame () {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame" >Start new Game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector("#newGame")
    newGameBtn.addEventListener("click", () => {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numOfGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${11 - numOfGuess}`;
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })
}


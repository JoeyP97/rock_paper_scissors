const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const announce = document.querySelector(".announce")
let humanPoints = 0;
let computerPoints= 0;
const humanPointDisplay = document.querySelector(".humanScore")
const computerPointDisplay = document.querySelector(".computerScore")
humanPointDisplay.textContent = humanPoints
computerPointDisplay.textContent = computerPoints
const reset = document.querySelector(".reset")
let soundRock = document.querySelector("#rcksnd")
let soundPaper = document.querySelector("#pprsnd")
let soundScissors = document.querySelector("#szrsnd")
let winSound = document.querySelector("#victory")
let loserSound = document.querySelector("#loser")
let round = document.querySelector(".round")
let roundCounter = 0

// Score to win game
let bestOf = 3

let winner;

round.textContent = "Welcome!"

/* function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?")
    let humanChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase()
    if (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
        alert("Invalid input")
        getHumanChoice()
    } else {
        return humanChoice
    }
    
} */

    // declare function to get computers choice using random num generator
function getComputerChoice() {
    let choice = Math.random()
    if (choice >= 0 && choice <= .33) {
        return "Rock";
    } else if (choice > .33 && choice <= .66) {
        return "Paper";
    } else {
        return "Scissors"
    }
}

// set a variable to hold computer choice
let computerChoice;

// declare a function that plays one round of rock paper scissors
function playRound(humanChoice, computerChoice) {
    
    roundCounter += 1
    round.textContent = `Round ${roundCounter}`
    computerChoice = getComputerChoice()
    let humanScore = 0
    let computerScore = 0
    if (humanChoice === computerChoice){ 
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++
    } else {
        computerScore ++
    }
    if (humanScore === computerScore) {
        announce.textContent = "Draw"
    } else if (humanScore > computerScore) {
        announce.textContent = `You Win! ${humanChoice} beats ${computerChoice}`
        humanPoints++
    } else {
        announce.textContent = `Computer Wins! ${computerChoice} beats ${humanChoice}`
        computerPoints++
    }

    humanPointDisplay.textContent = humanPoints
    computerPointDisplay.textContent = computerPoints

    if (humanPoints > computerPoints) {
        winner = "You"
    } else if (computerPoints > humanPoints) {
        winner = "Computer"
    }
    // checks if max score has been reached before playing through game
    if (computerPoints === bestOf || humanPoints === bestOf) {
    announce.textContent = `Game Over! ${winner} won.`
    roundCounter = 0
    round.textContent = 'Game Over'
    if (winner === "You") {
        playWinner()
    } else {
        playLoser()
        announce.textContent += '  YOU SUCK!'
    }
    rock.disabled = true
    paper.disabled = true
    scissors.disabled = true
}}

// declare function to reset game
function resetGame() {
    humanPoints = 0
    computerPoints = 0
    humanPointDisplay.textContent = humanPoints
    computerPointDisplay.textContent = computerPoints
    announce.textContent = ''
    rock.disabled = false
    paper.disabled = false
    scissors.disabled = false
    roundCounter = 0
    round.textContent = 'Welcome!'
}

//call resetGame function when reset button is clicked
reset.addEventListener("click", () => {
    resetGame()
})

// set all buttons to play round of game with selected button as input
rock.addEventListener("click", () => {playRound("Rock", computerChoice)})
paper.addEventListener("click", () => {playRound("Paper", computerChoice)})
scissors.addEventListener("click", () => {playRound("Scissors", computerChoice)})


// set functions for audio to play on button click
function playRock() {
    soundRock.play()
}

function playPaper() {
    soundPaper.play()
}

function playScissors() {
    soundScissors.currentTime = 0
    soundScissors.play()
    setTimeout(function() {
        soundScissors.pause();
    }, 1000);
}

function playWinner() {
    winSound.currentTime = 0
    winSound.play()
}

function playLoser() {
    loserSound.currentTime = 1.5
    loserSound.play()
}
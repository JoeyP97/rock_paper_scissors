


function getHumanChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?")
    let humanChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase()
    return humanChoice
}

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

let computerChoice = getComputerChoice()

function playRound(humanChoice, computerChoice) {
    let humanScore = 0
    let computerScore = 0
    if (humanChoice === computerChoice){
    } else if ( humanChoice === "Rock" && computerChoice == "Paper") {
        console.log("Paper beats Rock")
        computerScore++
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("Rock beats Scissors")
        humanScore++
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Paper beats Rock")
        humanScore++
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Scissors beats Paper")
        computerScore++
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("Rock beats Scissors")
        computerScore++
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("Scissors beats Paper")
        humanScore++
    }
    if (humanScore === computerScore) {
        return 3
    } else if (humanScore > computerScore) {
        return 0
    } else {
        return 1
    }
}




function playGame(playRound, getComputerChoice, getHumanChoice) {
    let humanScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        let score =playRound(humanSelection, computerSelection)
        if (score === 0){
            console.log("Round Won")
            humanScore++
        } else if (score === 1) {
            console.log("Round Lost")
            computerScore++
        } else {
            console.log("Draw")
        }
        console.log(`Score ${humanScore}:${computerScore}`)
        console.log("")
    }
    if (humanScore > computerScore) {
        console.log("You Win!")
    } else if( humanScore < computerScore){
        console.log("Computer Wins!")
    } else {
        console.log("Draw!")
    }
}
playGame(playRound, getComputerChoice, getHumanChoice)
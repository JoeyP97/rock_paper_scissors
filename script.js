let userInput = prompt("Rock, Paper, or Scissors?")
if (userInput !== "Rock" && userInput !== "Paper" && userInput !== "Scissors") {
    console.log("Not an option")
} 
let humanScore = 0
let computerScore = 0



function getComputerChoice() {
    let choice = Math.random()
    console.log(choice)
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
    if (humanChoice === computerChoice){
        console.log("Draw")
    } else if ( humanChoice === "Rock" && computerChoice == "Paper") {
        console.log("computer win")
        computerScore++
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win")
        humanScore++
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win")
        humanScore++
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("computer win")
        computerScore++
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("computer win")
        computerScore++
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win")
        humanScore++
    }
}

playRound(userInput, computerChoice)

console.log(humanScore)
console.log(computerScore)
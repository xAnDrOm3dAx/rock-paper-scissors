
// Randomly generate Rock, Paper or Scissors

function getComputerChoice() {
    const weapons = ["rock", "paper", "scissors"];
    const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)]
    return randomWeapon;
}

// Initialize scores at 0

let playerScore = 0
let computerScore = 0 


// Play a single round of the game

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Both players chose ${playerSelection}, it's a tie!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock obliterates scissors, Player wins!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
           return "Rock obliterates scissors, Computer wins!!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors shreds paper, Player wins!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors shreds paper, Computer wins!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper smothers rock, Player wins!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Paper smothers rock, Computer wins!";
    } 
}



// Play the game 5 times per round

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt ("Please choose rock, paper, or scissors").toLowerCase();
        let computerSelection = getComputerChoice()
        console.log("-----------------------------------");
        console.log("Computer:" + " " + computerSelection);
        console.log("-----------------------------------");
        console.log("Player:" + " " + playerSelection);
        console.log("-----------------------------------");
        console.log(playRound(playerSelection, computerSelection))
    }
}

// Invoke game function

game()


// Score totals

// console.log("Computer Score" + " " + computerScore);
// console.log("Player Score" + " " + playerScore);

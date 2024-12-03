const btnPaper = document.getElementById("Paper")
const btnRock = document.getElementById("Rock")
const btnScissor = document.getElementById("Scissor")

let humanScore = 0
let computerScore = 0
let draw = 0

btnPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice())
  console.log(`U ${humanScore} vs Cpu ${computerScore}, Draws ${draw}`)
})

btnRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice())
  console.log(`U ${humanScore} vs Cpu ${computerScore}, Draws ${draw}`)
})

btnScissor.addEventListener("click", () => {
  playRound("scissors", getComputerChoice())
  console.log(`U ${humanScore} vs Cpu ${computerScore}, Draws ${draw}`)
})

function getComputerChoice() {
  let cpuChoice = Math.floor(Math.random() * (4 - 1) + 1)
  if (cpuChoice === 1) return "rock"
  if (cpuChoice === 2) return "paper"
  return "scissors"
}

function getHumanChoice() {
  const humanChoice = prompt("enter with ur Choice")
  return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return (draw += 1)
  }
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1
    return "U Lose"
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1
    return "U win"
  }
  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1
    return "U Lose"
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1
    return "U win"
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1
    return "U Lose"
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1
    return "U win"
  }
}
// function playGame(humanChoice) {
//   let cpuChoice = getComputerChoice()
//   playGame(humanChoice, cpuChoice)

//   // for (let index = 0; index <= 4; index++) {
//   //   playRound(getHumanChoice(), getComputerChoice())
//   // }

//   return `U ${humanScore} vs Cpu ${computerScore}, Draws ${draw}`
// }

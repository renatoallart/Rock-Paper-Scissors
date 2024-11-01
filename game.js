function getComputerChoice() {
  const cpuChoice = Math.floor(Math.random() * (4 - 1) + 1)
  if (cpuChoice === 1) return "rock"
  if (cpuChoice === 2) return "paper"
  return "scissors"
}

function getHumanChoice() {
  const humanChoice = prompt("insert ur Choice")
  return humanChoice.toLowerCase()
}

function playGame() {
  let humanScore = 0
  let computerScore = 0
  let draw = 0

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return (draw += 1)
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

  for (let index = 0; index <= 4; index++) {
    playRound(getHumanChoice(), getComputerChoice())
  }

  return `U ${humanScore} vs Cpu ${computerScore}, Draws ${draw}`
}

console.log(playGame())

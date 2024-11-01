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

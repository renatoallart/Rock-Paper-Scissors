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

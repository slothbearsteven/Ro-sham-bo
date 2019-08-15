let wins = 0
let losses = 0

let possibilities = ['rock', 'paper', 'scissors']



function play(playerchoice) {
  let result = document.querySelector('#results')
  let x = Math.floor(Math.random() * (2 - 0 + 1)) + 0

  let cpuchoice = possibilities[x]


  switch (playerchoice) {
    case 'rock':
      if (cpuchoice == 'rock') {
        return result.textContent = 'IT\'S A TIE'
      } else if (cpuchoice == 'paper') {
        losses++
        return result.textContent = 'YOU LOSE!'
      }
      else {
        wins++
        return result.textContent = 'YOU WIN!'
      }
      break;
    case 'paper':
      if (cpuchoice == 'paper') {
        return result.textContent = 'IT\'S A TIE'
      } else if (cpuchoice == 'scissors') {
        losses++
        return result.textContent = 'YOU LOSE!'
      }
      else {
        wins++
        return result.textContent = 'YOU WIN!'
      }
      break;
    case 'scissors':
      if (cpuchoice == 'scissors') {
        return result.textContent = 'IT\'S A TIE'
      } else if (cpuchoice == 'rock') {
        losses++
        return result.textContent = 'YOU LOSE!'
      }
      else {
        wins++
        return result.textContent = 'YOU WIN!'
      }
      break;
  }

}


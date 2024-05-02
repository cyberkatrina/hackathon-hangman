let result
let word
let health = 6
let won = false

let words = ['hello', 'balloon','clean','spongebob','peanut','recursion','light','vitamin','purple','hazard']
const generateWord = () => {
  word = words[Math.floor(Math.random()*words.length)];
  result = "_".repeat(word.length);
  return word
}

const hangMan = () => {
  if (health == 0) {
    document.getElementById("result").innerText = word.split('').join(' ') + "\n \n You have lost, give up!"
    return
  } else if (won) {
    document.getElementById("result").innerText = word.split('').join(' ') + "\n \n Please refresh to play again."
    return
  }
  if (result == undefined) {
    generateWord()
  }
  console.log("word:" + word)
  let wordArray = word.split('')
  let correct = false
  let input = document.getElementById("input")
  let inputValue = input.value.trim().toLowerCase()
  document.getElementById("input").value = null
  console.log(inputValue)
  let resultArray = result.split('')
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] == inputValue) {
      resultArray[i] = inputValue
      correct = true
      console.log("hi")
    }
  }
  if (correct == true) {
    result = resultArray.join("")
    if (result == word) {
      won = true
      document.getElementById("result").innerText = result.split('').join(' ') + "\n \n You won!"
    } else {
      document.getElementById("result").innerText = result.split('').join(' ')
    }
  }
  else {
    health -= 1
    if (health == 0) {
      console.log("dead")
      document.getElementById("result").innerText = word.split('').join(' ') + "\n \n Game Over!"
    } else {
      document.getElementById("result").innerText = result.split('').join(' ') + "\n \n Incorrect guess, " + health + " tries left."
    }
  }
  console.log("result:" + result)
  displayFunc()
}


const initialize = () => {
  generateWord()
  document.getElementById("result").innerText = result.split('').join(' ')
}


let image = document.getElementById("image")
const displayFunc = () => {
  switch(health) {
    case 6:
      image.src = "Images/H-Step-7.png"
      break;
    case 5:
      image.src = "Images/H-Step-6.png"
      break;
    case 4:
      image.src = "Images/H-Step-5.png"
      break;
    case 3:
      image.src = "Images/H-Step-4.png"
      break;
    case 2:
      image.src = "Images/H-Step-3.png"
      break;
    case 1:
      image.src = "Images/H-Step-2.png"
      break;
    default:
      image.src = "Images/H-Step-1.png"
  }
}
displayFunc()
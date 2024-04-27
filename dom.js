let result
let word

let words = ['hello', 'balloon','clean','spongebob','peanut','recursion','light','vitamin','purple','hazard']
const generateWord = () => {
  word = words[Math.floor(Math.random()*words.length)];
  result = "_".repeat(word.length);
  return word
}

const hangMan = () => {
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
      document.getElementById("result").innerText = result.split('').join(' ') + ", You won!"
    }
    document.getElementById("result").innerText = result.split('').join(' ')
  }
  else {
    document.getElementById("result").innerText = result.split('').join(' ') + "\n \n Incorrect guess, try again"
  }
  console.log("result:" + result)
}


const initialize = () => {
  generateWord()
  document.getElementById("result").innerText = result.split('').join(' ')
}
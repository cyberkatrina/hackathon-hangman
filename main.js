'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




//get user input letter, use for loop to check against each letter in correct answer, 
//and reaveal all that are the same

//have display function that runs at the end of every user input event, and console logs
//all "visible=true" letters
let result
let wordArray
let word

let words = ['balloon','clean','spongebob','peanut','recursion','light','vitamin','purple','hazard','hello']
const generateWord = () => {
  word = words[Math.floor(Math.random()*words.length)];
  result = "_".repeat(word.length);
  wordArray = word.split('')
  return word
}



// let fullWord = ['h','e','l','l','o']
// let revealedLetters = ''

// const makeGuess = (guessedLetter) => {
//   console.log(generateWord())
//   for (let i = 0; fullWord.length; i++) {
//     if (fullWord[i] == guessedLetter) {

//     }
//   }
//   return 
// }

const hangMan = (userInput) => {
  if (result == undefined) {
    word = generateWord()
  }

  let correct = false
  let input = userInput.trim().toLowerCase()
  let resultArray = result.split('')
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] == input) {
      resultArray[i] = input
      correct = true
    }
  }
  if (correct == true) {
    return resultArray.join("")
  }
  else {
    return "Incorrect guess, try again"
  }
}






// Your code right here


// TO-DO - UPDATE TO USE YOUR FUNCTION
const getPrompt = () => {
  rl.question('word ', (answer) => {

    console.log( makeGuess(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C

// TO-DO - ADD TESTS
if (typeof describe === 'function') {

  describe("#makeGuess", () => {
    it("Makes a correct guess", () => {
      word = 'hello'
      assert.equal(hangMan("l"), "__ll_");
    });
    it("Makes a correct guess", () => {
      word = 'hello'
      assert.equal(hangMan("h"), "h____");
    });
  });
  describe("#makeGuess", () => {
    it("Can win", () => {
      word = 'hello'
      result = 'hell_'
      assert.equal(hangMan("o"), "hello");
    });
  });
  describe("#canBeWrong", () => {
    it("Can be wrong", () => {
      word = 'hello'
      assert.equal(hangMan("k"), "Incorrect guess, try again");
    });
  });
  
} else {

  getPrompt();

}

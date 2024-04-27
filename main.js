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



// Your code right here
let result
let word
let health = 5
let won = false

let words = ['hello', 'balloon','clean','spongebob','peanut','recursion','light','vitamin','purple','hazard']
const generateWord = () => {
  word = words[Math.floor(Math.random()*words.length)];
  result = "_".repeat(word.length);
  return word
}

const hangMan = (userInput) => {
  if (health == 0) {
    return "You have lost, give up!"
  } else if (won) {
    return "Please restart to play again."
  }
  if (result == undefined) {
    generateWord()
  }
  let wordArray = word.split('')
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
    result = resultArray.join("")
    if (result == word) {
      won = true
      return result + ", You won!"
    }
    return result
  }
  else {
    health -= 1
    if (health == 0) {
      return "Game Over! Correct word: " + word
    }
    return "Incorrect guess, " + health + " tries left."
  }
}


// TO-DO - UPDATE TO USE YOUR FUNCTION
const getPrompt = () => {
  rl.question('letter ', (userInput) => {
    console.log( hangMan(userInput) );
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
      word = "hello"
      result = "_____"
      assert.equal(hangMan("l"), "__ll_");
    });
    it("Makes a correct guess", () => {
      word = "hello"
      result = "__ll_"
      assert.equal(hangMan("H"), "h_ll_");
    });
  });

  describe("#checkWin", () => {
    it("Can win", () => {
      word = "hello"
      result = "hell_"
      assert.equal(hangMan("o"), result + ", You won!");
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

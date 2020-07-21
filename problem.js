// ### isInside
// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
//
// HINT: use indexOf
//
// isInside(['taylor', 'rome', 'adam'], 'rome'); // => true
// isInside(['pete', 'adam', 'taylor'], 'fred'); // => false

function isInside(array, ele){
    let arrayIndex = array.indexOf(ele);
    if (arrayIndex > 0){
        return true;
    } else {
        return false;
    }
};
console.log(isInside(['taylor', 'rome', 'adam'], 'rome'));
console.log(isInside(['pete', 'adam', 'taylor'], 'fred'));



// ### reverseStr
// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
//
// Examples:
//
// reverseStr('bootcamp'); //=> 'pmactoob'
// reverseStr('General Assembly'); //=> 'ylbmessA lareneG'

function reverseStr(str) {
    return (str.split('').reverse().join(''));
}
console.log(reverseStr('testing'));
console.log(reverseStr('bootcamp'));


// ### luckySevens
// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
//
// Examples:
//
// luckySevens(25); // => [ 7, 14, 21 ]
// luckySevens(42); // => [ 7, 14, 21, 28, 35, 42 ]
function luckySevens(max) {
    let luckyArray = [];
    for (let i = 0; i < max; i++){
        if (i % 7 == 0 && i/7 != 0) {
            luckyArray.push(i);
        }
    }
    return luckyArray
}

console.log(luckySevens(42));
console.log(luckySevens(25));


//### copyMachine

// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
//
// Examples:
//
// copyMachine('candy', 0); // => []
// copyMachine('candy', 2); // => [ 'candy', 'candy' ]
// copyMachine('bread', 4); // => [ 'bread', 'bread', 'bread', 'bread' ]
// copyMachine(11, 6); // => [ 11, 11, 11, 11, 11, 11 ]
function copyMachine(element, num) {
    let copyMachineArray = [];
    
    for (i=0; i <element.length; i++) {
      
      copyMachineArray.push(element)
    }
    return copyMachineArray;
  } 
  console.log(copyMachine('bread', 4));



//### everyOtherWord

// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
//
// Examples:
//
// everyOtherWord('hello how are you doing on this lovely day?'); // => [ 'hello', 'are', 'doing', 'this', 'day?' ]
// everyOtherWord('the weather is wonderful'); // => [ 'the', 'is' ]
function everyOtherWord(sentence){
    const everyOtherWord = [];
    const sentenceSplit = sentence.split(' ');
    return sentenceSplit;
    }
    
  
  console.log(everyOtherWord('hello how are you doing on this lovely day?'));


//### wordYeller

// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
//
// Example 1
// let sent = "Stop it now! Please, wont you stop?";
// let yelledWords = wordYeller(sent);
// yelledWords === "Stop! it! now! Please, wont! you! stop?"; // => true
//
// Example 2
// let words = "Go to the store and grab the following: milk, bread, run, and cake";
// wordYeller(words) === "Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!"; // => true
function wordYeller(sentence) {
    var yelledWords = [];
  
    var words = sentence.split(" ");
    // sentence.split(" ") creates array of sentence's words split by spaces.
     
    var punctuation = ". , ! ? ; :".split(" "); // array of punctuation
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var lastCharacter = word.slice(-1);
  
      if (punctuation.indexOf(lastCharacter) !== -1) { // if word already has punctuation
        yelledWords.push(word);
      } else {                                         // else the word has no punctuation
        yelledWords.push(word + "!");
      }
    }
  
    return yelledWords.join(" ");
  }
  
  
  console.log(wordYeller("Stop it now! Please, wont you stop?"));
  console.log(wordYeller("Go to the store and grab the following: milk, bread, run, and cake"));


//### arraySubstring

// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
//
// Examples:
//
// arraySubstring(["hello", "history", "helix", "hellos"],"hel")
// => [true, false, true, true]
// arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre")
// => [true, false, false, true]

function arraySubstring(words, str){
    let array = []
    for (let i = 0; i < words.length; i++){
        let word = words[i]
        if (word.search(str) !== -1){
            array.push(true)
        }
        else {
            array.push(false)
        }
    }
    return array
}

console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"));
console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"));

//### evenCaps


function evenCaps(sentence){
    return sentence.split(' ').map(word => //split each word
      //split each letter, use modulus on the word instead of sentence to make lowerCase or upperCase, then join words together back to sentence
      word.split('').map((itm, idx) => idx % 2 ?  itm.toLowerCase() : itm.toUpperCase()).join('')
    ).join(' ')
  }
  
  console.log(evenCaps('Tom got a small piece of pie'));
  console.log(evenCaps('the book is in front of the table'));
  
// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
  let word = input.question("Enter a word to score:");
  let score = oldScrabbleScorer(word);
  console.log(score);
  return word
};

function simpleScore(word){
return word.length;
};
//console.log(simpleScore("Pine"));
//let simpleScore;
// each letter in the array is 1 point 

function vowelBonusScore(word){
  let vowels = "aeiou";
  let numberScore = 0;
  for(let i =0; i < word.length; i++){
    if (vowels.includes(word[i])){
      numberScore += 3;

    }else{
      numberScore ++;

    }
  }
  return numberScore;
};

let scrabbleScore = function(word) {
  word = word.toLowerCase();
  let total = 0;
  for (let i = 0; i < word.length; i++) {
    total += newPointStructure[word[i]];
  }
  return total;
} 

const scoringAlgorithms = [{
  name:"Simple Score",
  description:"Each letter is worth 1 point.",
  scoringFunction: simpleScore
},

{
  name:"Bonus Vowels",
  description:"Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
},

{
  name:"Scrabble",
  description:"The traditional scoring algorithm.",
  scoringFunction: scrabbleScore	
}]

function scorerPrompt(word) {let playerInput = input.question('Which scoring algorithm would you like to use?\n\n0 - Simple Score: Each letter is worth 1 point.\n1 - Bonus Vowels: Vowels are worth 3 pts, and consonants are 1 pt. \n2 - Scrabble: The traditional scoring algorithm.\n\nEnter 0, 1, or 2: ');
  if (playerInput == 0) {
    console.log(`Score for '${word}' is `+ scoringAlgorithms[0].scoringFunction(word));
  }
  if (playerInput == 1) {
    console.log(`Score for '${word}' is `+ scoringAlgorithms[1].scoringFunction(word));
  }
  if (playerInput == 2) {
    console.log(`Score for '${word}' is `+ scoringAlgorithms[2].scoringFunction(word));
  }
}


function transform(oldPointStructure){
  let newObj = {};
  for (const[key,value] of Object.entries(oldPointStructure)) {
    for (const newValue of value) {
      newObj[newValue.toLowerCase()] = Number(key);
    }
  }
  return newObj;
}
let newPointStructure = transform(oldPointStructure); 

//let newPointStructure;

function runProgram() {
   let word = initialPrompt();
   scorerPrompt(word);
}




// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


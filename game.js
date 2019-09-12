var words = ["january", "february", "march", "april", "may", "jun","july","august", "september","october", "november","december"];
// pick a random word from the words array
var word = words[Math.floor(Math.random() * words.length)];

// set up the array answer to show how many letters they are using
var answerArray=[];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}
// create a variable to hold the number of remaining letters to be guessed
var remainingLetters = word.length;
      
    //   ************* THE MAIN GAME LOOP***************

// while there are letters left to be guessed
while (remainingLetters > 0){
    alert(answerArray.join(" "));
// get a guess from the player
var guess = prompt ("Guess a letter");
// if the guess is blank
if ( guess == null){
    // exit the loop game 
    break;
// if the guess is more than one letter or no letters
} else if (guess.length !== 1){
    // alert them to guess a single letter only;
    alert("please enter a single letter.");
    // valid guess
}else {
    // update the game state with the guess
    for ( var j = 0; j < word.length; j++){
        //  if the letter they guessed is in the word 
        // at that point or index
        if (word [j] === guess){
            // update the answer array with the letter they guessed at that point
            answerArray[j] = guess;
            // substract one from remaining letters
            remainingLetters--;
        }
    }
}
    //       *************END OF THE GAME LOOP**********************
} 
// let player know the word
alert(answerArray.join(" "));
// congratulated the player
alert("Good Job! the answer was " + word)


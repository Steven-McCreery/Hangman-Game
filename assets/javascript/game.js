
//correceted error with inability to select element due to js loading before html elements
window.onload = function () {

//defining variables
var remainingGuesses = 8;
var initialWin = 0;
var initialLoss = 0;
var initialAttempt = 0;

//writing initial score entries to page
var initialWin = document.getElementById("wins").append(initialWin);
var initialLoss = document.getElementById("losses").append(initialLoss);
var initialAttempt = document.getElementById("attempts").append(initialAttempt);
var remainingGuesses = document.getElementById("guesses").append(remainingGuesses);


//defining the available characters for the game's user to guess/keyup
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

//word will be selected and input as underscores with spaces between each underscore for readability
play = function () {
    words = ["lettuce", "pickles", "onion", "cheese", "ketchup", "mustard", "mayonnaise"];
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord);
    var currentWordLength = currentWord.length;
	var underscores = "";
	for(i=0; i<currentWordLength; i++) {
	    underscores = underscores + "_ ";
	}
    console.log(underscores);
    document.getElementById("word").append(underscores);
}
//calling function
play();


userGuess = function() {
	// onkeyup()
	guesses = function () {
	    guesses.appendChild = remainingGuesses;
	    if (guesses < 1) {
	      guesses.append = "Game Over";
	      getElementById(losses).append(losses++);
	    }
	  }
}
//calling function
userGuess();


//reset button functionality
document.getElementById("button").onclick = function(){
	var initialWin = document.getElementById("wins").innerHTML = 0;
	var initialLoss = document.getElementById("losses").innerHTML = 0;
	var initialAttempt = document.getElementById("attempts").innerHTML = 0;
	var remainingGuesses = document.getElementById("guesses").innerHTML = 8;
	console.log("Reset Scores!");
	};

}








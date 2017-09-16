
//correceted error with inability to select element due to js loading before html elements
window.onload = function () {

//defining variables
var remainingGuesses;
var initialWin;
var initialLoss;
var initialAttempt;

var remainingGuesses = 8;
var initialWin = document.getElementById("wins");
var initialLoss = document.getElementById("losses");
var initialAttempt = document.getElementById("attempts");
var remainingGuesses = document.getElementById("guesses");

initialWin.append(0);
initialLoss.append(0);
initialAttempt.append(0);
remainingGuesses.append(8)
//defining the available characters for the game's user to guess/keyup
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

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

play();


userGuess = function() {
	onkeyup()
	guesses = function () {
	    guesses.appendChild = remainingGuesses;
	    if (guesses < 1) {
	      guesses.append = "Game Over";
	      getElementById(losses).append(losses++);
	    }
	  }
}

userGuess();

document.getElementById("button").onclick = function(){
	var initialWin = document.getElementById("wins").append(0);
	var initialLoss = document.getElementById("losses").append(0);
	var initialAttempt = document.getElementById("attempts").append(0);
	console.log("Reset Scores!");
	};

}








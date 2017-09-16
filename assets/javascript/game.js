
var remainingGuesses;
var initialWin = 0;
var initialLoss;
var initialAttempt;

// var remainingGuesses = 8;
// var initialWin = document.getElementById("wins").innerHTML(0);
// var initialLoss = document.getElementById("losses").innerHTML(0);
// var initialAttempt = document.getElementById("attempts").innerHTML(0);

remainingGuesses = document.getElementById("guesses");


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
    document.getElementById("word").append("<div>underscores</div>");
}

play();


userGuess = function() {
	onkeyup()
	guesses = function () {
	    guesses.appendChild = remainingGuesses;
	    if (guesses < 1) {
	      guesses.innerHTML = "Game Over";
	      getElementById(losses).innerHTML(losses++);
	    }
	  }
}


document.getElementById("button").onclick = function(){
	var initialWin = document.getElementById("wins").innerHTML(0);
	var initialLoss = document.getElementById("losses").innerHTML(0);
	var initialAttempt = document.getElementById("attempts").innerHTML(0);
	console.log("Reset Scores!");
	};










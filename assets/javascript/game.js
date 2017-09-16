
var remainingGuesses = 8;
var initialWin = getElementById(wins).innerHTML(0);
var initialLoss = getElementById(losses).innerHTML(0);
var initialAttempt = getElementById(attempts).innerHTML(0);

remainingGuesses = document.getElementById("guesses");

guesses = function () {
    guesses.appendChild = remainingGuesses;
    if (guesses < 1) {
      guesses.innerHTML = "Game Over";
      getElementById(losses).innerHTML(losses++);
    }
  }

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

play = function () {
    words = ["lettuce", "pickles", "onion", "cheese", "ketchup", "mustard", "mayonnaise"];
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(word);
}


document.getElementById("button").addEventListener("click", function()
	{
	console.log("abcdefg");
	}
);










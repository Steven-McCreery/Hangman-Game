
var remainingGuesses = 8;

remainingGuesses = document.getElementById("guesses");

guesses = function () {
    guesses.appendChild = remainingGuesses;
    if (guesses < 1) {
      guesses.innerHTML = "Game Over";
    }
  }

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

play = function () {
    words = ["lettuce", "pickles", "onion", "cheese", "ketchup", "mustard", "mayonnaise"];
    currentWord = words[Math.floor(Math.random() * words.length)];
}

play();

document.getElementById("word").innerHTML(words);









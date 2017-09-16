
//correceted error with inability to select element due to js loading before html elements
window.onload = function () {

//defining variables
var remainingGuesses = 8;
var initialWin = 0;
var initialLoss = 0;
var initialAttempt = 0;
var usedChars = [];
var incorrectLetters = [];

//writing initial score entries to page
var initialWin = document.getElementById("wins").append(initialWin);
var initialLoss = document.getElementById("losses").append(initialLoss);
var initialAttempt = document.getElementById("attempts").append(initialAttempt);
var remainingGuesses = document.getElementById("guesses").append(remainingGuesses);
var incorrectLetters = document.getElementById("letters").append(incorrectLetters);


//defining the available characters for the game's user to guess/keyup
var letters = /^[A-Za-z]+$/;

//word will be selected and input as underscores with spaces between each underscore for readability
play = function () {
    words = [
    ["l","e","t","t","u","c","e"], 
    ["p","i","c","k","l","e","s"], 
    ["o","n","i","o","n"], 
    ["c","h","e","e","s","e"], 
    ["k","e","t","c","h","u","p"], 
    ["m","u","s","t","a","r","d"],
    ["m","a","y","o","n","n","a","i","s","e"]
    ];
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
	document.onkeyup = function(event){
		var keyPress = String.fromCharCode(event.keyCode);
		
		for (var i = 0; i < currentWord.length; i++) {
			if (keyPress == this[i]) {
				document.getElementById("word").splice(i, 1, currentWord[i]); 
			}
			if (currentWord != underscores) {
				guesses.append = "You Win!!";
				document.getElementById(wins).append(wins++);
				document.getElementById(attempts).append(attempts++);
			}
			else {console.log(keyPress);
				usedChars.push(keyPress);
				document.getElementById("letters").innerHTML = usedChars.toString();
				document.getElementById("guesses").innerHTML -= remainingGuesses;
			}
		}
		// document.getElementById("letters").append() = 8
	};
	guesses = function () {
	    guesses.appendChild = remainingGuesses;
	    if (guesses < 1) {
	      guesses.append = "Game Over";
	      document.getElementById(losses).append(losses++);
	      document.getElementById(attempts).append(attempts++);
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
	var incorrectLetters = document.getElementById("letters").innerHTML = "";
	var usedChars = [];
	var keyPress = [];
	console.log("Reset Scores!");
	};

}





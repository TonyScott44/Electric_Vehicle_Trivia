

// Game Object
var game  = {                                                                                           
 
    word: ["t e s l a + m o d e l + s", "t e s l a + m o d e l + x", "t e s l a + m o d e l + 3",       
            "b m w + i 3", "b m w + i 8", "l u c i d + a i r", "k a r m a + r e v e r a"],               
    wins: 0,                                                                                            
    loses: 0,
    gsRem: 12,                                                                                          
    letGsd: [],                                                                                         
    wrdSpaces:["_ _ _ _ _ + _ _ _ _ _ + _", "_ _ _ _ _ + _ _ _ _ _ + _", "_ _ _ _ _ + _ _ _ _ _ + _",   
                "_ _ _ + _ _", "_ _ _ + _ _", "_ _ _ _ _ + _ _ _", "_ _ _ _ _ + _ _ _ _ _ _"],           
    letterCnt: [11, 11, 11, 5, 5, 8, 11],
    actualWord:["Tesla Model S","Tesla Model X","Tesla Model 3","BMW i3","BMW i8","Lucid Air","Karma Revera"]  
};

var randx = Math.floor((Math.random() * game.word.length-1) + 1);                                       
var letter = 0;                                                                                         
var car = game.word[randx];                                                                             
var x = 0;                                                                                              
var tempArray  = game.wrdSpaces[randx].split("");                                                       
var tempArray2 = game.word[randx].split("");                                                           
var guessesCorrectCnt = 0; 
var answer = game.actualWord[randx];
var keyStroke = 0;

// Initial Page Load
$(document).ready(function() {
    $('#controlPanel').delay(00000).hide(0);
    $('#stats').delay(00000).hide(0);
});

// Start Game 
    document.onkeyup = function(event) {  // Everytime a key is pressed...  
    var userGuess = event.key; // Retrieve user input
    var guessCorrect = false;  // UserGuess wrong or right indicator
    keyStroke++;  // Increment keystroke (counts each time a key is pressed during a game session)
    if (event.keyCode == 32 || event.keyCode == 13) { // If spacebar or enter is pressed,  
        userGuess = "_";                              // default the user guess to "_", due to
    }                                                 // spacebar event data corrupting game/events
    console.log(event);
    if(keyStroke === 1){  // If user's first try...
        document.getElementById("gbTitle").innerHTML = "";
        document.getElementById("gbSubTitle").innerHTML = "";
        document.getElementById("gbSubTitle2").innerHTML = "";
        document.getElementById("gameMsg").innerHTML = "";
        document.getElementById("gameMsg2").innerHTML = "";

        game.wrdSpaces = ["_ _ _ _ _ + _ _ _ _ _ + _", "_ _ _ _ _ + _ _ _ _ _ + _", "_ _ _ _ _ + _ _ _ _ _ + _",
            "_ _ _ + _ _", "_ _ _ + _ _", "_ _ _ _ _ + _ _ _", "_ _ _ _ _ + _ _ _ _ _ _"];
            randx = Math.floor((Math.random() * game.word.length - 1) + 1);
            game.gsRem = 12;
            game.letGsd = [];
            car = game.word[randx];
            letter = 0;
            x = 0;
            tempArray = game.wrdSpaces[randx].split("");
            tempArray2 = game.word[randx].split("");

            // Remove +'s
            for (; x < game.wrdSpaces[randx].length; x++) {
                if (tempArray2[x] === "+") {
                    tempArray[x] = '\xa0';
                }
            }
            document.getElementById("wrongGuessesTitle").innerHTML = "Incorrect Guesses";
            document.getElementById("guessesRemTitle").innerHTML = "Guesses Remaining";

            document.getElementById("guessesRemText").innerHTML = game.gsRem;
            document.getElementById("gbText").innerHTML = tempArray.join(" ");

            $('#controlPanel').delay(00000).show(0);
            $('#stats').delay(00000).show(0);
    } else {
        // Compare user's input with word answer
        for (var i = 0; i < tempArray2.length; i++) {
            //if match....
            if (userGuess.toLocaleLowerCase() === tempArray2[i]) {
                guessCorrect = true;
                //If user guessed x letter in word...
                if (userGuess === tempArray2[0]) {
                    //reveal 1st letter
                    tempArray[0] = userGuess.toLowerCase();
                    guessesCorrectCnt++;
                }
                else { 
                    // If space, move to next letter
                    if (tempArray[i] === " ") {
                        tempArray[i + 1] = userGuess.toLowerCase();
                         guessesCorrectCnt++;
                    }
                    else if (tempArray[i] === "_") {
                        tempArray[i] = userGuess.toLowerCase();
                        guessesCorrectCnt++;
                    }
                }
                // Get word for next game
                game.wrdSpaces[randx] = tempArray.join("");
            }
        }
        if (guessCorrect === false) {   
            
                game.letGsd.push(userGuess.toLowerCase());
                game.gsRem--; 
            
        }
    } 

    // If user guessed whole word, process the win
    if (guessesCorrectCnt === game.letterCnt[randx]) {
        game.wins++;
        document.getElementById("win").innerHTML = game.wins;
        document.getElementById("gbText").innerHTML = tempArray.join(" ");
        document.getElementById("gameMsg").innerHTML = "Great job! Press any key to play again.";
        keyStroke = 0;
        guessesCorrectCnt = 0;

    } else {  // Word hasn't been guessed yet

        if(guessCorrect === true){ //If letter guess was correct

            document.getElementById("gbText").innerHTML = tempArray.join(" ");

        } else if(guessCorrect === false) { // Guess was wrong
            document.getElementById("guessedWrong").innerHTML = game.letGsd.join(" ");
            document.getElementById("guessesRemText").innerHTML = game.gsRem;
            if(game.gsRem === 0){
                game.loses++;
                document.getElementById("l").innerHTML = game.loses;
                document.getElementById("gameMsg").innerHTML = "Sorry you lost this round. Press any key to try again.";
                document.getElementById("gameMsg2").innerHTML = "Sorry you lost this round. Tap the screen to try again.";
                keyStroke = 0;
            }
           
        }

    }
   

};

function initKeys() {
    console.log("initKeys accessed");
    $('#my-textarea').click();
    document.body.scrollTop = 0;
    document.getElementById('my-textarea').value = "4";
    $('#my-textarea').keyup();
}















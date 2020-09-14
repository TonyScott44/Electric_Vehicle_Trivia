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

$(document).ready(function() {

    // $('body').css('display', 'none');
    // $('body').delay(1000).fadeIn(4000);
    // $('.video-foreground').delay(13000).fadeOut(3000);
    // $('#bgVideo').delay(16000).hide(0);
    // $('.video-overlay').delay(16000).hide(0);
    // $('#cImage').hide(0).delay(16000).fadeIn(2000);
    document.getElementById("wg").innerHTML = "Test your knowledge on some of the finest electric vehicles ever built from Tesla, BMW, Porsche and more!";
    document.getElementById("hintHint").innerHTML = "Welcome to Electric Vehicle (EV) Trivia!";
    document.getElementById("gm1").innerHTML = "Press any key to get started!";
    document.getElementById("gmBoard").innerHTML = "Do you have the Juice?!";

    document.onkeyup = function(event) {

        // function RestrictSpace() {
        //     if (event.keyCode == 32) {
        //         return false;
        //     }
        // }
        
        var userGuess = event.key;
        var guessCorrect = false;
        keyStroke++;

        if(keyStroke === 1){
            // $('#wg').show(0);
            document.getElementById("gm").innerHTML = 12;
            document.getElementById("gm1").innerHTML = "Guesses Remaining";
            document.getElementById("wg").innerHTML = "Incorrect Guesses";
            if(document.getElementById("hintHint")){
                 document.getElementById("hintHint").innerHTML = "";
            }
           
            for (; x < game.wrdSpaces[randx].length; x++) {
        
                if (tempArray2[x] === "+") {
                    tempArray[x] = '\xa0';
                }
            }
            document.getElementById("gmBoard").innerHTML = tempArray.join(" ");
            if (guessCorrect === false) {
        
                if (game.letGsd.length !== 0) {
                    game.letGsd.push(userGuess.toLowerCase());
                    game.gsRem--;
                    if (game.gsRem === 0){
                        document.getElementById("guessedWrong").innerHTML = "Sorry, you lose";
                        document.getElementById("wg").innerHTML = "";
                        document.getElementById("gm").innerHTML = "";
                        }
                } else {
                    game.letGsd.push(" ");
                }
    
            }
        }
        
        if (keyStroke > 1){

            if (game.gsRem === 0 ) {
                game.loses++;
                
                
                //document.getElementById("wg").innerHTML = "";
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

                for (; x < game.wrdSpaces[randx].length; x++) {
        
                    if (tempArray2[x] === "+") {
                        tempArray[x] = '\xa0';
                    }
                }

                guessesCorrectCnt = 0;
                
            }
        
            else {

                document.getElementById("wg").innerHTML = "Incorrect Guesses";
        
                for (var i = 0; i < tempArray2.length; i++) {
        
                    
        
                    //if match....
                    if (userGuess.toLocaleLowerCase() === tempArray2[i]) {
        
                        guessCorrect = true;
                        //if user guessed 1st letter in word...
                        if (userGuess === tempArray2[0]) {
                            //reveal 1st letter
                            tempArray[0] = userGuess.toLowerCase();
                            guessesCorrectCnt++;
        
                        }
        
                        else {
        
                            if (tempArray[i] === " ") {
        
                                tempArray[i + 1] = userGuess.toLowerCase();
                                guessesCorrectCnt++;
        
                            }
        
                            else if (tempArray[i] === "_") {
                                tempArray[i] = userGuess.toLowerCase();
                                guessesCorrectCnt++;
                            }
        
                        }
        
                        game.wrdSpaces[randx] = tempArray.join("");
                    }
                }
        
        
                if (guessCorrect === false) {
        
                    if (game.letGsd.length !== 0) {
                        game.letGsd.push(userGuess.toLowerCase());
                        game.gsRem--;
                        if (game.gsRem === 0){
                            document.getElementById("guessedWrong").innerHTML = "Sorry, you lose";
                            document.getElementById("wg").innerHTML = "";
                            document.getElementById("gm").innerHTML = "";
                        }
                    } else {
                        game.letGsd.push(" ");
                    }
        
                }

                
        
                if (guessesCorrectCnt === game.letterCnt[randx]) {
        
                    game.wins++;
        
        
                    // var html =
                    //     "<h1>* YOU GOT THE JUICE *</h1>" +
                    //     "<h2>Wins</h2>" +
                    //     "<p>" + game.wins + "</p>" +
                    //     "<h2>Current Word</h2>" +
                    //     "<p>" + tempArray.join(" ") + "</p>" +
                    //     "<br>" +
                    //     "<h3>Press any key to continue.</h3>";
        
                    // document.querySelector("#box2").innerHTML = html;
                    
                    document.getElementById("gm1").innerHTML = "Guesses Remaining";
                    document.getElementById("win").innerHTML = game.wins;
                    document.getElementById("lose").innerHTML = game.loses;

                    if(document.getElementById("hintHint")){
                        document.getElementById("hintHint").innerHTML = "Answer: " + answer;
                    }
                    
                    document.getElementById("hint").innerHTML = "GREAT JOB! YOU GOT THE JUICE!";
                    document.getElementById("wg").innerHTML = "Press enter to continue.";
                    document.getElementById("gmBoard").innerHTML = tempArray.join(" ");
                    //$('#wg').hide(0).delay(10000).fadeIn(2000);
                    document.getElementById("guessedWrong").innerHTML = "";
                    // document.getElementById("gm1").innerHTML = "";
                    answer = game.actualWord[randx];
    
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
                    guessesCorrectCnt = 0;
                    for (; x < game.wrdSpaces[randx].length; x++) {
        
                        if (tempArray2[x] === "+") {
                            tempArray[x] = '\xa0';
                        }
                    }
                    keyStroke = 0;
                }
        
                else {
                    
                    document.getElementById("gmBoard").innerHTML = tempArray.join(" ");
                    // document.getElementById("win").innerHTML = game.wins;
                    document.getElementById("lose").innerHTML = game.loses;
                    
                    if (game.gsRem === 0){
                        document.getElementById("guessedWrong").innerHTML = "Sorry, you lose";
                        document.getElementById("gm1").innerHTML = "Press enter to continue";
                        document.getElementById("gm").innerHTML = "";
                    } else {
                        document.getElementById("guessedWrong").innerHTML = game.letGsd.join(" ");
                        document.getElementById("gm").innerHTML = game.gsRem;
                        document.getElementById("gm1").innerHTML = "Guesses Remaining";
                    }
                    
                    answer = game.actualWord[randx];
    
                    // var html =
                    //     "<h1></h1>" +
                    //     "<h2>Wins</h2>" +
                    //     "<p>" + game.wins + "</p>" +
                    //     "<h2>Current Word</h2>" +
                    //     "<p>" + tempArray.join(" ") + "</p>" +
                    //     "<br>" +
                    //     "<h2>Number of Guesses Remaining</h2>" +
                    //     "<p>" + game.gsRem + "</p>" +
                    //     "<h2>Letters Already Guessed</h2>" +
                    //     "<p>" + game.letGsd.join(" ") + "</p>";
        
                    // document.querySelector("#box2").innerHTML = html;
                }
        
            }

        }

        console.log("keyStroke: " + keyStroke);
        console.log("guessCorrect: " + guessCorrect);
        console.log("guessCorrectCnt: " + guessesCorrectCnt);
        
    
    };
});


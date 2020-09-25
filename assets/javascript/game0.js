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

    //document.getElementById("wg").innerHTML = "Test your knowledge on some of the finest electric vehicles ever built from Tesla, BMW, Porsche and more!";
    document.getElementById("hintHint").innerHTML = "Welcome to Electric Vehicle (EV) Trivia!";
    //document.getElementById("hintHint2").innerHTML = "Press any key to get started.";
    //document.getElementById("gm1").innerHTML = "Press any key to get started!";
    document.getElementById("gmBoard1").innerHTML = "Press any key to get started.";
    $('#controlPanel').delay(00000).hide(0);
    $('#stats').delay(00000).hide(0);
    console.log("1");
});

document.onkeyup = function(event) {
    console.log(game.gsRem);
    console.log("2");
    var userGuess = event.key;
    var guessCorrect = false;
    
    document.getElementById("gmBoard1").innerHTML = "";
    $('#controlPanel').delay(00000).show(0);
    $('#stats').delay(00000).show(0);
    document.getElementById("wg").innerHTML = "Incorrect Guesses";
    //document.getElementById("guessedWrong").innerHTML = "";
    
    //Go here after user has used all guesses/ guesses remaining = 0
        if (game.gsRem <= 1 ) {
            console.log("5");
            //document.getElementById("guessedWrong").innerHTML = game.letGsd.join(" ");
            //document.getElementById("guessedWrong").innerHTML = "";

            if(game.gsRem === 1){
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
                console.log("6");
                if (tempArray2[x] === "+") {
                    console.log("7");
                    tempArray[x] = '\xa0';
                }
            }
            document.getElementById("guessedWrong").innerHTML = "";
            document.getElementById("gm").innerHTML = game.gsRem;
            guessesCorrectCnt = 0;
            document.getElementById("gmBoard").innerHTML = tempArray.join(" ");
            document.getElementById("lose").innerHTML = game.loses;
            
            document.getElementById("gm1").innerHTML = "Guesses Remaining";
            document.getElementById("wg").innerHTML = "Incorrect Guesses";
            if(document.getElementById("hintHint")){
                console.log("8");
                document.getElementById("hintHint").innerHTML = "";
            }

            }
            
            
            
        
        }
    
        else {
            console.log("9");
            
            for (var i = 0; i < tempArray2.length; i++) {
                console.log("10");
                //if match....
                if (userGuess.toLocaleLowerCase() === tempArray2[i]) {
                    console.log("11");
                    guessCorrect = true;
                    //if user guessed 1st letter in word...
                    if (userGuess === tempArray2[0]) {
                        console.log("12");
                        //reveal 1st letter
                        tempArray[0] = userGuess.toLowerCase();
                        guessesCorrectCnt++;
    
                    }
    
                    else {
                        console.log("13");
                        console.log("tempArray[i]: " + userGuess);  
                        if (tempArray[i] === " ") {
    
                            tempArray[i + 1] = userGuess.toLowerCase();
                            guessesCorrectCnt++;
    
                        }
    
                        else if (tempArray[i] === "_") {
                            console.log("14");
                            
                            tempArray[i] = userGuess.toLowerCase();
                            console.log(tempArray[i]);
                            guessesCorrectCnt++;
                        }
    
                    }
    
                    game.wrdSpaces[randx] = tempArray.join("");
                }
            }

            if (guessCorrect === false) {
                
                
                if (game.letGsd.length !== 0) {
                    console.log("13")
                    game.letGsd.push(userGuess.toLowerCase());
                    console.log(userGuess + " added.  Guesses Remaining:" + game.gsRem);
                    game.gsRem--;
                    
                
                } else {
                    game.letGsd.push(" ");
                    console.log("14");
                }
    
            }
            
            if (guessesCorrectCnt === game.letterCnt[randx]) {        
                
                console.log("15");
                game.wins++;
    
                document.getElementById("win").innerHTML = game.wins;
                document.getElementById("lose").innerHTML = game.loses;

                if(document.getElementById("hintHint")){
                    console.log("16");
                    document.getElementById("hintHint").innerHTML = "Answer: " + answer;
                }
                
                document.getElementById("hint").innerHTML = "GREAT JOB! YOU GOT THE JUICE!";
                document.getElementById("wg").innerHTML = "car facts";
                document.getElementById("gmBoard").innerHTML = tempArray.join(" ");
                
                //document.getElementById("guessedWrong").innerHTML = "";
                document.getElementById("gm").innerHTML = "";
                document.getElementById("gm1").innerHTML = "Press enter to continue";
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
                    console.log("17")
                    if (tempArray2[x] === "+") {
                        console.log("18")
                        tempArray[x] = '\xa0';
                    }
                }
            }
    
            else {
                console.log(game.letGsd);
                console.log("19");
                
                for (; x < game.wrdSpaces[randx].length; x++) {
                    console.log("20");
                    if (tempArray2[x] === "+") {
                        console.log("21");
                        tempArray[x] = '\xa0';
                    }
                }
                
                document.getElementById("gmBoard").innerHTML = tempArray.join(" ");
                document.getElementById("win").innerHTML = game.wins;
                
                document.getElementById("gm1").innerHTML = "Guesses Remaining";
                document.getElementById("gm").innerHTML = game.gsRem;
                
                if(guessCorrect === false){
                    console.log("22");
                    console.log(guessCorrect);
                    document.getElementById("guessedWrong").innerHTML = game.letGsd.join(" ");
                }
                
                if (game.gsRem === 0){
                    console.log("23");
                    
                    
                    game.loses++;
                    document.getElementById("lose").innerHTML = game.loses;
                    if(document.getElementById("hintHint2")){
                        console.log("24");
                        document.getElementById("hintHint2").innerHTML = "Sorry, try again.";
                       // game.gsRem = 12;
                    }
                    
                    //game.gsRem = 12;  
                } 

                answer = game.actualWord[randx];
            }
            
        }
};


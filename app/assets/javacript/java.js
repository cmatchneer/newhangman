import * as draw from "./draw.js";
import * as easy from "./easy.js";
$(document).ready(function() {
    let theList;
    let index;
    let numberOfGuesses;
    let resetGuesses;
    let computerGuess;
    let theTip;
    let theLetters = [];
    let wins = 0;
    let losses = 0;
    let gameOver = false;
    let gameStart = false;
    let userGuess = [];
    let toughness;
    // // full face
    // $myCanvas.drawArc({
    //     strokeStyle: "black",
    //     strokeWidth: 1,
    //     x: 270,
    //     y: 38,
    //     radius: 10,
    // }).drawArc({
    //     // draw the left eye
    //     fillStyle: '#333',
    //     strokeStyle: '#333',
    //     x: 265,
    //     y: 37,
    //     radius: 1.5
    // }).drawArc({
    //     // draw the right eye
    //     fillStyle: '#333',
    //     strokeStyle: '#333',
    //     x: 275,
    //     y: 37,
    //     radius: 1.5
    // }).drawLine({
    //     //body
    //     strokeStyle: 'black',
    //     strokeWidth: 1,
    //     x1: 270,
    //     y1: 49,
    //     x2: 270,
    //     y2: 75,
    // }).drawLine({
    //     //right arm
    //     strokeStyle: "black",
    //     strokeWidth: 1,
    //     x1: 270,
    //     y1: 53,
    //     x2: 255,
    //     y2: 63,
    // }).drawLine({
    //     //left arm
    //     strokeStyle: "black",
    //     strokeWidth: 1,
    //     x1: 270,
    //     y1: 53,
    //     x2: 285,
    //     y2: 63,
    // }).drawLine({
    //     //left leg
    //     strokeStyle: "black",
    //     strokeWidth: 1,
    //     x1: 270,
    //     y1: 75,
    //     x2: 280,
    //     y2: 85,
    // }).drawLine({
    //     //right leg
    //     strokeStyle: "black",
    //     strokeWidth: 1,
    //     x1: 270,
    //     y1: 75,
    //     x2: 260,
    //     y2: 85,
    // })


    const sound = document.createElement('audio');
    // hardness buttons
    var easyBtn = $("<button>");
    easyBtn.addClass("diffcultyBtn btn btn-danger");
    easyBtn.text("easy mode");
    easyBtn.attr("id", "easy")
    $("#theWord").append(easyBtn);
    var medBtn = $("<button>");
    medBtn.addClass("diffcultyBtn btn btn-danger");
    medBtn.text("medium mode");
    medBtn.attr("id", "medium")
    $("#theWord").append(medBtn);
    var hardBtn = $("<button>");
    hardBtn.addClass("diffcultyBtn btn btn-danger");
    hardBtn.text("hard mode");
    hardBtn.attr("id", "hard")
    $("#theWord").append(hardBtn);
    $(".diffcultyBtn").on("click", function() {
        console.log(this.id);
        switch (this.id) {
            case "easy":
                numberOfGuesses = 15;
                toughness = this.id;
                break;
            case "medium":
                numberOfGuesses = 10;
                toughness = this.id;
                break;
            case "hard":
                numberOfGuesses = 5;
                toughness = this.id;
                break;
        }
        draw.setup()
        resetGuesses = numberOfGuesses
        $("#theWord").empty();
        $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
        gameStart = true;
        $.get("/api/" + toughness, function(response) {
            theList = response
            setUp();
        })

    });

    const setUp = () => {
            index = Math.floor(Math.random() * theList.length);
            computerGuess = theList[index].word;
            theTip = theList[index].tip;
            // making the array the same length as the guess and blank so it can be filled in later
            for (var j = 0; j < computerGuess.length; j++) {
                theLetters[j] = " _ ";
            }
            //puts the empty array on the screen
            $("#theWord").text(theLetters.join(""));
        }
        //reset button
    $("#reset").on("click", function() {
            losses += 1
            $("#lossTotal").text("Your Total Losses: " + losses);
            $("#endGame").html("Looks like we have quitter over here" + "<br>" + "The word was " + computerGuess + "<br>" +
                "Hit another letter to try again dont quit this time");
            reset();
        })
        //tip button
    $("#helpDesk").on("click", function() {
            $("#theTip").html("Welcome to the help desk here is your tip: " + theTip + "<br>" +
                "I hope this helps good luck");
            $("#endGame").empty();
            sound.setAttribute("src", "assets/audio/help.m4a");
            sound.play();
        })
        //the game
    const theGame = (guess) => {

        if (gameStart) {
            //if user double guesses the same letter
            for (let k = 0; k < userGuess.length; k++) {
                if (guess.toLowerCase() == userGuess[k].toLowerCase()) {
                    alert("you have aready guessed that letter try another");
                    return;
                }
            }
            userGuess.push(guess.toLowerCase());
            //all the stuff that should happen hit or miss
            numberOfGuesses -= 1;
            easy.easy(numberOfGuesses);
            $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
            $("#playerGuess").append(" " + guess + " ");
            $("#hitOrMiss").text("Uh oh " + guess + " isnt in the word keep going");
            $("#endGame").empty();
            sound.setAttribute("src", "assets/audio/miss.m4a");
            sound.play();
            //the loop and if statment for gussing a letter correctly
            for (var i = 0; i < computerGuess.length; i++) {
                if (guess.toLowerCase() === computerGuess.charAt(i)) {
                    theLetters[i] = guess;
                    $("#theWord").text(theLetters.join(""));
                    $("#hitOrMiss").text("You guessed a correct letter yayy keep going");
                    sound.setAttribute("src", "assets/audio/hit.m4a");
                    sound.play();

                }
            }
            //winning the game
            if (theLetters.join("") === computerGuess) {
                gameOver = true;
                wins += 1;
                $("#endGame").html("YOU ARE THE CHAMPION OF THE WORLD!!!!!" + "<br>" + "Press the win button to play again");
                $("#winTotal").text("Your Total Wins: " + wins);
                sound.setAttribute("src", "assets/audio/champion.m4a");
                sound.play();
                //creating win button 
                var winBtn = $("<button>");
                winBtn.addClass("winButton btn btn-primary")
                winBtn.text("You Win");
                $("#buttons").append(winBtn);
                $(".winButton").on("click", function() {
                    $(this).remove();
                    reset();
                });
            }
            //losing the game
            if (numberOfGuesses === 0 && theLetters.join("") !== computerGuess) {
                gameOver = true;
                losses += 1;
                $("#lossTotal").text("Your Total Losses: " + losses);
                $("#endGame").html("LOOOOOOOSSSSSSEEEEEERRRRR!!!!!" + "<br>" + "The word you were tring to guess was " + computerGuess + "<br>" +
                    " Press the lose button to play again");
                sound.setAttribute("src", "assets/audio/loser.m4a");
                sound.play();
                //lose game button creation
                var loseBtn = $("<button>");
                loseBtn.addClass("loseButton btn btn-danger");
                loseBtn.text("You Lose");
                $("#buttons").append(loseBtn);
                $(".loseButton").on("click", function() {
                    $(this).remove();
                    reset();
                });
            }
        }
    }
    const reset = () => {
            $theWords.removeLayer('text').drawLayers();
            index = Math.floor(Math.random() * theList.length);
            gameOver = false;
            numberOfGuesses = resetGuesses;
            computerGuess = theList[index].word;
            theTip = theList[index].tip;
            theLetters = [];
            userGuess = [];
            $("#theTip").empty();
            $("#endGame").empty();
            $("#theWord").empty();
            $("#playerGuess").empty();
            $("#playerGuess").text("Your Guesses: ");
            $("#theTip").text("Help Desk");
            $("#hitOrMiss").empty();
            $("#guessesLeft").text("Guesses Left: " + numberOfGuesses);
            for (var k = 0; k < computerGuess.length; k++) {
                theLetters[k] = " _ ";
            }
            $("#theWord").text(theLetters.join(""));
        }
        //starting the game
    document.onkeypress = function(event) {
        var userGuess = event.key;
        //stops game win or lose
        if (gameOver === true) {
            return;
        }
        //makes sure only letters can be used to play the game
        if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
            theGame(userGuess);
        }
    }
});
// Rock, Paper, Scissors Game

// * As a user:
//   * I want to play Rock, Paper, Scissors against an automated opponent.
//   * I can enter R, P, or S to signify my choice of rock, paper, or scissors.
//   * I expect the computer to choose R, P, or S in return.
//   * I want the option to play again whether I win or lose.
//   * I want to see my total wins, ties, and losses after 10 rounds.

var rpsItems = ["Rock", "Paper", "Scissors"];

var scoreDraw = 0;
var scoreWin = 0;
var scoreLose = 0;
var count = 0; // declaring "count" here makes the variable globally available

for (count = 1; count < 20 ; count++) {
    // player1 must INPUT R, P, or S 
    // add failsafe for lowercase or non-matches
    var chooseItem = prompt("Lets play Rock, Paper, Scissors ...choose R, P or S");


    // computer random output
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    var item2 = (getRandomInt(3));
    //console.log(item2);
    var player2 = rpsItems[item2];
    //console.log(player2);

    // use SWITCH to match letter to RPS
    const expr = chooseItem.toUpperCase();
    switch (expr) {
        case 'R':
            var player1 = "Rock";
            break;
        case 'P':
            var player1 = "Paper";
            break;
        case 'S':
            var player1 = "Scissors";
            break;
        default:
            var player1 = "error";
            count--;
            alert(`Sorry ...try again!`);
    }

    // COMPARISON
    // Rock: wins against scissors, loses to paper, and ties against itself.
    // Paper: wins against rock, loses to scissors, and ties against itself.
    // Scissors: wins against paper, loses to rock, and ties against itself.

    if (player1 === player2) {
        var result = "A Draw!";
        scoreDraw++;  
    } else if (player1 === "Rock" && player2 === "Paper") {
        var result = "You Lose!";
        scoreLose++; 
    } else if (player1 === "Rock" && player2 === "Scissors") {
        var result = "You Win!";
        scoreWin++;
    } else if (player1 === "Paper" && player2 === "Rock") {
        var result = "You Win!";
        scoreWin++; 
    } else if (player1 === "Paper" && player2 === "Scissors") {
        var result = "You Lose!";
        scoreLose++;
    } else if (player1 === "Scissors" && player2 === "Rock") {
        var result = "You Lose!";
        scoreLose++; 
    } else if (player1 === "Scissors" && player2 === "Paper") {
        var result = "You Win!";
        scoreWin++;    
    } else {
        var result = "Error!";
    }

//USE MODULUS TO CALCULATE TEN TRIES
// ALERT results
    if (player1 !== "error") {
        if ((count % 10) !== 0) {
            confirm("\nYou chose... " + player1
        + "\nComputer chose... " + player2
        + "\nResult: " + result
        + "\n\nLet's play again..."
        );
        } else {
        alert("\nYou chose... " + player1
        + "\nComputer chose... " + player2
        + "\nResult: " + result
        //+ "\nLet's play again..."
        + "\n\nTotal Scores:"
        + "\nWin: " + scoreWin
        + "\nLose: " + scoreLose
        + "\nDraw: " + scoreDraw
        );
        }  
    }
}
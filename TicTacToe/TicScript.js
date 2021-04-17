/**
 * The following program contains source code for a game called Tic-tac-toe.
 * It is a game for two players, X and O, who take turns marking the
 * spaces in a 3×3 grid. 
 * The player who succeeds in placing three of their marks in a horizontal, vertical, or 
 * diagonal row is the winner
 */

let win1 = -1;
let turn = 1;
let clickCounter = 0;
const matrix = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

let score1 = 0;
let score2 = 0;
let draw = 0;

/**
 * Toggles the current player.
 * 
 */


/**
 * Reset the Matrix and Scores.
 *
 */
function reset() {
    turn = 1;
    clickCounter = 0;
    win1 = -1;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            matrix[i][j] = -1;
        }
    }
    document.getElementById("00").innerHTML = "";
    document.getElementById("01").innerHTML = "";
    document.getElementById("02").innerHTML = "";
    document.getElementById("10").innerHTML = "";
    document.getElementById("11").innerHTML = "";
    document.getElementById("12").innerHTML = "";
    document.getElementById("20").innerHTML = "";
    document.getElementById("21").innerHTML = "";
    document.getElementById("22").innerHTML = "";
}

/**
 * Fills the gameboard Acoording to players.
 *
 * @param {div} elem The div element to put value upon.
 * @param {number} row The row of div.
 * @param {number} col The column of div.
 * 
 */
function ActionPerformedByPlayer(elem, row, col) {

        Action(elem, row, col);

}
/**
 * Fills the gameboard Acoording to players and displays output.
 *
 * @param {string} toggle The current player(player2 / Computer).
 * @param {div} elem The div element to put value upon.
 * @param {number} row The row of div.
 * @param {number} col The column of div.
 * 
 */
function Action(elem, row, col) {
    /**
     * This function displays output according to the win condition
     * and according to toggle condition provides moves to other 
     * player or computer
     */

    if (win1 != -1)
        return;

    if (elem != null)
        if (elem.innerHTML != "")
            return;

    matrix[row][col] = turn;

    if (turn == 1) {
        elem.innerHTML = "X";
            document.getElementById("messagesection").innerHTML = "Player B turn";
        turn = 2;//no of turns
        clickCounter++;// no of clicks

    } else if (turn == 2) {
        elem.innerHTML = "O";
        document.getElementById("messagesection").innerHTML = "Player A turn";
        turn = 1;
        clickCounter++;
    }
    let win = checkMatrix(); // to check win condition
    win1 = win;
    if (win != -1) {
        if (win == 1) {
            document.getElementById("messagesection").innerHTML = " Player " + win + " Won the match ";
            score1++;

            document.getElementById("score1").innerHTML = "Player 1 Score" + "<br>" + score1;
        } else {

            score2++;
                document.getElementById("messagesection").innerHTML = "Player " + win + " Won the match ";
                document.getElementById("score2").innerHTML = "player 2 Score" + "<br>" + score2;
            }
            

        ConfettiAnimation();// external library 
        restartButton();
        }


    

    if (clickCounter == 9 && win == -1) {// condition for draw
        draw++;
        document.getElementById("messagesection").innerHTML = " The match is Drawn";
        document.getElementById("draw").innerHTML = "Draw" + "<br>" + draw;
        ConfettiAnimation();
        restartButton();

    }

}

/**
 * Checks for the win condition in gameboard
 *
 * @return {number} win condition
 */
function checkMatrix() {

    /**
     * This function checks for the win condition
     * in every row,column and both of the diagonals.
     */

    let win = -1;
    for (var i = 0; i < 3; i++) {

        // Row check
        if (matrix[i][0] != -1 && matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) {
            win = matrix[i][0];
            return win;// jaise jeeta vaise return
        }
        // Column check
        if (matrix[0][i] != -1 && matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]) {
            win = matrix[0][i];
            return win;
        }
    }
    // 1st diagonal check
    if (matrix[0][0] != -1 && matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
        win = matrix[0][0];
        return win;
    }
    // 2nd diagonal check
    if (matrix[0][2] != -1 && matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
        win = matrix[0][2];
        return win;
    }
    return win;// win condition return
}

/**
 * Finds if playing on current spot is optimal move or not.
 *
 * @param {object} matrix The Two-dimensional Array denoting gameboard.
 * @param {boolean} isMaximizing Tells if maximizing or minimizing.
 * @return {number} The best Score for that move
 * 
 */
function ConfettiAnimation() {
    const start = () => {
        setTimeout(function() {
            confetti.start()
        }, 100); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
    };

    //  Stop

    const stop = () => {
        setTimeout(function() {
            confetti.stop()
        }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
    };

    start();
    stop();
}
/**
 * Restart Button is made after ending of game.
 *
 */
function restartButton() {
    document.getElementById("resetId").innerHTML = "Restart";
}

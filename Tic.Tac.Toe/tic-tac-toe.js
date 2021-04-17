
window.onload = ticTacToe;
//
function ticTacToe () {

	var turn = true; //Determines turn. True = X, False = O.
	var gridx = [false, false, false, false, false, false, false, false, false]; //Used for win detection
	var grido = [false, false, false, false, false, false, false, false, false]; //Used for win detection
	var masterGrid = [false, false, false, false, false, false, false, false, false] //Used for tie detection

	function status (toSet) {
		document.getElementById("status").innerHTML=toSet;
	};

	function setCellProperties (id) {

		var cellId = id;
		var cell = document.getElementById(cellId.toString());
		cell.unWritten = true; //Determines if cell has been written to or not.

		cell.onclick = function () { //Sets action when cell is clicked. Where all the meat of the code is.

			//Cell write
			cellClick(cellId, cell);
			//Win detection
			var gameOver = false;
			gameOver = checkWin(gridx, "X");
			if(!gameOver) gameOver = checkWin(grido, "O");
			//Tie detection
			if(!gameOver) checkTie();
		};

	};

	for (var i = 0; i<9; i++) {

		setCellProperties(i); //Sets cell's onclick write and grid setup
	}

	function cellClick (cellId, cell) {

		if (turn) { //Checks if X turn or not.
			if (cell.unWritten) { //Checks if cell can be written to.

				cell.innerHTML="x";
				turn=false; //It is now O's turn.
				status("O's turn");
				cell.unWritten=undefined;
				gridx[cellId]=true;
				grido[cellId]=false;
				masterGrid[cellId]=true;
			}

		} else if (cell.unWritten) { //Checks if cell can be written to.

			cell.innerHTML="o";
			turn=true; //It is now X's turn.
			status("X's turn");
			cell.unWritten=undefined;
			grido[cellId]=true;
			gridx[cellId]=false;
			masterGrid[cellId]=true;
		}
	}

	function checkWin (gridToCheck, who) {
		
		var gameOver = false;

		gameOver = checkCombo(0, 1, 2, who);
		if(!gameOver) gameOver = checkCombo(3, 4, 5, who);
		if(!gameOver) gameOver = checkCombo(6, 7, 8, who);
		if(!gameOver) gameOver = checkCombo(0, 3, 6, who);
		if(!gameOver) gameOver = checkCombo(1, 4, 7, who);
		if(!gameOver) gameOver = checkCombo(2, 5, 8, who);
		if(!gameOver) gameOver = checkCombo(0, 4, 8, who);
		if(!gameOver) gameOver = checkCombo(2, 4, 6, who);

		return gameOver;

		function checkCombo (cell1, cell2, cell3, who) {
			if(gridToCheck[cell1] === true && gridToCheck[cell2] === true && gridToCheck[cell3] === true) {
				
				status(who + " won!");
				writeAll(undefined);
				bold([cell1, cell2, cell3]);
				return true;
			}

		};
	};

	function checkTie () {

		if(masterGrid[0] === true && masterGrid[1] === true && masterGrid[2] === true && masterGrid[3] === true && masterGrid[4] === true && masterGrid[5] === true && masterGrid[6] === true && masterGrid[7] === true && masterGrid[8] === true) { //Checks if board is full

			status("Game Draw!!Play Again");
			writeAll(undefined);
		}
	};

	function writeAll (bool) {
		for(var i = 0; i<9; i++) {

			document.getElementById(i.toString()).unWritten=bool;
		}
	};

	function bold (toBold) {

		for(var i = 0; i<3; i++) {

			document.getElementById(toBold[i].toString()).classList.add("bold");
		}
	};

	document.getElementById("reset").onclick = function () {

		writeAll(true);
		status("X's turn");
		turn=true;
		gridx=[false, false, false, false, false, false, false, false, false];
		grido=[false, false, false, false, false, false, false, false, false];
		masterGrid=[false, false, false, false, false, false, false, false, false];
		for(var i = 0; i<9; i++) {

			document.getElementById(i.toString()).classList.remove("bold");
		}

		for(var i = 0; i<9; i++) {

			document.getElementById(i.toString()).innerHTML=" - ";
		}
	};
};
// Function called whenever user tab on any box
function myfunc() {

	// Setting DOM to all boxes or input field
	var block1, block1, block3, block4, block5, block6, block7, block8, block9;
	block1 = document.getElementById("block1").value;
	block2 = document.getElementById("block2").value;
	block3 = document.getElementById("block3").value;
	block4 = document.getElementById("block4").value;
	block5 = document.getElementById("block5").value;
	block6 = document.getElementById("block6").value;
	block7 = document.getElementById("block7").value;
	block8 = document.getElementById("block8").value;
	block9 = document.getElementById("block9").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((block1 == 'x' || block1 == 'X') && (block2 == 'x' ||
		block2 == 'X') && (block3 == 'x' || block3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player I won";
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player I won');
	}
	else if ((block1 == 'x' || block1 == 'X') && (block4 == 'x' ||
		block4 == 'X') && (block7 == 'x' || block7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player I won";
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;

		window.alert('Player I won');
	}
	else if ((block7 == 'x' || block7 == 'X') && (block8 == 'x' ||
		block8 == 'X') && (block9 == 'x' || block9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player I won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		window.alert('Player I won');
	}
	else if ((block3 == 'x' || block3 == 'X') && (block6 == 'x' ||
		block6 == 'X') && (block9 == 'x' || block9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player I won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		window.alert('Player I won');
	}
	else if ((block1 == 'x' || block1 == 'X') && (block5 == 'x' ||
		block5 == 'X') && (block9 == 'x' || block9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player I won";
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		window.alert('Player I won');
	}
	else if ((block3 == 'x' || block3 == 'X') && (block5 == 'x' ||
		block5 == 'X') && (block7 == 'x' || block7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player I won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player I won');
	}
	else if ((block2 == 'x' || block2 == 'X') && (block5 == 'x' ||
		block5 == 'X') && (block8 == 'x' || block8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player I won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player I won');
	}
	else if ((block4 == 'x' || block4 == 'X') && (block5 == 'x' ||
		block5 == 'X') && (block6 == 'x' || block6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player I won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player I won');
	}

	// Checking of Player X finsh
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((block1 == 'O' || block1 == 'O') && (block2 == 'O' ||
		block2 == 'O') && (block3 == 'O' || block3 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player II won";
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player II won');
	}
	else if ((block1 == 'O' || block1 == 'O') && (block4 == 'O' ||
		block4 == 'O') && (block7 == 'O' || block7 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player II won";
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player II won');
	}
	else if ((block7 == 'O' || block7 == 'O') && (block8 == 'O' ||
		block8 == 'O') && (block9 == 'O' || block9 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player II won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block6").disabled = true;
		window.alert('Player II won');
	}
	else if ((block3 == 'O' || block3 == 'O') && (block6 == 'O' ||
		block6 == 'O') && (block9 == 'O' || block9 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player II won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block5").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		window.alert('Player II won');
	}
	else if ((block1 == 'O' || block1 == 'O') && (block5 == 'O' ||
		block5 == 'O') && (block9 == 'O' || block9 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player II won";
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		window.alert('Player II won');
	}
	else if ((block3 == 'O' || block3 == 'O') && (block5 == 'O' ||
		block5 == 'O') && (block7 == 'O' || block7 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player II won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player II won');
	}
	else if ((block2 == 'O' || block2 == 'O') && (block5 == 'O' ||
		block5 == 'O') && (block8 == 'O' || block8 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player II won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block4").disabled = true;
		document.getElementById("block6").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player II won');
	}
	else if ((block4 == 'O' || block4 == 'O') && (block5 == 'O' ||
		block5 == 'O') && (block6 == 'O' || block6 == 'O')) {
		document.getElementById('print')
			.innerHTML = "Player II won";
		document.getElementById("block1").disabled = true;
		document.getElementById("block2").disabled = true;
		document.getElementById("block3").disabled = true;
		document.getElementById("block7").disabled = true;
		document.getElementById("block8").disabled = true;
		document.getElementById("block9").disabled = true;
		window.alert('Player II won');
	}

	// Checking of Player O finsh
	// Here, Checking about Tie
	else if ((block1 == 'X' || block1 == 'O') && (block2 == 'X'
		|| block2 == 'O') && (block3 == 'X' || block3 == 'O') &&
		(block4 == 'X' || block4 == 'O') && (block5 == 'X' ||
		block5 == 'O') && (block6 == 'X' || block6 == 'O') &&
		(block7 == 'X' || block7 == 'O') && (block8 == 'X' ||
		block8 == 'O') && (block9 == 'X' || block9 == 'O')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player I Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player II Turn";
		}
	}
}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('block1').value = '';
	document.getElementById("block2").value = '';
	document.getElementById("block3").value = '';
	document.getElementById("block4").value = '';
	document.getElementById("block5").value = '';
	document.getElementById("block6").value = '';
	document.getElementById("block7").value = '';
	document.getElementById("block8").value = '';
	document.getElementById("block9").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or O
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("block1").value = "X";
		document.getElementById("block1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("block1").value = "O";
		document.getElementById("block1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("block2").value = "X";
		document.getElementById("block2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("block2").value = "O";
		document.getElementById("block2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("block3").value = "X";
		document.getElementById("block3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("block3").value = "O";
		document.getElementById("block3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("block4").value = "X";
		document.getElementById("block4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("block4").value = "O";
		document.getElementById("block4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("block5").value = "X";
		document.getElementById("block5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("block5").value = "O";
		document.getElementById("block5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("block6").value = "X";
		document.getElementById("block6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("block6").value = "O";
		document.getElementById("block6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("block7").value = "X";
		document.getElementById("block7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("block7").value = "O";
		document.getElementById("block7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("block8").value = "X";
		document.getElementById("block8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("block8").value = "O";
		document.getElementById("block8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("block9").value = "X";
		document.getElementById("block9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("block9").value = "O";
		document.getElementById("block9").disabled = true;
		flag = 1;
	}
}

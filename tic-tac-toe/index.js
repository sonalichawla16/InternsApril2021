const sdisplay = document.querySelector('.status');

let active = true;
let current_player = "X";
let state = ["","","","","","","","",""];

const win = () => `Player ${current_player} has won!`;
const draw = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${current_player}'s turn`;

sdisplay.innerHTML = currentPlayerTurn();

function handleCellClick(cellEvent){
    const cell = cellEvent.target;

    const cellEventIndex = parseInt(cell.getAttribute('data-cell-index'));

    if(state[cellEventIndex] !== "" || !active){
        return;
    }

    handleCellPlayed(cell, cellEventIndex);
    handleResultValidation();
}

function handleCellPlayed(cell,cellEventIndex){
    state[cellEventIndex] = current_player;
    cell.innerHTML = current_player;
}

const winningCondititon = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleResultValidation(){
    let roundWon = false;
    for(let i=0;i<=7;i++){
        const winCondition = winningCondititon[i];
        let a = state[winCondition[0]];
        let b = state[winCondition[1]];
        let c = state[winCondition[2]];
        if(a === '' || b === '' || c === ''){
            continue;
        }
        if( a === b && b === c){
            roundWon = true;
            break
        }
    }
    if(roundWon){
        sdisplay.innerHTML = win();
        active = false;
        return;
    }

    let roundDraw = !state.includes("");
    if (roundDraw) {
        sdisplay.innerHTML = draw();
        active = false;
        return;
    }
    handlePlayerChange();
}

function handlePlayerChange(){
    current_player = current_player === "X" ? "O":"X";
    sdisplay.innerHTML = currentPlayerTurn();
}

function handleRestartGame(){
    active = true;
    current_player = "X";
    state = ["","","","","","","","",""]
    sdisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click',handleCellClick));
document.querySelector('.restart').addEventListener('click', handleRestartGame);


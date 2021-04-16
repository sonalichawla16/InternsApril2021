console.log("javascript enabled");
//left remove console.log()
let objectPlayer = {
    active:false,
  current: 0,
  classImplement: ["cross", "ooh"],
  board:["","","","","","","","",""]
};

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");



function check_wining(){
    let Win = false;
    let gameState=objectPlayer.board;
  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];//check condition all
    let aCell = gameState[winCondition[0]];
    let bCell = gameState[winCondition[1]];
    let cCell = gameState[winCondition[2]];
    // console.log("values are")
    if (aCell === "" || bCell === "" || cCell === "") {
      continue;
    }
    if (aCell === bCell && bCell === cCell) {
      Win = true;//loop exit important
      break;
    }
  }
  if(Win)
      if(!objectPlayer.current){
          player1.classList.add("winner");
          alert("Player1 has won ! start a new game");
          return true;
      }
      else {
        player2.classList.add("winner");
          alert("Player2 has won ! start a new game")
        return true;}

  else if (!gameState.includes("")) {//check for draw and continue
    alert("It's a draw ");
return true;}
  else return false;
}
const allCells = document.querySelectorAll(".my-cells");
function func(event) {
    if (!objectPlayer.active)
    return;
  let domElement = event.target;
  if (
    !domElement.classList.contains(objectPlayer.classImplement[0]) &&
    !domElement.classList.contains(objectPlayer.classImplement[1])
  ) {
    // console.log("added class ");
    domElement.classList.add(objectPlayer.classImplement[objectPlayer.current]);
    domElement.innerHTML=objectPlayer.current ? "X":"O" ;
    objectPlayer.board[domElement.id]=domElement.innerHTML;
    if(check_wining()){
        objectPlayer.active=false;
        return;
    }
    objectPlayer.current ^= 1;
    player1.classList.toggle("active");
    player1.classList.toggle("animate__pulse");
    player2.classList.toggle("active");
    player2.classList.toggle("animate__pulse");

  }
  // console.log(
  //   `clicked by ${domElement.id} with class list ${domElement.classList} current player ${objectPlayer.current} fo class${objectPlayer.classImplement[objectPlayer.current]}`
  // );
}
//adding func for toggle class
let onStart = () => {
    objectPlayer.board=["","","","","","","","",""];
    player1.classList.remove("winner");
    player2.classList.remove("winner");
    player2.classList.remove("active");
    player2.classList.remove("animate__pulse");

    
  objectPlayer.current=0;  
  // console.log("game intialized");
  allCells.forEach((el) => {
    el.addEventListener("click", func);
    el.innerHTML=" ";
    el.classList.remove("cross");
    el.classList.remove("ooh");

  });
  player1.classList.add("active","animate__pulse");
//   player1.classList.add("animate__pulse");
objectPlayer.active=true;
};


//Manual Satrt
onStart();
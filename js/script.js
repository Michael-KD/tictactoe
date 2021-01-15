let tileSlice = "";
let playerTurn = "X";
let numberTurn = 0;
let gameEnded = false;
let winner = "";
let tile1 = "";
let tile2 = "";
let tile3 = "";
let tile4 = "";
let tile5 = "";
let tile6 = "";
let tile7 = "";
let tile8 = "";
let tile9 = "";

function declareWinner() {
  if (winner === "X") {$(".result").html("<h2>X wins!</h2>");}
  else if (winner === "O") {$(".result").html("<h2>O wins!</h2>");}
  else if (numberTurn === 9) {$(".result").html("<h2>It's a tie!</h2>");}
  else {winner = "";}
}

function checkVertical() {
  if (tile1 === tile4 && tile1 === tile7 && tile1 !== "") {winner = tile1;} 
  else if (tile2 === tile5 && tile2 === tile8 && tile2 !== "") {winner = tile2;} 
  else if (tile3 === tile6 && tile3 === tile9 && tile3 !== "") {winner = tile3;}
  else {}
}

function checkHorizontal() {
  if (tile1 === tile2 && tile1 === tile3 && tile1 !== "") {winner = tile1;} 
  else if (tile4 === tile5 && tile4 === tile6 && tile4 !== "") {winner = tile4;} 
  else if (tile7 === tile8 && tile7 === tile9 && tile7 !== "") {winner = tile7;}
  else {}
}

function checkDiagonal() {
  if (tile1 === tile5 && tile1 === tile9 && tile1 !== "") {winner = tile1;} 
  else if (tile3 === tile5 && tile3 === tile7 && tile3 !== "") {winner = tile3;}
  else {}
}

function checkWinner() {
  checkVertical();
  checkHorizontal();
  checkDiagonal();
}

function choiceGrid(tileId) {
  //console.log(tileId);
  tileSlice = tileId.slice(-1)
  //console.log(tileSlice);
  if (tileSlice == 1) {tile1 = playerTurn;}
  else if (tileSlice == 2) {tile2 = playerTurn;}
  else if (tileSlice == 3) {tile3 = playerTurn;}
  else if (tileSlice == 4) {tile4 = playerTurn;}
  else if (tileSlice == 5) {tile5 = playerTurn;}
  else if (tileSlice == 6) {tile6 = playerTurn;}
  else if (tileSlice == 7) {tile7 = playerTurn;}
  else if (tileSlice == 8) {tile8 = playerTurn;}
  else if (tileSlice == 9) {tile9 = playerTurn;}
  
  
  //console.log(tile1);
} 

function performLogic(button, tile) {
    if (playerTurn === "X") {
      $(tile).html("<p>X</p>");
      choiceGrid(tile);
      numberTurn += 1;
      checkWinner();
      declareWinner();
      playerTurn = "O";
      //console.log("Winner: " + winner);
   
    } else if (playerTurn === "O") {
      $(tile).html("<p>O</p>");
      choiceGrid(tile);
      numberTurn += 1;
      checkWinner();
      declareWinner();
      playerTurn = "X";
      //console.log("Winner: " + winner);
  }
}






$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});


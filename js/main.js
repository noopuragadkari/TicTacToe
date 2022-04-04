//Define a colors object
const colorsObj = {
null:'#999999',
Player1: '#ff9999',
PlayerO:'#00ffbf'
};

//Define the 8 possible winning combinations
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
 ];
 let board, turn, winner;
 const boardSquares = document.querySelectorAll('.box');
 const restartButton = document.querySelector('#restartButton');

 const message = document.querySelector('h1');
const accessBoard = document.querySelector('#board');

 //Upon loading the app should.....To start game 
 restartButton.addEventListener('click',startGame);
 accessBoard.addEventListener('click', playerClick);

 function startGame(){
    //Initialize the board array to 9 nulls to represent empty squares.
    board = [null, null, null, null, null, null, null, null, null];
    //Initialize whose turn it is to (Player1)1 . will be represented by (PlayerO)-1.
    let Player1 = 1;
    let PlayerO = -1;
    //Initialize winner to null to represent that there is no winner or tie yet.
    winner = null;
    //Render the board:
    render();
 }
 function render(){
  //Loop over each of the 9 elements that represent the squares on the page
  board.forEach(myFunction);
  function myFunction(boardSquare,index){
      //Use the index of the iteration to access the mapped value from the board array.
      //Set the background color of the current element by using the value as a key on the colors lookup object (constant).
    boardSquares[index].style.background = colorsObj[boardSquare];
  }
  // Render a message:
  // If winner has a value other than null (game still in progress)
  if(winner!==null){
    message.innerHTML = 'Game still in progress.......';
  }
  //If winner is equal to 'T' (tie), render a tie message.
  else if(winner === 'T'){
    message.innerHTML = 'Its a tie...............'
  }
  //Otherwise, render a congratulatory message to which player has won - use the color name for the player.
  else{
    message.innerHTML = 'The winner is '+colorsObj[turn];
  }
 }

 //Handle a player clicking a square:
 function playerClick(){
     //Obtain the index of the square that was clicked
    let elements = document.getElementsByClassName("box");
    let idx='';
    for(let i=0; i<elements.length; i++) {
        idx += elements[i].id;
    }
    console.log(idx);
    //If the board has a value at the index, immediately return because that square is already taken.
	//If winner is not null, immediately return because the game is over.
    if(board[idx] || winner!==null){
        return;
    }
    // Update the board array at the index with the value of turn.
    board[idx] = turn;
    //Flip turns by multiplying turn by -1 (flips a 1 to -1, and vice-versa).
    turn = turn * -1;
    render();
}
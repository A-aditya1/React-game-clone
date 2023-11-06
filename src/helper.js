export const isWinner = (gameBoard, currentMove, currentPlayer) => {
    let board = [...gameBoard]
    board[currentMove] = currentPlayer;


    const winLines = [
        [0, 1, 2, 3],/*1   They all possibility of the winner*/
        [4, 5, 6, 7],/*2*/
        [8, 9, 10, 11],/*3*/
        [12, 13, 14, 15],/*4*/
        [0, 4, 8, 12],/*5*/
        [1, 5, 9, 13],/*6*/
        [2, 6, 10, 14],/*7*/
        [3, 7, 11, 15],/*8*/
        [0, 5, 10, 16],/*9*/
        [3, 6, 9, 12],/*10*/
    ];

    for (let i = 0; i < winLines.length; i++) {
        const [c1, c2, c3, c4] = winLines[i];

        if (board[c1] > 0 && board[c1] === board[c2] && board[c2] === board[c3] && board[c3] === board
        [c4]) {
            return true;
        }
    }
    return false;
}


/*{ let count = board.reduce((n , x) => n+ (x === 0),0);} // This logic for the Draw state Condition*/
export const isDraw = (gameBoard, currentMove, currentPlayer) => {
    let board = [...gameBoard]
    board[currentMove] = currentPlayer;

    let count = board.reduce((n , x) => n+ (x === 0),0);
    console.log(`count ${count}`);
    return count === 0;
}


/* Suggestion like logic and code {Like hint of the game }*/
export const getComputerMove = (gameBoard) =>{
let validMoves = [];
for(let i=0; i < gameBoard.length;i++){
    if (gameBoard[i] ===0){
        validMoves.push(i);
    }
   
}
let rndMove = Math.floor(Math.random () * validMoves.length );
return validMoves[rndMove];
}
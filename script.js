
board_container = document.querySelector('.board-container');

//factory to make players, takes a symbol object representing their symbol in the game x or O
const Player = (symbol) => {
    this.symbol = symbol;
    const get_symbol = () =>{
        return symbol;
    }
    return {get_symbol};
}
let current_turn = 1;
let board = ["","","","","","","","",""];
const render_board = () => {
    board_container.innerHTML = "";
    board.forEach((e,i)=>{
        board_container.innerHTML += `<div class="field" data-index="${i}" id="block_${i}" onclick="addPlayerMove(${i})">${board[i]}</div>`;
    })
}
//player symbols
const player1_symbol = "O";
const player2_symbol = "X";
const addPlayerMove = (idx) =>{
    if(board[idx] == ""){
        if (current_turn == 1){
            board[idx] = player1_symbol;
            current_turn = 2;
        }
        else{
            board[idx] = player2_symbol;
            current_turn = 1;
        }
    }
    render_board();
}
reset_btn = document.querySelector('.reset-btn');
reset_btn.addEventListener('click',() => {
    board = ["","","","","","","","",""];
    render_board();
})

render_board();
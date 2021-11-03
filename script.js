//factory to make players, takes a symbol object representing their symbol in the game x or O
const Player = (symbol) => {
    this.symbol = symbol;
    const get_symbol = () =>{
        return symbol;
    }
    return {get_symbol};
}
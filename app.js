///////////finction player////////

function player(name, symbol) {
    return {
        name,
        symbol,
    }
}

///////////function gameboard//////

let gameBoard = (() => {
    let puntuacionPlayerOne = 0;
    let puntuacionPlayerTwo = 0;
    function definResult(game) {
        if (hasWon().test(game.playerOne, game.tablet)) {
            puntuacionPlayerOne += 1;
            return game.playerOne.name;
        }else if (hasWon().test(game.playerTwo, game.tablet)) {
            puntuacionPlayerTwo += 1;
            return game.playerTwo.name;
        }else{
            return "Enpate"
        }
    };

    function getScore(game) {
        return `${game.playerOne.name}: ${puntuacionPlayerOne} vs ${game.playerTwo.name}: ${puntuacionPlayerTwo}`;
    }
    return {
        definResult,
        getScore
    }
})();


function hasWon() {
    function test(player, tablet) {
        for (let i = 0; i < tablet.length; i++) {
            let revez = tablet[i].length - 1;
            if (tablet[i][0] === player.symbol && tablet[i][1] === player.symbol && tablet[i][2] === player.symbol){
                return true;
            }else if (tablet[0][i] === player.symbol && tablet[1][i] === player.symbol && tablet[2][i] === player.symbol) {
                return true;
            }else if (tablet[0][0] === player.symbol && tablet[1][1] === player.symbol && tablet[2][2] === player.symbol) {
                return true;
            }else if (tablet[0][revez] === player.symbol && tablet[1][revez - 1] === player.symbol && tablet[2][revez - 2] === player.symbol) {
                return true;
            }
        }
        return false;
    }
    return{
        test,
    }
}

function game(playerOne, playerTwo, tablet) {
    return {
        playerOne,
        playerTwo,
        tablet
    }
}


let jugador1 = player("andres", "X")
let jugador2 = player("maria", "O")

let game1 = game(jugador1, jugador2, [["X", "X", "X"], ["", "", ""], ["", "", ""]])
let game2 = game(jugador1, jugador2,[["", "", "O"], ["X", "O", ""], ["O", "", ""]])
let game3 = game(jugador1, jugador2, [["X", "", ""], ["", "X", ""], ["", "", "X"]])
let game4 = game(jugador1, jugador2,[["", "", "O"], ["X", "", "O"], ["", "", "O"]])
let game5 = game(jugador1, jugador2, [["X", "", ""], ["X", "", ""], ["X", "", ""]])
let game6 = game(jugador1, jugador2,[["", "", "O"], ["X", "", "O"], ["", "", "O"]])



console.log(gameBoard.definResult(game1))
console.log(gameBoard.getScore(game1))
console.log(gameBoard.definResult(game2))
console.log(gameBoard.getScore(game2))
console.log(gameBoard.definResult(game3))
console.log(gameBoard.getScore(game3))
console.log(gameBoard.definResult(game4))
console.log(gameBoard.getScore(game4))
console.log(gameBoard.definResult(game5))
console.log(gameBoard.getScore(game5))
console.log(gameBoard.definResult(game6))
console.log(gameBoard.getScore(game6))

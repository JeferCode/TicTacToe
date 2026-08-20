///////////finction player////////

function player(name, symbol) {
    let scorePlayer = 0;
    return {
        name,
        symbol,
        addScore: function() {
            scorePlayer += 1;
        },
        seeScorePlayer: function() {
            console.log(scorePlayer);
        },
    }
}

///////////function gameboard//////

let gameBoard = (()=> {
    let victoria = "";
    return{
        getResult: function(game) {
            for (let i = 0; i < game.tablet.length; i++) { 
                let revez = game.tablet[i].length-1;
                if (game.tablet[i][0] === game.playerOne.symbol && game.tablet[i][1] === game.playerOne.symbol && game.tablet[i][2] === game.playerOne.symbol ||
                    game.tablet[0][i] === game.playerOne.symbol && game.tablet[1][i] === game.playerOne.symbol && game.tablet[2][i] === game.playerOne.symbol ||
                    game.tablet[0][0] === game.playerOne.symbol && game.tablet[1][1] === game.playerOne.symbol && game.tablet[2][2] === game.playerOne.symbol ||
                    game.tablet[0][revez] === game.playerOne.symbol && game.tablet[1][revez-1] === game.playerOne.symbol && game.tablet[2][revez-2] === game.playerOne.symbol
                ) {
                    game.playerOne.addScore();
                    victoria = game.playerOne.name;
                    return victoria;
                }else if (game.tablet[i][0] === game.playerTwo.symbol && game.tablet[i][1] === game.playerTwo.symbol && game.tablet[i][2] === game.playerTwo.symbol ||
                    game.tablet[0][i] === game.playerTwo.symbol && game.tablet[1][i] === game.playerTwo.symbol && game.tablet[2][i] === game.playerTwo.symbol ||
                    game.tablet[0][0] === game.playerTwo.symbol && game.tablet[1][1] === game.playerTwo.symbol && game.tablet[2][2] === game.playerTwo.symbol ||
                    game.tablet[0][revez] === game.playerTwo.symbol && game.tablet[1][revez-1] === game.playerTwo.symbol && game.tablet[2][revez-2] === game.playerTwo.symbol
                ) {
                    game.playerTwo.addScore();
                    victoria = game.playerOne.name;
                    return victoria;
                }
            }
        },
        getScore: function() {
            return score;
        }
    }
})();

function game(nameOne ,symbolOne , nameTwo, symbolTwo, tablet) {
    let playerOne = player(nameOne, symbolOne)
    let playerTwo = player(nameTwo, symbolTwo)
    return{
        playerOne,
        playerTwo,
        tablet
    }
}


//let jugador1 = player("andres", "X")
//let jugador2 = player("maria", "O")

let game1 = game("andres", "X", "maria", "O", [["X", "X", "X"], ["", "", ""], ["", "", ""]])
let game2 = game("andres", "O", "maria", "X", [["", "", ""], ["", "", ""], ["O", "O", "O"]])
let game3 = game("andres", "O", "maria", "X", [["X", "X", "X"], ["", "", ""], ["O", "", "O"]])
let game4 = game("andres", "O", "maria", "X", [["X", "X", "X"], ["", "", ""], ["O", "", "O"]])

console.log(game3)
console.log(gameBoard.getResult(game4))
console.log(game4.playerTwo.seeScorePlayer())
console.log(game4.playerOne.seeScorePlayer())

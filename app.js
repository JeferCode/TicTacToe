///////////finction player////////

function player(name, symbol) {
    return {
        name,
        symbol,
    }
}

///////////function gameboard//////
//podria poner una funcion para preguntar si un jugador gano, si la funcion responde que ningun jugador gano, es un empate, esto acortaria el ciclo de comprobaciones de definResult,

function hasWon(player, game) {
    function verify() {
        let revez = game.tablet[i].length - 1;
        if (game.tablet[i][0] === game.playerOne.symbol && game.tablet[i][1] === game.playerOne.symbol && game.tablet[i][2] === game.playerOne.symbol ||
            game.tablet[0][i] === game.playerOne.symbol && game.tablet[1][i] === game.playerOne.symbol && game.tablet[2][i] === game.playerOne.symbol ||
            game.tablet[0][0] === game.playerOne.symbol && game.tablet[1][1] === game.playerOne.symbol && game.tablet[2][2] === game.playerOne.symbol ||
            game.tablet[0][revez] === game.playerOne.symbol && game.tablet[1][revez - 1] === game.playerOne.symbol && game.tablet[2][revez - 2] === game.playerOne.symbol
        ) {
            puntuacionPlayerOne += 1;
            return game.playerOne.name;
        }
    }
}
    let gameBoard = (() => {
        let puntuacionPlayerOne = 0;
        let puntuacionPlayerTwo = 0;
        function definResult(game) {
            for (let i = 0; i < game.tablet.length; i++) {
                let revez = game.tablet[i].length - 1;
                if (game.tablet[i][0] === game.playerOne.symbol && game.tablet[i][1] === game.playerOne.symbol && game.tablet[i][2] === game.playerOne.symbol ||
                    game.tablet[0][i] === game.playerOne.symbol && game.tablet[1][i] === game.playerOne.symbol && game.tablet[2][i] === game.playerOne.symbol ||
                    game.tablet[0][0] === game.playerOne.symbol && game.tablet[1][1] === game.playerOne.symbol && game.tablet[2][2] === game.playerOne.symbol ||
                    game.tablet[0][revez] === game.playerOne.symbol && game.tablet[1][revez - 1] === game.playerOne.symbol && game.tablet[2][revez - 2] === game.playerOne.symbol
                ) {
                    puntuacionPlayerOne += 1;
                    return game.playerOne.name;
                } else if (game.tablet[i][0] === game.playerTwo.symbol && game.tablet[i][1] === game.playerTwo.symbol && game.tablet[i][2] === game.playerTwo.symbol ||
                    game.tablet[0][i] === game.playerTwo.symbol && game.tablet[1][i] === game.playerTwo.symbol && game.tablet[2][i] === game.playerTwo.symbol ||
                    game.tablet[0][0] === game.playerTwo.symbol && game.tablet[1][1] === game.playerTwo.symbol && game.tablet[2][2] === game.playerTwo.symbol ||
                    game.tablet[0][revez] === game.playerTwo.symbol && game.tablet[1][revez - 1] === game.playerTwo.symbol && game.tablet[2][revez - 2] === game.playerTwo.symbol
                ) {
                    puntuacionPlayerTwo += 1;
                    return game.playerTwo.name;
                }
            }
            return "Empate";
        };
        function getScore(game) {
            return `${game.playerOne.name}: ${puntuacionPlayerOne} vs ${game.playerTwo.name}: ${puntuacionPlayerTwo}`;
        }
        return {
            definResult,
            getScore
        }
    })();

    function game(nameOne, symbolOne, nameTwo, symbolTwo, tablet) {
        let playerOne = player(nameOne, symbolOne)
        let playerTwo = player(nameTwo, symbolTwo)
        return {
            playerOne,
            playerTwo,
            tablet
        }
    }


    //let jugador1 = player("andres", "X")
    //let jugador2 = player("maria", "O")

    let game1 = game("andres", "X", "maria", "O", [["X", "X", "X"], ["", "", ""], ["", "", ""]])
    let game2 = game("andres", "O", "maria", "X", [["", "", ""], ["X", "X", "X"], ["", "O", "O"]])
    let game3 = game("andres", "O", "maria", "X", [["X", "X", "X"], ["", "", ""], ["O", "", "O"]])
    let game4 = game("andres", "O", "maria", "X", [["X", "X", "X"], ["", "", ""], ["O", "", "O"]])
    let game5 = game("andres", "X", "maria", "O", [["X", "X", "O"], ["O", "X", "O"], ["O", "X", "X"]])


    console.log(hasWon(game1))

    /*console.log(gameBoard.definResult(game1))
    console.log(gameBoard.getScore(game1))
    console.log(gameBoard.definResult(game2))
    console.log(gameBoard.getScore(game2))
    console.log(gameBoard.definResult(game3))
    console.log(gameBoard.getScore(game3))
    console.log(gameBoard.definResult(game5))
    console.log(gameBoard.getScore(game5))*/

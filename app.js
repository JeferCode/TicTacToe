let tabla = document.getElementById("tabla")
let celdas = document.querySelectorAll(".celda")

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
        } else if (hasWon().test(game.playerTwo, game.tablet)) {
            puntuacionPlayerTwo += 1;
            return game.playerTwo.name;
        } else if (celdas !== "") {
            return "Enpate"
        }
    };

    function getScore(game) {
        return `${game.playerOne.name}: ${puntuacionPlayerOne} vs ${game.playerTwo.name}: ${puntuacionPlayerTwo}`;
    }

    function Draw(symbol, celda) {
        celda.textContent = `${symbol}`
    }

    return {
        definResult,
        getScore,
        Draw,
    }
})();


function hasWon() {
    function test(player, tablet) {
        for (let i = 0; i < tablet.length; i++) {
            let revez = tablet[i].length - 1;
            if (tablet[i][0] === player.symbol && tablet[i][1] === player.symbol && tablet[i][2] === player.symbol) {
                return true;
            } else if (tablet[0][i] === player.symbol && tablet[1][i] === player.symbol && tablet[2][i] === player.symbol) {
                return true;
            } else if (tablet[0][0] === player.symbol && tablet[1][1] === player.symbol && tablet[2][2] === player.symbol) {
                return true;
            } else if (tablet[0][revez] === player.symbol && tablet[1][revez - 1] === player.symbol && tablet[2][revez - 2] === player.symbol) {
                return true;
            }
        }
        return false;
    }
    return {
        test,
    }
}

function game(playerOne, playerTwo) {
    let tablet = [["", "", ""], ["", "", ""], ["", "", ""]]
    let actual = "X";
    function tabletDising(celda, lugar, arry) {
        if (celda.textContent === "") {
            if (lugar <= 2) {
                tablet[0][arry] = actual;
                gameBoard.Draw(actual, celda)
                if (actual === "X") {
                    actual = "O"
                } else {
                    actual = "X";
                }
            } else if (lugar <= 5 && lugar > 2) {
                tablet[1][arry] = actual;
                gameBoard.Draw(actual, celda)
                if (actual === "X") {
                    actual = "O"
                } else {
                    actual = "X";
                }
            } else if (lugar > 5) {
                tablet[2][arry] = actual;
                gameBoard.Draw(actual, celda)
                if (actual === "X") {
                    actual = "O"
                } else {
                    actual = "X";
                }
            }
        }else{
            return
        }
        console.log(tablet)
    }
    function getCurrentSymbol() {
        return actual;
    }
    return {
        playerOne,
        playerTwo,
        tablet,
        tabletDising,
        getCurrentSymbol
    }
}


let datos = celdas.forEach(celda => {
    celda.addEventListener("click", () => {
        let lugar = Number(celda.dataset.id);
        let lugarArray = Number(celda.dataset.array);
        game1.tabletDising(celda, lugar, lugarArray)
        
    })
})



let jugador1 = player("andres", "X")
let jugador2 = player("maria", "O")

let game1 = game(jugador1, jugador2)


//console.log(gameBoard.definResult(game1))

let tabla = document.getElementById("tabla")
let celdas = document.querySelectorAll(".celda")
let gamerOne = document.getElementById("nombre-jugado1");
let gamerTwo = document.getElementById("nombre-jugado2");
let btnIniciar = document.getElementById("iniciar");
let btnNuevaPartida = document.getElementById("nueva-partida");
let score = document.getElementById("puntuacion");

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
    let winner = false;

    function WinnerFalse() {
        winner = false;
    }

    function definResult() {
        if (!winner) {
            if (hasWon().test(game.getPLayers().playerOne.symbol)) {
                puntuacionPlayerOne += 1;
                winner = true
                console.log(game.getPLayers().playerOne.name);
                getScore()
                return;
            } else if (hasWon().test(game.getPLayers().playerTwo.symbol)) {
                puntuacionPlayerTwo += 1;
                winner = true
                console.log(game.getPLayers().playerTwo.name);
                getScore()
                return;
            } else if (!game.emptySpaces()) {
                return "Enpate"
            }
        }
    };

    function getScore() {
        return score.textContent = `${game.getPLayers().playerOne.name}: ${puntuacionPlayerOne} vs ${game.getPLayers().playerTwo.name}: ${puntuacionPlayerTwo}`;
    }

    function show(tablet) {
        if (!winner) {
            tablet.forEach((element, i) => {
                celdas[i].textContent = element;
            })
            definResult()
        }
    }
    function newScore() {
        puntuacionPlayerOne = 0;
        puntuacionPlayerTwo = 0;
        getScore()
    }

    btnIniciar.addEventListener("click", () => {
        if (gamerOne.value !== "" && gamerTwo.value !== "") {
            cellVerify().Start()
            gameBoard.getScore()
        }
    })

    btnNuevaPartida.addEventListener("click", () => {
        game.newGame();
    })


    return {
        definResult,
        getScore,
        show,
        newScore,
        WinnerFalse
    }
})();


function hasWon() {
    function test(player) {
        if (game.getTablet()[0] === player && game.getTablet()[1] === player && game.getTablet()[2] === player) {
            return true;
        } else if (game.getTablet()[3] === player && game.getTablet()[4] === player && game.getTablet()[5] === player) {
            return true;
        } else if (game.getTablet()[6] === player && game.getTablet()[7] === player && game.getTablet()[8] === player) {
            return true;
        } else if (game.getTablet()[0] === player && game.getTablet()[3] === player && game.getTablet()[6] === player) {
            return true;
        } else if (game.getTablet()[1] === player && game.getTablet()[4] === player && game.getTablet()[7] === player) {
            return true;
        } else if (game.getTablet()[2] === player && game.getTablet()[5] === player && game.getTablet()[8] === player) {
            return true;
        } else if (game.getTablet()[0] === player && game.getTablet()[4] === player && game.getTablet()[8] === player) {
            return true;
        } else if (game.getTablet()[2] === player && game.getTablet()[4] === player && game.getTablet()[6] === player) {
            return true;
        }
        return false;
    }
    return {
        test,
    }
}

let game = (() => {
    let tablet = ["", "", "", "", "", "", "", "", ""]
    let actual = "X";
    function tabletDising(celda, lugar) {
        if (tablet[lugar] === "") {
            tablet[lugar] = actual;
            gameBoard.show(tablet, false)
            if (actual === "X") {
                actual = "O"
            } else {
                actual = "X";
            }
        } else {
            return;
        }
        console.log(tablet)
    }
    function getCurrentSymbol() {
        return actual;
    }
    function newGame() {
        gamerOne.value = "";
        gamerTwo.value = "";
        tablet = ["", "", "", "", "", "", "", "", ""]
        actual = "X"
        gameBoard.WinnerFalse();
        gameBoard.show(tablet)
        gameBoard.newScore()
    }

    function getTablet() {
        return tablet;
    }
    function getPLayers() {
        let playerOne = player(gamerOne.value, "X");
        let playerTwo = player(gamerTwo.value, "O");
        return {
            playerOne,
            playerTwo
        }
    }
    function emptySpaces() {
        return tablet.some(element => element !== "X" && element !== "O")
    }
    return {
        tabletDising,
        getCurrentSymbol,
        getTablet,
        getPLayers,
        emptySpaces,
        newGame
    }
})()


function cellVerify() {
    function Start() {
        if (gamerOne.value !== "" && gamerTwo.value !== "") {
            celdas.forEach(celda => {
                celda.addEventListener("click", () => {
                    let lugar = Number(celda.dataset.id);
                    game.tabletDising(celda, lugar)
                    console.log(gameBoard.definResult())

                })
            })
        }

    }
    return {
        Start
    }
}

score.textContent = gameBoard.getScore();



let tabla = document.getElementById("tabla")
let celdas = document.querySelectorAll(".celda")
let gamerOne = document.getElementById("nombre-jugado1");
let gamerTwo = document.getElementById("nombre-jugado2");
let btnIniciar = document.getElementById("iniciar");
let scoreOne = document.getElementById("puntuacion-playerOne");
let scoreTwo = document.getElementById("puntuacion-playerTwo");
let message = document.getElementById("message");

///////////finction player////////

function player(name, symbol) {
    return {
        name,
        symbol,
    }
}

let Dom = (() => {
    let started = false;
    function tabletDising(lugar) {
        if (gameBoard.getTablet()[lugar] === "") {
            if (!gameBoard.getWinner()) {
                gameBoard.getTablet()[lugar] = game.getCurrentSymbol();
                show()
                gameBoard.definResult()
                if (game.getCurrentSymbol() === "X") {
                    game.choseSymbol("O");
                } else {
                    game.choseSymbol("X");
                }
            }

        } else {
            return;
        }
    }

    function showMessage(result) {
        if (result === "Empate") {
            message.textContent = `${result}`;
            tabla.classList.add("noVisible")
            message.classList.remove("noVisible")
            setTimeout(() => {
                message.classList.add("noVisible");
                tabla.classList.remove("noVisible");
            }, 3000);
        } else {
            message.textContent = `${result} win`;
            tabla.classList.add("noVisible")
            message.classList.remove("noVisible")
            setTimeout(() => {
                message.classList.add("noVisible");
                tabla.classList.remove("noVisible");
            }, 1000);
        }
    }

    function show() {
        if (!gameBoard.getWinner()) {
            gameBoard.getTablet().forEach((element, i) => {
                celdas[i].textContent = element;
            })
        }
    }

    function choseStarted() {
        started = true;
    }

    function start() {
        btnIniciar.addEventListener("click", () => {
            gameBoard.getScore()
            game.reStar()
        })
    }

    celdas.forEach(celda => {
        celda.addEventListener("click", () => {
            if (gamerOne.value === "" || gamerTwo.value === "" || started === false) {
                return;
            }
            let lugar = Number(celda.dataset.id);
            tabletDising(lugar)
        })
    })

    return {
        tabletDising,
        show,
        start,
        showMessage,
        choseStarted
    }
})()

///////////function gameboard//////

let gameBoard = (() => {
    let tablet = ["", "", "", "", "", "", "", "", ""]
    let puntuacionPlayerOne = 0;
    let puntuacionPlayerTwo = 0;
    let winner = false;

    function WinnerFalse() {
        winner = false;
    }
    function getWinner() {
        return winner;
    }

    function reStarTablet() {
        tablet = ["", "", "", "", "", "", "", "", ""]
    }

    function getTablet() {
        return tablet;
    }

    function definResult() {
        if (!winner) {
            if (hasWon(game.getPLayers().playerOne.symbol)) {
                puntuacionPlayerOne += 1;
                winner = true
                getScore()
                Dom.showMessage(game.getPLayers().playerOne.name);
                return;
            } else if (hasWon(game.getPLayers().playerTwo.symbol)) {
                puntuacionPlayerTwo += 1;
                winner = true;
                getScore()
                Dom.showMessage(game.getPLayers().playerTwo.name);
                return;
            } else if (!game.emptySpaces()) {
                Dom.showMessage("Empate");
                return;
            }
        }

    };

    function hasWon(player) {
        if (tablet[0] === player && tablet[1] === player && tablet[2] === player) {
            return true;
        } else if (tablet[3] === player && tablet[4] === player && tablet[5] === player) {
            return true;
        } else if (tablet[6] === player && tablet[7] === player && tablet[8] === player) {
            return true;
        } else if (tablet[0] === player && tablet[3] === player && tablet[6] === player) {
            return true;
        } else if (tablet[1] === player && tablet[4] === player && tablet[7] === player) {
            return true;
        } else if (tablet[2] === player && tablet[5] === player && tablet[8] === player) {
            return true;
        } else if (tablet[0] === player && tablet[4] === player && tablet[8] === player) {
            return true;
        } else if (tablet[2] === player && tablet[4] === player && tablet[6] === player) {
            return true;
        }
        return false;
    }


    function getScore() {
        scoreOne.textContent = puntuacionPlayerOne;
        scoreTwo.textContent = puntuacionPlayerTwo;
    }


    return {
        definResult,
        getScore,
        WinnerFalse,
        getTablet,
        reStarTablet,
        getWinner
    }
})();



let game = (() => {
    let actual = "X";
    function choseSymbol(symbol) {
        actual = `${symbol}`;
    }

    function getCurrentSymbol() {
        return actual;
    }
    function reStar() {
        gameBoard.reStarTablet()
        actual = "X"
        Dom.choseStarted()
        gameBoard.WinnerFalse();
        Dom.show()
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
        return gameBoard.getTablet().some(element => element !== "X" && element !== "O")
    }
    return {
        choseSymbol,
        getCurrentSymbol,
        getPLayers,
        emptySpaces,
        reStar
    }
})()

Dom.start()

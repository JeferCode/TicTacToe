let tabla = document.getElementById("tabla")
let celdas = document.querySelectorAll(".celda")
let gamerOne = document.getElementById("nombre-jugado1");
let gamerTwo = document.getElementById("nombre-jugado2");
let btnIniciar = document.getElementById("iniciar")

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

    function definResult() {
        if (hasWon().test(game.getPLayers().playerOne.symbol)) {
            puntuacionPlayerOne += 1;
            console.log(game.getPLayers().playerOne.name);
            return;
        } else if (hasWon().test(game.getPLayers().playerTwo.symbol)) {
            puntuacionPlayerTwo += 1;
            console.log(game.getPLayers().playerTwo.name);
            return;
        } else if (!game.emptySpaces()) {
            return "Enpate"
        }
    };

    function getScore(game) {
        return `${game.getPLayers.playerOne.name}: ${puntuacionPlayerOne} vs ${game.playerTwo.name}: ${puntuacionPlayerTwo}`;
    }

    function show(tablet) {
        tablet.forEach((element, i) => {
            celdas[i].textContent = element;
        })
        definResult()
    }

    return {
        definResult,
        getScore,
        show
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
    let playerOne = player(gamerOne.value, "X")
    let playerTwo = player(gamerTwo.value, "O")
    function tabletDising(celda, lugar) {
        if (celda.textContent === "") {
            tablet[lugar] = actual;
            if (gameBoard.definResult() !== game.getPLayers().playerOne.name || gameBoard.definResult() == game.getPLayers().playerTwo.name){
                gameBoard.show(tablet)
            }
            if (actual === "X") {
                actual = "O"
            } else {
                actual = "X";
            }
        } else {
            return
        }
        console.log(tablet)
    }
    function getCurrentSymbol() {
        return actual;
    }

    function getTablet() {
        return tablet;
    }
    function getPLayers() {
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
        emptySpaces
    }
})()


function startGame() {
    function Start() {
        celdas.forEach(celda => {
            celda.addEventListener("click", () => {
                let lugar = Number(celda.dataset.id);
                game.tabletDising(celda, lugar)
                console.log(gameBoard.definResult())

            })
        })
    }
    return{
        Start
    }
}

btnIniciar.addEventListener("click", ()=>{
    if (gamerOne.value !== "" && gamerTwo.value !== "") {
        startGame().Start()
    }
})

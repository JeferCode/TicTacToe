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

let gameBoard = ((playerOne, playerTwo, tablet)=> {
    let score = [0, 0]
    return{
        tablet,
        playerOne,
        playerTwo,
        seeScore: function () {
            console.log(`el puntaje actual es: ${playerOne.name}: ${score[0]}, ${playerTwo.name}: ${score[1]}`)
        },
        getResult: function () {
            let revez = tablet[i].length-1;
            for (let i = 0; i < tablet.length; i++) { 
                if (tablet[i][0] === playerOne.symbol && tablet[i][1] === playerOne.symbol && tablet[i][2] === playerOne.symbol ||
                    tablet[0][i] === playerOne.symbol && tablet[1][i] === playerOne.symbol && tablet[2][i] === playerOne.symbol ||
                    tablet[0][0] === playerOne.symbol && tablet[1][1] === playerOne.symbol && tablet[2][2] === playerOne.symbol ||
                    tablet[0][revez] === playerOne.symbol && tablet[1][revez-1] === playerOne.symbol && tablet[2][revez-2] === playerOne.symbol
                ) {
                    score[0] += 1;
                    playerOne.addScore();
                    return 
                }else if (tablet[i][0] === playerTwo.symbol && tablet[i][1] === playerTwo.symbol && tablet[i][2] === playerTwo.symbol ||
                    tablet[0][i] === playerTwo.symbol && tablet[1][i] === playerTwo.symbol && tablet[2][i] === playerTwo.symbol ||
                    tablet[0][0] === playerTwo.symbol && tablet[1][1] === playerTwo.symbol && tablet[2][2] === playerTwo.symbol ||
                    tablet[0][revez] === playerTwo.symbol && tablet[1][revez-1] === playerTwo.symbol && tablet[2][revez-2] === playerTwo.symbol
                ) {
                    score[1] += 1;
                    playerTwo.addScore();
                    return 
                }
            }
        }
    }
})();



let jugador1 = player("andres", "X")
let jugador2 = player("maria", "O")


gameBoard(jugador1, jugador2, [["", "", ""], ["", "", ""], ["O", "O", "O"]]);

gameBoard.getResult()
gameBoard.seeScore()

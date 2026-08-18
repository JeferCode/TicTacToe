function Player(nombre, simbolo, puntuacion = 0) {
    this.nombre = nombre;
    this.simbolo = simbolo;
    this.puntuacion = puntuacion;

    this.aumentarPuntuacion = function () {
        this.puntuacion += 1;
    }

    this.mostrarPuntuacion = function () {
        return this.puntuacion;
    }
}


function Partida(jugadorUno, jugadorDos, ganador, jugadas = ["", "", "", "", "", "", "", "", ""]) {
    this.jugadorUno = jugadorUno;
    this.jugadorDos = jugadorDos;
    this.ganador = ganador;
    this.jugadas = jugadas;

    this.mostrarGanador = function (jugador) {
        this.ganador.aumentarPuntuacion();
        return this.ganador;
    }
}

function AgregarJugada(partida, simbolo, lugar) {
    this.partida = partida;
    this.simbolo = simbolo;
    this.lugar = lugar;

    this.dibujar = function () {
            if (this.partida.jugadas[this.lugar]!== "X" && this.partida.jugadas[this.lugar]!== "O") {
                this.partida.jugadas[this.lugar] = (`${this.simbolo}`)
            }
        }

    
}


let jugadorUno = new Player("juan", "X")
let jugadorDos = new Player("mario", "O")

let partidaUno = new Partida(jugadorUno, jugadorDos, jugadorDos)


//console.log(partidaUno.mostrarGanador())
//console.log(partidaUno.mostrarGanador())

let jugada1 = new AgregarJugada(partidaUno, "X", 0);
let jugada2 = new AgregarJugada(partidaUno, "O", 3);
let jugada3 = new AgregarJugada(partidaUno, "X", 1);
let jugada4 = new AgregarJugada(partidaUno, "O", 8);

let jugada5 = new AgregarJugada(partidaUno, "X", 8);
jugada1.dibujar();
jugada2.dibujar();
jugada3.dibujar();
jugada4.dibujar();
jugada5.dibujar();


console.log(partidaUno)
let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntos = 0;
let tiempo = 10;
let intervalo;

const ALTO_GATO = 40;
const ANCHO_GATO = 30;
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;

function iniciarJuego() {
    intervalo = setInterval(restarTiempo, 1000);
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarComida();
    graficarGato();
    aparecerComida();
    detectarColision();
}

function actualizarPantalla() {
    limpiarcanva();
    graficarGato();
    graficarComida();
}

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#949494");
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#F09F69")
}

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarcanva() {
    ctx.clearRect(0,0,canvas.width,canvas.height,);
    graficarComida();
}

function moverIzquierda() {
    gatoX = gatoX - 10;
    actualizarPantalla();
    detectarColision();
}

function moverDerecha() {
    gatoX = gatoX + 10;
    actualizarPantalla();
    detectarColision();
}

function moverArriba() {
    gatoY = gatoY - 10;
    actualizarPantalla();
    detectarColision();
}

function moverAbajo() {
    gatoY = gatoY + 10;
    actualizarPantalla();
    detectarColision();
}

function detectarColision() {
    if (comidaX + ANCHO_COMIDA > gatoX &&
        comidaX < gatoX + ANCHO_GATO &&
        comidaY + ALTO_COMIDA > gatoY &&
        comidaY < gatoY + ALTO_GATO) {
        alert("bien hecho, sigue comiendo para parecer a garlfield");
        aparecerComida();
        puntos = puntos + 1;
        mostrarEnSpan("puntos", puntos);
        tiempo = tiempo + 1;
        mostrarEnSpan("tiempo", tiempo);
        if (puntos == 6) {
            alert("GANADOR DE GANADORES");
            clearInterval(intervalo);
        }
    }
}

function aparecerComida() {
    comidaX = generarAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaY = generarAleatorio(0,canvas.height-ALTO_COMIDA);
    actualizarPantalla();
}

function restarTiempo() {
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);
    if (tiempo == 0) {
        alert ("no lo lograste, no serás tan grande como garlfield");
        clearInterval(intervalo)
    }
}

function reiniciar() {
    puntaje = 0;
    tiempo = 10;
    mostrarEnSpan("tiempo", tiempo);
    mostrarEnSpan("puntaje", puntaje);
    iniciar();
}
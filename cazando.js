let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 40;
const ANCHO_GATO = 30;
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;

function iniciarJuego() {
    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarComida();
    graficarGato();
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
    ctx.clearRect(0,0,canvas.width,canvas.height);
    graficarComida();
}

function moverIzquierda() {
    gatoX = gatoX - 10;
    limpiarcanva();
    graficarGato();
}

function moverDerecha() {
    gatoX = gatoX + 10;
    limpiarcanva();
    graficarGato();
}

function moverArriba() {
    gatoY = gatoY - 10;
    limpiarcanva();
    graficarGato();
}

function moverAbajo() {
    gatoY = gatoY + 10;
    limpiarcanva();
    graficarGato();
}
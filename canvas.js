
var jugador = 1;

var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext('2d');
var turnoAlert = document.getElementById("Turno");

var cuadroTam = 100;

canvas.height = cuadroTam*3;
canvas.width = cuadroTam*3;
canvas.style.cursor = "pointer";

var matrix = [];
for(var i=0; i<3; i++) {
    matrix[i] = new Array(3);
}
   
// ------------ DIBUJAR TABLERO --------------- 
ctx.lineWidth = 12;
ctx.lineCap = 'round';
ctx.strokeStyle = "#2c3e50";

    // Verticales
ctx.moveTo(cuadroTam, 10);
ctx.lineTo(cuadroTam, cuadroTam*3-10);
ctx.moveTo(cuadroTam*2, 10);
ctx.lineTo(cuadroTam*2, cuadroTam*3-10);
    //Horizontales
ctx.moveTo(10, cuadroTam);
ctx.lineTo(cuadroTam*3-10, cuadroTam);
ctx.moveTo(10, cuadroTam*2);
ctx.lineTo(cuadroTam*3-10, cuadroTam*2);

ctx.stroke();


// --- IDENTIFICAR DONDE CLICKEA EL USUARIO ---
function getPosicionMouseConRespectoACanvas (event) {
    var rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
}

canvas.addEventListener('mouseup', function (event) {
    var posicionMouseEnCanvas = getPosicionMouseConRespectoACanvas(event);

    dibujarFigura(posicionMouseEnCanvas);
    if(yaGanoAlguien()){
        cambiarTurno();
        canvas.style.pointerEvents = "none";
        dibujarLineaGanador();
        turnoAlert.innerHTML = "¡Ganó el Jugador " + jugador + "!";
    }
});

// --- IDENTIFICAR DONDE HACE HOVER EL USUARIO ---

canvas.addEventListener('mouseover', function (event) {
    console.log("TODO: Hacer que se iluminen las celdas");
});


// --- FUNCIONES PARA DIBUJAR XOXOXOXO ---
function dibujarFigura(posicionMouse){
    var xBordeInf; var xBordeSup;
    var yBordeInf; var yBordeSup;

    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 3; y++) {
            xBordeInf = x * 100;
            yBordeInf = y * 100;
            xBordeSup = xBordeInf + cuadroTam;
            yBordeSup = yBordeInf + cuadroTam;

            // Si cae dentro de la seccion x,y
            if (posicionMouse.x > xBordeInf && posicionMouse.x < xBordeSup &&
                posicionMouse.y > yBordeInf && posicionMouse.y < yBordeSup){
                    var xMatrix = xBordeInf / 100;
                    var yMatrix = yBordeInf / 100;
                if(jugador == 1) {
                    if(matrix[xMatrix][yMatrix] == undefined){
                        dibujarX(xBordeInf, yBordeInf);
                        cambiarTurno();
                        matrix[xMatrix][yMatrix] = 1;
                    }
                }
                else {
                    if(matrix[xMatrix][yMatrix] == undefined){
                        dibujarO(xBordeInf, yBordeInf);
                        cambiarTurno();
                        matrix[xMatrix][yMatrix] = 2;
                    }
                }
            }
        }
    }
}

function dibujarX(xInf, yInf){
    var margen = cuadroTam/5 * 1.5;

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#e74c3c";
    ctx.beginPath();

    ctx.moveTo(xInf + margen, yInf + margen);
    ctx.lineTo(xInf + cuadroTam - margen, yInf + cuadroTam - margen);
    ctx.moveTo(xInf + cuadroTam - margen, yInf + margen);
    ctx.lineTo(xInf + margen, yInf + cuadroTam - margen);

    ctx.stroke();
}

function dibujarO(xInf, yInf){
    var mitadCuadro = cuadroTam/2;
    var xCentro = xInf + mitadCuadro;
    var yCentro = yInf + mitadCuadro;
    var radio = cuadroTam/5;

    ctx.lineWidth = 10;
    ctx.strokeStyle = "#3498db";
    ctx.beginPath();
    ctx.arc(xCentro, yCentro, radio, 0, 2*Math.PI);
    ctx.stroke();
}

function dibujarLineaGanador(){
    var caso = yaGanoAlguien();
    console.log(caso);
    var mitadCuadro = cuadroTam/2;
    ctx.strokeStyle = "rgba(26, 188, 156, .8)";
    ctx.beginPath();

    switch(caso){
        case 1:
            ctx.moveTo(mitadCuadro, mitadCuadro);
            ctx.lineTo(mitadCuadro, cuadroTam*3-mitadCuadro);
            break;
        case 2:
            ctx.moveTo(cuadroTam*1+mitadCuadro, mitadCuadro);
            ctx.lineTo(cuadroTam*1+mitadCuadro, cuadroTam*3-mitadCuadro);
            break;
        case 3:
            ctx.moveTo(cuadroTam*2+mitadCuadro, mitadCuadro);
            ctx.lineTo(cuadroTam*2+mitadCuadro, cuadroTam*3-mitadCuadro);
            break;
        case 4:
            ctx.moveTo(mitadCuadro, mitadCuadro);
            ctx.lineTo(cuadroTam*2+mitadCuadro, mitadCuadro);
            break;
        case 5:
            ctx.moveTo(mitadCuadro, cuadroTam+mitadCuadro);
            ctx.lineTo(cuadroTam*2+mitadCuadro, cuadroTam+mitadCuadro);
            break;
        case 6:
            ctx.moveTo(mitadCuadro, cuadroTam*2+mitadCuadro);
            ctx.lineTo(cuadroTam*2+mitadCuadro, cuadroTam*2+mitadCuadro);
            break;
        case 7:
            ctx.moveTo(mitadCuadro, mitadCuadro);
            ctx.lineTo(cuadroTam*2+mitadCuadro, cuadroTam*2+mitadCuadro);
            break;
        case 8:
            ctx.moveTo(cuadroTam*2+mitadCuadro, mitadCuadro);
            ctx.lineTo(mitadCuadro, cuadroTam*3-mitadCuadro);
            break;
    }
    ctx.stroke();
}

// --- FUNCIONES DE LÓGICA DEL JUEGO ---
function cambiarTurno(){
    var color;
    if (jugador == 1) {
        jugador = 2;
        color = "#3498db";
    }
    else {
        jugador = 1;
        color = "#e74c3c";
    }

    turnoAlert.style.color = color;
    turnoAlert.innerHTML = "Turno de Jugador " + jugador;
}

function yaGanoAlguien(){
         if (matrix[0][0] == matrix[0][1] && matrix[0][0] == matrix[0][2] && matrix[0][0] != undefined) return 1; // |  
    else if (matrix[1][0] == matrix[1][1] && matrix[1][0] == matrix[1][2] && matrix[1][0] != undefined) return 2; //   |
    else if (matrix[2][0] == matrix[2][1] && matrix[2][0] == matrix[2][2] && matrix[2][0] != undefined) return 3; //     |
    else if (matrix[0][0] == matrix[1][0] && matrix[0][0] == matrix[2][0] && matrix[0][0] != undefined) return 4; //  ^-
    else if (matrix[0][1] == matrix[1][1] && matrix[0][1] == matrix[2][1] && matrix[0][1] != undefined) return 5; //   -
    else if (matrix[0][2] == matrix[1][2] && matrix[0][2] == matrix[2][2] && matrix[0][2] != undefined) return 6; //  v-
    else if (matrix[0][0] == matrix[1][1] && matrix[0][0] == matrix[2][2] && matrix[0][0] != undefined) return 7; //   \
    else if (matrix[2][0] == matrix[1][1] && matrix[2][0] == matrix[0][2] && matrix[2][0] != undefined) return 8; //   /
    else return false;
}
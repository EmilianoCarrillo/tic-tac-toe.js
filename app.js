
var uno = document.getElementById("Uno"),
    dos = document.getElementById("Dos"),
    tres = document.getElementById("Tres"),
    cuatro = document.getElementById("Cuatro"),
    cinco = document.getElementById("Cinco"),
    seis = document.getElementById("Seis"),
    siete = document.getElementById("Siete"),
    ocho = document.getElementById("Ocho"),
    nueve = document.getElementById("Nueve");

var turnoAlert = document.getElementById("Turno");
var cuadros = document.getElementsByClassName("cuadro");

var turno1 = true;

var cuadroClickeado = function() {
    if(turno1){
        this.style.color = "#e74c3c";
        this.innerHTML = "x";
        if(ganador()){
            turnoAlert.innerHTML = "¡GANÓ EL JUGADOR 1!";
            for(var i = 0; i<cuadros.length; i++){
                cuadros[i].style.pointerEvents = "none";
            }
            return;
        }
        turnoAlert.style.color = "#3498db";
        turnoAlert.innerHTML = "Turno del Jugador 2";
        turno1 = !turno1;
    } else{
        this.style.color = "#3498db";
        this.innerHTML = "o";
        if(ganador()){
            turnoAlert.innerHTML = "¡GANÓ EL JUGADOR 2!";
            for(var i = 0; i<cuadros.length; i++){
                cuadros[i].style.pointerEvents = "none";
            }
            return;
        }
        turnoAlert.style.color = "#e74c3c";
        turnoAlert.innerHTML = "Turno del Jugador 1";
        turno1 = !turno1;
    }
    this.style.pointerEvents = "none";
};

for (var i = 0; i < cuadros.length; i++) {
    cuadros[i].addEventListener('click', cuadroClickeado, false);
}

function unclickables(current){
    current.style.pointerEvents = "none";
}

function ganador(){
    var color = "#1abc9c";
    console.log(uno.innerHTML + " " + dos.innerHTML + " " + tres.innerHTML);
    if(uno.innerHTML == dos.innerHTML && uno.innerHTML == tres.innerHTML && uno.innerHTML != ""){
        uno.style.background = color;
        dos.style.background = color;
        tres.style.background = color;
        return true;
    }
    else if(cuatro.innerHTML == cinco.innerHTML && cuatro.innerHTML == seis.innerHTML && cuatro.innerHTML != ""){
        cuatro.style.background = color;
        cinco.style.background = color;
        seis.style.background = color;
        return true;
    }
    else if(siete.innerHTML == ocho.innerHTML && siete.innerHTML == nueve.innerHTML && siete.innerHTML != ""){
        siete.style.background = color;
        ocho.style.background = color;
        nueve.style.background = color;
        return true;
    }
    else if(uno.innerHTML == cuatro.innerHTML && uno.innerHTML == siete.innerHTML && uno.innerHTML != ""){
        uno.style.background = color;
        cuatro.style.background = color;
        siete.style.background = color;
        return true;
    }
    else if(dos.innerHTML == cinco.innerHTML && dos.innerHTML == ocho.innerHTML && dos.innerHTML != ""){
        dos.style.background = color;
        cinco.style.background = color;
        ocho.style.background = color;
        return true;
    }
    else if(tres.innerHTML == seis.innerHTML && tres.innerHTML == nueve.innerHTML && tres.innerHTML != ""){
        tres.style.background = color;
        seis.style.background = color;
        nueve.style.background = color;
        return true;
    }
    else if(uno.innerHTML == cinco.innerHTML && uno.innerHTML == nueve.innerHTML && uno.innerHTML != ""){
        uno.style.background = color;
        cinco.style.background = color;
        nueve.style.background = color;
        return true;
    }
    else if(tres.innerHTML == cinco.innerHTML && tres.innerHTML == siete.innerHTML && tres.innerHTML != ""){
        tres.style.background = color;
        cinco.style.background = color;
        siete.style.background = color;
        return true;
    }
}


function reset(){
    location.reload();
}
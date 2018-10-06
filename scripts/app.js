
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

function ganador(){
    var color = "#1abc9c";
    console.log(cuadros[0].innerHTML + " " + cuadros[1].innerHTML + " " + cuadros[2].innerHTML);
    if(cuadros[0].innerHTML == cuadros[1].innerHTML && cuadros[0].innerHTML == cuadros[2].innerHTML && cuadros[0].innerHTML != ""){
        cuadros[0].style.background = color;
        cuadros[1].style.background = color;
        cuadros[2].style.background = color;
        return true;
    }
    else if(cuadros[3].innerHTML == cuadros[4].innerHTML && cuadros[3].innerHTML == cuadros[5].innerHTML && cuadros[3].innerHTML != ""){
        cuadros[3].style.background = color;
        cuadros[4].style.background = color;
        cuadros[5].style.background = color;
        return true;
    }
    else if(cuadros[6].innerHTML == cuadros[7].innerHTML && cuadros[6].innerHTML == cuadros[8].innerHTML && cuadros[6].innerHTML != ""){
        cuadros[6].style.background = color;
        cuadros[7].style.background = color;
        cuadros[8].style.background = color;
        return true;
    }
    else if(cuadros[0].innerHTML == cuadros[3].innerHTML && cuadros[0].innerHTML == cuadros[6].innerHTML && cuadros[0].innerHTML != ""){
        cuadros[0].style.background = color;
        cuadros[3].style.background = color;
        cuadros[6].style.background = color;
        return true;
    }
    else if(cuadros[1].innerHTML == cuadros[4].innerHTML && cuadros[1].innerHTML == cuadros[7].innerHTML && cuadros[1].innerHTML != ""){
        cuadros[1].style.background = color;
        cuadros[4].style.background = color;
        cuadros[7].style.background = color;
        return true;
    }
    else if(cuadros[2].innerHTML == cuadros[5].innerHTML && cuadros[2].innerHTML == cuadros[8].innerHTML && cuadros[2].innerHTML != ""){
        cuadros[2].style.background = color;
        cuadros[5].style.background = color;
        cuadros[8].style.background = color;
        return true;
    }
    else if(cuadros[0].innerHTML == cuadros[4].innerHTML && cuadros[0].innerHTML == cuadros[8].innerHTML && cuadros[0].innerHTML != ""){
        cuadros[0].style.background = color;
        cuadros[4].style.background = color;
        cuadros[8].style.background = color;
        return true;
    }
    else if(cuadros[2].innerHTML == cuadros[4].innerHTML && cuadros[2].innerHTML == cuadros[6].innerHTML && cuadros[2].innerHTML != ""){
        cuadros[2].style.background = color;
        cuadros[4].style.background = color;
        cuadros[6].style.background = color;
        return true;
    }
}

function reset(){
    location.reload();
}
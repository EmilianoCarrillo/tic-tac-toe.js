function cambiarVersion(){
    var canvasVersion = document.getElementById("Canvas");
    var tableVersion = document.getElementById("Tablero");

    if(canvasVersion.style.display == "none"){
        canvasVersion.style.display = "block";
        tableVersion.style.display = "none";
    } else{
        canvasVersion.style.display = "none";
        tableVersion.style.display = "block";
    }
}
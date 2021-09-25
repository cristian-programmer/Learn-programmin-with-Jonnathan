alert("Ir a votar")


function verificar(){
    var edad = document.getElementById("edad").value
    if(edad >= 18) {
        alert("Puede votar")
    }else {
        alert("No puede votar")
    }
}


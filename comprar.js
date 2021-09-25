function comprarLeche(){ // body of function
    var money = document.getElementById("money").value
    if(money >= 10000){
        alert("tu dinero es: " + money + " puedes comprar leche")
    }else {
        alert("tu dinero es: " + money + " no puedes comprar leche")
    }
} 


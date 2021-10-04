alert("Hola! Bienvenid@ a la calculadora de potencias de Nicolas Arcusin");
var seguir = true;

while(seguir){
    var numeroBase = parseInt(prompt("Ingresar el numero base:"));
    var numeroExponente = parseInt(prompt("Ingresar el numero exponente:"));
    var numeroFinal = 1;

    for(let i = 0; i <numeroExponente; i++){
        numeroFinal = numeroFinal * numeroBase;
    }

    alert(numeroBase + " elevado a la " + numeroExponente + " es igual a " + numeroFinal);
    
    do {
        var respuesta = prompt("Desea hacer otro calculo? y/n");
        if(respuesta == "y"){
            seguir = true;
            break;
        }
        else if(respuesta == "n"){
            seguir = false;
            break;
        }
    } while (respuesta != 'y' && respuesta!= 'n');
}

alert("Muchas gracias por usar mi calculadora de potencias, que tenga un buen dia");

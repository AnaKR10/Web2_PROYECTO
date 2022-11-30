function MuestraNom() {
    alert('Ana Karen');
}

function PreguntaNom() {
    let nombre = prompt("¿Cual es tu nombre?");
    alert(nombre);
}
function Suma() {
    let num1 = prompt("¿Cual es el primer numero?");
    let num2 = prompt("¿Cual es el segundo numero?");
    let resultado =  parseInt(num1) + parseInt(num2);
    alert(num1 + "+" + num2 + "=" + resultado);
}
function Not() {
    let dormir = false;
    if (!dormir){
        alert("jugar");
    }else{
        alert("dormir")
    }
}
function And(){
    let PNum = parseInt(prompt("Da un primer numero:"));
    let SNum = parseInt(prompt("Da un segundo numero:"));
    if (PNum < SNum && PNum > 0){
        alert("Es mayor " + SNum);
    }else{
        if(SNum < PNum && PNum > 0){
            alert("Es mayor " + PNum);
        }else{
            alert("Son igules")
        }
    }
}
function Or() {
    let sueño = true;
    let noche = false;
    if (sueño == true || noche == true){
        alert("Dormir");
    }else{
        alert("Despertar")
    }
}
function Entre1Y10() {
    let numero = parseInt(prompt("Dame un numero:"));
    if (numero <= 10 && numero >= 1){
        alert("El numero esta entre 1 y 10");
    }else{
        alert("El numero no esta entre 1 y 10");
    }
}
function Adivina() {
    let secreto = Math.floor(Math.random() * 11);
    let respuesta = 0;
    while(respuesta != secreto){
        let respuesta = parseInt(prompt("Adivina el numero de 1 a 10"));
        if(respuesta < secreto){
            alert("Pista. El numero es mayor.");
            continue;
        }else{
            if(respuesta > secreto){
                alert("Pista. El numero es Menor.");
                continue;
            }else{
                alert("Correcto el numero es " + respuesta);
                break;
            }
        }
    }
}
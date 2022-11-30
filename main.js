addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML = "Usario porfavor revisar consola (oprimir tecla f12)";
    document.querySelector("body").innerHTML = "Igual (==)";
    document.querySelector("body").innerHTML = "la variable num1= 3  y num2= 4";

    //el operador de comparacion igual se representa == en este nos dira si es igual no 
    // su respuesta sera true o false 

    let num1 = 3;//variables
    let num2 = 4;
    console.group("¿ num1 es igual a 3?"); //se realiza contexto de lo preguntamos
    console.log(3 == num1);  //se utiliza el operador
    console.group("¿ num1 es igual a '3' ?");
    console.log("3" == num1);
    console.groupEnd();
    console.group("¿ el 3 con comillas es igual al tres sin comillas?");
    console.log(3 == '3');
    console.groupEnd();
    console.group("¿num2 es igual 3?");
    console.log("3" == num2);
    console.groupEnd();


})
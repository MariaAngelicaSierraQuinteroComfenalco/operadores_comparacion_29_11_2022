addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML = "Usario porfavor revisar consola (oprimir tecla f12)";
    document.querySelector("body").innerHTML = "Estrictamente igual (===)";
    document.querySelector("body").innerHTML = "la variable num1= 3  y num2= 4";

    //el operador de comparacion Estrictamente igual se representa === en este nos dira si es igual si los operadores son iguales y del mismo tipo
    //si no cumple los dos no se puede entonces saldra false como en el ejemplo
    // su respuesta sera true o false 

    let num1 = 3;//variables
    let num2 = 4;
    console.group("¿ num1 es igual estrictamente a 3?"); //se realiza contexto de lo preguntamos
    console.log(3 === num1);  //se utiliza el operador
    console.group("¿ num1 es igual estrictamente a '3' ?");
    console.log(num1 === "3");
    console.log("al ser estrictamente debe considir en tipo de dato y operandos ");
    console.groupEnd();



})
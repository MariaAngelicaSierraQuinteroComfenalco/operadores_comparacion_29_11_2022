addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML = "Usario porfavor revisar consola (oprimir tecla f12)";
    document.querySelector("body").innerHTML = "Desigualdad estricta (!==)";
    document.querySelector("body").innerHTML = "la variable num1= 3  y num2= 4";

    //el operador de comparacion de desigualdad estricta se representa !== en este nos dira si no es igual pero cumpliendo dos condiciones
    // los operadores son iguales y del mismo tipo
    //si no cumple los dos no se puede entonces saldra false 
    // su respuesta sera true o false 

    let num1 = 3;//variables
    let num2 = 4;
    console.log("debe considir en tipo de dato y operandos ");
    console.group("¿ num1 no es igual estrictamente a '3'?"); //se realiza contexto de lo preguntamos
    console.log(num1 !== "3");  //se utiliza el operador
    console.groupEnd();
    console.group("¿ 3 no es igual a '3' ?");
    console.log(3 !== '3');
    console.groupEnd();
    console.group("¿ num2 no es igual estrictamente a 4?");
    console.log(num2 !== 4);  
    console.groupEnd();


})
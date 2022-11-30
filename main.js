addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML = "Usario porfavor revisar consola (oprimir tecla f12)";
    document.querySelector("body").innerHTML = "No es igual (!=)";
    document.querySelector("body").innerHTML = "la variable num1= 3  y num2= 4";

    //el operador de comparacion no es igual o o tambien conocido como diferente  se representa != en este nos dira si es diferente
    // su respuesta sera true o false 

    let num1 = 3;//variables
    let num2 = 4;
    console.group("¿ num1 no es igual a 4?"); //se realiza contexto de lo preguntamos
    console.log(num1 != 4);  //se utiliza el operador
    console.group("¿ num2 no es igual a '3' ?");
    console.log(num2 != "3");
    console.groupEnd();
    console.group("¿num1 no es igual a 3?");
    console.log(num1 != 3);
    console.groupEnd();
   


})
addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML = "Usario porfavor revisar consola (oprimir tecla f12)";
    document.querySelector("body").innerHTML = "Menor que (<)";
    document.querySelector("body").innerHTML = "la variable num1= 3  y num2= 4";

    //el operador de comparacion de menor  que se representa <  en este nos dira si es menor  que el otro numero 
    // su respuesta sera true o false 

    let num1 = 3;//variables
    let num2 = 4;
  
    console.group("¿ num1 es menor que num2"); //se realiza contexto de lo preguntamos
        console.log(num1 < num2);  //se utiliza el operador
    console.groupEnd();
    
    console.group("¿ num2 es menor que num1 ?");
        console.log(num2<num1);
    console.groupEnd();
    
    console.group("¿ '1' es menor que 8?");
        console.log("1" < 8);  
    console.groupEnd();


})
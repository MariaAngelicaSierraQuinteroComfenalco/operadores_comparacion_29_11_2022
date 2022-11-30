addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML = "Usario porfavor revisar consola (oprimir tecla f12)";
    document.querySelector("body").innerHTML = "Mayor que (>)";
    document.querySelector("body").innerHTML = "la variable num1= 3  y num2= 4";

    //el operador de comparacion de mayor que se representa  >  en este nos dira si es mayor que el otro numero 
    // su respuesta sera true o false 

    let num1 = 3;//variables
    let num2 = 4;
  
    console.group("¿ num1 es mayor que num2"); //se realiza contexto de lo preguntamos
        console.log(num1 > num2);  //se utiliza el operador
    console.groupEnd();
    
    console.group("¿ num2 es mayor que num1 ?");
        console.log(num2>num1);
    console.groupEnd();
    
    console.group("¿ '12' es mayor que 2?");
        console.log("12" > 2);  
    console.groupEnd();


})
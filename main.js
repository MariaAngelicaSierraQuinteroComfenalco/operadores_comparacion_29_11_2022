addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML = "Usario porfavor revisar consola (oprimir tecla f12)";
    document.querySelector("body").innerHTML = "Menor o igual (<=)";
    document.querySelector("body").innerHTML = "la variable num1= 3  y num2= 4";

    //el operador de comparacion de menor o igual  que se representa <=  en este nos dira si es menor o igual que el otro numero 
    // su respuesta sera true o false 
   //sin importar el tipo 
    let num1 = 3;//variables
    let num2 = 4;
  
    console.group("¿ num1 es menor o igual que num2"); //se realiza contexto de lo preguntamos
        console.log(num1 <= num2);  //se utiliza el operador
    console.groupEnd();
    
    console.group("¿ num2 es menor o igual que num1 ?");
        console.log(num2<=num1);
    console.groupEnd();
    
    console.group("¿ num2 es menor o igual que 5?");
        console.log(num2 <= 5);  
    console.groupEnd();


})
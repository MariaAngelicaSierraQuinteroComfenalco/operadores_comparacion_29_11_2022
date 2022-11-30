addEventListener("DOMContentLoaded", (e) => {

    document.querySelector("body").innerHTML = "Usario porfavor revisar consola (oprimir tecla f12)";
    document.querySelector("body").innerHTML = "Mayor o igual que (>=)";
    document.querySelector("body").innerHTML = "la variable num1= 3  y num2= 4";

    //el operador de comparacion de mayor o igual que se representa  >=  en este nos dira si es mayor o igual que el otro numero 
    // su respuesta sera true o false 
    //sin importar el tipo 
    let num1 = 3;//variables
    let num2 = 4;
  
    console.group("¿ num1 es mayor o igual que num2"); //se realiza contexto de lo preguntamos
        console.log(num1 >= num2);  //se utiliza el operador
    console.groupEnd();
    
    console.group("¿ num2 es mayor o igual que num1 ?");
        console.log(num2>=num1);
    console.groupEnd();
    
    console.group("¿ '2' es mayor o igual que 2?");
        console.log("2" >= 2);  
    console.groupEnd();

    console.group("¿ num1 es mayor o igual 3 ?");
        console.log(num1>=3);
    console.groupEnd();

})
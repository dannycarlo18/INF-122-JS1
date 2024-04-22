// Vamos a calcular la edad de una persona
var nom,anio,edad,dia;
nom=prompt("Nombre: ");
anio=parseInt(prompt("Año de nacimiento: "));
edad=2024-anio;
if(edad>=18){
    document.writeln(nom+" eres MAYOR de edad");
}else{
    document.writeln(nom+" eres MENOR de edad");
}//elif repasar*
dia=parseInt(prompt("Ingrese un numero del dia entre el 1-7: ")); //no olvidar de un parseint para las var int
switch(dia){
    case 1: alert("Lunes");break; //el break es salida sin condiciones
    case 2: alert("Martes");break;
    case 3: alert("Miercoles");break;
    case 4: alert("Jueves");break;
    case 5: alert("Viernes");break;
    case 6: alert("Sabado");break;
    case 7: alert("Domingo");break;
    default: alert("Fuera de rango"); //vota el feura de caso
}
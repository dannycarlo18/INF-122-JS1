document.writeln("Script llamado desde otro archivo JS...");
var nom,a,b,s; //declarar variables
nom = prompt("Hola, ingrese su nombre: "); //prom para LEER datos
alert("Hola, "+nom);
document.writeln("<br>Hola, "+nom); //se agrego una etiqueta de salto de linea
a=parseInt(prompt("Ingrese número A: "));
b=parseInt(prompt("Ingrese número B: "));
s = a+b;
alert("La suma de "+a+" y "+b+" es: "+s);
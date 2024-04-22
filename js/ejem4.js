// Suma de digitos REPASO DE FUNCIONES
var x,d,s;
x=parseInt(prompt("sumar los digitos de: ")); //poner un numero de mas de 2 digitos pes
s=0;
while(x!=0){
    d=x%10; 
    //document.writeln(d);
    x=parseInt(x/10);
   //document.writeln(x);
    s=s+d;
    //document.writeln(s);
}
document.write("<br>La suma de los digitos es: "+s);
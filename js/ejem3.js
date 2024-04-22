// SERIE FIBONACCI
var n,i,a,b,c;
n=parseInt(prompt("Cantidad de números de la serie Fibonacci: "));
a=-1;b=1;
for(i=1;i<=n;i++){
    c=a+b;
    a=b;
    b=c;
    if (i==n) {
        document.writeln("<font size='30' color='red'>"+c+"</font>");
    }
    else{
        document.writeln("<font size='30' color='red'>"+c+",</font>"); //asi se invoca script en html / puedes invocar etiquetas en js
    }
}
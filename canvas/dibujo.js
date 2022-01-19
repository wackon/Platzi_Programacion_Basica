
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

dibujarLineas("red",10,300,220,10);
dibujarLineas("yellow",300,10,10,220);

function dibujarLineas(color,xinicial,yinicial,xfinal,yfinal){ 
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke();
lienzo.closePath();
}

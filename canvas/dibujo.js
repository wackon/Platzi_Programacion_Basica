var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var k = 0;
var yi, xf;
/* var j = 0; */
var colorsito = "#AFA";
var colorsito2 = "Blue";

/* for (l = 0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLineas(colorsito, 0, yi, xf, 300);
  console.log("Linea" + l);
  l++;
} */

while (l < lineas) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLineas(colorsito, 0, yi, xf, 300);
  console.log("Linea" + l);
  l++;
}
console.log(l);

while (k < lineas) {
  yi = 10 * k;
  xf = 10 * (k + 1);
  dibujarLineas(colorsito2, yi, 0, 300, xf);
  console.log("Linea" + k);
  k++;
}
var j = 0;
while (j < lineas) {
  yi = 10 * j;
  xf = 10 * (j + 1);
  dibujarLineas(colorsito2, yi, 0, 0, 300 - yi);
  console.log("Linea" + j);
  j++;
}
var i = 0;
while (i < lineas) {
  yi = 10 * i;
  xf = 10 * (i + 1);
  dibujarLineas(colorsito, yi, 300, 300, 300 - yi);
  console.log("Linea" + i);
  i++;
}
/* dibujarLineas(colorsito, 0, 0, 300, 10);
dibujarLineas(colorsito, 10, 0, 300, 20);
dibujarLineas(colorsito, 20, 0, 300, 30); */

/* dibujarLineas(colorsito, 1, 1, 1, 300);
dibujarLineas(colorsito, 1, 299, 299, 299); */

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

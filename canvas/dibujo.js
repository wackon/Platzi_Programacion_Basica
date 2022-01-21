var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujoPorClick() {
  var lineas = parseInt(texto.value);
  var l = 0;
  var k = 0;
  var yi, xf;
  var colorsito = "#AFA";
  var colorsito2 = "Blue";
  var espacio = ancho / lineas;

  /* for (l = 0; l < lineas; l++) {
  yi = 10 * l;
  xf = 10 * (l + 1);
  dibujarLineas(colorsito, 0, yi, xf, 300);
  console.log("Linea" + l);
  l++;
} */

  while (l < lineas) {
    xf = espacio * (l + 1);
    yi = espacio * l;
    dibujarLineas(colorsito, 0, yi, xf, 300);
    console.log("Linea" + l);
    l++;
  }
  console.log(l);

  while (k < lineas) {
    yi = espacio * k;
    xf = espacio * (k + 1);
    dibujarLineas(colorsito2, yi, 0, 300, xf);
    console.log("Linea" + k);
    k++;
  }
  var j = 0;
  while (j < lineas) {
    yi = espacio * j;
    xf = espacio * (j + 1);
    dibujarLineas(colorsito2, yi, 0, 0, 300 - yi);
    console.log("Linea" + j);
    j++;
  }
  var i = 0;
  while (i < lineas) {
    yi = espacio * i;
    xf = espacio * (i + 1);
    dibujarLineas(colorsito, yi, 300, 300, 300 - yi);
    console.log("Linea" + i);
    i++;
  }
  /* dibujarLineas(colorsito, 0, 0, 300, 10);
dibujarLineas(colorsito, 10, 0, 300, 20);
dibujarLineas(colorsito, 20, 0, 300, 30); */

  dibujarLineas(colorsito, 1, 1, 1, 300);
  dibujarLineas(colorsito, 1, ancho - 1, ancho - 1, ancho - 1);
}
function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

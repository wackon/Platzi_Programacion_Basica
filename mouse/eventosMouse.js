/* var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
}; */

document.addEventListener("click", dibujarMouse);

function dibujarMouse(evento) {
  console.log(evento);
}

/* function dibujarMouse(evento) {
    var colorsito = "green";
    var movimiento = 2;
  
    switch (evento.keyCode) {
      case teclas.DOWN:
        dibujarLineas(colorsito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
        break;
  
      case teclas.UP:
        dibujarLineas(colorsito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
        break;
  
      case teclas.LEFT:
        dibujarLineas(colorsito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
        break;
  
      case teclas.RIGHT:
        dibujarLineas(colorsito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
        break;
      default:
        console.log(evento.keyCode);
        break;
    }
 */
/* var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLineas("blue", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLineas(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  var colorsito = "green";
  var movimiento = 2;

  switch (evento.keyCode) {
    case teclas.DOWN:
      dibujarLineas(colorsito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

    case teclas.UP:
      dibujarLineas(colorsito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;

    case teclas.LEFT:
      dibujarLineas(colorsito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;

    case teclas.RIGHT:
      dibujarLineas(colorsito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    default:
      console.log(evento.keyCode);
      break;
  }
}
 */

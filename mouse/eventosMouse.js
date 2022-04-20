var cuadrito = document.getElementById("area_de_dibujo1");
var papel = cuadrito.getContext("2d");
document.addEventListener("mousedown", dibujarMouse);
document.addEventListener("mouseup", detener);
document.addEventListener("mousemove", dibujo);

var Posicion = {
  x: 100,
  y: 100,
};

function dibujarLineas(color, movementX, movementY, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 10;
  lienzo.lineTo(movementX, movementY);
  lienzo.stroke();
  lienzo.closePath();
}

function obtenerPosicion(event) {
  coordenadas.x = event.clientX;
  coordenadas.y = event.clientY;
}
/* function dibujarMouse(evento) {
  var colorsito = "green";
  var movimiento = 2;

  switch (evento.click) {
    case mouse.Down:
      dibujarLineas(colorsito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;

    case mouse.Up:
      dibujarLineas(colorsito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;

    default:
      console.log(evento.click);
      break;
  }
}*/

function dibujarMouse(evento) {
  console.log(evento);
}

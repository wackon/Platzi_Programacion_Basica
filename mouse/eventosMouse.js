/* var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
}; */

function dibujarMouse() {
  alert("ahora");
}

var cuadrito = document.getElementById("area_de_dibujo1");
var papel = cuadrito.getContext("2d");

document.addEventListener("mousedown", dibujarMouse);
/*
function dibujarMouse(evento) {
  if (evento.mouseup) {
    dibujarLineas("Green", movementX, movementXY, papel);
  } else {
    alert("jodidos");
    console.log(evento);
  }
}
function dibujarLineas(color, movementX, movementY, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 10;
  // lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(movementX, movementY);
  lienzo.stroke();
  lienzo.closePath();
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
 

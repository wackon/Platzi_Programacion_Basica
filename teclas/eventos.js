var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

/* if (evento.keyCode == teclas.UP) {
    console.log("vamos hacia arriba");
  }
  if (evento.keyCode == teclas.DOWN) {
    console.log("vamos hacia abajo");
  }
  if (evento.keyCode == teclas.LEFT) {
    console.log("vamos hacia izquierda");
  }
  if (evento.keyCode == teclas.RIGHT) {
    console.log("vamos hacia derecha");
  } */

function dibujarTeclado(evento) {
  switch (evento.keyCode) {
    case teclas.DOWN:
      console.log("abajo");
      break;

    case teclas.UP:
      console.log("arriba");
      break;

    case teclas.LEFT:
      console.log("izquierda;");
      break;

    case teclas.RIGHT:
      console.log("derecha");
      break;
    default:
      console.log("otra tecla");
      break;
  }
}

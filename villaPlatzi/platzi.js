var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOk: false,
};

var vaca = {
  url: "vaca.png",
  cargaOK: false,
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
};

var pollo = {
  url: "pollo.png",
  cargaOK: false,
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
  fondo.cargaOk = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOk) {
    papel.drawImage(fondo.imagen, 10, 10);
  }
  if (vaca.cargaOK) {
    for (var v = 0; v < 10; v++) {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOK) {
    for (var c = 0; c < 10; c++) {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if (pollo.cargaOK) {
    for (var p = 0; p < 10; p++) {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}

function aleatorio(min, max) {
  var resultado = Math.floor(Math.random() * (max - min + 1)) + min;

  return resultado;
}

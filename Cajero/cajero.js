class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;

    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }
}

var imagenes = [];
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";
imagenes["5"] = "5.png";

function entregarDinero() {
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  for (var bi of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / bi.valor);

      if (div > bi.cantidad) {
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }

      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - bi.valor * papeles;
    }
  }
  if (dinero > 0) {
    resultado.innerHTML =
      "soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
  } else {
    for (var e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML +=
          e.cantidad +
          " billetes de $" +
          e.valor +
          " <img src=" +
          imagenes[e.valor] +
          ">" +
          "<br />";
      }
    }
  }
}

var caja = [];
var entregado = [];

caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));
var div = 0;
var papeles = 0;
var dinero = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("Extraer");
b.addEventListener("click", entregarDinero);

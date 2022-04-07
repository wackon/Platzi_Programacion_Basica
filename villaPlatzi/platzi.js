var z;

for (var i = 0; i < 10; i++) {
  z = aleatorio(5, 1);
  document.write(z + ", ");
}

function aleatorio(min, max) {
  var resultado = Math.floor(Math.random() * (max - min + 1)) + min;

  return resultado;
}

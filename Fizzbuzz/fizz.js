/* var numeros = 100;
var divisible = false;

for (var i = 1; i <= 100; i++) {
  var divisible = false;

  if (i % 3 == 0) {
    var divisible = true;
    document.write("Fizz");
  }

  if (i % 5 == 0) {
    var divisible = true;
    document.write("Buzz");
  }

  if (!divisible) {
    document.write(i);
  }
  document.write("<br/>");
} */

var numeros = 100;

for (var i = 1; i <= 100; i++) {
  if (esDivisible(i, 3)) {
    document.write("Fizz");
  }

  if (esDivisible(i, 5)) {
    document.write("Buzz");
  }

  if (!esDivisible(i, 3) && !esDivisible(i, 5)) {
    document.write(i);
  }
  document.write("<br/>");
}

function esDivisible(num, divisor) {
  if (num % divisor == 0) {
    return true;
  } else {
    return false;
  }
}

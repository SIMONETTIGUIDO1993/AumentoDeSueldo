let sueldoActual: number = Number(prompt("Ingrese el sueldo: "));
if (sueldoActual < 25000) {
  if (sueldoActual > 0 && sueldoActual < 15000) {
    console.log(
      "El sueldo con el aumento es de :$ ",
      (sueldoActual = sueldoActual + sueldoActual * 0.2)
    );
  }
  if (sueldoActual > 15000 && sueldoActual < 20000) {
    console.log(
      "El sueldo con el aumento es de : $ ",
      (sueldoActual = sueldoActual + sueldoActual * 0.1)
    );
  }
  if (sueldoActual > 20000 && sueldoActual < 25000) {
    console.log(
      "El sueldo con el aumento es de : $ ",
      (sueldoActual = sueldoActual + sueldoActual * 0.05)
    );
  }
} else
  console.log(
    "El sueldo es de :$" + sueldoActual + " no corresponde el aumento."
  );

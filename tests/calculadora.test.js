const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 é igual a 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 é igual a 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 é igual a 'Error'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Error");
});

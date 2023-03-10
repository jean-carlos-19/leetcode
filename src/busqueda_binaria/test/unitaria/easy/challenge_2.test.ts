import { encontrar_objetivo } from "@busqueda_binaria/easy/challenges_2";
import { indice_de_pico_array_montana } from "@busqueda_binaria/easy/challenges_2";

/* Test de encontrar el objetivo */

test(`encontrar_objetivo test 1`, () => {
  let numeros: number[] = [1, 3, 5, 6];
  let Objetivo: number = 5;
  let salida = 2;
  let resultado = encontrar_objetivo(numeros, Objetivo);
  expect(resultado).toBe(salida);
});

test(`encontrar_objetivo test 2`, () => {
  let numeros: number[] = [1, 3, 5, 6];
  let Objetivo: number = 2;
  let salida = 1;
  let resultado = encontrar_objetivo(numeros, Objetivo);
  expect(resultado).toBe(salida);
});

test(`encontrar_objetivo test 3`, () => {
  let numeros: number[] = [1, 3, 5, 6];
  let Objetivo: number = 7;
  let salida = 4;
  let resultado = encontrar_objetivo(numeros, Objetivo);
  expect(resultado).toBe(salida);
});

test(`encontrar_objetivo test 4`, () => {
  let numeros: number[] = [1];
  let Objetivo: number = 1;
  let salida = 0;
  let resultado = encontrar_objetivo(numeros, Objetivo);
  expect(resultado).toBe(salida);
});

test(`encontrar_objetivo test 5`, () => {
  let numeros: number[] = [1];
  let Objetivo: number = 0;
  let salida = 0;
  let resultado = encontrar_objetivo(numeros, Objetivo);
  expect(resultado).toBe(salida);
});

test(`encontrar_objetivo test 6`, () => {
  let numeros: number[] = [1];
  let Objetivo: number = 2;
  let salida = 1;
  let resultado = encontrar_objetivo(numeros, Objetivo);
  expect(resultado).toBe(salida);
});

test(`encontrar_objetivo test 7`, () => {
  let numeros: number[] = [1, 3, 5, 7];
  let Objetivo: number = 0;
  let salida = 0;
  let resultado = encontrar_objetivo(numeros, Objetivo);
  expect(resultado).toBe(salida);
});

test(`encontrar_objetivo test 8`, () => {
  let numeros: number[] = [-Math.pow(10, 4), 1, 3, 5, 7, Math.pow(10, 4)];
  let Objetivo: number = Math.pow(10, 4);
  let salida = 5;
  let resultado = encontrar_objetivo(numeros, Objetivo);
  expect(resultado).toBe(salida);
});

test(`encontrar_objetivo test 9`, () => {
  let numeros: number[] = [-Math.pow(10, 4), 1, 3, 5, 7, Math.pow(10, 4)];
  let Objetivo: number = Math.pow(10, 4) + 1;
  let salida = -1;
  let resultado = encontrar_objetivo(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
test(`encontrar_objetivo test 10`, () => {
  let numeros: number[] = [
    -(Math.pow(10, 4) + 1),
    1,
    3,
    5,
    7,
    Math.pow(10, 4) + 1,
  ];
  let Objetivo: number = Math.pow(10, 4) + 1;
  let salida = -1;
  let resultado = encontrar_objetivo(numeros, Objetivo);
  expect(resultado).toBe(salida);
});
/* test de indice de pico de un array */

test(`indice_de_pico_array_montana test 1`, () => {
  let numeros: number[] = [0, 1, 0];
  let salida = 1;
  let resultado = indice_de_pico_array_montana(numeros);
  expect(resultado).toBe(salida);
});

test(`indice_de_pico_array_montana test 2`, () => {
  let numeros: number[] = [0, 2, 1, 0];
  let salida = 1;
  let resultado = indice_de_pico_array_montana(numeros);
  expect(resultado).toBe(salida);
});

test(`indice_de_pico_array_montana test 3`, () => {
  let numeros: number[] = [0, 10, 5, 2];
  let salida = 1;
  let resultado = indice_de_pico_array_montana(numeros);
  expect(resultado).toBe(salida);
});

test(`indice_de_pico_array_montana test 4`, () => {
  let numeros: number[] = [3, 5, 3, 2, 0];
  let salida = 1;
  let resultado = indice_de_pico_array_montana(numeros);
  expect(resultado).toBe(salida);
});

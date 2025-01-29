/*
  Operadores Aritméticos
  // São utilizados em calculos matematicos
  + soma
  - Subtração
  * Multiplicação 
  / Divisão 
  % Resto da divisão
*/

let n1 = 5;
let n2 = 3;

let resultadoSoma = n1 + n2;
let resultadoSubtracao = n1 - n2;
let resultadoMultiplicacao = n1 * n2;
let resultadoDivisao = n1 / n2;
let resultadoResto = n1 % n2; 

console.log(resultadoSoma);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoDivisao);
console.log(resultadoResto);

/*
  Operadores de atribuição
  // O primeiro é para atribuir o valor a uma variavel 
    e o resto é para calculo.
  =
  +=
  -=
  *=
  /=
  %=

  Exemplo abaixo da utilização
*/

let nome = 'Deivison';
let a = 15;
a += 1;
console.log(nome);
console.log(a);

/* Operador de Incremento ++ e Decremento -- */
// Aqui na variavel sera incremento +1 depois
let numero1 = 10;
numero1++;
console.log(numero1);

// Aqui na variavel sera decrementada -1 depois
let numero2 = 20;
numero2--;
console.log(numero2);

// Aqui na variavel sera incrementado +1 antes
let numero3 = 12;
++numero3;
console.log(numero3);

// Aqui na variavel sera incrementado -1 antes
let numero4 = 22;
--numero4;
console.log(numero4);
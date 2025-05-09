/* Comparação de dados em JavaScript

  - As comparações sempre retornam um resultado booleano (true ou false)

*/

/* Os Operadores de comparação

  == e === (o mais utilizado é o ===)
  != e !== (o mais utilizado é o !==)
  >, >=, <, <=

*/

// Comparado de igualdade
let n1 = 3 == 3; // true
let n2 = 4 == 3; // false
let n3 = 3 * 3 + 1 == 10; // true
console.log(n1, n2, n3);

let n4 = 10 === 10; // true
let n5 = 10 === 11; // false
console.log(n4, n5);

// Comparado de desingualdade
let n6 = 3 != 3; // false
let n7 = 5 != 3; // true
let n8 = 5 != "5"; // false
let n9 = 5 !== "5"; // true
console.log(n6, n7, n8, n9);

// Comparado de maior, maior ou igual, menor, menor ou igual
let num1 = 4 > 3; // true
let num2 = 5 > 10; // false
let num3 = 5 >= 5; // true
let num4 = 6 <= 7; //true
let num5 = 6 < 6; // false
console.log(num1, num2, num3, num4, num5);
/* ESTRUTURA CONDICIONAL IF E ELSE 
  
  Explicação abaixo:

  - Permite criar blocos de código que vão ser executados somente
    quando uma terminada operação lógica for verdadeira.

  - SE condição === true ENTAO faça algo

  - Além disso, pode ser usado com o ELSE para acrescenter um bloco que 
    vai ser executado somente qunado essa mesma operação lógica for falsa.

  - SE condição === true ENTAO afaça uma coisa SENAO faça outra coisa.

*/

// Estrutura básica do IF
if (6 === 6) {
  console.log('Verdadeiro');
}

// Estrutura basica de IF e ELSE
if (6 !== 6) {
  console.log('Verdadeiro');
} else {
  console.log('Falso')
}

// Estrutura condicional com variavel
const idade = Number(prompt('Digite a sua idade:'))

if (idade >= 18) {
  alert("Você é maior de idade");
} else {
  alert('Você é menor de idade');
}

// Estrutura condicional ELSE IF
let novaIdade = Number(prompt('Digite a sua idade:'));

if (novaIdade >= 18) {
  alert(`Você tem ${novaIdade} anos sendo maior de idade`)
} else if (novaIdade >= 12) {
  alert(`Você tem ${novaIdade} anos, você é um adolescente`)
} else if (novaIdade <= 4) {
  alert(`Você tem ${novaIdade} anos, você é uma criança`)
} else {
  alert('idade não informada')
}

// OPERADOR TERNÁRIO
const resultado = (7 === 7) ? "É verdadeiro" : "É falso";
console.log(resultado);
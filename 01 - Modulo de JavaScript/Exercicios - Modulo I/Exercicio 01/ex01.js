/* Exercicio 01

  - Escreva um programa em javascrip que permita salvar informações de um recruta. As informaões a serem salvas são:

  - o primeiro nome
  - o sobrenome
  - o campo de estudo
  - o ano de nascimento

  Depois o prograna deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseado no ano de nascimento).

*/

let nome = prompt('Digite o seu primeiro nome:');
let sobrenome = prompt('Digite o seu sobrenome:');
let areaDeEstudo = prompt('Qual é a sua área de estudo?:');
let anoDeNascimento = Number(prompt('Digite o seu ano de nascimento:'));
let idade = 2025 - anoDeNascimento;

alert(`O seu nome é ${nome} ${sobrenome}, você tem ${idade} anos, a sua área de estudo é ${areaDeEstudo}`);


/* Exercicio 02 

  - Escreve um programa em javascrip que permita inserir dois valores númericos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão)

  Após calcular os resultados o programa deve exibi-los na tela.

*/

const primeiroNumero = Number(prompt('Digite um número:'));
const segundoNumero = Number(prompt('Digite um segundo número:'));

let soma = primeiroNumero + segundoNumero;
let subtracao = primeiroNumero - segundoNumero;
let multiplicacao = primeiroNumero * segundoNumero;
let divisao = primeiroNumero / segundoNumero;

alert(`O resultado da soma entre ${primeiroNumero} e ${segundoNumero} = ${soma}`);
alert(`O resultado da subtracao entre ${primeiroNumero} e ${segundoNumero} = ${subtracao}`);
alert(`O resultado da multiplicacao entre ${primeiroNumero} e ${segundoNumero} = ${multiplicacao}`);
alert(`O resultado da divisao entre ${primeiroNumero} e ${segundoNumero} = ${divisao}`);
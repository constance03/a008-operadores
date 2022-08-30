//Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:
// a) 5 é maior que 20 e também é menor que 2;
const operacaoA = 5 > 20 && 5 < 2   //false
console.log(`O valor da operação é verdadeiro ou falso? ${operacaoA}`)

// b) 5 é igual a 5 ou é igual a “5”;
const operacaoB = 5 === 5 || 5 === "5"  //true
console.log(`O valor da operação é verdadeiro ou falso? ${operacaoB}`)

// c) negação de (vinte é maior que cinquenta)
const operacaoC = !(20 > 50)    //true
console.log(`O valor da operação é verdadeiro ou falso? ${operacaoC}`)

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)
const operacaoD = !(20 > 50 || 50 > 60)     //true
console.log(`O valor da operação é verdadeiro ou falso? ${operacaoD}`)
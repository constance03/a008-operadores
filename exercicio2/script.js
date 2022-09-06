// Faça um programa que pergunte ao usuário dois números.
let num1 = Number(prompt("Escreva um numero"))
let num2 = Number(prompt("Escreva outro numero"))

//Faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
// O primeiro numero é maior que segundo?
let maior = num1 > num2
console.log(`O primeiro numero é maior que segundo? ${maior}`)

// O primeiro numero é igual ao segundo?
let igual = num1 === num2
console.log(`O primeiro numero é igual o segundo? ${igual}`)

// O primeiro numero é divisível pelo segundo?
let divisivel = (num1 % num2) === 0
console.log(`O primeiro numero é divisivel pelo segundo? ${divisivel}`)

// O segundo numero é divisível pelo primeiro?
let naoDivisivel = (num2 % num1) === 0
console.log(`O segundo numero é divisível pelo primeiro? ${naoDivisivel}`)

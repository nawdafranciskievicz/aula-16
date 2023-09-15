
/**
 * 
 * Fa�a um programa que pergunta ao usu�rio a sua idade e imprima no console se ela/e pode dirigir (apenas maiores de idade).
 * 
 * a) Fa�a um "prompt" para receber a idade do usu�rio e guarde em uma vari�vel.
 * 
 * b) Garanta que essa vari�vel � do tipo "Number".
 * 
 * c) Agora veja se essa idade do usu�rio corresponde � idade m�nima que permite dirigir. Se sim, imprima no console "Voc� pode dirigir", caso contr�rio, imprima "Voc� n�o pode dirigir."
 * 
**/

let nome = prompt('qual seu nome?')
let idade = Number (prompt('Qual sua idade?'))

console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade} (${typeof idade})`)
console.log(`Tem permissão para dirigir? ${idade >= 18}`) 

if (idade >= 18) {
    console.log('Você PODE dirigir')
}
else {
    console.log('Você NÃO PODE dirigir')
}
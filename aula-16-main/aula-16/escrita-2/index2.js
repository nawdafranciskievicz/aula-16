
/**
 * 
 * Fa�a um programa que verifica que turno do dia um aluno estuda.
 * 
 * Pe�a para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize os blocos "if/else if/else".
 * 
**/

let turno = prompt('Qual turno voce estuda? M, V ou N').toLowerCase()


if (turno === 'm') {
    console.log('Bom Dia!')
}
if (turno === 'v') {
    console.log('Boa Tarde!')
}
if (turno === 'n') {
    console.log('Boa Noite!')
}


/**
 * 
 * Considere a situa��o
 * 
 * Voc� vai ao cinema com um amigo ou amiga, por�m ele/ela s� assistir� a um filme com voc� se ele for do g�nero fantasia e se o ingresso custar menos de 15 reais.
 * 
 * Fa�a um c�digo que pergunta ao usu�rio qual o g�nero de filme que v�o assistir e outra pergunta sobre o pre�o do ingresso, ent�o verifique se seu amigo ou amiga vai topar assistir o filme.
 * 
 * Caso positivo, imprima no console a mensagem: "Bom filme!", caso contr�rio, imprima "Escolha outro filme :(".
 * 
**/

let genero = prompt('Qual genero do Filme')
let preco = Number (prompt('Qual preço do engresso'))

console.log('Gabriele diz:')

if (genero === 'fantasia' && preco <= 15) {
    console.log('Sim, eu irei ao cinema com você!')
    console.log('Você responde:')
    console.log('Beleza, Então Vamos!!!')
}

else {
    console.log('Não, eu não irei ao cinema com você')
    console.log('Você responde:')
    console.log('Ok então, vamos deixar para outro dia...')
}

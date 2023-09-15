
/**
 * 
 * Repita o exerc�cio anterior, mas utilizando a estrutura de "switch/case".
 * 
 * Dica: Lembre-se que "switch/case" � como se fosse um "if", mas verifica somente igualdades estritas (===).
 * 
**/

let turnos = prompt('Qual turno voce estuda? M, V ou N').toLowerCase()


switch (turnos) {

    case 'm':
        console.log('Bom Dia!')
        break;

    case 'v':
        console.log('Boa Tarde!')
        break;

    case 'n':
        console.log('Boa Noite!')
        break;
}


// Leia o c�digo abaixo, que foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado


let fruta = prompt("Escolha uma fruta")
let preco

switch (fruta) {
	case "Laranja":
		preco = 3.5
		break;
	case "Maçã":
		preco = 2.25
		break;
	case "Uvá":
		preco = 0.30
		break;
	case "Pêra":
		preco = 5.5
		break; // BREAK PARA O ITEM D
	default:
		preco = 5
		break;
}

console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o c�digo acima?
/*
dizer o preço da fruta que o usuario escolheu.
*/
// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
/*
O preço da fruta, maça é R$2.25.
*/
// c) Considere que um usuário queira comprar uma "Pêra", qual seria a mensagem impressa no console se retir�ssemos o "break" que est� logo acima do "default" (o "break" indicado pelo coment�rio "BREAK PARA O ITEM D")?
/*
ele irá imprimir (O preço da fruta, Pêra é R$5.) por que ele vai sobrescrever o preco pelo preco a baixo.
*/

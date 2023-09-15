
// Leia o c�digo

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("Não passou no teste.")
}

// a) Explique o que o c�digo faz. Qual o teste que ele realiza?
/*
ele testa se o numero é par ou não.
*/
// b) Para que tipos de n�meros ele imprime no console "Passou no teste"?
/*
para numeros pares.
*/
// c) Para que tipos de n�meros a mensagem � "N�o passou no teste"?
/*
para numeros impares.
*/

// Leia o c�digo

const numero = Number(prompt("Digite o primeiro n�mero."))

if (numero > 0) {
	console.log("Esse n�mero passou no teste")
	let mensagem = "Essa mensagem � secreta!"
}

console.log(mensagem)

// a) O que a primeira linha est� fazendo?
/*
criando uma variavel chamada numero, e pedindo o valor dela para o usuario e depois transformando-a em um number.
*/
// b) Considere um usu�rio digitou o n�mero 10. Qual ser� a mensagem do terminal? E se fosse o n�mero -10?
/*
se o usuario digitar 10 a mensagem será, esse numero passou no teste, se o usuario digitar -10, nao será impresso nada pq o console.log nao vai imprimir o let mensagem.
*/
// c) Haver� algum erro no console? Justifique usando os conceitos de bloco ou escopo.
/*
como a mensagem esta sendo decretada dentro do escopo nao sera imprimida pelo console.log de fora do escopo
*/
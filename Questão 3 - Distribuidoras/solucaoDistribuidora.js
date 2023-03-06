// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// 	SP – R$67.836,43
// 	RJ – R$36.678,66
// 	MG – R$29.229,88
// 	ES – R$27.165,48
// 	Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

let faturamentos = [ // array de objetos contendo os valores do nome da UF e valor de faturamento, respectivamente
	{
		nomeUF: "SP",
		valor: 67_836.43,
	},
	{
		nomeUF: "RJ",
		valor: 36_678.66,
	},
	{
		nomeUF: "MG",
		valor: 29_229.88,
	},
	{
		nomeUF: "ES",
		valor: 27_165.48,
	},
	{
		nomeUF: "outros",
		valor: 19_849.53,
	},
];

let total = 0; // total = 180759.98 | aqui inicializo a variável como 0 apenas para definir o tipo como number, necessário para conseguir fazer o map(), idealmente eu utilizaria typescript;
faturamentos.map((item) => {
	total = total + item.valor;
});


function calculaPercentual(valor, nomeUF) {
	// irei usar a regra de 3 para calcular o percentual
	const percentual = (valor * 100) / total;

	return console.log( 
		`${nomeUF === 'outros' ? `${nomeUF} estados tiveram` : `${nomeUF} teve`} um percentual de participação no faturamento mensal de: ${percentual}%, ou, se você preferir, ${percentual.toFixed(2)}%`
	);
}

// um map() simples que itera sobre cada item e executa a função acima declarada.
faturamentos.map((item) => { 
	calculaPercentual(item.valor, item.nomeUF);
});

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// 	• O menor valor de faturamento ocorrido em um dia do mês;
// 	• O maior valor de faturamento ocorrido em um dia do mês;
// 	• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// 	a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// 	b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// estarei usando o arquivo .json disponibilizado.

const dados = require('./assets/dados.json')


function solucao(dados) {
    // Registro dos valores
    let menorValor = {
        dia: '',
        valor: dados[0].valor
    };
    let maiorValor = {
        dia: '',
        valor: 0
    };

    // Para cálcula da média
    let valorTotal = 0
    let diasUteis = 0
    
    // um for loop que itera sobre todos os itens do array contido em dados.json.
    for (let i = 0; i < dados.length; i++) {
        // recebem o dia e valor da iteração atual;
        let diaAtual = dados[i].dia;
        let valorAtual = dados[i].valor;

        // O acumulador do valor total.
        valorTotal = valorTotal + valorAtual
        // Caso o valorAtual seja 0, entende-se que é um feriado e adiciona se 1 ao valor atual de diasUteis.
        valorAtual === 0 ? diasUteis : diasUteis++

        // Caso o valorAtual seja menor que o valor contido no objeto menorValor e não seja um feriado ou final de semana.
        if (valorAtual < menorValor.valor && valorAtual != 0) {
            menorValor.valor = valorAtual; // atribui o valor atual à chave valor no objeto menorValor.
            menorValor.dia = diaAtual; // atribui o dia atual à chave dia no objeto menorValor.
        } 
        // Caso valorAtual seja maior do que o valor contido no objeto maiorValor.
        else if (valorAtual > maiorValor.valor) {
            maiorValor.valor = valorAtual; // atribui o valor atual à chave valor no objeto maiorValor.
            maiorValor.dia = diaAtual;  // atribui o dia atual à chave dia no objeto maiorValor.
        }
    }

    mediaMensal = valorTotal / diasUteis // calcula a média mensal.

    let maiorQueMedia = []; // armazena os dias em que o faturamento foi maior do que a média mensal.

    // Verifica item por item quais tiveram faturamento superior à média mensal.
    dados.map(item => {
        item.valor > mediaMensal ? maiorQueMedia.push(item.dia) : ''
    })





    let resultado =
`Maior valor: ${maiorValor.valor}, referente ao dia ${maiorValor.dia}
Menor valor: ${menorValor.valor}, referente ao dia ${menorValor.dia}
A Média mensal foi: ${mediaMensal}, ${maiorQueMedia.length} dia${maiorQueMedia.length > 1 ? 's' : ''} faturaram acima desta média sendo eles: ${maiorQueMedia}`
    return console.log(resultado)
}

solucao(dados)

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// 	a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// 	b) Evite usar funções prontas, como, por exemplo, reverse;



let string = 'uma string qualquer';


function inverterString(string) {
    let stringInvertida = []
    // inverte a string acessando os elementos do último ao primeiro e adicionando eles ao array stringInvertida
    for (let i = string.length - 1; i >= 0; i--) {
        const stringletter = string[i];
        stringInvertida.push(stringletter)
    }

    let resultado = stringInvertida.toString().replaceAll(',', '') // primeiro transformamos o array gerado em string com o método toString
                                                                   // e então removemos todas as vírgulas geradas pelo toString com o replaceAll.
    return console.log(resultado)
}

inverterString(string)
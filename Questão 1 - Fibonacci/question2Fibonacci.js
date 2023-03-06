/** 
 * 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva
 *  um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: 
	Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

// tldr: escrever uma função que retorna se um número faz parta da sequencia de fibonacii ou não

function fibonacci(num) {
    
    // os dois primeiros números da sequência.
    let a = 0;
    let b = 1;
    
  
    // Rode a função até que *b* seja maior ou igual ao número passado como parâmetro. (num)
    while (b < num) {
      const temp = b; // *temp* recebe o valor do número fibonacci mais recente (b)
      b = a + b; // *b* passa a ter o valor do próximo número da sequência
      a = temp; // *a* passa a ter o valor inicial de *b* que está armazenado em *temp*
    }
  
    // testa se o número passado é igual a *b* ou a zero, se for, ele é parte de sequência.
    return console.log(`${b === num || num === 0} | ${num}`)
  }
  
  fibonacci(0) // true
  fibonacci(4) // false
  fibonacci(5) // true
  fibonacci(34) // true
  fibonacci(50) // false
// 1. Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function operacoes(valor, valor2){
    return console.log(`A soma dos valores é ${valor + valor2}, a subtração é ${ valor - valor2}, a sua multiplicação é ${ valor * valor2}, a divisão é ${valor / valor2} `)
}
operacoes(3, 3)

/*  2. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
    triângulo). */
    
    function triangulo(a, b , c){
        if (a == b && b == c) {
            console.log('Triangulo equilátero')
        } else if (a == b || b == c || c == a) { 
            console.log('Triangulo isóceles')
        } else { 
                console.log('Triangulo escaleno')
        }
    }
    
    triangulo(1, 1, 1)
    triangulo(1, 2, 1)
    triangulo(1, 2, 3)


/* 3.  Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */

function exponenciacao(base, expoente) {
    return console.log(`O resultado da sua exponenciação de é: ${base** expoente}`)
}
exponenciacao(2, 3)

/*  04. Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function resto( dividendo, divisor) {
    return console.log (`O resto da divisão é ${dividendo % divisor}`)
}

resto(10, 6)

/* 05. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

function convertendoValor(valor) {
    const formatando = valor.toFixed(2)
    const substituindo = formatando.replace('.', ',')
    return console.log(`O valor é R$${substituindo}`)
}
convertendoValor(0.30000000000000004)




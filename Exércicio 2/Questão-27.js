/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

function digitos(lista, casas){
    contador=0
    novalista = [ ]
    lista.forEach(element => {
        palavra = element.toString()
        if(palavra.length == casas){
            novalista.push(element)
        }
     
    });
    console.log(novalista)
}

digitos([1,22,356,144,121,12,0], 3)
/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares. */

function pares(lista){
    novalista = []
    for(i=0; i< lista.length; i++){
        if(lista[i]%2 == 0 && [i]%2==0){
            novalista.push(lista[i])
        }
    }
    console.log(novalista)
}

pares([10, 70, 22, 43])
/*Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.*/

function repetição(numero, repetidor){
    lista = []
    for(i=0; i<repetidor; i++){
        lista.push(numero)
    }
    console.log(lista)
}

repetição(true,3)
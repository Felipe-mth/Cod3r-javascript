/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.*/

function contando(carcacter, palavra){
    contador=0
    for (const key in palavra) {
        if(carcacter == palavra[key]){
                contador+=1
        }
    }
    console.log('A letra '+ carcacter + 'aparece na palavra ' + palavra + ', ' + contador + ' vezes')
}

contando('p', 'Peter Pan')
/*Escreva uma função que receba um array de números e retornará a soma de todos os números desse array*/

function somador(lista ){
    soma =0
    lista.forEach(element => {
        soma+= element
    });
    console.log(soma)
}

somador([2,3,4,5,6])
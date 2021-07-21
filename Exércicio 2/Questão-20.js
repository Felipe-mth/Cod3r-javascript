/*Criar uma função que receba um array de números e retorne o menor número desse array.*/

function minimi(lista){
    menor=lista[0]
    lista.forEach(element => {
        if(menor> element){
            menor = element
        }
    });
    console.log(menor)
}

minimi([5, -15, 50, 3])
/*Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.*/

function segundo(lista){
  maior =0
  maiordetodos =0
    lista.forEach(element => {
        if(element> maior){
           maior = element
        }
    });
    lista.forEach(element => {
        if(element == maior){
        lista.splice(lista.indexOf(element), 1);
        }
    });
    lista.forEach(element => {
        if(element> maiordetodos){
            maiordetodos = element
        }
    });
    console.log(maiordetodos)

    
}
segundo([8, 4, 5, 6])
/*Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.*/

function contador(palavra){
    somador = 0
    if(typeof palavra == 'string'){
        for(i=0; i<palavra.length; i++){
            somador+=1
        }
        console.log(somador)
    }
    else{
        console.log('insira uma palavra')
    }
    
}

contador('felipe')
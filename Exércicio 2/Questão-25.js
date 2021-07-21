/*Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais*/

function retornocons(palavra){
     palavras = palavra
    for (const key in palavra) {
     
     if(palavra[key].toLowerCase() == 'a' || palavra[key].toLowerCase() == 'e' || palavra[key].toLowerCase() == 'i' || palavra[key].toLowerCase() == 'o' || palavra[key].toLowerCase() == 'u'){
     
        palavras=  palavras.replace(palavra[key], '')
     }
    }
    console.log(palavras)
}

retornocons('chave')
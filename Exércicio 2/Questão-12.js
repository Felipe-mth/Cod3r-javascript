/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
*/

function arraynum(lista){
    
    if(Array.isArray(lista) == true){
        novalista = [] 
        for(i=0; i<lista.length; i++){
            
            if(Number.isInteger(lista[i])){
                
                novalista.push(lista[i])
            }
        }
        console.log(novalista)
    }
    else{
        console.log('insira um array por favo')
    }
    
}

arraynum([1,'ovo', 3,'castanhas', '4', 'paranaue'])
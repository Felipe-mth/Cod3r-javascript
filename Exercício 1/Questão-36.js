/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5*/

vetorin = []

function mult(vetor, num){
    for(i=0; i< vetor.length; i++){
        if(vetor[i]<=5){           
                valor = vetor[i]*num
                vetorin.push(valor)
                console.log('if aqui')
        }
        else if(vetor[i]>5){
            
                valor = vetor[i]*num
                vetorin.push(valor)
                console.log('else if aqui')
        }
    }
    console.log(vetorin)
    
}

mult([1,2,3,4,8], 8 )
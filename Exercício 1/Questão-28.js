/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares*/

function vetores(){
    vetor = [1,2,3,4,5,6,7,8,9,10]
    vetorpares =[]
    vetorimpar = []
    vetor.forEach(element => {
        if(vetor[element] % 2 ==  0 ){
           
            vetorpares.push(vetor[element])
            
        }
        if(vetor[element] %2 != 0){
            
            vetorimpar.push(vetor[element])
            
        }
    });
    console.log('esse são os impares: '+ vetorimpar)
    console.log('esse são os pares: ' + vetorpares)
}

vetores()
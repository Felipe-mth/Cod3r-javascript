/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
*/

function negativos(){
    numbers = [-5,4,-3,2,-1,0,-15,20]
    incremento =0
    negativo = []
   for(i=0; i<numbers.length;i++){
       if(numbers[i]<0){
           incremento+=1
        negativo.push(numbers[i])
       }
   }
   console.log(incremento)
   console.log(negativo)
}

negativos()
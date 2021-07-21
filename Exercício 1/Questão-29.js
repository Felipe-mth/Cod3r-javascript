/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

function intervalo(){
    total = [1,5,9,10,13,17,20,24]
    vetordentro =[]
    vetorfora = []
   for(i=0; i<total.length;i++){
    if(total[i] >= 10 && total[i] <=20){
        vetordentro.push(total[i])
       
    }
    else if(total[i] < 10 || total[i]>20){
        vetorfora.push(total[i])
        
    }
   }
    console.log('estes estão fora do intervalo: ' + vetorfora)
        console.log('estes estão dentro do intervalo: ' + vetordentro)
}

intervalo() 
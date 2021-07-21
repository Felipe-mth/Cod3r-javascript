/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.*/

function troca(vetor1, vetor2){
    vetor2.reverse()
    tamanho =vetor1.length
    tamanho2 = vetor2.length
   for(i=0; i<vetor2.length; i++){
       
       vetor1.unshift(vetor2[i])
       
   }
   
   
   for(i=vetor2.length; i<vetor1.length; i++){
    vetor2.unshift(vetor1[i])
   }
   vetor1.splice(tamanho2, tamanho)
   console.log(vetor1)
   vetor2.splice(tamanho, tamanho2)
   console.log(vetor2)
      
       
  
   
}

troca([1,2,3], [4,5,6])
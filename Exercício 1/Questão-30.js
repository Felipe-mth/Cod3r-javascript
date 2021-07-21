/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do veto*/

function maiormenor(){
    inteiros = [1,2,3,4,55,46,0,69]
    maioral = inteiros[0]
    minoria = inteiros[0]
    for(i=0 ;i<inteiros.length;i++){
       if(maioral<inteiros[i]){
           maioral =inteiros[i]
           
       }
       else if(minoria>inteiros[i]){
           minoria = inteiros[i]
           
       }
       
    }
    console.log('o maior de todos é: '+maioral)
    console.log('o menor de todos é: '+minoria)
}

maiormenor()
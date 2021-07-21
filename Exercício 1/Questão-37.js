/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/

function Parti(ntermo, a1, r){
    vetor=[a1]
    valor = a1
    for(i=0; i<ntermo-1; i++){
        valor+=r
        vetor.push(valor)
    }
    console.log(vetor)
    soma =0
    for(i=0; i<vetor.length; i++){
        soma+=vetor[i]
    }
    console.log(soma)
}
function Pgeo(ntermo, a1, r){
    vetor=[a1]
    valor = a1
    for(i=0; i<ntermo-1; i++){
        valor*=r
        vetor.push(valor)
    }
    console.log(vetor)
    soma =0
    for(i=0; i<vetor.length; i++){
        soma+=vetor[i]
    }
    console.log(soma)
}
Parti(5,1,2)
Pgeo(5,1,2)
/*27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function crescimento(altura1, taxa1, altura2, taxa2){
    incremento = 0
    if(altura1>altura2){
        while(altura2<altura1){
                altura1=altura1+taxa1
               altura2 = altura2+taxa2
               incremento+=1
               console.log(' criança1 altura: ' +altura1 + ' cirança2 altura: ' + altura2 + ' ano: ' + incremento)
        }
    
    }
    if(altura2 > altura1){
        while(altura1<altura2){
            altura1=altura1+taxa1
           altura2 = altura2+taxa2
           incremento+=1
           console.log(' criança1 altura: ' +altura1 + ' cirança2 altura: ' + altura2 + ' ano: ' + incremento)
    }
    }
}

crescimento(180, 0,  170, 2)
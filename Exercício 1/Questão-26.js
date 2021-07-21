/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function pares(){
    incremento=0
    while(incremento <101){
        incremento+=1
        if(incremento%2 == 0){
            console.log(incremento)
        }
    }
}

pares()
/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.*/

function média(){
    lista = [20,30,5,40,60]
    aritimetica = 0
    for(i=0;i<lista.length;i++){
        aritimetica+= lista[i] 
        mediafinal = aritimetica/lista.length
        console.log(aritimetica)
    }
    console.log(mediafinal)
}

média()
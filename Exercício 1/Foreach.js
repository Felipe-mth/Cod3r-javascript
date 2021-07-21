/*Tentando criar um for each*/

function foreach(arrayzao){
    indice = []
    variavel = []
        for(i=0; i<arrayzao.length; i++){
            indice.push(i)
            variavel.push(arrayzao[i])
        }
        console.log(indice)
        console.log(variavel)
}

foreach(['abacaxi','alface', 'maçã', 'abacate'])
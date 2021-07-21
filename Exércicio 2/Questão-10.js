/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro*/

function repetição(repetidor){
    novo= []
    valor =  ''
    for(i=0; i<repetidor;i++){
        novo.push('+')
    }
    console.log(novo.toString())
}

repetição(5)
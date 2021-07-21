/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores*/
 function divisao(dividendo,divisor){
        div = Math.floor(dividendo/divisor)
        resto = dividendo%divisor
        console.log('o resultado e: ' + div + '\n e o resto e:' +resto)
 }

 divisao(5,2)

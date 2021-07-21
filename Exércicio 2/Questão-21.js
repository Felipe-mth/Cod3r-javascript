/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function sorteio(escolha){
    
    if(escolha >= 1 && escolha<=10 ){
        sorteado = Math.ceil(Math. random()*10)
        if(escolha  == sorteado){
            console.log('Parabéns! O número sorteado foi o ' + sorteado)
        }
        else{
            console.log("Que pena! O número sorteado foi o "+ sorteado)
        }
    }
    else{
        console.log('escolha um valor de 1 a 10')
    }
}

sorteio(1)
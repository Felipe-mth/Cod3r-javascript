/*Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.*/

function mult(numero, multiplicador){
        if(numero>= 0 && multiplicador>=0){
            vezes= numero
            for(i=1; i < multiplicador; i++){
                numero+=vezes
                
            }
            console.log(numero)
        }
        else{
            console.log('só pode receber numeros positivos')
        }
}

mult(-3,-9)
/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

function salário(a,valorbruto){
        switch(a){
            case a = 'A':
                aumento = valorbruto*0.1
                valorfinal = valorbruto+aumento
                console.log(valorfinal)
                break;
            case a ='B':
                aumento = valorbruto*0.15
                valorfinal = valorbruto+aumento
                console.log(valorfinal)
                break;
            case a = 'C':
                aumento = valorbruto*0.3
                valorfinal = valorbruto+aumento
                console.log(valorfinal)
                break;
            default:
                console.log('valor invalido')
        }
}
salário(10,1000)

/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. M = C (1+i)t
*/

function anuidade(mes, valor){
    switch(mes){
        case 1:
            montante = valor+Math.pow((1+0.5), mes);
            console.log(montante);
        break;
        case 2:
            montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
        break;
        case 3:
            montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
        break;
        case 4:
         montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
            break;
        case 5:
            montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
            break;
        case 6:
            montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
            break;
        case 7:
            montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
            break;
        case 8:
            montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
            break;
        case 9:
            montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
            break;
        case 10:
            montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
            break;
        case 11:
            montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
            break;
        case 12:
            montante = valor*Math.pow((1+0.5), mes);
            console.log(montante);
            break;
    }
}

anuidade(2, 1000)
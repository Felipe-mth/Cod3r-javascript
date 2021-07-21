/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
8*/

function lanchonete(código,quantidade){
    switch(código){
        case código = 100:
            preço = quantidade*3
            console.log('valor a ser pago: '+preço)
            break;
        case código = 200:
            preço = quantidade*4
            console.log('valor a ser pago: '+preço)
            break;
        case código = 300:
            preço = quantidade*5.5
            console.log('valor a ser pago: '+preço)
            break;
        case código =400:
            preço = quantidade*7.5
            console.log('valor a ser pago: '+preço)
            break;
        case código = 500:
            preço = quantidade*3.5
            console.log('valor a ser pago: '+preço)
            break;
        case código = 600:
            preço = quantidade*2.8
            console.log('valor a ser pago: '+preço)
            break;
        default:
            console.log('não possuimos esse produto')
    }
}

lanchonete(00,5)
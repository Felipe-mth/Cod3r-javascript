/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
*/

function frutari(a){
    b = 'maçã';
    c = 'kiwi';
    d = 'melancia';
    switch(a){
        case a = b:
            console.log('Não vendemos esta fruta aqui');
            break;

        case a = c:
            console.log('Estamos com escassez de kiwis')
            break;
        case a = d:
            console.log('aqui está, são 3 reais o quilo')
            break;
        default:
            console.log('insira valor valido')
    }

}

frutari('maçã')
frutari('kiwi')
frutari('melancia')
frutari('banan')

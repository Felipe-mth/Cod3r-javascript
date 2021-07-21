/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

function hello(pedaco){
    inicio = 'Olá, '
    final = '!'
    
    console.log(inicio.concat(pedaco, final))
}

hello('joresmia')
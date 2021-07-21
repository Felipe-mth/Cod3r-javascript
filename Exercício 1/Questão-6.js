/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function juros_simples(capital, juros, tempo){
    montante = capital*(1+(juros*tempo))
    console.log(montante)
}


function juros_comp(capital, juros, tempo){
    montante = capital*Math.pow((1+juros),  tempo)
    console.log(montante.toFixed(2))
}
juros_simples(100, 0.1, 6)
juros_comp(100, 0.1, 6)

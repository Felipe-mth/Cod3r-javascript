/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
*/

function pagamentos(horas, dinheiro){
    salario = horas * dinheiro
    placeholder = 'Salário igual a R$ '
    console.log(placeholder.concat(salario))
}

pagamentos(100, 10)
/*Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

function floating(){
    const num =  0.30000000000000004
    const moeda = 'R$'
    console.log(moeda + ' ' + num.toFixed(2))
}
floating()
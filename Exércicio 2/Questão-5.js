/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
*/

function maiorouigual(num, ero){
    if(num>ero || num === ero){
        return true
    }
    else{
        return false
    }
}

console.log(maiorouigual(5,5))
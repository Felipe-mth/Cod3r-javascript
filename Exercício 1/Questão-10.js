/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false*/

function Isdivisible(a){
    if(a%3==0){
        retorno = true
        console.log(retorno)
    }else{
        retorno = false
        console.log(retorno)
    }
}

Isdivisible(33)
Isdivisible(69)
Isdivisible(27)
Isdivisible(28)
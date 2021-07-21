/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/

function compare(nome,nome2){
  neme = nome.toLowerCase()
   nimi = nome2.toLowerCase()
   if(neme == nimi){
    result = true
    return result
   }
   else if(neme != nimi){
       result = false
       return result
   }
}

console.log(compare('Jenifer', 'Jenifer'))
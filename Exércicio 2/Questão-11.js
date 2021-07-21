/*Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.*/

function eliminar(objeto, prop){
    let novoobj = objeto
 for (const key in novoobj) {     
   if(key.toString() === prop){
    console.log(key)
   delete novoobj[key]
   }
 }
 console.log(novoobj)
}

eliminar({nome: 'jacinta', idade: 23}, 'idade')
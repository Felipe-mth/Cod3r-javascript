const alunos= [
    {nome: 'jose', nota: 7.5 , bolsista: false},
    {nome: 'josefa', nota: 9.5 , bolsista: true},
    {nome: 'ana', nota: 7 , bolsista: true},
    {nome: 'maria', nota: 8.5 , bolsista: true},
]


console.log('todos os alunos são bolsistas?')
falso =0
listagem = alunos.map(a => a.bolsista).reduce(function (acumulador,atual){
    
       if(acumulador == false || atual == false){
          falso+=1
       }    
})

if(falso !=0){
    console.log('não, temos: '+ falso +  ' alunos não bolsistas' )
}
else if(falso == 0){
 console.log('sim , todos os alunos são bolsistas')
}




/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.*/

function notas(aluno,nota0,nota1,nota2){
    while(aluno > 0){

        if(nota0>nota1 && nota0>nota2){
            //nota 0 tem peso 4
            media = (nota0*4+nota1*3+nota2*3)/10;
            if(media > 5){
                console.log('Parbéns: '+ aluno + ', suas notas foram: '+ nota0 +', ' +  nota1 +' ,' +nota2 + ' Dando a média: ' + media + ', e por isso você foi aprovado' )
            }
            else if(media < 5){
                console.log('Sinto muito: '+ aluno + ' suas notas foram: '+ nota0 +' ' +  nota1 +' ' +nota2 + ' Dando a média: ' + media + ', e por isso você foi reprovado' )
            }
        }
        //nota 1 tem peso 4
         if(nota1>nota0 && nota1>nota2){
            media = (nota0*3+nota1*4+nota2*3)/10;
            if(media > 5){
                console.log('Parbéns: '+ aluno + ', suas notas foram: '+ nota0 +', ' +  nota1 +' ,' +nota2 + ' Dando a média: ' + media + ', e por isso você foi aprovado' )
            }
            else if(media < 5){
                console.log('Sinto muito: '+ aluno + ' suas notas foram: '+ nota0 +' ' +  nota1 +' ' +nota2 + ' Dando a média: ' + media + ', e por isso você foi reprovado' )
            }
        }
        //nota 2 tem peso 4
         if(nota2>nota0 && nota2>nota1){
            media = (nota0*3+nota1*3+nota2*4)/10;
            if(media > 5){
                console.log('Parbéns: '+ aluno + ', suas notas foram: '+ nota0 +', ' +  nota1 +' ,' +nota2 + ' Dando a média: ' + media + ', e por isso você foi aprovado' )
            }
            else if(media < 5){
                console.log('Sinto muito: '+ aluno + ' suas notas foram: '+ nota0 +' ' +  nota1 +' ' +nota2 + ' Dando a média: ' + media + ', e por isso você foi reprovado' )
            }
        }
        //todas peso 3 
        else if(nota0 == nota1 && nota1 == nota2){
            media = (nota0*3+nota1*3+nota2*3)/10;
            if(media > 5){
                
                console.log('Parbéns: '+ aluno + ', suas notas foram: '+ nota0 +', ' +  nota1 +' ,' +nota2 + ' Dando a média: ' + media + ', e por isso você foi aprovado' )
            }
            else if(media < 5){
                console.log('Sinto muito: '+ aluno + ' suas notas foram: '+ nota0 +' ' +  nota1 +' ' +nota2 + ' Dando a média: ' + media + ', e por isso você foi reprovado' )
            }
        }
    }
}

notas('-235',1 , 2 , 1)
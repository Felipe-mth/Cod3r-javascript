/*Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.*/

function alunos(informacao){
    media=0
    alunomedia = informacao
    for (const key in informacao) {
        informacao[key].forEach(element => {
            media+=element
        });
        media= media/informacao[key].length
        alunomedia[key] = media
        media=0
    }
    console.log(alunomedia)
    }
    



alunos({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    })
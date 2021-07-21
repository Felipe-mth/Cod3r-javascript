/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.*/

function triangulo(base, altura){
    area = (base*altura)/2
    console.log(area.toFixed(2))
}

triangulo(10,15)
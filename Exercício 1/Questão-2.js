/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
 */

function Typetriangle(a,b,c){
    if(a==b && b!=c || b==c && c!=a|| a==c && c!=b){
        console.log('o triangulo é isósceles')
    }
    else if(a==b && b==c){
        console.log('o triangulo é equilatero')
    }
    else{
        console.log('o triangulo é escaleno')
    }
}

Typetriangle(1,2,1)
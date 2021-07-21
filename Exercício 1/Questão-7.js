/*Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os 
valores seriam respectivamente: 3,-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, 
mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

function baskhara(a,b,c){
    resultado = [];
   delta = Math.pow(b,2) -4 * a * c;
   if(delta > 0){
    Deltoide = Math.sqrt(delta);
    num = ~b +1;
    x1 = (num + Deltoide)/(2*a);
    x2 = (num - Deltoide)/(2*a);
    resultado.push(x1);
    resultado.push(x2);
    console.log(resultado);
   }else{
       console.log('delta é negativo')
   }
  
}

baskhara(2,6,4)
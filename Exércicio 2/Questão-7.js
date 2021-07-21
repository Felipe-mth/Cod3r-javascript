/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
*/


function inclusivo(numero, minimo, maximo, inclusivo=false){

    if(minimo > maximo){
        max=minimo
        min = maximo
        if(inclusivo == true){
            if(numero>=min && num<=max){
            
                return true
            }
            else{
                return false
            }
        }
        else if(inclusivo  == false){
            if(numero>min && numero<max){
                return true
            }
            else{
                return false
            }
        }
        
    }
    else if(maximo > minimo){
        if(inclusivo == true){
            if(numero>=minimo && numero<=maximo){
                return true
            }
            else{
                return false
            }
        }
        if(inclusivo == false){
            if(numero>minimo && numero<maximo){
                return true
            }
            else{
                return false
            }
        }
       
    }
    

}
console.log(inclusivo(66, 50, 65))
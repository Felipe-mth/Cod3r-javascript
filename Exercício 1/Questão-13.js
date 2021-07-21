/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/

function diautil(a){
        switch(a){
            case a=1: console.log('final de semana')
            break;
            case a=2:  
           
            case a=3:  
            case a=4:  
           
            case a=5:  
            
            case a=6: console.log('dia de semana')
            break;
            case a=7: console.log('final de semana')
            break;
            default: console.log('não é um dia da semana, pois o valor é invalido')
        }

    }
diautil(1)
diautil(2)
diautil(3)
diautil(4)
diautil(5)
diautil(6)
diautil(7)
diautil(8)
/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente */

function potencia(base,expoente){
        bass = base
    for(let i=1; i<expoente; i++){
        base*=bass
        console.log(base)
    }
    
}

potencia(2,10)
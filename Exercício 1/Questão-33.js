/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console*/

function uniao(){
    vetorint = [1,2,0,3]
    vetorstring = ['aviao', 'carro', 'bike', 'barco']
    vetordouble = [1.2, 2.5, 3.3, 4.8]

    vator = vetorint.concat(vetorstring)
    vitor = vetordouble.concat(vetorint)
    
    console.log(vator)
    console.log(vitor)
}

uniao()
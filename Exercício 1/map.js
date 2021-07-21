Array.prototype.filter2= function(callback){
     novoarray= [] 
    for(i=0; i<this.length;i++){
        if(callback(this[i], i, this)){
            novoarray.push(this[i])
        }
    }
    return novoarray
}

const carrinho = [
    {nome: 'notebook', preço: 2500, fragil: false},
    {nome: 'Vaso', preço: 500, fragil: true},
    {nome: 'bazuca', preço: 300, fragil: false}
]

console.log(carrinho.filter2(function(p) {
    if(p.preço >= 500 && p.fragil == true ){
        return true
    }
}))
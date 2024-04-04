// carro velocildade get e set

const _carro = Symbol('carro')
class Carro{
    constructor(tipo){
        this[_carro] =tipo
        this.velo= 0
    }
    get velocidade(){
        return this.velo
    }
    set velocidade(valor){
        this.velo= valor
    }
    acelerar(){
        if(this.velo >=100)return;
        this.velo +=10
    }
    desacelerar(){
        if(this.velo <=0)return;
        this.velo -=10
    }
}

const fusquinha = new Carro('fusca');
console.log(fusquinha)
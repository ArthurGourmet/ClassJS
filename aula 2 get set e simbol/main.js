// Simbol cria uma chave privada
const _velocidade = Symbol('velocidade') // assim cria uma chave privada que nao pode ser alterada 
class carros{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    get velocidade(){ // get acessa o valor
        return this[_velocidade]
    }
    set velocidade(valor){ // set usado prar mudar o valor
        if(this[_velocidade] >= 100 || this[_velocidade] <= 0)return
        this[_velocidade] = valor
    }
    acelerar(){
        if(this[_velocidade]>=100)return;
        this[_velocidade]++;
    }
    desacelerar(){
        if(this[_velocidade] <= 0)return;
        this[_velocidade]--
    }
}

const fusca = new carros('fusca');
fusca.velocidade = 4000
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.acelerar()
fusca.velocidade = 87
console.log(fusca.velocidade)
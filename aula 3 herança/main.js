class dispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado)return;
        this.ligado = true
    }
    dsligar(){
        if(!this.ligado)return;
        this.ligado=false
    }
}
class smartphone extends dispositivoEletronico{ //a palavra extends e esencial para fazer herda a henraça do pai
    constructor(nome,modelo){
        super(nome);// super deve ser  usado para fazer essa ligaçao
        this.modelo = modelo

    };
    iniciar(){
        if(!this.ligado){
            console.log(`${this.nome} nao pode ser iniciado por esta desligado`)
            return
        }
        console.log('iniciando')
    }
}

const disositivoAleatoria= new dispositivoEletronico('monitor');
const celular = new smartphone('s9',2019);

console.log(celular)
celular.ligar()
celular.iniciar()
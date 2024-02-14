//sao metods diferentes que so funcionam so para a classe


class lampada{
    constructor(nome){
        this.nome= nome;
        this.ligada = false;
    };
    ligar(){
        this.ligada= true
    };
    desligar(){
        this.ligada = false
    };
    static trocar(){
        console.log('trocando bocal')
    };

}

const l = new lampada('led')
l.ligar()

console.log(l)
lampada.trocar() // o metodo static so funciona na prorpia classe e nao tem acesso a dados dos objetos
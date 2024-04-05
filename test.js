//lampada
class Lampada{
    constructor(nome){
        this.nome = nome
        this.acesa= false
    }
    ligar(){
        this.acesa = true
    }
    desligar(){
        this.acesa = false
    }
    static troca(){
        console.log("trocando bocal")
    }


}
const lam = new Lampada('LED')
lam.ligar()
lam.desligar()
console.log(lam)
Lampada.troca()
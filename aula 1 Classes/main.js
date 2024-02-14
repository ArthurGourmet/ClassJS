// estrutura das classes

class Pessoa{// a estrutura
    constructor(nome,sobrenome){// one rece os parametros
        this.nome = nome,
        this.sobrenome= sobrenome
    }
    fala(){// como criar metodos diretos do prototytpe
        console.log(`${this.nome} esta falando`)
    }
    namoro(nome){
        console.log(`${this.nome} esta namorando com ${nome}`)

    }
}

const p1= new Pessoa("arthur",'carneiro')
console.log(p1)
p1.fala()
p1.namoro('ANGELA')
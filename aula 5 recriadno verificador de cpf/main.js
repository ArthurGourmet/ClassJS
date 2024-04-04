// recriando o verificador de cpf feito com contructo factiion

class ValidaCpf{
    constructor(cpf){
        this.cpf = cpf.replace(/\D+/g, '');
        this.valido = false
        
    }
    validador(){
        const newcpf = this.cpf.slice(0,-2);
        const digito1 =  this.digito(newcpf)
        const digito2 =  this.digito(newcpf+ digito1)
        const novocpf = newcpf + digito1 + digito2;
        console.log(novocpf)
        if(novocpf === this.cpf){
            this.valido = true
        }
    }
    digito(cpf){
        const arrayCpf = Array.from(cpf)
    let regresso = arrayCpf.length +1;
    const total = arrayCpf.reduce((ac,val)=>{
        ac += (regresso * Number(val) )
        regresso--
        return ac

    },0)
    const digito = 11 - (total%11)
    return digito > 9 ? '0' : String(digito) 
    }

}

const cpf = new ValidaCpf('972.840.650-95');
cpf.validador()
console.log(cpf)
const hoje = new Date()
const idadeAtual = function(dn){

    const ano_hoje = hoje.getFullYear()
    const mes_hoje = hoje.getMonth()
    const dia_hoje = hoje.getDate()

    const ano_dn = dn.getFullYear()
    const mes_dn = dn.getMonth()
    const dia_dn = dn.getDate()

    console.log(mes_dn, mes_hoje)

    if(ano_hoje > ano_dn){
        if(mes_hoje > mes_dn){
            return ano_hoje - ano_dn
        }else if(mes_hoje === mes_dn){
            if(dia_hoje >= dia_dn){
                return (ano_hoje - ano_dn)
            }else{
                return (ano_hoje - 1) - ano_dn
            }
        }else{
            return (ano_hoje - 1) - ano_dn
        }
    }else{
        return 0
    }

}

const bezinho = {
    nome: 'Bernardo',
    dn: new Date(2021,3,27),
    idade: function(){
        return idadeAtual(this.dn)
    },
}

const lala = {
    nome: 'Laís',
    dn: new Date(1993,2,9),
    idade: function(){
        return idadeAtual(this.dn)
    },
}

const dada = {
    nome: 'Adailton',
    dn: new Date(1961,6,4),
    idade: function(){
        return idadeAtual(this.dn)
    },
}

const paulo = {
    nome: 'Paulo',
    dn: new Date(1992,9,6),
    idade: function(){
        return idadeAtual(this.dn)
    },
}



function calculaIdade(anos) {
	return `${this.nome} tem ${this.idade()} anos. Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade() + anos
	} anos de idade.`;
}

//console.log(calculaIdade.call(dada, 8))

console.log(calculaIdade.apply(paulo, [8]))
const hoje = new Date()
const idadeAtual = function(){

    const ano_hoje = hoje.getFullYear()
    const mes_hoje = hoje.getMonth()
    const dia_hoje = hoje.getDate()

    const ano_dn = this.dn.getFullYear()
    const mes_dn = this.dn.getMonth()
    const dia_dn = this.dn.getDate()

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

const dataN = (dia,mes,ano) => {
    return new Date(ano,mes-1,dia)
}

const bezinho = {
    nome: 'Bernardo',
    dn: dataN(27,04,2021),
}

const lala = {
    nome: 'Laís',
    dn: dataN(09,03,2021)
}

const dada = {
    nome: 'Adailton',
    dn: dataN(04,07,1961)
}

const paulo = {
    nome: 'Paulo',
    dn: dataN(06,10,1992)
}

function calculaIdade(anos) {
    const idade_atual = idadeAtual.call(this)

	return `${this.nome} tem ${idade_atual} anos. Daqui a ${anos} anos, ${this.nome} terá ${
		idade_atual + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(paulo, 9))

//console.log(calculaIdade.apply(paulo, [8]))
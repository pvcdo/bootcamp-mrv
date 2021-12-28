const portugues = {
    peso: 3,
}

const matematica = {
    peso: 6,
}

const direito = {
    peso: 2,
}

const arr = [2,3,5,6]

/**
 * MAP

    const comThis = arr.map(function(item){
        return item * this.peso
    },matematica)

    const semThis = arr.map(function(item){
        return item * 3
    })

    console.log(comThis)

    console.log(semThis)

/**
 * FILTER

const pares = arr.filter(function(item){
    return item%2 === 0
})

console.log(pares)

/**
 * REDUCE*/

console.log('Executando array.prototype.reduce()')

const SOMA = arr.reduce(function(ac,cv){return ac + cv})

console.log(SOMA)

function saldoFinal(compras,saldoAtual){
    return compras.reduce(function(total,preco){
        let saldoFinal = total - preco
        saldoFinal = saldoFinal.toFixed(2)
        return saldoFinal
    },saldoAtual)
}

const compras = [
    9.99,7.52,6.98,22.30
]

console.log('O saldo final será de R$' + saldoFinal(compras,100))



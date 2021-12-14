function compararSomarComparar(a,b){
    const comparacao_inputs = a === b ? '' : 'não '
    
    const soma = a+b
    
    let comparacao_soma = ''
    
    if(soma < 10){
        comparacao_soma = 'menor que 10'
    }else if(soma > 20){
        comparacao_soma = 'maior que 20'
    }else if(soma === 10){
        comparacao_soma = 'igual a 10'
    }else if(soma === 20){
        comparacao_soma = 'igual a 20'
    }else{
        comparacao_soma = 'maior que 10 e menor que 20'
    }

    console.log(`Os números ${a} e ${b} ${comparacao_inputs}são iguais. Sua soma é ${soma}, que é ${comparacao_soma}.`)
    
}

compararSomarComparar(4,5)
class ContaBancaria {
    constructor(
        agencia,
        numero,
        tipo,
    ){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0 //segundo a professora, a propriedade que receberá um getter e um setter precisa ter um underline no começo do nome, para que seja possível usar o nome dessa propriedade nas funções getter e setter
    }

    get saldo(){
        return this._saldo
    }

    set saldo(val){
        this._saldo = val
    }

    sacar(val){
        if(_saldo < val){
           return "operação negada" 
        }

        this._saldo -= val
        return this._saldo
         
    }

    depositar(val){
        this._saldo += val
        return this._saldo
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(
        agencia, 
        numero,
        cartaoCredito
    ){
        super()//o método super vai "puxar" os parâmetros e métodos da classe pai
        this.agencia = agencia
        this.numero = numero
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(val){
        this._cartaoCredito = val
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(
        agencia, 
        numero,
        cartaoCredito
    ){
        super( //também podemos declarar o super assim, mas temos que colocar na mesma ordem que está aparecendo no pai e não podemos pular de prop.
            agencia,
            numero
        )
        this.tipo = 'universitaria'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(val){
        this._cartaoCredito = val
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(
        agencia, 
        numero
    ){
        super(
            agencia,
            numero
        )
        this.tipo = 'universitaria'
    }

    sacar(val){
        if(val >= 500){
            return "operação negada"
        }

        this._saldo -= val
    }
}
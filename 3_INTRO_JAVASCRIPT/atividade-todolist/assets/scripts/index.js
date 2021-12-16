function marcarFeita(e){
    
    let id = e.target.id
    let id_tarefa = id.substr(2,1)
    let p = document.getElementById('p'+id_tarefa)
    
    if(e.target.checked){
        p.className = 'feita'
    }else{
        p.className = 'nao_feita'
    }
}

function addTarefa(){
    //pegando o valor do input e resentando o valor
    let tarefa = document.getElementById('input_tarefa').value
    document.getElementById('input_tarefa').value = ''

    //setando o valor do id para a tarefa
    let id_tarefa = document.getElementById('todolist').children.length

    //criando um wrapper os elementos de checkbox e texto
    let wrapper = document.createElement('div')
    wrapper.id = 'tarefa'+id_tarefa

    let p_tarefa = document.createElement('p')
    p_tarefa.id = 'p'+id_tarefa
    p_tarefa.innerHTML = tarefa

    let cb_tarefa = document.createElement('input')
    cb_tarefa.setAttribute('type','checkbox')
    cb_tarefa.id = 'cb'+id_tarefa

    //colocando o elemento wrapper no to-do-list
    document.getElementById('todolist').appendChild(wrapper)

    //colocando os elementos no to-do-list
    document.getElementById('tarefa'+id_tarefa).appendChild(cb_tarefa)
    document.getElementById('tarefa'+id_tarefa).appendChild(p_tarefa)

    document.getElementById('cb'+id_tarefa).addEventListener('change',(e)=>{marcarFeita(e)})
}

function load(){
    let botao_add = document.getElementById('btn-add')
    botao_add.addEventListener('click',addTarefa)
}
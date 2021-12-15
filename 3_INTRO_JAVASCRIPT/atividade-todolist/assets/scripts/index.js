function marcarFeita(id){
    /*document.getElementById('p'+id).style.textDecoration = 'line-through'
    document.getElementById('p'+id).style.color = '#ccc'*/

    console.log(id)
}

function addTarefa(){
    //pegando o valor do input e resentando o valor
    let tarefa = document.getElementById('input_tarefa').value
    document.getElementById('input_tarefa').value = ''

    //setando o valor do id para a tarefa
    let id_tarefa = document.getElementById('todolist').childElementCount
    id_tarefa = id_tarefa + 0

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

    document.getElementById('cb'+id_tarefa).addEventListener('change',(id_tarefa)=>marcarFeita(id_tarefa))
}

function load(){
    let botao_add = document.getElementById('btn-add')
    botao_add.addEventListener('click',addTarefa)
}
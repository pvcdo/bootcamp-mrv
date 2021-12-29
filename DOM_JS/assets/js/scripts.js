function trocaModo(){
    body.classList.toggle('dark-mode')
    footer.classList.toggle('dark-mode')
    alteraTextos()
}

function alteraTextos(){
    if(body.classList.contains('dark-mode')){
        h2.innerHTML = "Olá! Estamos no Dark Mode"
        botao.innerHTML = '&#9789;'
    }else{
        h2.innerHTML = "Olá! Estamos no Light Mode"
        botao.innerHTML = '&#9788;'
    }
}

const botao = document.getElementById('modo')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const h2 = document.getElementsByTagName('h2')[0]

botao.addEventListener('click',trocaModo)
function trocaModo(){
    let valor = document.getElementById('hidden').value

    if(valor == 0){
        
        //No Light mode trocando para dark

        document.getElementsByTagName('body')[0].style.backgroundColor = '#2F3337'
        document.getElementsByTagName('body')[0].style.color = '#e5e8e8'

        document.getElementsByTagName('footer')[0].style.backgroundColor = '#e5e8e8'
        document.getElementsByTagName('footer')[0].style.color = '#2F3337'

        document.getElementsByTagName('h2')[0].innerHTML = 'Olá! Estamos no Dark Mode'

        document.getElementById('modo').innerHTML = '&#9789;'

        document.getElementById('hidden').value = 1
    }else{

        //No Dark mode trocando pro light

        document.getElementsByTagName('body')[0].style.backgroundColor = '#e5e8e8'
        document.getElementsByTagName('body')[0].style.color = '#2F3337'

        document.getElementsByTagName('footer')[0].style.backgroundColor = '#2F3337'
        document.getElementsByTagName('footer')[0].style.color = '#e5e8e8'

        document.getElementsByTagName('h2')[0].innerHTML = 'Olá! Estamos no Light Mode'

        document.getElementById('modo').innerHTML = '&#9788;'

        document.getElementById('hidden').value = 0
    }

    console.log(valor)
    
}

const botao = document.getElementById('modo')
botao.addEventListener('click',trocaModo)
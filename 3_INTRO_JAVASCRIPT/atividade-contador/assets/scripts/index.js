function subtrair(){
    let count = parseFloat(document.getElementById('count').innerHTML)
    if(count > -5){
        count--
        document.getElementById('count').innerHTML = count
    }
    verificaCor()
}

function somar(){
    let count = parseFloat(document.getElementById('count').innerHTML)
    if(count < 15){
        count++
        document.getElementById('count').innerHTML = count
    }
    verificaCor()
}

function load(){
    let botao_menos = document.getElementById('btn-menos')
    let botao_mais = document.getElementById('btn-mais')
    //let count = parseFloat(document.getElementById('count').innerHTML)

    botao_menos.addEventListener('click',subtrair)
    botao_mais.addEventListener('click',somar)

    verificaCor()
}

function verificaCor(){
    let count = parseFloat(document.getElementById('count').innerHTML)
    if(count < 0){
        document.getElementById('count').style.color = "red"
    }else{
        document.getElementById('count').style.color = "goldenrod"
    }
}
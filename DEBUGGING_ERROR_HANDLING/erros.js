const arr = [1,2,3]
const arr_errado = 'oi'

const retornaArr = function(arr, tam){
    try{
        if(!arr || !tam){
            throw new ReferenceError('Erro do tipo ReferenceError')
        }else if(typeof(arr) !== 'object' || typeof(tam) !== 'number'){
            throw new TypeError('Erro do tipo TypeError')
        }else if(arr.length !== tam){
            throw new RangeError('Erro do tipo RangeError')
        }
        
        console.log(arr)
        
    }catch(e){
        if(e instanceof ReferenceError){
            console.log('Erro do tipo ReferenceError')
        }else if(e instanceof TypeError){
            console.log('Erro do tipo TypeError')
        }else if(e instanceof RangeError){
            console.log('Erro do tipo RangeError')
        }else{
            console.log('Erro desconhecido')
        }

        //console.log(e.message)
    }
}

retornaArr(arr_errado,4)
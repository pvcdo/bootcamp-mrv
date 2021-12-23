let arr_out = []

function verificaArr(arr_in){
    let erro = false

    if(arr_in.length > 0){
        arr_in.forEach(element => {
            if(isNaN(element)){
                erro = true
            }
        });

        arr_in.forEach(element => {
            if(element !== 0 && element%2 === 0){
                arr_out.push(0)
            }else{
                arr_out.push(element)
            }
        });

         return erro ? "Passar um array apenas com números" : arr_out
    }else{
        return -1
    }
}

let arr_in = [6,'a']

console.log(verificaArr(arr_in))

/* Primeira forma 
function palindromo(texto){
    texto = texto.toLowerCase()
    const arr = texto.split("")
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[arr.length-i-1]){
            return console.log(false)
        }
    }
    return console.log(true)
}

let texto = "raiar"
palindromo(texto)

//*/

/* Segunda forma

function verificaPalindromo(texto) {
	if (!texto) return;
    texto = texto.toLowerCase()
	console.log(texto === texto.split('').reverse().join(''));
}

let texto = "Pedro"
verificaPalindromo(texto);

//*/


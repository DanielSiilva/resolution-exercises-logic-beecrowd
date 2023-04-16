// Criar uma função que receba como parâmetro um array de números e retorne um array  contendo somente números positivos.


const arr = [ -1, -2, -4, 2, 4, -5.5, 5.5, 0.3, 3, 4.4]


function positiveNumber(arr){
    //1° percorrer o array
    // 2° filtrar somente os maiores que 0, ou seja, os positivos
    // 3° adicionar em um novo array

    let positivesNumbers = []

    for (let i= 0; i < arr.length ; i++){
        if(arr[i] > 0){
            positivesNumbers.push(arr[i])
        }
    }

    return positivesNumbers
}

console.log(`Meu resultado: ${positiveNumber(arr)}`);

// --------------------------------------------------------

function retornarPositivos(ar){ 
    var ar2 = []; 
    for (var i = 0; i < ar.length; i++) { 
        var el = ar[i]; 
        if (el >= 0) { 
            ar2.push(el); 
        } 

    } 

    return ar2; 
} 

console.log(`Gabarito: ${retornarPositivos(arr)}`);
  


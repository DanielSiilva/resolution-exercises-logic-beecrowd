// Calcular a média de todos os números de um array 

const arrayTest = [1, 2, 3, 4]

function mediaSumArray(arr){
    const lengthArr = arr.length;
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }

    return sum / lengthArr
}

console.log(`Meu resultado: ${mediaSumArray(arrayTest)}`);

// =====================================================

function mediaArray(ar) { 
    var n = ar.length; 
    var soma = 0; 
    for (var i = 0; i < n; i++) { 
        soma += ar[i]; 
    } 
    return soma / n; 
} 

console.log(`Gabarito: ${mediaArray(arrayTest)}`);
// Calcular a soma dos números de um array 

const arrayTest = [1, 2, 3, 4]

function sumArrayNumbers(arr){
    let cont = 0;

    for(let i = 0; i < arr.length; i++){
        cont += arr[i]
    }

    return cont
}

console.log(`Meu resultado: ${sumArrayNumbers(arrayTest)}`);

// ---------------------------------------------

function somarArray(ar){ 
    var soma = 0; 
    for (var i = 0; i < ar.length; i++) { 
        soma += ar[i]; 
    } 
    return soma; 
}

console.log(`Gabarito: ${somarArray(arrayTest)}`);
// Localizar o maior valor dentro de um array de números 

// Declarar uma variavel inicial na posicão 0;
// Percorrer o array ;
// comparar o item atual se é maior que a variavel com posição 0;
// Se for maior que 0, esse elemente passa ser o maior, senão o loop é repetido e irá comparar o proximo numero ;

const arr = [1,2, 10]

function higherNumber(arr){
    let higher = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > higher){
            higher = arr[i]
        }
    }

    return higher
}

console.log(`Meu resultado: Maior numero = ${higherNumber(arr)}`);

// --------------------------

function LocalizarMaior(ar) { 
    var max = ar[0]; 
    for (var i = 0; i < ar.length; i++) { 
        if (ar[i] > max) { 
            max = ar[i]; 
        } 
    } 
    return max; 
}

console.log(`Gabarito: Maior numero = ${LocalizarMaior(arr)}`);
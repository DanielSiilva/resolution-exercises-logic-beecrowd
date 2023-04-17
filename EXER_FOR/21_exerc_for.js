// Criar uma função para inverter um array

const arr = [5,4,3,2,1, 0]

function invertArray(arr){
    let invert = [];

    for(let i = arr.length -1;  i >= 0; i--){
        invert.push(arr[i])
    }

    return invert
}

console.log(invertArray(arr));
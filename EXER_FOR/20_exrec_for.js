// Criar uma função que junte dois arrays e retorno o resultado como um novo array 

const arr = [ 1, 2, 3];
const arr1 = [4, 5, 6]

// 1° forma, com o auxilio da função concat
function joinArray(arr1, arr2){
    const newArray = arr1.concat(arr2)

    return newArray
}

console.log(joinArray(arr, arr1));

// ------------------------------------
// 2° forma

function joinArray1(arr1, arr2){
    const joinArray = [];

    for(let i of arr1){
        joinArray.push(i)
    }

    for(let i of arr2){
        joinArray.push(i)
    }

    return joinArray
}

console.log(joinArray1(arr, arr1));
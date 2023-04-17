// Criar uma função que retorno um valor booleano informando se o número enviado como parâmetro é um número primo. 


function PrimeNumber(n){
    if(n <2){
        return false
    }
    if (n ===2){
        return true
    }

    let maxDiv = Math.sqrt(n)

    for (let i =2; i <= maxDiv; i++){
        if(n % i === 0){
            return false
        }
    }

    return true

}

console.log(6, " é um número primo? ", PrimeNumber(6)); 

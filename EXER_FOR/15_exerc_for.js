// Calcular a soma de todos os dígitos de um número inteiro positivo 

//1° Transformar o parametro em uma string;


function calculateDigitsPositiveNumber(n){
    // O método toString() retorna uma string representando o objeto.
    let nToString = n.toString();
    let sum = 0;

    for (let i of nToString){
        let digit = parseInt(i)
        sum += digit
    }

    return sum

}

console.log(calculateDigitsPositiveNumber(02));


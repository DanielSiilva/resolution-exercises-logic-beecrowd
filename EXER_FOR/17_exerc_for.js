// Criar uma função para imprimir os 10 primeiros números da sequência de Fibonacci usando recursividade

 
function Fibonacci(n){
    if( n == 0){
        return 0;
    }

    if( n ==1){
        return 1;
    }

    return Fibonacci(n - 1) + Fibonacci(n -2);
}

console.log(Fibonacci(8));

// imprimir todas as tabuadas do número 1 ao 10 

// Função para fazer a tabuada de qualquer numero
function imprimeTabuada(n){
    for(let i = 0; i < 10; i ++){
        let row = `${n} * ${i} = ${n * i}`
        console.log(row);
    }
}

imprimeTabuada(3)

// Laço que repete de 1 a 10,  e a cada lop, execulta a função que execulta outo lop

for (let i = 1; i < 10 ; i++){
    imprimeTabuada(i)
    
    console.log("");
}

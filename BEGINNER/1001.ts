// Leia 2 variáveis, denominadas A e B e faça a soma dessas duas variáveis, atribuindo seu resultado à variável X . Imprima X como mostrado abaixo. 

interface SomaPros{
    a: number,
    b: number
}

function Sum ({a, b}:SomaPros) {
    const X = a + b

    return(` X = ${X} `);
    
}
console.log(Sum(2, 4));


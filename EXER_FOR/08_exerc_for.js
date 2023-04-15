// Calcular a soma dos números impares maiores que 10 e menores que 30 

// Declado um contador
let cont = 0;

for (let i = 11; i < 30; i++){
    // verificar a contagem, a partit do loop, se o resto da divisão por 2 for igual a 2, será somado ao contador
    if(i % 2 === 1){
        cont += i
    }
}

console.log(`Meu resultado: ${cont}`);

// ---------------------------------------------------------------------
var soma = 0; 
for(var i = 11; i <= 30; i += 2) { 
 soma += i; 
} 
console.log(`Gabarito: ${soma}`); 
// Fn = Fn - 1 + Fn - 2 

// Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade

// Neste caso, repetimos o número 1 e somamos os dois, ou seja, 1 + 1 = 2. Em seguida, somamos  o resultado com o número antecessor, ou seja, 2 + 1 = 3, e assim continuamente, em uma sequência infinita

var f0 = 0; 
console.log(f0); 

var f1 = 1; 
console.log(f1); 

for (var i = 2; i < 10; i++) { 
 var fi = f1 + f0; 

 console.log(fi); 

 f0 = f1; 
 f1 = fi; 
} 



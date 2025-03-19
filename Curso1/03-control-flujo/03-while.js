// cuales son los numeros pares.
let i = 0;

while (i < 10){
    if (i % 2 == 0){
        console.log('Numero par', i);
    } else {
        console.log('Numero impar', i);
    }
    i++;
}

console.log('fuera del while');
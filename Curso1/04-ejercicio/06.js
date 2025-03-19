/**
 * crear un algoritmo que devuelva la cantidad
 * de números positivos en un array.
 */


let array = [2, 5, 7, 15, -5, -100, 55];
function getMenorMayor(arr){
    let cantidad = 0;
    for (elemento of arr){
        if (elemento > 0){
            cantidad++;
        }
    }
    return cantidad;
    
}

let resultado = getMenorMayor(array);
console.log(resultado);
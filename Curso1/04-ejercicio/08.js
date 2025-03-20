/**
 * Crear algoritmo que tome un array de 
 * objetos y devuelve un array de pares
 */

let array = [{
    id: 1,
    name: 'Luis',
}, {
    id: 2,
    name: 'Hernán',
}, {
    id: 3,
    name: 'José',
}];

let pares = [
    [1, { id: 1, name: 'Luis' }],
    [2, { id: 2, name: 'Hernán' }],
    [3, { id: 3, name: 'José' }],
];

function toPairs(arr){
    let pairs = [];
    for (idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
    
}

let resultado  = toPairs(array);
console.log(resultado);
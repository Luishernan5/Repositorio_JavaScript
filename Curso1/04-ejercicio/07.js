/**
 * Crear un algoritmo que devuelva
 * el precio del producto
 * más impuesto
 */

function precioCompleto(precio, impuesto){
    let total = precio * impuesto;
    return precio + total;

}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);
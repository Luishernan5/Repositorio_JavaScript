/**
 * Imprimir que pantalla pertenece a la resolucion.
 * Nombre: ancho X alto
 * 8K 7680 X 4320
 * 4K 3840 X 2160
 * WQHD 2560 X 1440
 * FHD 1920 X 1080
 * HD 1280 X 720
 */

function nombreResolucion(alto, ancho){
    if (alto >= 7680 && ancho >= 4320){
        return '8k';
    } else if ( alto >= 3840 && ancho >= 2160){
        return '4k';
    } else if ( alto >= 2560 && ancho >= 1440){
        return 'WQHD';
    } else if (alto >= 1920 && ancho >= 1080){
        return 'FHD';
    } else if (alto >= 1280 && ancho >= 720){
        return 'HD';
    } else {
        return false;
    }
}
let nombre = nombreResolucion(8000, 3000);
console.log(nombre)
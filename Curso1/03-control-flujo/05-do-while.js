let i = 2;

/*en while se evalua primero la condicion, si la 
condicion se cumple se ejecuta el codigo.*/
while (i < 3){ 
    if (i % 2 == 0){
        console.log('Numero par', i);
    }
    i++;
}

/* en do while ejecuta primero la porcion de codigo 
y despues la condicion, si la condicion se cumple
vuelve al ciclo.*/
do {
    if (i % 2 == 0){
        console.log('Numero par', i);
    }
    i++;
} while (i < 2)
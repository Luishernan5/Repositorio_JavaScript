let user = {
    id: 1,
    name: 'Hernán',
    age: 20,
};

for (let prop in user){
    console.log(prop, user[prop])
}

let animales = ['Caballo', 'Canguro', 'Cangrejo'];
for (let indice in animales){
    console.log(indice, animales[indice]);
}
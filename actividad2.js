//Crear un objecto que almacene datos de una mascota 
//desestructurar utilizando un minimo de 4 variables 
// Mostrar en consolo 

const cachorro = {
    Nombre :'Doki',
    edad : 7,
    raza : 'Doberman',
    color : 'negro'
}

const {Nombre, edad, raza, color} = cachorro;
console.log('\nNombre:', Nombre, '\nEdad:', edad, '\nRaza:', raza, '\ncolor:', color)

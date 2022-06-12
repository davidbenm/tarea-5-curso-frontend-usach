// 3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
let pokemones = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'Bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
]

const pokemonesTipoFuegoFinder = (arreglo) => {
    let newArray = []
    for (const pokemon of arreglo) {
        if (pokemon.tipo === 'Fuego') {
            newArray.push(pokemon)
        }        
    }
    return newArray
}

let pokemonesDeFuego = pokemonesTipoFuegoFinder(pokemones)
console.log(pokemonesDeFuego)
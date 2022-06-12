// 2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
let pokemones = ['Pikachu','Charmander','Bulbasaur','Squirtle']

const pokemonesConversor = (arreglo) => {
    let newArray = []
    for (const pokemon of arreglo) {
        newArray.push(pokemon.toUpperCase())
    }
    return newArray
}

let pokemonesMayuscula = pokemonesConversor(pokemones)
console.log(pokemonesMayuscula)

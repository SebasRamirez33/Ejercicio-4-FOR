// Ejercicio 1 

// Numeros impares del i al 50 - FOR 

// Bucle de repeticion 
for ( let indice = 1; indice <= 50; indice++){
    // Logica 
    if ( indice % 2 !== 0){ //  
        console.log(indice) 
    }
}

// Nosotros contamos a partir de 0 

let arreglo = [3, "Hola", true, 5, 19, "Vanessa", false]

console.log("Elementos numericos de mi arreglo:")

for (let i = 0; i < arreglo.length; i++){
    if(typeof arreglo[i] === "number"){ // If (multiplo de 5 )
        console.log(arreglo[i]); // Imprimir 
    }
}

console.log("-------")
// Arreglo de pokemons
let pokemons = 
[ 'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
  'nidoran-m',
  'nidorino',
  'nidoking',
  'clefairy',
  'clefable',
  'vulpix',
  'ninetales',
  'jigglypuff',
  'wigglytuff',
  'zubat',
  'golbat',
  'oddish',
  'gloom',
  'vileplume',
  'paras',
  'parasect',
  'venonat',
  'venomoth',
  'diglett',
  'dugtrio',
  'meowth',
  'persian',
  'psyduck',
  'golduck',
  'mankey',
  'primeape',
  'growlithe',
  'arcanine',
  'poliwag',
  'poliwhirl',
  'poliwrath',
  'abra',
  'kadabra',
  'alakazam',
  'machop',
  'machoke',
  'machamp',
  'bellsprout',
  'weepinbell',
  'victreebel',
  'tentacool',
  'tentacruel',
  'geodude',
  'graveler',
  'golem',
  'ponyta',
  'rapidash',
  'slowpoke',
  'slowbro',
  'magnemite',
  'magneton',
  'farfetchd',
  'doduo',
  'dodrio',
  'seel',
  'dewgong',
  'grimer',
  'muk',
  'shellder',
  'cloyster',
  'gastly',
  'haunter',
  'gengar',
  'onix',
  'drowzee',
  'hypno',
  'krabby',
  'kingler',
  'voltorb' ]

console.log(pokemons.length)

// Preguntar al usuario un NUMERO - propmt - numero (parseInt, Number)
// Variable de compÃ¡racion NUMERO 

// for (let i = 0; i < loquemedigaelusuarii; i++){
//  Logica --> Mostrar multiplos de 5 e imprimirlos 
// console.log(pokemons[i])}
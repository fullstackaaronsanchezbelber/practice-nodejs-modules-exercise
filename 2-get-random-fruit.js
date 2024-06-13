const frutas = ["Manzana", "Banana", "Pera", "Naranja", "Uva", "Melón", "Sandía", "Piña", "Kiwi", "Fresa",
    "Cereza", "Ciruela", "Mango", "Limón", "Mandarina", "Granada", "Higo", "Dátil", "Albaricoque", "Melocotón"];

// importa el módulo "utils.js" y usa el método getRandomElementFromArray adecuadamente

const { getRandomElementFromArray } = require('./mis-utilidades/utils.js')

const fruta1 = getRandomElementFromArray(frutas)
const fruta2 = getRandomElementFromArray(frutas)
const fruta3 = getRandomElementFromArray(frutas)

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
const {uniq} = require('lodash'); //importar biblioteca ou arquivo
const arrays = require('../require-exports/arrays') // importando a linha de codigo de outro arquivos 


const arrayUnico = arrays.split("");

let arrayString = uniq(arrayUnico);

console.log(arrayString);
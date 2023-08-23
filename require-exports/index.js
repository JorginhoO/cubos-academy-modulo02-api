const {uniq} = require('lodash'); //importar biblioteca ou arquivo
const arrays = require('./arrays') // importando a linha de codigo de outro arquivos 


const arrayUnico = arrays.split("");

let arrayString = uniq(arrayUnico);

console.log(arrayString);
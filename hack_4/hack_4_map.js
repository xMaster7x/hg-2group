/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let numeros = [];

for (let i = 1; i <= 8; i+=2) {
  numeros.push(i);
}

let result = numeros.map(function(numeros){
    return numeros;
});

console.log(result);

//export result
module.exports = result;
/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];

let i = 1;

while (i <= 5) {
  result.push(i);
  i++;
}

console.log(result.sort(function(a, b){return b - a}));

//export result
module.exports = result;
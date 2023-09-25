/**
 * ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"]
 * 
 * anexar al array result los items con los indices impares
 * formula (n % 2 == 1) para obtener un indice impar
 * 
 * example =>
 * if(indice % 2 == 1){
 *   ...
 * }  
 * 
 * 
    output => ["bar","qux","octo","foobar"]   
 */

const array = ["foo","bar","baz","qux","echo","octo","cat","foobar","quux"];
const result = [];
for (let i = 1; i < array.length; i += 2) {
  result.push(array[i]);
}
console.log(result);

//export result
module.exports = result;
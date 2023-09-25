/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * contar el total de items que inicien con el caracter "b"
 *  
 * 
 * output => 2   
 */

let arr = ["foo","bar","baz","qux","echo"];
let result = arr.filter(str => str.charAt(0) === "b").length;
console.log(result)

//export result
module.exports = result;
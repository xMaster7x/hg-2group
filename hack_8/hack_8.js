/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */

const array = ["foo","bar","baz","qux","echo"];
const result = array.filter(function(element, index) {
  return index > 0 && index < 4;
}).map(function(element) {
  if (element.includes("a")) {
    element = element.replace("a", "@");
  }
  if (element === "qux") {
    element = element.toUpperCase();
  }
  return element;
});
console.log(result);

//export result
module.exports = result;
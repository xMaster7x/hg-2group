/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => baz   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */


const numbers = [1,2,3,4,5];
const strings = ["foo","bar","baz","qux","echo"];
numbers.splice(0, 1, "one");
numbers.splice(2, 1, "three");
numbers.splice(4, 1, "five");
for (let i = 0; i < strings.length; i++) {
  if(strings[i]=="foo") {
      strings[i] = "f00";
  }
  if(strings[i]=="bar") {
      strings[i] = "Bar";
  }
  if(strings[i]=="baz") {
      strings[i] = "b@z";
  }
  if(strings[i]=="qux") {
      strings[i] = "quX";
  }
  if(strings[i]=="echo") {
      strings[i] = "3ch0";
  }
}

const result = [...numbers, ...strings];
result.unshift("h@ck");
result.push("h@ck");
result.splice(6, 0, "h@ck");
console.log(result);


//export result
module.exports = result;
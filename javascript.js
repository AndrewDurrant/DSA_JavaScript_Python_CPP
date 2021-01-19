/*
1) The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. Example: basicOp('+', 4, 7) -> 11
*/

// Solution:
function basicOp(operation, value1, value2) {
  let output = operation === '+' ? value1 + value2 
  : 
  operation === '-' ? value1 - value2 
  : 
  operation === '*' ? value1 * value2 
  : 
  value1 / value2;
  
  return output;
}

console.log(basicOp('/', 20, 2));
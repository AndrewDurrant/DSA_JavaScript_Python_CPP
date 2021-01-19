#include <iostream>
using namespace std;

/*
1) The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation. Example: basicOp('+', 4, 7) -> 11
*/

// Solution:
int basicOp(char op, int val1, int val2)
{
  int output = (op == '+') ? val1 + val2 : (op == '-') ? val1 - val2 : (op == '*') ? val1 * val2 : val1 / val2;

  cout << output << endl;

  return output;
}
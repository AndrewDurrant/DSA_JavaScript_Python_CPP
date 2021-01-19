# 1) The function should take three arguments - operation(string/char), value1(number), value2(number).
# The function should return result of numbers after applying the chosen operation. Example: basicOp('+', 4, 7) -> 11


# Solution:
def basic_op(operator, value1, value2):
    output = (value1 + value2 if (operator == '+') else
              value1 - value2 if (operator == '-') else
              value1 * value2 if (operator == '*') else
              value1 / value2
              )
    return output

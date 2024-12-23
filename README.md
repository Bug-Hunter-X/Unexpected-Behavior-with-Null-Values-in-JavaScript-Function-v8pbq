# Unexpected Behavior with Null Values in JavaScript Function

This repository demonstrates a common JavaScript bug involving the handling of null values.  The function `foo` is designed to add 1 to a given number. However, its handling of null values leads to unexpected behavior.

## Bug Description:

The function does not properly handle the case where the input `x` is `null`.  The current implementation attempts to add 1 to `null`, resulting in unexpected results.

## Solution:

The solution provides a corrected version of the function that explicitly handles `null` values, returning a more appropriate default value (0 in this case).

## How to Reproduce:

1. Clone this repository.
2. Open `bug.js` to see the original, buggy code.
3. Run the `bug.js` file to see the error.
4. Open `bugSolution.js` to see the corrected code.
5. Run the `bugSolution.js` file to see the solution.

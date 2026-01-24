/**
    LeetCode - 2703 Return Length of Arguments Passed
 
    Write a function argumentsLength that returns the count of arguments passed to it.
  
    Example 1:
        Input: args = [5]
        Output: 1
        Explanation:
        argumentsLength(5); // 1

        One value was passed to the function so it should return 1.

    Example 2:
        Input: args = [{}, null, "3"]
        Output: 3
        Explanation: 
        argumentsLength({}, null, "3"); // 3

        Three values were passed to the function so it should return 3.
 */

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {

    // `args` is a rest parameter
    // It collects all passed arguments into an array
    // Example:
    // argumentsLength(1, 2, 3) → args = [1, 2, 3]

    // Return the total number of arguments passed
    return args.length;
};

/**
 argumentsLength(1, 2, 3); // 3
*/

console.log(argumentsLength(5));              // 1
console.log(argumentsLength({}, null, "3"));  // 3




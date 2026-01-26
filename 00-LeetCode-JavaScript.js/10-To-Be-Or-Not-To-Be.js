/**
    LeetCode - 2704 To Be Or Not To Be
   
    Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

    toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
    notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

    Example 1:
        Input: func = () => expect(5).toBe(5)
        Output: {"value": true}
        Explanation: 5 === 5 so this expression returns true.

    Example 2:
        Input: func = () => expect(5).toBe(null)
        Output: {"error": "Not Equal"}
        Explanation: 5 !== null so this expression throw the error "Not Equal".

    Example 3:
        Input: func = () => expect(5).notToBe(null)
        Output: {"value": true}
        Explanation: 5 !== null so this expression returns true.
 */

var expect = function(val) {

    // `val` is captured in closure
    // We return an object containing two assertion methods
    return {

        // toBe checks strict equality (===)
        toBe: (expected) => {

            // If values are strictly equal, test passes
            if (expected === val) return true;

            // Otherwise, throw an error (LeetCode expects throw, not return)
            throw new Error("Not Equal");
        },

        // notToBe checks strict inequality (!==)
        notToBe: (expected) => {

            // If values are NOT equal, test passes
            if (expected !== val) return true;

            // If values are equal, throw error
            throw new Error("Equal");
        }
    };
};

console.log(expect(5).toBe(5));
console.log(expect(5).toBe(null));

console.log(expect(5).notToBe(5));
console.log(expect(5).notToBe(null));

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
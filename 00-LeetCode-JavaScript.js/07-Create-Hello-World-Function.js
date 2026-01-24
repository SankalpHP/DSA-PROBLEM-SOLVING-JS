/** 
    Leetcode - 2667 Create Hello World Function

    Write a function createHelloWorld. It should return a new function that always returns "Hello World".

    Example 1:
            Input: args = []
            Output: "Hello World"
            Explanation:
            const f = createHelloWorld();
            f(); // "Hello World"

            The function returned by createHelloWorld should always return "Hello World".

    Example 2:
            Input: args = [{},null,42]
            Output: "Hello World"
            Explanation:
            const f = createHelloWorld();
            f({}, null, 42); // "Hello World"

            Any arguments could be passed to the function but it should still always return "Hello World".
*/

// createHelloWorld is a higher-order function
// It returns another function
var createHelloWorld = function() {

    // This returned function can accept any number of arguments
    // (...args is used to ignore all passed arguments)
    return function(...args) {

        // Regardless of input, always return "Hello World"
        return "Hello World";
    }
};

// Calling createHelloWorld returns a function
let f = createHelloWorld();

// Calling the returned function
console.log(f()); // "Hello World"



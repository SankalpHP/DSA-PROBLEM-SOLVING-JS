/**
    LeetCode - 2723 Add Two Promises

    Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
    The returned promise should resolve with the sum of the two numbers.

    Example 1:
        Input: 
        promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
        promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
        Output: 7
        Explanation: The two input promises resolve with the values of 2 and 5 respectively. 
        The returned promise should resolve with a value of 2 + 5 = 7. 
        The time the returned promise resolves is not judged for this problem.

    Example 2:
        Input: 
        promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
        promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
        Output: -2
        Explanation: The two input promises resolve with the values of 10 and -12 respectively. 
        The returned promise should resolve with a value of 10 + -12 = -2.
*/


// Async function that takes two promises as arguments
var addTwoPromises = async function(promise1, promise2) {

    // Promise.all runs both promises in parallel
    // It waits until BOTH promises are resolved
    // The resolved values are returned as an array
    let [val1, val2] = await Promise.all([promise1, promise2]);

    // Add the resolved values and return the sum
    // Since this is an async function, the return value
    // is automatically wrapped inside a Promise
    return val1 + val2;
};


// First promise resolves with value 2 after 20ms
let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 20);
});

// Second promise resolves with value 5 after 60ms
let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(5);
    }, 60);
});

// Call the function and handle the returned Promise
addTwoPromises(promise1, promise2).then((sum) => {
    console.log(sum); // 7
});

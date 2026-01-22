/**
 * LeetCode 2620 - Counter
 *
 * Pattern:
 * - Closure
 *
 * Idea:
 * - Store `n` in an outer function
 * - Return an inner function that remembers `n`
 * - Each call returns current value, then increments it
 *
 * Time Complexity: O(1) per call
 * Space Complexity: O(1)
 */

var createCounter = function(n) {

    // Return a function that has access to `n`
    // This is a closure
    return function() {

        // Return current value of n
        // Then increment n for next call
        return n++;
    };
};

// ✅ Correct usage
const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

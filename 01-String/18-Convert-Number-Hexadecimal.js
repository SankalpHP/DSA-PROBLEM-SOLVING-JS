/**
 * LeetCode 405 - Convert a Number to Hexadecimal
 *
 * Idea:
 * - JavaScript numbers are 32-bit signed integers
 * - For negative numbers, we use unsigned right shift (>>> 0)
 *   to convert them to their 32-bit two’s complement form
 * - Convert the result to base 16 (hexadecimal)
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

var toHex = function(num) {

    // Case 1: Negative number
    // >>> 0 converts num into an unsigned 32-bit integer
    // toString(16) converts it to hexadecimal
    if (num < 0) {
        return (num >>> 0).toString(16);
    }

    // Case 2: Non-negative number
    // Convert number to BigInt and then to hexadecimal
    return BigInt(num).toString(16);
};

console.log(toHex(-1)); // "ffffffff"

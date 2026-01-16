/**
 * LeetCode 504 - Base 7
 *
 * Idea:
 * - Convert the integer into a BigInt
 * - Use base conversion with toString(7)
 * - Convert result back to string
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * NOTE:
 * This solution uses built-in base conversion.
 * Interviewers may ask for a manual implementation.
 */

var convertToBase7 = function(num) {

    // Convert number to BigInt to safely handle large values
    // Convert BigInt to base-7 string
    // Wrap with String() to return normal string output
    return String(BigInt(num).toString(7));
};

console.log(convertToBase7(-7)); // "-10"

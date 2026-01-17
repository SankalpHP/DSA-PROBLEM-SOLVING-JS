/**
 * LeetCode 709 - To Lower Case
 *
 * Pattern:
 * - Built-in String Method
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var toLowerCase = function(s) {

    // Convert the entire string to lowercase
    // JavaScript's toLowerCase() handles all uppercase letters
    return s.toLowerCase();
};

console.log(toLowerCase("LOVELY")); // "lovely"

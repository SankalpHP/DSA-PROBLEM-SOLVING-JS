/**
 * LeetCode 125 - Valid Palindrome
 *
 * Pattern:
 * - String Cleaning + Two-way Comparison
 *
 * Idea:
 * - Convert string to lowercase
 * - Remove all non-alphanumeric characters
 * - Compare the cleaned string with its reverse
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var isPalindrome = function(s) {

    // Step 1: Convert to lowercase and remove non-alphanumeric characters
    let trimStr = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    // Step 2: Check if the cleaned string reads the same forward and backward
    return trimStr === trimStr.split("").reverse().join("");
};

console.log(isPalindrome("race a car")); // false

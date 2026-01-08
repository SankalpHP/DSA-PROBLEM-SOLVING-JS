/**
 * LeetCode 9 - Palindrome Number
 *
 * Pattern:
 * - String conversion + Two-way comparison
 *
 * Idea:
 * - Convert the number to a string
 * - Reverse the string
 * - Convert it back to a number
 * - Compare with the original number
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * (n = number of digits in x)
 */

var isPalindrome = function(x) {

    // Convert number to string
    // Split into characters
    // Reverse the characters
    // Join back into a string
    // Convert back to number
    // Compare with original number
    return x === Number(
        String(x)
            .split('')
            .reverse()
            .join('')
    );
};

console.log(isPalindrome(10)); // false

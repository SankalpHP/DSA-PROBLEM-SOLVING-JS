/**
 * LeetCode 520 - Detect Capital
 *
 * Pattern:
 * - String Case Comparison
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var detectCapitalUse = function(word) {

    // Case 1: First letter is uppercase and
    // remaining letters are all lowercase (e.g., "Google")
    if (
        word[0] === word[0].toUpperCase() &&
        word.substring(1) === word.substring(1).toLowerCase()
    ) {
        return true;
    }

    // Case 2: All letters are lowercase (e.g., "leetcode")
    if (word === word.toLowerCase()) {
        return true;
    }

    // Case 3: All letters are uppercase (e.g., "USA")
    if (word === word.toUpperCase()) {
        return true;
    }

    // Any other pattern is invalid
    return false;
};

console.log(detectCapitalUse("FlaG")); // false

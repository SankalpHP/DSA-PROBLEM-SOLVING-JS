/**
 * LeetCode 387 - First Unique Character in a String
 *
 * Pattern:
 * - Frequency Counter
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)  // only lowercase letters
 */

var firstUniqChar = function(s) {

    // Step 1: Create a frequency map for all characters
    let frequency = {};
    for (const ch of s) {
        frequency[ch] = (frequency[ch] || 0) + 1;
    }

    // Step 2: Traverse the string again to preserve order
    // The first character with frequency 1 is the answer
    for (let i = 0; i < s.length; i++) {
        if (frequency[s[i]] === 1) {
            return i;
        }
    }

    // Step 3: No unique character found
    return -1;
};

console.log(firstUniqChar("loveleetcode")); // 2

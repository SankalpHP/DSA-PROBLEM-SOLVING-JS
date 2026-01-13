/**
 * LeetCode 1941 - Check if All Characters Have Equal Number of Occurrences
 *
 * Pattern:
 * - Frequency Counter (Hash Map)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var areOccurrencesEqual = function(s) {

    // Step 1: Build frequency map of characters
    let frequency = {};
    for (const ch of s) {
        frequency[ch] = (frequency[ch] || 0) + 1;
    }

    // Step 2: Get the frequency of the first character
    // This will be the reference frequency
    let firstKey = Object.keys(frequency)[0];

    // Step 3: Compare every character's frequency
    // with the reference frequency
    for (const key in frequency) {
        if (frequency[key] !== frequency[firstKey]) {
            return false; // mismatch found
        }
    }

    // Step 4: All frequencies are equal
    return true;
};

console.log(areOccurrencesEqual("aaabb")); // false

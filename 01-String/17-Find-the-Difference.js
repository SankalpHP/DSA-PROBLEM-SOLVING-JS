/**
 * LeetCode 389 - Find the Difference
 *
 * Pattern:
 * - Frequency Counter (Hash Map)
 *
 * Idea:
 * - String t contains all characters of s plus one extra character
 * - Count frequencies of both strings
 * - The character whose frequency differs is the answer
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var findTheDifference = function(s, t) {

    // Step 1: Build frequency map for string s
    let sMap = {};
    for (const ch of s) {
        sMap[ch] = (sMap[ch] || 0) + 1;
    }

    // Step 2: Build frequency map for string t
    let tMap = {};
    for (const ch of t) {
        tMap[ch] = (tMap[ch] || 0) + 1;
    }

    // Step 3: Find the extra character in t
    // The character whose frequency differs is the answer
    for (const key in tMap) {
        if (tMap[key] !== sMap[key]) {
            return key;
        }
    }
};

console.log(findTheDifference("a", "aa")); // "a"

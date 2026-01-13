/**
 * LeetCode 242 - Valid Anagram
 *
 * Pattern:
 * - Frequency Counter (Hash Map)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var isAnagram = function(s, t) {

    // If lengths differ, they cannot be anagrams
    if (s.length !== t.length) return false;

    // Frequency map for string s
    let mapS = {};

    // Frequency map for string t
    let mapT = {};

    // Count frequency of each character in s
    for (const ch of s) {
        mapS[ch] = (mapS[ch] || 0) + 1;
    }

    // Count frequency of each character in t
    for (const ch of t) {
        mapT[ch] = (mapT[ch] || 0) + 1;
    }

    // Compare frequencies of both maps
    for (const key in mapS) {
        if (mapS[key] !== mapT[key]) return false;
    }

    // All characters match in frequency
    return true;
};

console.log(isAnagram("anagram", "nagaram")); // true

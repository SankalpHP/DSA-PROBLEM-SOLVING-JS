/**
 * LeetCode 14 - Longest Common Prefix
 *
 * Pattern:
 * - Sorting + Prefix Comparison
 *
 * Idea:
 * 1. Sort the array lexicographically
 * 2. After sorting, the longest common prefix of the entire array
 *    will be the common prefix between the first and last strings
 * 3. Compare characters one by one until mismatch
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(1)
 */

var longestCommonPrefix = function(strs) {

    // Edge case: if array is empty
    if (strs.length === 0) return "";

    // Step 1: Sort strings lexicographically
    strs.sort();

    // Step 2: Take the first and last strings
    let firstWord = strs[0];
    let lastWord = strs[strs.length - 1];

    // Step 3: Find the minimum length to avoid out-of-bounds
    let minLength = Math.min(firstWord.length, lastWord.length);

    let i = 0;

    // Step 4: Compare characters until they mismatch
    while (i < minLength && firstWord[i] === lastWord[i]) {
        i++;
    }

    // Step 5: Return the common prefix
    return firstWord.substring(0, i);
};

console.log(longestCommonPrefix(["a", "ab"])); // "a"

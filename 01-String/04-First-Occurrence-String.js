/**
 * LeetCode 28 - Find the Index of the First Occurrence in a String
 *
 * Pattern:
 * - Sliding Window / Substring Comparison
 *
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 */

var strStr = function(haystack, needle) {

    // If needle is empty, per problem definition return 0
    if (needle === "") return 0;

    // If needle is longer than haystack, it cannot exist
    if (haystack.length < needle.length) return -1;

    // Slide a window of length = needle.length over haystack
    for (let index = 0; index <= haystack.length - needle.length; index++) {

        // Extract substring of the same length as needle
        let sub = haystack.substring(index, index + needle.length);

        // If substring matches needle, return starting index
        if (sub === needle) {
            return index;
        }
    }

    // If no match is found
    return -1;
};

console.log(strStr('leetcode', 'leeto')); // -1

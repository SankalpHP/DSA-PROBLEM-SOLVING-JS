/**
 * LeetCode 434 - Number of Segments in a String
 *
 * Pattern:
 * - String Processing
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var countSegments = function(s) {

    // Step 1: Remove leading and trailing spaces
    let str = s.trim();

    // Step 2: If string becomes empty after trimming
    // it means there are no segments
    if (!str.length) return 0;

    // Step 3: Split the string by one or more spaces
    // \s+ handles multiple consecutive spaces
    return str.split(/\s+/).length;
};

console.log(countSegments(", , , ,        a, eaefa")); // 2

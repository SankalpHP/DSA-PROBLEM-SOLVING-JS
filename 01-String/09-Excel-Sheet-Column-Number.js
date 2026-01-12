/**
 * LeetCode 171 - Excel Sheet Column Number
 *
 * Pattern:
 * - Base 26 conversion
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var titleToNumber = function(columnTitle) {

    // This will store the final column number
    let result = 0;

    // Traverse each character of the column title
    for (let i = 0; i < columnTitle.length; i++) {

        // Shift previous value to the left in base-26
        // Same as multiplying by 26
        result *= 26;

        // Convert current character to its numeric value
        // 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26
        result += columnTitle[i].charCodeAt(0) 
                  - 'A'.charCodeAt(0) + 1;
    }

    // Return the computed column number
    return result;
};

console.log(titleToNumber('ZY')); // 701

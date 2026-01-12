/**
 * LeetCode 168 - Excel Sheet Column Title
 *
 * Pattern:
 * - Base 26 conversion (with no zero)
 *
 * Time Complexity: O(log₍26₎ n)
 * Space Complexity: O(1)
 */

var convertToTitle = function(columnNumber) {

    // Result string (built in reverse order)
    let res = "";

    // Loop until the column number becomes 0
    while (columnNumber > 0) {

        // Get remainder when divided by 26
        let rem = columnNumber % 26;

        // Special case:
        // If remainder is 0, it represents 'Z'
        if (rem === 0) {
            res += 'Z';

            // Reduce columnNumber and subtract 1
            // because 'Z' consumes a full 26
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } 
        // Normal case (A to Y)
        else {
            // Convert remainder to corresponding letter
            // rem - 1 because 'A' starts at 0 index
            res += String.fromCharCode(
                (rem - 1) + "A".charCodeAt(0)
            );

            // Move to the next digit
            columnNumber = Math.floor(columnNumber / 26);
        }
    }

    // Reverse the result since we built it backwards
    return res.split('').reverse().join('');
};

console.log(convertToTitle(28)); // "AB"
/**
 * LeetCode 67 - Add Binary
 *
 * Pattern:
 * - Built-in BigInt arithmetic
 *
 * Idea:
 * - Convert binary strings to BigInt using the `0b` prefix
 * - Add the two BigInt values
 * - Convert the result back to a binary string
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * (n = length of the longer binary string)
 */

var addBinary = function(a, b) {

    // Convert binary string `a` to BigInt
    // '0b' prefix tells JavaScript this is a binary number
    let bigIntA = BigInt('0b' + a);

    // Convert binary string `b` to BigInt
    let bigIntB = BigInt('0b' + b);

    // Add the two BigInt values
    let bigIntSum = bigIntA + bigIntB;

    // Convert the BigInt result back to a binary string
    // toString(2) converts number to base-2 representation
    return bigIntSum.toString(2);
};

console.log(addBinary('1010', '1011')); // "10101"

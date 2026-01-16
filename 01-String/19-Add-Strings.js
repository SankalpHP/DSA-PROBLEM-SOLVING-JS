/**
 * LeetCode 415 - Add Strings
 *
 * ⚠️ NOTE:
 * This solution works in JavaScript but VIOLATES the problem constraint
 * because it uses BigInt (a built-in large integer handler).
 *
 * Use this only for understanding, NOT for interviews.
 */

var addStrings = function(num1, num2) {

    // Convert string numbers to BigInt
    // Add them
    // Convert the result back to string
    return String(BigInt(num1) + BigInt(num2));
};

console.log(addStrings('9333852702227987', '85731737104263'));

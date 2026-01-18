/**
 * LeetCode 66 - Plus One
 *
 * Problem:
 * Given a non-empty array of decimal digits representing a non-negative integer,
 * increment the integer by one and return the resulting digits as an array.
 *
 * Example:
 * Input: [1,2,3]
 * Output: [1,2,4]
 */

var plusOne = function(digits) {

    // Step 1: Convert the digits array into a single string
    // Example: [1,2,3] → "123"
    let num = BigInt(digits.join(''));

    // Step 2: Increment the number by 1
    // BigInt handles very large numbers safely
    num++;

    // Step 3: Convert the updated number back to string
    // Split into characters and convert each back to Number
    // Example: "124" → ["1","2","4"] → [1,2,4]
    return String(num).split("").map(Number);
};

console.log(plusOne([1,2,3])); // [1,2,4]

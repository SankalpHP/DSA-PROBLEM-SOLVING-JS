/**
 * LeetCode 414 - Third Maximum Number
 *
 * Problem:
 * - Given an integer array, return the third distinct maximum number.
 * - If the third maximum does not exist, return the maximum number.
 *
 * Approach:
 * - Remove duplicate elements using Set
 * - Sort the unique elements in descending order
 * - Return the 3rd element if it exists, otherwise return the largest
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

var thirdMax = function(nums) {

    // Step 1: Remove duplicate values
    // Set keeps only unique elements
    let unique = [...new Set(nums)];

    // Step 2: Sort the unique numbers in descending order
    // Largest number will be at index 0
    unique.sort((a, b) => b - a);

    // Step 3: If there are at least 3 distinct numbers,
    // return the third maximum (index 2)
    if (unique.length >= 3) {
        return unique[2];
    }

    // Step 4: If less than 3 distinct numbers exist,
    // return the maximum number
    return unique[0];
};

// Test case
console.log(thirdMax([1, 2, 2, 5, 3, 5])); // 2

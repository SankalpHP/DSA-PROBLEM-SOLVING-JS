/**
 * LeetCode 628 - Maximum Product of Three Numbers
 *
 * Problem:
 * - Given an integer array nums
 * - Find the maximum product of any three numbers
 *
 * Key Insight:
 * - Maximum product can come from:
 *   1) Three largest positive numbers
 *   2) Two smallest (most negative) numbers and the largest positive number
 *
 * Time Complexity: O(n log n) → due to sorting
 * Space Complexity: O(1) → no extra data structures used
 */

var maximumProduct = function(nums) {

    let n = nums.length;

    // Step 1: Sort the array in ascending order
    // This helps us easily access:
    // - smallest numbers at the beginning
    // - largest numbers at the end
    nums.sort((a, b) => a - b);

    // Step 2: Calculate two possible maximum products

    // Case 1:
    // Product of two smallest numbers (could be negative)
    // and the largest number
    // Example: (-100 * -98 * 4)
    let productWithNegatives = nums[0] * nums[1] * nums[n - 1];

    // Case 2:
    // Product of three largest numbers
    // Example: (2 * 3 * 4)
    let productWithLargest = nums[n - 1] * nums[n - 2] * nums[n - 3];

    // Step 3: Return the maximum of both cases
    return Math.max(productWithNegatives, productWithLargest);
};

console.log(maximumProduct([-100, -98, -1, 2, 3, 4])); // 39200

/**
 * LeetCode 283 - Move Zeroes
 *
 * Pattern:
 * - Two Pointers
 *
 * Goal:
 * - Move all zeros to the end of the array
 * - Maintain the relative order of non-zero elements
 * - Modify the array in-place
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var moveZeroes = function(nums) {

    // Pointer `i` tracks the index where the next non-zero
    // element should be placed
    let i = 0;

    // Pointer `j` is used to traverse the entire array
    for (let j = 0; j < nums.length; j++) {

        // If current element is non-zero
        if (nums[j] !== 0) {

            // Place it at index `i`
            // This overwrites zeros if any appeared earlier
            nums[i] = nums[j];

            // Move `i` forward to point to next position
            i++;
        }
    }

    // After moving all non-zero elements forward,
    // fill the remaining positions with zero
    while (i < nums.length) {

        // Assign zero to remaining indices
        nums[i] = 0;

        // Move pointer forward
        i++;
    }

    // Array is modified in-place
    return nums;
};

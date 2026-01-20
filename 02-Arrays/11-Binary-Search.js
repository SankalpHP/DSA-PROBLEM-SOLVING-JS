/**
    LeetCode - 704 Binary Search
    
    Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
    If target exists, then return its index. Otherwise, return -1.

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:
        Input: nums = [-1,0,3,5,9,12], target = 9
        Output: 4
        Explanation: 9 exists in nums and its index is 4

    Example 2:

        Input: nums = [-1,0,3,5,9,12], target = 2
        Output: -1
        Explanation: 2 does not exist in nums so return -1
*/

var search = function(nums, target) {

    // Edge case: if array has only one element
    // Check directly whether it matches the target
    if (nums.length === 1) {
        return nums[0] === target ? 0 : -1;
    }

    // Left pointer starts at the beginning of the array
    let left = 0;

    // Right pointer starts at the end of the array
    let right = nums.length - 1;

    // Continue searching while the search space is valid
    while (left <= right) {

        // Calculate mid index safely
        // mid always lies between left and right
        let mid = Math.floor((left + right) / 2);

        // If the middle element is the target, return its index
        if (nums[mid] === target) {
            return mid;
        }
        // If middle element is smaller than target,
        // discard the left half
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        // If middle element is greater than target,
        // discard the right half
        else {
            right = mid - 1;
        }
    }

    // Target was not found in the array
    return -1;
};

console.log(search([2, 5], 5)); // 1


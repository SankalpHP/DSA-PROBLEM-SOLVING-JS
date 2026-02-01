/**
    LeetCode - 169 Majority Element

    Given an array nums of size n, return the majority element.

        The majority element is the element that appears more than ⌊n / 2⌋ times. 
        You may assume that the majority element always exists in the array.

        Example 1:
            Input: nums = [3,2,3]
            Output: 3 

        Example 2:
            Input: nums = [2,2,1,1,1,2,2]
            Output: 2
 */

var majorityElement = function(nums) {

    // Step 1: Create a frequency map
    // Key   -> number from nums
    // Value -> how many times it appears
    let freq = {};
    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }

    // Step 2: Variables to track the maximum frequency
    let max = 0;       // current maximum frequency found
    let lastMax = 0;   // previous maximum frequency
    let major = 0;     // stores the majority element

    // Step 3: Traverse the frequency map
    for (const key in freq) {

        // Update max frequency
        max = Math.max(max, freq[key]);

        // If new max is greater than previous max,
        // update the majority element
        if (max > lastMax) {
            major = key;
        }

        // Update lastMax for next comparison
        lastMax = max;
    }

    // Step 4: Return the majority element
    // Convert key to Number because object keys are strings
    return Number(major);
};

console.log(majorityElement([3, 2, 3])); // 3




/**
 * LeetCode 26 - Remove Duplicates from Sorted Array
 *
 * Pattern:
 * - Two Pointers (Slow & Fast)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var removeDuplicates = function(nums) {

    // Edge case: empty array
    if (!nums.length) return 0;

    // Pointer i tracks the index of last unique element
    let i = 0;

    // Pointer j scans the array from the second element
    for (let j = 1; j < nums.length; j++) {

        // If a new unique element is found
        if (nums[i] !== nums[j]) {

            // Move i forward
            i++;

            // Place the new unique element at position i
            nums[i] = nums[j];
        }
    }

    // i + 1 gives the total count of unique elements
    return i + 1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

// var removeDuplicates = function(nums) {
//     let numSet = new Set();
//     for(const num of nums){
//         numSet.add(num);
//     }  
//     return [...numSet];
// };



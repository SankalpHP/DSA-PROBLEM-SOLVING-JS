/**
 * LeetCode 485 - Max Consecutive Ones
 *
 * Approach:
 * - Traverse the array
 * - Count consecutive 1s
 * - Store each streak length
 * - Return the maximum streak
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var findMaxConsecutiveOnes = function(nums) {

    let count = 0;        // counts current consecutive 1s
    let countArr = [];   // stores all streak lengths

    // Traverse the binary array
    for (const num of nums) {

        // If current number is 1, increment the count
        if (num === 1) {
            count++;
        } 
        // If current number is 0, store the streak and reset
        else {
            countArr.push(count);
            count = 0;
        }
    }

    // Push the last streak (important if array ends with 1)
    countArr.push(count);

    // Return the maximum consecutive 1s
    return Math.max(...countArr);
};

// Test case
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // 2

//=======================================================================More Optimize Space version===========================================================
/**
    var findMaxConsecutiveOnes = function(nums) {
        let count = 0;
        let max = 0;

        for (const num of nums) {
            if (num === 1) {
                count++;
                max = Math.max(max, count);
            } else {
                count = 0;
            }
        }

        return max;
    };
 */
/**
 * LeetCode 136 - Single Number
 *
 * Approach:
 * - Use Bitwise XOR
 * - XOR cancels out duplicate numbers
 * - The number that appears once remains
 *
 * XOR Properties Used:
 * - a ^ a = 0
 * - a ^ 0 = a
 * - XOR is commutative and associative
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var singleNumber = function(nums) {

    // Initialize result to 0
    let result = 0;

    // XOR every number in the array
    for (const num of nums) {

        // Duplicate numbers cancel each other out
        // Unique number remains in result
        result ^= num;
    }

    // Final result is the single number
    return result;
};

// Test case
console.log(singleNumber([4, 1, 2, 1, 2])); // 4


//==================================================================ALTERNATE SOLUTION=======================================================================
/**
    LeetCode 136 - Single Number
    
    Approach:
        Use a frequency map to count occurrences of each number
        The number with frequency = 1 is the answer
    
    Time Complexity: O(n)
    Space Complexity: O(n)

    var singleNumber = function(nums) {

        // Step 1: Create a frequency map
        let map = {};

        // Count occurrences of each number
        for (const num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        // Step 2: Find the number that appears only once
        for (const key in map) {

            // Object keys are strings, so convert to Number
            if (map[key] === 1) {
                return Number(key);
            }
        }
    };

    // Test case
    console.log(singleNumber([4, 1, 2, 1, 2])); // 4
*/
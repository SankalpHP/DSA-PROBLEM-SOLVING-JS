/**
 * LeetCode 2626 - Array Reduce Transformation
 *
 * Pattern:
 * - Manual Reduce (Polyfill)
 *
 * Idea:
 * - Start with an initial accumulator value
 * - Iterate through the array
 * - Apply the reducer function on each element
 * - Store the returned value back in the accumulator
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */


var reduce = function(nums, init) {
    // Step 1: Initialize accumulator with the given initial value
    let accumulator = init;

    // Step 2: Iterate through each number in the array
    for (const num of nums) {

        // Step 3: Add square of current number to accumulator
        accumulator = accumulator + (num * num);
    }

    // Step 4: Return final accumulated result
    return accumulator;
};

//=================================================================LeetCode polyfill-style problem solution===================================================
/**
    var reduce = function(nums, fn, init) {
    
        // Step 1: Initialize accumulator with the given initial value
        let accumulator = init;

        // Step 2: Traverse through each element of the array
        for (let i = 0; i < nums.length; i++) {

            // Step 3: Apply reducer function
            // accumulator = fn(previousResult, currentElement)
            accumulator = fn(accumulator, nums[i]);
        }

        // Step 4: Return the final accumulated result
        return accumulator;
    };
*/

//=================================================================Alternate using built in reduce function===================================================
/**
    var reduce = function(nums, fn, init) {
        return fn(nums,init);
    };

    function Reduce(nums,init){
        return nums.reduce((accumulator,currentValue)=>{return accumulator + currentValue * currentValue},init);
    }
    console.log(reduce([1,2,3,4],Reduce,100));
    console.log(Reduce([1,2,3,4],0));
*/


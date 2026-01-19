/**
 * LeetCode 217 - Contains Duplicate
 *
 * Approach:
 * - Use a hash map to count occurrences of each number
 * - If any number appears more than once, return true
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var containsDuplicate = function(nums) {

    // Create a frequency map
    let map = {};

    // Count occurrences of each number
    for (const num of nums) {

        // If number already exists, increment its count
        map[num] = (map[num] || 0) + 1;
    }

    // Check if any number appears more than once
    for (const key in map) {
        if (map[key] > 1) {
            return true; // duplicate found
        }
    }

    // No duplicates found
    return false;
};

// Test case
console.log(containsDuplicate([1, 2, 3, 4])); // false


//========================================================================Alternate Solution=======================================================================
/**
 * LeetCode 217 - Contains Duplicate
 *
 * Approach:
 * - Use a Set to track seen numbers
 * - A Set stores only unique values
 * - If a number is already present in the Set,
 *   it means a duplicate exists
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
    var containsDuplicate = function(nums) {

        // Create a Set to store numbers we've already seen
        let seen = new Set();

        // Traverse the array
        for (const num of nums) {

            // If the number is already in the Set,
            // a duplicate is found
            if (seen.has(num)) return true;

            // Otherwise, add the number to the Set
            seen.add(num);
        }

        // If no duplicates were found
        return false;
    };
 */
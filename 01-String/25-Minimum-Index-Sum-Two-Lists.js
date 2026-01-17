/**
 * LeetCode 599 - Minimum Index Sum of Two Lists
 *
 * Pattern:
 * - Hash Map + Single Pass
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(n)
 */

var findRestaurant = function(list1, list2) {

    // Step 1: Store indices of list1
    let map = {};
    for (let i = 0; i < list1.length; i++) {
        map[list1[i]] = i;
    }

    let minSum = Infinity;
    let result = [];

    // Step 2: Traverse list2
    for (let j = 0; j < list2.length; j++) {

        // Check if restaurant is common
        if (map.hasOwnProperty(list2[j])) {

            let sum = j + map[list2[j]];

            // Found smaller index sum
            if (sum < minSum) {
                minSum = sum;
                result = [list2[j]];
            }
            // Found same minimum index sum
            else if (sum === minSum) {
                result.push(list2[j]);
            }
        }
    }

    return result;
};

console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]));

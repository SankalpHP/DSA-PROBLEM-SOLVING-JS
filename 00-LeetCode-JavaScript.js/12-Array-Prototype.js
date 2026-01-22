/**
 * LeetCode 2619 - Array Prototype Last
 *
 * Goal:
 * - Add a method `last()` to all arrays
 * - Return the last element if array is not empty
 * - Return -1 if array is empty
 */

Array.prototype.last = function () {

    // `this` refers to the array on which last() is called
    if (this.length === 0) {
        return -1; // empty array case
    }

    // Return the last element of the array
    return this[this.length - 1];
};

// ✅ Correct usage
console.log([null, {}, 3].last()); // 3
console.log([].last());            // -1

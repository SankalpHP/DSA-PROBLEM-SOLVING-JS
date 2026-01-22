/**
 * LeetCode 2621 - Sleep
 *
 * Pattern:
 * - Promise + setTimeout
 *
 * Idea:
 * - Return a Promise
 * - Use setTimeout to delay resolving the Promise
 * - The Promise resolves after `millis` milliseconds
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

async function sleep(millis) {

    // Return a Promise that resolves after `millis` milliseconds
    return new Promise((resolve, reject) => {

        // setTimeout delays execution of resolve()
        // Once `millis` ms pass, the Promise is resolved
        setTimeout(resolve, millis);
    });
}

// Test case
let t = Date.now();

sleep(200).then(() => {
    // Prints approximately 200ms
    console.log(Date.now() - t);
});

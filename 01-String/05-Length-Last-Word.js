/**
 * LeetCode 58 - Length of Last Word
 *
 * Pattern:
 * - Reverse Traversal
 *
 * Idea:
 * - Remove extra spaces using trim()
 * - Traverse the string from the end
 * - Count characters until a space is found
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var lengthOfLastWord = function(s) {
    let counter = 0;

    // Remove leading and trailing spaces
    let trimmed = s.trim();

    // Traverse string from the end
    for (let index = trimmed.length - 1; index >= 0; index--) {

        // Count characters of last word
        if (trimmed[index] !== " ") {
            counter++;
        } 
        // Stop when space is encountered
        else {
            break;
        }
    }

    return counter;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));

/**
 * LeetCode 58 - Length of Last Word
 *
 * Pattern:
 * - String Split
 *
 * Idea:
 * - Trim the string
 * - Split it into words using space
 * - Return the length of the last word
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 
    var lengthOfLastWord = function(s) {

        // Remove leading and trailing spaces and split by space
        let sArr = s.trim().split(' ');

        // Return the length of the last word
        return sArr[sArr.length - 1].length;
    };
    
 */




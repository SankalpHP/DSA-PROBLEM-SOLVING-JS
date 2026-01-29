/**
 *  LeetCode - 2129 Capitalize the Title
 *  You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. 
 *  Capitalize the string by changing the capitalization of each word such that:
 * 
 *  If the length of the word is 1 or 2 letters, change all letters to lowercase.
    Otherwise, change the first letter to uppercase and the remaining letters to lowercase.

    Return the capitalized title.

    Example 1:
        Input: title = "capiTalIze tHe titLe"
        Output: "Capitalize The Title"
        Explanation:
        Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.

    Example 2:
        Input: title = "First leTTeR of EACH Word"
        Output: "First Letter of Each Word"
        Explanation:
        The word "of" has length 2, so it is all lowercase.
        The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.

    Example 3:
        Input: title = "i lOve leetcode"
        Output: "i Love Leetcode"
        Explanation:
        The word "i" has length 1, so it is lowercase.
        The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
 */

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {

    // Step 1: Convert entire string to lowercase
    // This simplifies handling mixed-case input
    let titleArr = title.toLowerCase().split(" ");

    // Step 2: Traverse each word
    for (let i = 0; i < titleArr.length; i++) {

        // Step 3: Only words with length > 2 need capitalization
        if (titleArr[i].length > 2) {

            // Convert word to array of characters
            let tempArr = titleArr[i].split("");

            // Capitalize the first character
            tempArr[0] = tempArr[0].toUpperCase();

            // Join characters back into a word
            titleArr[i] = tempArr.join("");
        }
        // Words with length 1 or 2 remain lowercase automatically
    }

    // Step 4: Join words back into a string
    return titleArr.join(" ");
};

// Test
console.log(capitalizeTitle("capiTalIze tHe titLe")); // "Capitalize The Title"
console.log(capitalizeTitle("First leTTeR of EACH Word")); // "First Letter of Each Word"
console.log(capitalizeTitle("i lOve leetcode")); // "i Love Leetcode"



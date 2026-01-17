/**
 * LeetCode 557 - Reverse Words in a String III
 *
 * Pattern:
 * - String Manipulation
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var reverseWords = function(s) {

    // Step 1: Split the string into words using space as separator
    let words = s.split(" "); 

    // Step 2: Reverse each word individually
    for (let index = 0; index < words.length; index++) {

        // Convert word into character array
        let chars = words[index].split("");

        // Reverse the characters of the word
        chars.reverse();

        // Join characters back into a string
        words[index] = chars.join("");
    }

    // Step 3: Join the words back with spaces
    return words.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));

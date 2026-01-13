/**
 * LeetCode 345 - Reverse Vowels of a String
 *
 * Pattern:
 * - Two Pointers
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n) 
 * (String is converted to array for in-place swapping)
 */

var reverseVowels = function(s) {

    // Convert string to array so characters can be swapped
    let strArr = s.split('');

    // Two pointers:
    // i -> start of string
    // j -> end of string
    let i = 0;
    let j = strArr.length - 1;

    // Continue until pointers cross
    while (i < j) {

        // If left pointer is not a vowel, move forward
        if (!isVowels(strArr[i])) {
            i++;
            continue;
        }

        // If right pointer is not a vowel, move backward
        if (!isVowels(strArr[j])) {
            j--;
            continue;
        }

        // Both pointers are vowels → swap them
        let temp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = temp;

        // Move both pointers inward after swap
        i++;
        j--;
    }

    // Convert array back to string
    return strArr.join('');
};

// Helper function to check if a character is a vowel
function isVowels(ch) {
    return "aeiou".includes(ch.toLowerCase());
}

console.log(reverseVowels("IceCreAm")); // "AceCreIm"

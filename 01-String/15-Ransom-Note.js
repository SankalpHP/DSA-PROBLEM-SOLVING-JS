/**
 * LeetCode 383 - Ransom Note
 *
 * Pattern:
 * - Frequency Counter (Hash Map)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) (only lowercase letters)
 */

var canConstruct = function(ransomNote, magazine) {

    // Step 1: Create frequency map of magazine characters
    let frequency = {};
    for (const ch of magazine) {
        frequency[ch] = (frequency[ch] || 0) + 1;
    }

    // Step 2: Check each character in ransomNote
    for (const ch of ransomNote) {

        // If character is not available or already used up
        if (!frequency[ch]) {
            return false;
        }

        // Use one occurrence of the character
        frequency[ch]--;
    }

    // Step 3: All characters successfully constructed
    return true;
};

console.log(
    canConstruct(
        "bg",
        "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"
    )
); // true

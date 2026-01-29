/**
    LeetCode - 1002 Find Common Characters
    
    Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates).
    You may return the answer in any order.
    
    Example 1:
        Input: words = ["bella","label","roller"]
        Output: ["e","l","l"]

    Example 2:
        Input: words = ["cool","lock","cook"]
        Output: ["c","o"]
*/

var commonChars = function(words) {

    // Step 1: Create a frequency map for the FIRST word
    // This acts as the base reference for common characters
    let freq = {};
    for (const ch of words[0]) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Step 2: Iterate through the remaining words
    for (let i = 1; i < words.length; i++) {

        // Frequency map for the current word
        let current_freq = {};
        for (const ch of words[i]) {
            current_freq[ch] = (current_freq[ch] || 0) + 1;
        }

        // Step 3: Update the main frequency map
        // Keep only the MINIMUM frequency of each character
        // across all words processed so far
        for (const ch in freq) {
            if (!current_freq[ch]) {
                // Character does not exist in current word
                // So it cannot be common anymore
                freq[ch] = 0;
            } else {
                // Take minimum count to preserve common frequency
                freq[ch] = Math.min(freq[ch], current_freq[ch]);
            }
        }
    }

    // Step 4: Build the result array
    // Push each character as many times as its final frequency
    let result = [];
    for (const key in freq) {
        for (let i = 0; i < freq[key]; i++) {
            result.push(key);
        }
    }

    // Step 5: Return common characters
    return result;
};

console.log(commonChars(["bella","label","roller"])); // ["e","l","l"]

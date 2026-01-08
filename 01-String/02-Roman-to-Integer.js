/**
 * LeetCode 13 - Roman to Integer
 *
 * Pattern:
 * - String traversal
 * - Lookahead comparison (current vs next value)
 *
 * Idea:
 * - Traverse the Roman numeral from left to right
 * - If current value is smaller than the next value,
 *   subtract it (subtraction case)
 * - Otherwise, add the current value
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// Helper function to get integer value of a Roman symbol
function getValue(r){
    switch(r){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}

var romanToInt = function(s) {
    let result = 0;

    // Traverse the Roman numeral string
    for(let i = 0; i < s.length; i++){

        // Value of current Roman character
        let currentValue = getValue(s[i]);

        // Check if next character exists
        if(getValue(s[i + 1])){

            let nextValue = getValue(s[i + 1]);

            // Subtraction case (e.g., IV, IX, XL, CM)
            if(currentValue < nextValue){
                result += nextValue - currentValue;
                i++; // Skip the next character since it's already processed
            }
            // Normal addition case
            else{
                result += currentValue;
            }
        }
        // Last character case
        else{
            result += currentValue;
        }
    }

    return result;
};

console.log(romanToInt("LVIII")); // 58

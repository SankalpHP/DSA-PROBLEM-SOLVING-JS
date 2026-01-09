/**
 * LeetCode 20 - Valid Parentheses
 *
 * Pattern:
 * - Stack
 *
 * Idea:
 * - Use a stack to track opening brackets
 * - Push opening brackets onto the stack
 * - For every closing bracket:
 *     - Stack must not be empty
 *     - Top of stack must match the corresponding opening bracket
 * - At the end, stack should be empty for a valid string
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * (n = length of the string)
 */

var isValid = function(s) {

    // Stack to store opening brackets
    let stack = [];

    // Traverse each character in the string
    for (const ch of s) {

        // If opening bracket, push to stack
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        }

        // If closing bracket
        else if (ch === ')' || ch === ']' || ch === '}') {

            // If stack is empty, no matching opening bracket
            if (stack.length === 0) return false;

            // Get the last opening bracket
            let top = stack[stack.length - 1];

            // Check for matching bracket type
            if (
                (ch === ')' && top !== '(') ||
                (ch === ']' && top !== '[') ||
                (ch === '}' && top !== '{')
            ) {
                return false;
            }

            // Matching pair found, pop from stack
            stack.pop();
        }
    }

    // If stack is empty, all brackets matched correctly
    return stack.length === 0;
};

console.log(isValid("([])")); // true
/**
 * LeetCode 344 - Reverse String
 *
 * Pattern:
 * - Two Pointers
 *
 * Requirement:
 * - Modify the input array in-place
 * - Use O(1) extra memory
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var reverseString = function(s) {

  // Initialize two pointers:
  // i → start of the array
  // j → end of the array
  let i = 0;
  let j = s.length - 1;

  // Continue swapping until pointers meet
  while (i < j) {

     // Store current character temporarily
     let temp = s[i];

     // Swap characters at i and j
     s[i] = s[j];
     s[j] = temp;

     // Move pointers towards the center
     i++;
     j--;
  }

  // Return reversed array (in-place)
  return s;
};

console.log(reverseString(["h","e","l","l","o"])); 
// Output: ["o","l","l","e","h"]

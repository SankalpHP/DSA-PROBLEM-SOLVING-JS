/**
 * LeetCode 205 - Isomorphic Strings
 *
 * Pattern:
 * - Hash Map
 * - Bidirectional Mapping
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var isIsomorphic = function(s, t) {

    // If lengths differ, mapping is impossible
    if (s.length !== t.length) return false;

    // Map from characters in s → characters in t
    let mapST = {};

    // Map from characters in t → characters in s
    let mapTS = {};

    // Traverse both strings character by character
    for (let i = 0; i < s.length; i++) {

        let charS = s[i];
        let charT = t[i];

        // ----- Check mapping from s → t -----
        // If charS already has a mapping
        if (mapST[charS] !== undefined) {
            // If it maps to a different character → invalid
            if (mapST[charS] !== charT) return false;
        } 
        // Otherwise, create the mapping
        else {
            mapST[charS] = charT;
        }

        // ----- Check mapping from t → s -----
        // If charT already has a mapping
        if (mapTS[charT] !== undefined) {
            // If it maps to a different character → invalid
            if (mapTS[charT] !== charS) return false;
        } 
        // Otherwise, create the mapping
        else {
            mapTS[charT] = charS;
        }
    }

    // If all mappings are valid
    return true;
};

console.log(isIsomorphic("egg","add"));        // true
console.log(isIsomorphic("foo","bar"));        // false
console.log(isIsomorphic("paper","title"));    // true
console.log(isIsomorphic("bbbaaaba","aaabbbba"));// false

/**
 * LeetCode 551 - Student Attendance Record I
 *
 * Pattern:
 * - Single Pass
 * - Counters (Absences + Consecutive Late Tracking)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var checkRecord = function(s) {

    let absent = 0;      // Total count of 'A' (Absent)
    let lateStreak = 0; // Count of consecutive 'L' (Late)

    // Traverse the attendance record character by character
    for (const ch of s) {

        // Count absences
        if (ch === 'A') {
            absent++;

            // More than 1 absence → not eligible
            if (absent >= 2) return false;
        }

        // Track consecutive late days
        if (ch === 'L') {
            lateStreak++;

            // 3 consecutive late days → not eligible
            if (lateStreak >= 3) return false;
        } 
        // Reset late streak if not late
        else {
            lateStreak = 0;
        }
    }

    // Passed all conditions → eligible for award
    return true;
};

console.log(checkRecord("PPALLP")); // true

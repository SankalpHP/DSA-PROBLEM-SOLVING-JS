/**
    LeetCode - 1507 Reformat Date

    Given a date string in the form Day Month Year, where:

    Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
    Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
    Year is in the range [1900, 2100].
    Convert the date string to the format YYYY-MM-DD, where:

    YYYY denotes the 4 digit year.
    MM denotes the 2 digit month.
    DD denotes the 2 digit day.
    

    Example 1:
        Input: date = "20th Oct 2052"
        Output: "2052-10-20"

    Example 2:
        Input: date = "6th Jun 1933"
        Output: "1933-06-06"

    Example 3:
        Input: date = "26th May 1960"
        Output: "1960-05-26"
*/

var reformatDate = function(date) {

    // Array to map month abbreviations to month numbers
    // Index + 1 will represent the actual month number
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Split the input date string by spaces
    // Example: "20th Oct 2052" → ["20th", "Oct", "2052"]
    let dates = date.split(" ");

    // Extract the day part (e.g., "20th", "6th", "26th")
    let day = dates[0];

    // Extract the month string (second last element)
    // Example: "Oct"
    let month = dates[dates.length - 2];

    // Convert month name to month number
    for (let i = 0; i < months.length; i++) {
        if (months[i] === month) {
            // Month number is index + 1
            month = i + 1;
            break;
        }
    }

    // Extract the year (last element)
    let year = dates[dates.length - 1];

    // Return formatted date in YYYY-MM-DD format
    return `${year}-${
        // Add leading zero if month is single digit
        month <= 9 ? '0' + month : month
    }-${
        // If day length is 4 ("20th", "26th") → take first two digits
        // Else ("6th") → prefix 0 and take first digit
        day.length === 4 ? day[0] + day[1] : 0 + day[0]
    }`;
};


console.log(reformatDate("20th Oct 2052")); // 2052-10-20
console.log(reformatDate("6th Jun 1933"));  // 1933-06-06
console.log(reformatDate("26th May 1960")); // 1960-05-26
console.log(reformatDate("20th Sep 1958")); // 1958-09-20



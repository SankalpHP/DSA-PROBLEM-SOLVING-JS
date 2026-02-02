/**
    LeetCode - 3280 Convert Date to Binary

    You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.

    date can be written in its binary representation obtained by converting year, month, and 
    day to their binary representations without any leading zeroes and writing them down in year-month-day format.

    Return the binary representation of date.

 

    Example 1:
        Input: date = "2080-02-29"
        Output: "100000100000-10-11101"

        Explanation:
        100000100000, 10, and 11101 are the binary representations of 2080, 02, and 29 respectively.

    Example 2:
        Input: date = "1900-01-01"
        Output: "11101101100-1-1"

        Explanation:
        11101101100, 1, and 1 are the binary representations of 1900, 1, and 1 respectivel
*/

var convertDateToBinary = function(date) {

   // Split the input date string using '-' as delimiter
   // Example: "2080-02-29" → ["2080", "02", "29"]
   let dates = date.split('-');

   // Extract and convert the year part to a number
   let year = parseInt(dates[0], 10);

   // Extract and convert the month part to a number
   let month = parseInt(dates[1], 10);

   // Extract and convert the day part to a number
   let day = parseInt(dates[2], 10);

   // Convert the year from decimal to binary string
   let binaryYear = year.toString(2);

   // Convert the day from decimal to binary string
   let binaryDay = day.toString(2);

   // Convert the month from decimal to binary string
   let binaryMonth = month.toString(2);

   // Return the final date in binary format "YYYY-MM-DD"
   // Each part is already converted to binary
   return `${binaryYear}-${binaryMonth}-${binaryDay}`;  
};

console.log(convertDateToBinary("2080-02-29"));
// "100000100000-10-11101"

console.log(convertDateToBinary("1900-01-01"));
// "11101101100-1-1"



/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  try {
    if (!str) {
      throw new Error("string to de de");
    }

    const stringCopy = str.toLowerCase();
    let leftPointer = 0;
    let rightPointer = stringCopy.length - 1;

    while (leftPointer <= rightPointer) {
      if (stringCopy.charAt(leftPointer) !== stringCopy.charAt(rightPointer)) {
        return false;
      }
      leftPointer ++;
      rightPointer--;
    }

    return true;
    
  } catch (err) {
    console.error(err);
  }
  return true;
}

module.exports = isPalindrome;

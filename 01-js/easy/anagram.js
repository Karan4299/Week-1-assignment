/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


function isAnagram(str1, str2) {
  try {
    if (!str1 || !str2 || str1.length !== str2.length ) {
      return false;
    }
    let balancesAsciiValue = 0;
  
    for (let iteratorIndex = 0; iteratorIndex < str1.length; iteratorIndex++ ) {
      balancesAsciiValue += str1.charCodeAt(iteratorIndex);
      balancesAsciiValue -= str2.charCodeAt(iteratorIndex);
    }

    return balancesAsciiValue === 0;
  } catch (err) {
    console.log({err});
  }
}

module.exports = isAnagram;

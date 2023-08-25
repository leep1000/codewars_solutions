/*
A pangram is a sentence that contains every single letter of the alphabet at least once. 
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
  //...
  const onlyLetters = string.replace(/[^a-zA-Z]+/g, "").toLowerCase();
  const countLetters = {};
  for (const letter of onlyLetters) {
    countLetters[letter] = (countLetters[letter] || 0) + 1;
  }
  return Object.keys(countLetters).length === 26 ? true : false;
}

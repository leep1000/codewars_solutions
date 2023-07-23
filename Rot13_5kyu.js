/*
INSTRUCTIONS
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

/*
PLAN
- Use ASCII values
- If letter is between a-m, add 13
    -else, minus 13
    -ensure that the case (upper or lowercase) is kept the same
- If not a letter, then keep the same

-Might be worth splitting the ASCII value into a new array to make the values easier to manipulate

*/

// SOLUTION
function rot13(message) {
  let newStr = [];

  for (let i = 0; i < message.length; i++) {
    let charCode = message[i].charCodeAt(0);

    if (
      (charCode >= 65 && charCode <= 77) ||
      (charCode >= 97 && charCode <= 109)
    ) {
      newStr.push(String.fromCharCode(charCode + 13));
    } else if (
      (charCode >= 78 && charCode <= 90) ||
      (charCode >= 110 && charCode <= 122)
    ) {
      newStr.push(String.fromCharCode(charCode - 13));
    } else {
      // For non-alphabet characters, we keep the original character
      newStr.push(message[i]);
    }
  }
  return newStr.join("");
}

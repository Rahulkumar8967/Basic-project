import { compose } from "redux";

function removeSpaces(string) {
  return string.split(" ").join("");
}
console.log(removeSpaces("abc def ghi"));

function repeatString(string) {
  return string.repeat(2); // or can also use string + string
}

console.log(repeatString("abcd"));

function convertToUpper(string) {
  return string.toUpperCase();
}
console.log(convertToUpper("abcd"));

const input = "abc def ghi";

 //const output = convertToUpper(repeatString(removeSpaces(input)));

// console.log(output);

const composeFunction = compose(removeSpaces, repeatString, convertToUpper);
console.log(composeFunction);

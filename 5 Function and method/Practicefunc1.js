/* Qs. Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string. */

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

countVowels("Karan");

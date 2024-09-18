//1 - Built-in Function

// function Reverse(str) {
//   return str.split("").reverse().join("");
// }
// console.log(Reverse("Hello"));
// olleH;


// 2 - Direct

const Reverse = (str) => {
  let rev = "";
  for (i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
};
console.log(Reverse("Hello"));
//olleH
// 1 - Mehtod Functions

// function Factiorial(num) {
//   if (num == 0 || num == 1) {
//     return 1;
//   } else {
//     return num * Factiorial(num - 1);
//   }
// }
// console.log(Factiorial(5));

//2 - For Loop

const Factorial = (num) => {
  let fact = 1;
  for (i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

console.log(Factorial(5));
// // 120

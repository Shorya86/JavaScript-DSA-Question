// for 1 number
// function Prime(num) {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(Prime(5));
// // true

// 1to 100
function Prime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimeNumbers(n) {
  for (let i = 2; i <= n; i++) {
    if (Prime(i)) {
      console.log(i);
    }
  }
}
printPrimeNumbers(100);

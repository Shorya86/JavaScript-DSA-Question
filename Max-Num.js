// using spread max array
// let arr = [1,2,3,55,33,22,5]
// let maxNum = Math.max(...arr);
// console.log(maxNum); 

// using spread min array
// let arr = [1,2,3,55,33,22,5]
// let minNum = Math.min(...arr);
// console.log(minNum); 

// using loops
let numbers = [3, 5, 7, 2, 8];
let maxNum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
        maxNum = numbers[i];
    }
}

console.log(maxNum); // 8


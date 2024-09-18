// built in function using spread operator
// let arr = [1,2,2,3,4,5,5,5,6,6,3,2]
// let arr2 = [...new Set(arr)]
// console.log(arr2);

// Using filter and index of
const array = [1, 2, 3, 4, 4, 5, 5, 6];
const arr = array.filter((value,index)=> array.indexOf(value)===index)
console.log(arr);
//

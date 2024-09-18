// using sort funtion change b-a to reverse sort
// let arr = [1,2,4,3,7,6,8,22,44,12,90]
// let arr2 = arr.sort(function(a,b){return a-b})
// console.log(arr2);
// [
//     1, 2,  3,  4,  6,
//     7, 8, 12, 22, 44,
//    90
//  ]

// using loops
let arr = [1,3,2,8,7,6,5,4]

for(i=0;i<arr.length;i++){
    for(j=0;j<i;j++){
        if(arr[i] < arr[j]){
            let x = arr[i]
            arr[i] = arr[j]
            arr[j] = x
        }
    }
    
}
console.log(arr);
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

// for loop
let arr = [1,2,3,-1,-22,4,5]
let newArr = []
for(i=0;i<arr.length;i++){
    if(arr[i] >= 0){
        newArr.push(arr[i])
    }
}
console.log(newArr);


// // using filter
// let arr = [1,2,3,-1,-22,4,5]
// array = arr.filter(x => x >= 0);
// // [ 1, 2, 3, 4, 5 ]



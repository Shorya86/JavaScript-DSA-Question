// Pattern = 1

let pattern1 = "";
for (i = 1; i <= 5; i++) { // for rows
  for (j = 1; j <= i; j++) { //for stars
    pattern1 += "*";
  }
  pattern1 += "\n"; // for next line
}
console.log(pattern1);
// *
// **
// ***
// ****
// *****

// Pattern = 2

let pattern2 = "";
for (i = 1; i <= 5; i++) { // for rows
  for (j = i; j <= 5; j++) { //for stars
    pattern2 += "*";
  }
  pattern2 += "\n"; // for next line
}
console.log(pattern2);
// *****
// ****
// ***
// **
// *

// Pattern = 3

let pattern3 = "";
for (i = 1; i <= 5; i++) { // for rows
  for (j = i; j < 5; j++) {
    pattern3 += " "; //for space
  }
  for (k = 1; k <= i; k++) {
    pattern3 += "*"; //for stars
  }
  pattern3 += "\n"; // for next line
}
console.log(pattern3);
//     *
//    **
//   ***
//  ****
// *****

// Pattern = 4

let pattern4 = "";
for (i = 1; i <= 5; i++) { // for rows
  for (j = 1; j < i; j++) {
    pattern4 += " "; //for space
  }
  for (k = i; k <= 5; k++) {
    pattern4 += "*"; //for stars
  }
  pattern4 += "\n"; // for next line
}
console.log(pattern4);
// *****
//  ****
//   ***
//    **
//     *

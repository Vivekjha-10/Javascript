// create a function using the "function" keyword that takes a string as an argument & return the number of vowels in string.

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     return count;
// }


// arrow  function 

// let countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     return count;
// }

// Arrow multiplication function

// let arrowmulti = (a, b) => {
//    return a * b;
// }


// ?????????????????????   forEach Loop in array  ??????????????????????????   
//    let arr = ["mumbai", "nashik", "pune"];

//    arr.forEach ((val, idx ,arr) => {
//     console.log(val.toLocaleUpperCase(), idx, arr);
//    });

//    for a given array of numbers, print the square of each value using the forEach loop.

let num = [2, 3, 4, 5, 6, 7, 8, 9];

// num.forEach((num) => {          /* callback function */
//    console.log(num * num) ;
// });


// ??????????????????  map() method   ?????????????????????
//  using value to create new array
// let newArr = num.map((val) => {
//     return val * 2;
// });

// console.log(newArr);



////?????????????????????  filter() method  ???????????????????????????

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = arr.filter((val) => {
//     return  val % 2 != 0 ;             /* print odd number */
// });

// console.log(newArr);


////?????????????????????  reduce() method  ???????????????????????????
// to find lasgest number

// let arr = [1, 2, 3, 4, 50, 6, 7, 8];

// const newArr = arr.reduce((prev, curr) =>{
//     return prev > curr ? prev : curr;
// });

// console.log(newArr); //50



// we  are given array of marks of student .filter out of marks of students that scored o0+.


// let arr = [100, 20, 96, 40, 53, 90, 73, 89];

// const newArr = arr.filter((Val) => {
//     return Val > 90 ;
// }); 

// console.log(newArr);


let n = prompt(" Enter a number: ");


let arr = [];

for(let i = 1; i <= n; i++ ) {
    arr[i-1] = i;
};
 console.log(arr);



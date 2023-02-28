"use strict";


// 1.

// function positive_nums(...numbers){
//     let sum = 0;
//     for (let i of numbers){
//         if (i > 0){
//             sum += i;
//         }
//     }
//     return sum;
// }

// let result = positive_nums(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(result);



// 2.

// function sum_numbers(...nums){
//     let sum = 0;
//     for (let i of nums){
//         sum += i;
//     }
//     return sum;
// }

// let result = sum_numbers(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(result);



// 3.

// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
// }

// function is_logged(object){
//     if (user.isloggedin == true){
//         return (`${user.firstname} ${user.lastname}`);  
//     }
//     else if (user.isloggedin == false){
//         return false;
//     }
//         return "error";
// }

// let result = is_logged(user)
// console.log(result);



// 4.

// function array_max(array){
//     let max = array[0];
//     for (let i of array){
//         if (i > max){
//             max = i;
//         }
//     }
//     return max;
// }

// let result = array_max([5,34,78,160,45,174,63,9]);
// console.log(result);



// 5.

// function even_odd(num){
//     if (num % 2 == 0){
//         return "this number is even";
//     }
//     else if (num % 2 != 0){
//         return "this number is odd";
//     }
//         return "error";
// }

// let result = even_odd(9);
// console.log(result);



// 6.

// let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];

// for (let i of array){
//     if(i.length > 4 && i.includes("av")){
//         console.log(i);
//     }
// }

// for (let key in array) {
//     if (array[key].length > 4 && array[key].includes("av")){
//         console.log(array[key]);
//     }
// }

// array.forEach(function (item){
//     if(item.length > 4 && item.includes("av")){
//         console.log(item);
//     }
// })



// 7.

// let array = [1,2,3,4,5]
// for(let i = array.length - 1; i >= 0; i--){
//     console.log(array[i]);
// }


// 8.

// let testFunction = (age) => (age > 18) ? "srulwlovani" : "arasrulwlovani";

// let result = testFunction(24);
// console.log(result);

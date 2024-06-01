
//1) Create a program that asks the user for two numbers and prints their sum

let num1=230
let num2=270
let sum=num1+num2
console.log('Result is ' + sum);

//2) Implement a program that calculates the area of a rectangle using given length and width.

let length=12
let width=8
let area=length * width
console.log('Area of the rectangle is ' + area);

//3) Create a program that asks the user for their age and determines if they are eligible to vote (considering a voting age of 18).

const age = 18
let myAge = 17

if (myAge >= age) {
    console.log('You are eligible to vote');
}else {
    console.log('You are not eligible to vote');
}

//4) Write a script that takes a user's grade as input and outputs whether they passed or failed (assuming the passing grade is 60 or above).

let mark = 67

// if (mark >= 60) {
//     console.log('You are passed');
// }else {
//     console.log('You are failed');
// }

let result = mark >= 60 ? 'You are passed' : 'You are failed'
console.log(result);

//5) Implement a program that checks if a user's entered number is positive, negative, or zero.

let number = 23

if (number > 0) {
    console.log('Entered number is Positive');
}
else if (number == 0) {
    console.log('Entered number is Zero');  
}
else {
    console.log('Entered number is Negative');
}


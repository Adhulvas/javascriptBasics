
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

//6) Write a script that takes a user's age and checks if they are a child (0-12), teenager (13-19), adult (20-59), or senior (60 and above)

let agegroup = 23

if ((agegroup >= 0) && (agegroup <= 12)) {
    console.log('You are a child');
}
else if ( (agegroup >= 13) && (agegroup <= 19) ) {
    console.log('You are a teenager');
}
else if ( (agegroup >= 20) && (agegroup <= 59) ) {
    console.log('You are an adult');
}
else if (agegroup >= 60) {
    console.log('You are a senior citizen');
}
else {
    console.log('Invalid entry');
}

//7) find the square of each number in an array=[1,3,9,12,15,18,21] using loop

let array=[1,3,9,12,15,18,21]

for (let i=0; i<=6; i++) {
    const result=array[i]**2
    console.log(array[i], '^', 2, '=', result);
}

//8) Write a program to find the sum of all the odd numbers for a given limit (if you choose limit as 10 then need to find the sum of all odd numbers in between 1 and 10 )

let sumnum=0

for (let i=1; i<=20; i++) {
    if (i%2!==0) {
    sumnum=sumnum+i
    }
}
console.log('sum of odd numbers is', sumnum);
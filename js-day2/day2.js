// JavaScript 30 Days Challenge
// Day 2 - If Else & Conditional Logic
// Author: Mohammed Naeem Patel
// Date: (16-12-25)

//Check the number is even or odd using ternary operator

let num=Number(prompt("Enter a Number:"));
const result=(num%2==0)?"Even Number":"Odd Number";

console.log("The Number "+num+" is "+result);


//Check Divisiblity by 5 & 11

//Input number
//If divisible by both → message
//Else → not divisible

let num1=Number(prompt("Enter a Number:"));

if(num1%5==0 && num1%11==0)
{
    console.log("The Number "+num1+" is divisible by both 5 & 11");
}
else
{
    console.log("The Number "+num1+" is not divisible by both 5 & 11!");
}

//Pass/Fail Checker

//Input marks
//≥ 40 → Pass
//< 40 → Fail

let n=Number(prompt("Enter a Number:"));

if(n<0 || n>100)
{
    console.log("Please enter valid marks!");
}

else if(n>=40)
{
    console.log("You are Pass");
}

else if(n<40)
{
    console.log("You are Fail!");
}

else 
{
    console.log("Please enter a valid input (Number)!");
}


//Biggest of two numbers

let n1=Number(prompt("Enter First Number:"));
let n2=Number(prompt("Enter Second Number:"));

if(n1>n2)
{
    console.log(n1+" is greater than "+n2);
}

else if(n1<n2)
{
    console.log(n2+" is greater than "+n1);
}

else if(n1===n2)
{
    console.log(n1+" & "+n2+" both are same!");
}

else 
{
    console.log("Plaese enter a valid input (Number)!");
}


//Leap year checker

//Rules:
//Divisible by 400 → Leap year
//Divisible by 100 → NOT leap year
//Divisible by 4 → Leap year

let year=Number(prompt("Enter the year number:"));

if(year%400==0)
{
    console.log(year+" is the leap year");
}

else if(year%100==0)
{
    console.log(year+" is Not leap year!");
}

else if(year%4==0)
{
    console.log(year+" is the leap year");
}

else
{
    console.log(year+" is not leap year!");
}
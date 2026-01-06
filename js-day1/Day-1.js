// JavaScript 30 Days Challenge
// Day 1 - Variables, data types
// Author: Mohammed Naeem Patel
// Date: (15-12-25)

//Types of Variables in js
let age=Number(prompt("Enter Your Age:"));
console.log("My Age is",age);

const name=prompt("Enter Your Name:");
console.log("My Name is",name);

let a=true;
console.log("I am learning JavaScript which is",a);

let job;
console.log("My job is",job+" for now");

let val=null;
console.log("My value is",val+" for now");


//Check the Number is even or odd
let n=Number(prompt("Enter a Number:"));

if(n===0)
{
    console.log("The Number "+n+" is Zero");
}
else if(n%2==0)
{
    console.log("The Number "+n+" is Even");
}
else
{
    console.log("The Number "+n+" is Odd");
}


//Check the largest number between 3 numbers
let n1=Number(prompt("Enter the First Number:"));
let n2=Number(prompt("Enter the Second Number:"));
let n3=Number(prompt("Enter the Third Number:"));

if(n1>n2 && n1>n3)
{
    console.log(n1+" is the bigger number between "+n2 +" & "+n3);
}

else if(n2>n3 && n2>n1)
{
    console.log(n2+" is the bigger number between "+n3 +" & "+n1);
}

else if(n3>n1 && n3>n2)
{
    console.log(n3+" is the bigger number between "+n1 +" & "+n2);
}

else if(n1===n2===n3)
{
    console.log(n1+ " "+n2+" & "+n3+" All are same!");
}

else
{
    console.log("Please enter a valid input (Numebr)!");
}


//Swaping two numbers
let fir=Number(prompt("Enter the First Number:"));
let sec=Number(prompt("Enter the Second Number:"));
let temp;

console.log("Before Swapping "+fir+" "+sec);

temp=fir;
fir=sec;
sec=temp;

console.log("After Swapping "+fir+" "+sec);


//Check the given number is positive / negative or zero
let num=Number(prompt("Enter a Number"));

if(num>0)
{
    console.log("The Number "+num+" is Positive");
}

else if(num<0)
{
    console.log("The Number "+num+" is Negative");
}

else if(num===0)
{
    console.log("The Number "+num+" is Zero");
}

else 
{
    console.log("Please enter a valid input (Number)!");
}


//Calculator using arithmethic operators
let num1=Number(prompt("Enter First Number:"));
let num2=Number(prompt("Enter Second Number:"));

let sum=num1+num2;
let sub=num1-num2;
let mul=num1*num2;
let div=num1/num2;
let mod=num1%num2;

console.log("The addition of "+num1+ " & "+num2+ " is "+sum);
console.log("The subtraction of "+num1+ " & "+num2+ " is "+sub);
console.log("The multiplication of "+num1+ " & "+num2+ " is "+mul);
console.log("The division of "+num1+ " & "+num2+ " is "+div);
console.log("The moduls of "+num1+ " & "+num2+ " is "+mod);
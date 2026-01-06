/* JavaScript 30 Days Challenge
   Day 3 - Loops (for & while)
   Author: Mohammed Naeem Patel
   Date: (16-7-25)*/


/*Print n Numbers from 1 to n taking number from user

1)Take N from user
2)Use for loop*/

let num=Number(prompt("Enter the Number:"));

for(let i=1; i<=num; i++)
{
    console.log(i);
}

/*Print even numbers from 1 to n 

1)Use for loop
2)Use condition inside loop*/

let num1=Number(prompt("Enter the Number:"));

for(let i=1; i<=num1; i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}


/*Factorial of a number

1)Input number
2)Use for loop*/

let num2=Number(prompt("Enter the Number:"));
let fact=1;

for(let i=1; i<=num2; i++)
{
    fact=fact*i;
}
console.log(fact);


/*Reverse a number

Example: 123 → 321
Use while loop*/

let num3=Number(prompt("Enter the Number:"));
let rev=0;

console.log("Before Reverse the number is ",num3);
while(num3>0)
{
    let digit=num3%10;
    rev=rev*10+digit;
    num3=Math.floor(num3/10);
}
console.log("After Reverse the number is",rev);

/*Check prime number

1)Use for loop
2)Count factors or break logic*/

let num4=Number(prompt("Enter the Number:"));

for(let i=1; i<=num4; i++)
{
    if(num4===2 || num4===3)
    {
        console.log("The Number "+num4+" is the Prime Number")
    }
    else if(num4%2==0)
    {
        console.log("The Number "+num4+" is not a Prime Number");
    }
    else if(num4%3==0)
    {
        console.log("The Numebr "+num4+" is not a Prime Number")
    }
    else
    {
        console.log("The Number "+num4+ " is the Prime Number")
    }
}

/*Sum of digits of a number

1)Example: 123 → 1 + 2 + 3 = 6
2)Use while loop*/

let num5=Number(prompt("Enter the Number:"));
let sum=0;

console.log("Before Sum the Number is ",num5);

while(num5>0)
{
    let digit=num5%10;
    sum=sum+digit;
    num5=Math.floor(num5/10);
}
console.log("Sum of digits are",sum);
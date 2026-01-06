// JavaScript 30 Days Challenge
// Day 4 - Functions
// Author: Mohammed Naeem Patel
// Date: (17-12-25)

/*Function to check Even or Odd

1)Input: number
2)Output: message*/

let n=Number(prompt("Enter the Number:"));

function eo(n)
{
    if(n===0)
    {
        console.log("The Number "+n+" is Zero");
    }
    else if(n%2==0)
    {
        console.log("The Number "+n+" is Even");
    }
    else if(n%2!=0)
    {
        console.log("The Number "+n+" is Odd");
    }
}

let a=eo(n);


/*Function to find Maximum of two numbers

1)Input: two numbers
2)Return the bigger number*/

let n1=Number(prompt("Enter the First Number"));
let n2=Number(prompt("Enter the Second Number"));

function max(ab,cd)
{
    if(ab>cd)
    {
        return ab+" is the Bigger Number than "+cd;
    }
    else if(ab<cd)
    {
        return cd+" is the Bigger Number than "+ab;
    }
    else if(ab===cd)
    {
        return ab +" and "+cd+" both are same";
    }
    else 
    {
        console.log("Please enter the valid input (Number)!");
    }
}

console.log(max(n1,n2));

/*Function to calculate Factorial

1)Input: number
2)Return factorial*/

let num=Number(prompt("Enter the Number:"));

function fact(num)
{
    let f=1;
    for(let i=1; i<=num; i++)
    {
        f=f*i;
    }

    return "Factorial of "+num+ " is "+f;
}

console.log(fact(num));


/*Function to Reverse a number

1)Input: number
2)Return reversed number*/

let n4=Number(prompt("Enter the Number:"));

function reverse(number)
{
    let rev=0;
    while(number>0)
    {
        let digit=number%10;
        rev=rev*10+digit;
        number=Math.floor(number/10);
    }

    return "Reverse Number is "+rev;
}

console.log(reverse(n4));


/*Function to find Sum of digits

1)Input: number
2)Return sum*/

let number=Number(prompt("Enter the Number:"));

function SoD(n)
{
    let sum=0;
    while(n>0)
    {
        let digit=n%10;
        sum=sum+digit;
        n=Math.floor(n/10);
    }

    return "Sum of Number is "+sum;
}

console.log(SoD(number));
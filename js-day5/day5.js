// JavaScript 30 Days Challenge
// Day 5 - Arrays
// Author: Mohammed Naeem Patel
// Date: (17-12-25)


/*Create an array of 5 numbers (using prompt)

1)Store user input in array
2)Print the array*/

let arr=[];
for(let i=0; i<5; i++)
{
    arr[i]=Number(prompt("Enter the Numbers:"));
}

console.log(arr);


//Print all array elements using for loop

let arr1=[54,75,86,23,89];

for(let i=0; i<arr1.length; i++)
{
    console.log(arr1[i]);
}


//Print all array elements using for loop using prompt

let size=Number(prompt("Enter the size of an array:"));
let arr2=[];

for(i=0; i<size; i++)
{
    arr2[i]=Number(prompt("Enter the Numbers:"));
}

console.log(arr2);

//Find sum of all elements in array

let arr3=[1,2,3,4,5];
let sum=0;

for(let i=0; i<arr3.length; i++)
{
    sum=sum+arr3[i];
}

console.log(sum);

//Find maximum element in array

let arr4=[];
let u=Number(prompt("Enter the size of an array:"));

for(let i=0; i<u; i++)
{
    arr4[i]=Number(prompt("Enter the number:"));
}

let max=arr4[0];

for(let i=1; i<arr4.length; i++)
{
    if(arr4[i]>max)
    {
        max=arr4[i];
    }
}
console.log("Maximun Element in this array is",max);

//Find minimum element in array

let arr5=[];
let us=Number(prompt("Enter the size of an array:"));

for(let i=0; i<us; i++)
{
    arr5[i]=Number(prompt("Enter the number:"));
}

let min=arr5[0];

for(let i=1; i<arr5.length; i++)
{
    if(arr5[i]<min)
    {
        min=arr5[i];
    }
}
console.log("Minimum Element in this array is",min);

/*Search an element in array

1)Input element from user
2)Print Found or Not Found*/

let arr6=[];
let nu=Number(prompt("Enter the size of an array:"));

for(let i=0; i<nu; i++)
{
    arr6[i]=Number(prompt("Enter the Numbers:"));
}

let search=Number(prompt("Enter the element to search from an array:"));
let found=false;

for(let i=0; i<arr6.length; i++)
{
    if(arr6[i]===search)
    {
        console.log("Element "+search+" is found in an array");
        found=true;
        break;
    }
}

if(!found)
{
    console.log("Element "+search+" is not found in an array!");
}
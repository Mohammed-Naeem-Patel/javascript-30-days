/* day 16
Project: Map,Filter,Reduce Methods
Description: Practice of higher order elements of array
Author:Mohammed Naeem Patel*/


//PART 1: map() (TRANSFORM DATA)

/*Task 1: Square all numbers
let nums = [1, 2, 3, 4, 5];

Output:
[1, 4, 9, 16, 25]*/

let arr1=[1,2,3,4,5];

let a1=arr1.map((num)=>{
    return num*num;
});

console.log(a1);

/*Task 2: Convert names to uppercase
let names = ["naeem", "ali", "ahmed"];*/

let arr2=["naeem","ali","ahmed"];

let a2=arr2.map((name)=>{
    return name.toUpperCase();
});

console.log(a2);


/*Task 3: Add ₹100 bonus to salaries
let salaries = [1000, 2000, 3000];*/

let arr3=[1000,2000,3000];

let a3=arr3.map((salary)=>{
    return salary+100;
});

console.log(a3);


//PART 2: filter() (SELECT DATA)

/*Task 4: Get even numbers
let nums = [1, 2, 3, 4, 5, 6];*/

let arr4=[1,2,3,4,5];

let a4=arr4.filter((num)=>{
    if(num%2===0)
    {
        return num;
    }
});

console.log(a4);


/*Task 5: Get students who passed (marks ≥ 35)
let marks = [23, 45, 60, 12, 90, 35];*/

let arr5=[23,45,60,12,90,35];

let a5=arr5.filter((marks)=>{
    return marks>=35;
});

console.log(a5);


/*Task 6: Get names longer than 4 characters
let names = ["Ali", "Naeem", "Ahmed", "Usman"];*/

let arr6=["Ali","Naeem","Ahmed","Usman"];

let a6=arr6.filter((name)=>{
    return name.length>4;
});

console.log(a6);


//PART 3: reduce() (CALCULATE)

/*Task 7: Sum of all numbers
let nums = [10, 20, 30, 40];*/

let arr7=[10,20,30,40];

let a7=arr7.reduce((num1,num2)=>{
    return num1+num2;
});

console.log(a7);


/*Task 8: Find maximum number
let nums = [5, 18, 2, 50, 1];*/

let arr8=[5,18,2,50,1];

let a8=arr8.reduce((acc,currval)=>{
    return Math.max(acc,currval);
},0);

console.log(a8);


/*Task 9: Total marks of a student
let marks = [80, 75, 90];*/

let arr9=[80,75,90];

let a9=arr9.reduce((num1,num2)=>{
    return num1+num2;
});

console.log(a9);


//PART 4: REAL-LIFE COMBO (IMPORTANT)

/*Task 10: Students who passed + total marks

👉 Steps:
Filter passed students (marks ≥ 35)
Extract marks
Calculate total marks*/

let students = [
  { name: "Ali", marks: 30 },
  { name: "Naeem", marks: 80 },
  { name: "Ahmed", marks: 50 },
  { name: "Usman", marks: 20 }
];

let s1=students
       .filter(value => value.marks >= 35)     
       .map(value => value.marks)
       .reduce((acc,marks) => acc+marks,0);

    console.log(s1);

    
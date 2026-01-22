/* day 16
Title: Map,Filter,Reduce Methods
Description: Practice of higher order elements of array
Author:Mohammed Naeem Patel*/


//PART 1: map() (TRANSFORM DATA)

/*Task 1: Square all numbers
let nums = [1, 2, 3, 4, 5];

Output:
[1, 4, 9, 16, 25]*/

let nums=[1,2,3,4,5];

let numsofsq=nums.map((nums)=>{
    return nums*nums; //Gives the square of all numbers
});

console.log(numsofsq); //This prints the square of all numbers in console

/*Task 2: Convert names to uppercase
let names = ["naeem", "ali", "ahmed"];*/

let names=["naeem","ali","ahmed"];

let namesup=names.map((names)=>{
    return names.toUpperCase(); //Converts the name into uppercase
});

console.log(namesup); //This prints the all names into uppercase in console


/*Task 3: Add ₹100 bonus to salaries
let salaries = [1000, 2000, 3000];*/

let sal=[1000,2000,3000];

let upsal=sal.map((salary)=>{
    return salary+100;  //Adding 100₹ in salaries
});

console.log(upsal); //This prints the updated salaries with adding 100₹ in console


//PART 2: filter() (SELECT DATA)

/*Task 4: Get even numbers
let nums = [1, 2, 3, 4, 5, 6];*/

let nums2=[1,2,3,4,5,6];

let evenums=nums2.filter((num)=>{
    if(num%2===0)
    {
        return num; //Checks the even numbers and give them
    }
});

console.log(evenums); //This prints only the even numbers from an array in console


/*Task 5: Get students who passed (marks ≥ 35)
let marks = [23, 45, 60, 12, 90, 35];*/

let marks=[23,45,60,12,90,35];

let passedStudents=marks.filter((marks)=>{
    return marks>=35;  //Gives the passed students marks or give marks>=35
});

console.log(passedStudents); //This prints only the passed students marks in console


/*Task 6: Get names longer than 4 characters
let names = ["Ali", "Naeem", "Ahmed", "Usman"];*/

let names2=["Ali","Naeem","Ahmed","Usman"];

let bignames=names2.filter((name)=>{
    return name.length>4;  //Gives longer names than 4 characters
});

console.log(bignames); //This prints only the names which are greater than 4 characters in console


//PART 3: reduce() (CALCULATE)

/*Task 7: Sum of all numbers
let nums = [10, 20, 30, 40];*/

let nums3=[10,20,30,40];

let sum_of_nums=nums3.reduce((num1,num2)=>{
    return num1+num2;  //Calculates the sum of all numbers in an array name nums3
});

console.log(sum_of_nums); //This prints the sum of all numbers in console


/*Task 8: Find maximum number
let nums = [5, 18, 2, 50, 1];*/

let nums4=[5,18,2,50,1];

let maxi_num=nums4.reduce((acc,currval)=>{
    return Math.max(acc,currval);  //Gives the maximum number from an array
},0);

console.log(maxi_num); //This prints the maximum number from an array in console


/*Task 9: Total marks of a student
let marks = [80, 75, 90];*/

let marks2=[80,75,90];

let total_marks=marks2.reduce((num1,num2)=>{
    return num1+num2;  //Calculate the total marks
});

console.log(total_marks); //This prints the total marks in console


//PART 4: REAL-LIFE COMBO (IMPORTANT)

/*Task 10: Students who passed + total marks

👉 Steps:
Filter passed students (marks ≥ 35)
Extract marks
Calculate total marks*/

let students = 
[
  { name: "Ali", marks: 30 },
  { name: "Naeem", marks: 80 },
  { name: "Ahmed", marks: 50 },
  { name: "Usman", marks: 20 }
];

let updated_data=students
       .filter(value => value.marks >= 35)    //This is filtering passed studensts 
       .map(value => value.marks)             //This extracts marks of students
       .reduce((acc,marks) => acc+marks,0);   //This calculates the total marks 

    console.log(updated_data);                //This prints the data in console
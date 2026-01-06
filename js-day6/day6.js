// JavaScript 30 Days Challenge
// Day 6 - Objects
// Author: Mohammed Naeem Patel
// Date: (18-12-25)


/*Q1: Create a student object

Properties:
name
rollNo
marks

Print the complete object.*/

let student={
    name:"Naeem",
    rollNo:44,
    marks:95
};

console.log(student);


/*Q2: Access object properties

Print each property separately
Use dot notation
Use bracket notation (at least once)*/

console.log("This will be prints each property separately using dot notation");
console.log(student.name);
console.log(student.rollNo);
console.log(student.marks);

console.log("This will be prints each property separately using bracket notation");
console.log(student["name"]);
console.log(student["rollNo"]);
console.log(student["marks"]);

/*Q3: Update object property

Change marks
Print updated object*/

student.marks=100;
console.log(student);


/*Q4: Add a new property

Add grade
Print object*/

student.grade="A";
console.log(student);


/*Q5: Delete a property

Delete rollNo
Print object*/

delete student.rollNo;
console.log(student);


/*Q6: Loop through object properties

Use for…in
Print key and value*/


for(let key in student)
{
    console.log(key+":",student[key]);
}
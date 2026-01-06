// Mini Project: Student Result Management System
// JavaScript 30 Days Challenge - Day 7
// Author: Mohammed Naeem Patel
// Description: Console-based student result system


/*Take student details using prompt()

name
rollNo
marks of 3 subjects (array)*/

let name=prompt("Enter Your Name:");
let rollno=Number(prompt("Enter Your Roll No:"));

let sub=[];

for(let i=0; i<3; i++)
{
    sub[i]=Number(prompt("Enter the Marks:"));
}


/*Calculate:

total marks
percentage
grade (A/B/C/Fail)*/


function calculate()
{
    let total=sub[0]+sub[1]+sub[2];

    let per=total/3;

    let grade;
    if(per>80)
    {
        grade="A";
    }

    else if(per>60)
    {
        grade="B";
    }

    else if(per>40)
    {
        grade="C";
    }

    else
    {
        grade="Fail";
    }

    
    return {
        total:total,
        per:per,
        grade:grade
    };

}

let result=calculate();

//Store data in an object

let student={
    Name:name,
    RollNo:rollno,
    marks:sub,
    Total:result.total,
    Percentage:result.per,
    Grade:result.grade
};

console.log(student);
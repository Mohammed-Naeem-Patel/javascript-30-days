// JavaScript 30 Days Challenge
// Day 10 - Form Handling
// Author: Mohammed Naeem Patel
// Date: (23-12-25)

/*Q1: Read form input values

HTML:
Input: Name
Input: Age
Button

JS:
On button click:
Read name & age
Show them inside a <p>*/

function sbt(event)
{
    event.preventDefault();
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;

    /*Q2: Check empty input (IMPORTANT)

    JS logic:
    If name is empty → show error
    Else → show name*/

    if(name==="")
    {
        alert("Name is Empty! Please fill the name field.");
    }

    else
    {
        document.querySelector("p").innerText="Name: "+name+", Age: "+age;
    }

    /*Q3: Age validation

    Rules:
    Age < 18 → “Not eligible”
    Age ≥ 18 → “Eligible”
    Show result on page (not alert).*/

    age=Number(age);
    if(age===0 || age<0 || age==="")
    {
        document.querySelector("p").innerText="Please enter the valid age";
    }

    else if(age<18)
    {
        document.querySelector("p").innerText="Not Eligible!";
    }

    else
    {
        document.querySelector("p").innerText="Eligible!";
    }
}

    /*Q4: Simple login check (VERY IMPORTANT)

    HTML:
    Username input
    Password input
    Button
    <p> for result
    
    JS logic:
    If username == "admin" AND password == "1234"
    → Login successful
    Else → Invalid credentials*/


    function sbt2(event)
    {
        event.preventDefault();
        let un=document.getElementById("username").value;
        let pass=document.getElementById("password").value;

        if(un==="admin" && pass==="1234")
        {
            document.getElementById("result").innerText="Login Successful";
        }

        else
        {
            document.getElementById("result").innerText="Invalid Credentials!";
        }
    }
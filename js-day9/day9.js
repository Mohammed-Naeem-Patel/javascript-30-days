// JavaScript 30 Days Challenge
// Day 9 - Events
// Author: Mohammed Naeem Patel
// Date: (22-12-25)


/*Q1: Button Click Counter
HTML:
Button
<p> tag

JS:
Each click → increase count
Show count in paragraph*/


let count=0;

const button1=document.getElementById("btn1");

button1.addEventListener("click",
    function()
    {
        count++;
        document.querySelector("p").innerText="Button Clicked: "+count+" times.";
    });


/*Q2: Change Text on Button Click

HTML:
<h2>
Button

JS:
On click → change heading text*/


   const button2=document.getElementById("btn2");

   button2.addEventListener("click",
    function()
    {
        document.querySelector("h2").innerText="Texts Change by clicking on button";
    });


/*Q3: Show Input Text on Button Click

HTML:
Input box
Button
<p>

JS:
On click → show input value in paragraph*/

  const button3=document.getElementById("btn3");

  button3.addEventListener("click",
    function()
    {
        let a=document.querySelector("input").value;
        document.getElementById("ans").innerText=a;
    });


/*Q4: Change Color on Button Click

HTML:
<div> or <p>
Button

JS:
On click → change text color
(toggle if you want, optional)*/

   function btn4()
   {
      document.querySelector("div").style.color="red";
   }


/*Q5: Simple On–Off Text (IMPORTANT)

HTML:
Button
<p>

JS:
First click → show “ON”
Second click → show “OFF”
Alternate on every click
(Hint: use a variable)*/

let on=false;

function btn5()
{
    if(on)
    {
        document.getElementById("output").innerText="OFF";
        on=false;
    }

    else
    {
        document.getElementById("output").innerText="ON";
        on=true;
    }
}
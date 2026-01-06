// JavaScript 30 Days Challenge
// Day 8 - DOM Basics
// Author: Mohammed Naeem Patel
// Date: (21-12-25)

    const button=document.getElementById("btn1");
        
        button.addEventListener("click",
		function()
		{
			let a=document.querySelector("p").innerText="Hello guys this texts are shows by JavaScript DOM";
		});
		
		document.getElementById("title").innerText="Welcome in JavaScript DOM";

		/*function CT()
		{
   			let a=document.querySelector("p").innerText="Hello guys this texts are shows by JavaScript DOM";
			//document.write(a);
		}*/

		function CC()
		{
			document.querySelector('div').style.color='red';
		}

		function RIV()
		{
			let a=document.querySelector('input').value;
			let b=document.querySelector('p1').innerText=a;
		}

		function s()
		{
			let a=document.getElementById('i').value;
			let b=document.querySelector("h2").innerText="Hello, ! Welcome "+a+".";
//			document.write("Hello, ! Welcome ",a+".");
		}
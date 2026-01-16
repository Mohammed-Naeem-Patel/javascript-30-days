/* day 19
Title: Error Handling & Input Safety (Real-World Skills)
Description: Making your code safe and preventing wrong inputs
Author:Mohammed Naeem Patel*/


//TASK 1: Prevent Empty Input

const button=document.getElementById("btn");
const text=document.getElementById("msg");

button.addEventListener("click", ()=>{

    try{
    let name=document.getElementById("name").value;

    if(name==="")
    {
        text.innerText="Name cannot be empty!";
        text.style.color="red";
        return;
    }

//TASK 2: Age Validation

    let age=document.getElementById("age").value;

    if(age==="" || age<=0)
    {
        text.innerText="Please enter a valid age!";
        text.style.color="red";
        return;
    }



    
    text.innerText="Hello "+name+","+" Age: "+age;
    text.style.color="green";
    }

    catch(error){
        text.innerText="Something went wrong!";
        text.style.color="red";
    }

});
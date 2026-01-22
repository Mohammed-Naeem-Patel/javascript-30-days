// JavaScript 30 Days Challenge
// Day 10 -  To-Do List
// Author: Mohammed Naeem Patel
// Date: (23-12-25)


/*STEP 1: HTML STRUCTURE (MINIMAL)

You need:
Input box (task text)
“Add Task” button
<ul> or <div> to show tasks*/



/*STEP 2: JavaScript — BASIC ADD TASK (MANDATORY)

Logic:
Read input value
If empty → show message
Else → add task to list*/


let tasks=[]; //this stores the all tasks 
            
const button=document.getElementById("add"); 

    button.addEventListener("click",
        function btn(event) 
        {
            event.preventDefault(); //stops crashing
            
            let task=document.getElementById("taskinput").value; //store the input in a variable name task

            if(task==="")
            {
                alert("Please enter a task!"); //prints on alert 
                return; //return if fails
            }

            tasks.push(task); //store new task in array for persistent display
            displayTasks();   //calling function
            document.getElementById("taskinput").value="";
        });

            /*STEP 3: DISPLAY TASKS (IMPORTANT)

            When a task is added:
            Clear the list
            Loop through array
            Show all tasks*/

        function displayTasks()
        {
            let list=document.getElementById("tasklist"); //making a variable and taking tasks for making list
            list.innerHTML="";

            for(let i=0; i<tasks.length; i++)
            {
                list.innerHTML += `<li>
                ${tasks[i]}
                <button onclick="deleteTask(${i})">Delete</button>
                </li>
                `;  //this prints the tasklist with button at a place of list
            }
        }


        /*STEP 4: DELETE TASK (VERY IMPORTANT)

        For each task:
        Add a “Delete” button
        On click → remove that task
        
        HINT:
        Use index
        Use splice()*/


        function deleteTask(index)
        {
            tasks.splice(index, 1); //remove tasks from a list
            displayTasks();
        }
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


    let tasks=[];
            
const button=document.getElementById("add");

    button.addEventListener("click",
        function btn(event)
        {
            event.preventDefault();
            
            let task=document.getElementById("taskinput").value;

            if(task==="")
            {
                alert("Please enter a task!");
                return;
            }

            tasks.push(task);
            displayTasks();
            document.getElementById("tasklist").value="";
        });

            /*STEP 3: DISPLAY TASKS (IMPORTANT)

            When a task is added:
            Clear the list
            Loop through array
            Show all tasks*/

        function displayTasks()
        {
            let list=document.getElementById("tasklist");
            list.innerHTML="";

            for(let i=0; i<tasks.length; i++)
            {
                list.innerHTML += `<li>
                ${tasks[i]}
                <button onclick="deleteTask(${i})">Delete</button>
                </li>
                `;
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
            tasks.splice(index, 1);
            displayTasks();
        }
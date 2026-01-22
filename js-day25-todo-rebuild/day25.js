let task_list=[];

const button=document.getElementById("add-task");

button.addEventListener("click",
    function (event){
        event.preventDefault();

        let task=document.getElementById("input-task").value.trim();

        if(task==="")
        {
            document.getElementById("msg").innerText="Please enter the task!";
            return;
        }

        else
        {
            document.getElementById("msg").innerText = "";
        }

        task_list.push(task);
        displayTask();
        taskcnt();

        document.getElementById("input-task").value="";
    });

    function displayTask()
    {
        let tasks=document.getElementById("task-list");
        tasks.innerHTML="";

        for(let i=0; i<task_list.length; i++)
        {
            tasks.innerHTML+=`
            <li>
              ${task_list[i]}
              <button onclick="deleteTask(${i})">Delete Task</button>
            </li>`;
        }
    }

    function deleteTask(index)
    {
        task_list.splice(index, 1);
        displayTask();
        taskcnt();
    }

    function taskcnt()
    {   
        document.getElementById("tc").innerText="Total Tasks="+task_list.length;
    }
let tasklist=[];

const button1=document.getElementById("add");

button1.addEventListener("click", function () {

    let task = input.value.trim();
    const message = document.getElementById("message");

    if(task === "") {
        message.innerText = "Please enter the task!";
        return;
    }

    if(tasklist.includes(task)) {
        message.innerText = "This task already exists!";
        return;
    }

    tasklist.push(task);
    message.innerText = "";
    input.value = "";

    displayTask();
    updateCount();
});



    function displayTask()
    {
        let list=document.getElementById("tasklist");
        list.innerHTML="";

        for(let i=0; i<tasklist.length; i++)
        {
            list.innerHTML += `<li>
            ${tasklist[i]}
            <button onclick="deleteTask(${i})">Delete Task</button>
            </li>
            `;
        }
    }

    function deleteTask(index)
    {
        tasklist.splice(index, 1);
        displayTask();
        updateCount();
    }

    function updateCount() 
    {
        document.getElementById("count").innerText =
        "Total tasks: " + tasklist.length;
    }

    const input = document.getElementById("inputtask");

    button1.disabled = true;

    input.addEventListener("input", 
        function ()
        {
            if(input.value.trim() === "") 
            {
                button1.disabled = true;
            } 
        
            else 
            {
                button1.disabled = false;
            }
    });
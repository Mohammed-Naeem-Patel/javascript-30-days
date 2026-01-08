        let t=[];
        let savedTasks = localStorage.getItem("tasks");

        if (savedTasks) 
        {
            t = JSON.parse(savedTasks);
            displaytask();
            count();
        }


        const button=document.getElementById("btn1");

        button.addEventListener("click",
            function at()
            {
                let task=document.getElementById("it").value.trim();

            if(task==="")
            {
                document.getElementById("tasks").innerText="Please enter the task!";
                return;
            }

            if(t.includes(task))
            {
                alert("This Task is already exists!");
                return;
            }

            t.push(task);
            localStorage.setItem("tasks", JSON.stringify(t));
            displaytask();
            document.getElementById("tasks");
            count();
            });


            function displaytask()
            {
                let ta=document.getElementById("tasks");
                ta.innerHTML="";

                for(let i=0; i<t.length; i++)
            {
                ta.innerHTML+=`<li>
                    ${t[i]}
                    <button onclick="deletetask(${i})">Delete Task</button>
                    </li>
                    `;
            }
            }


            function deletetask(index)
            {
                t.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(t));
                displaytask();
                count();
            }

            function count()
            {
                document.getElementById("p").innerText="Total Tasks:"+t.length;
            }

            const input = document.getElementById("it");

    button.disabled = true;

    input.addEventListener("input", 
        function ()
        {
            if(input.value.trim() === "") 
            {
                button.disabled = true;
            } 
        
            else 
            {
                button.disabled = false;
            }
    });

    document.getElementById("clear").addEventListener("click", function () {
    t = [];
    localStorage.removeItem("tasks");
    displaytask();
    count();
});
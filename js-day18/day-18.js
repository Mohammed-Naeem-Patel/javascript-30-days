/* day 18
Title: Async Await & API
Description: Practice of Async Await & API (Fetching)
Author:Mohammed Naeem Patel*/

//PART 1: BASIC async / await (NO API YET)

//Task 1: Simple async function

async function hello()
{
    return "hello world";
}

hello().then(result => console.log(result));

//PART 2: API FETCH WITH async / await

//Task 2: Fetch users (console only)

async function getuser()
{
    let res=await fetch("https://jsonplaceholder.typicode.com/users");
    let data=await res.json();
    console.log(data);
}

getuser();


//PART 3: BUTTON + DISPLAY USER WITH ERROR HANDLING (try...catch) ⭐ IMPORTANT

//Task 3: Shows User names on page wiht Handle errors properly

let btn=document.getElementById("btn");
let list=document.getElementById("list");

btn.addEventListener("click",
    async ()=>
    {
        try{
        let res=await fetch("https://jsonplaceholder.typicode.com/users");
        let users=await res.json();

        list.innerHTML="";

        users.forEach(user =>
            {
                let li=document.createElement("li");
                li.innerText=user.name;
                list.appendChild(li);
            });
    }
    catch(error){
        console.log("Error in fetching data!", error);
    }
});
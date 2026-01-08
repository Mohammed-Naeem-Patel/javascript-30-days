// Print “Hello after 3 seconds” using setTimeout

let time=setTimeout(
    ()=>{
    document.getElementById("text").innerText="Hello after 3 seconds";
        },3000
    );


// Counter that increases every second

let count=0;
let inter=setInterval(
    ()=>{
    count++;
    console.log(count);
        },1000
    );


// Stop counter using button

const button=document.getElementById("btn");

button.addEventListener("click",
    function ()
    {
        clearInterval(inter);
    });


// Get current time using Date

let clock=setInterval(
    ()=>{
        let now=new Date();

        let h=now.getHours();
        let m=now.getMinutes();
        let s=now.getSeconds();

        document.getElementById("date").innerText=h+":"+m+":"+s;
    },1000
    );
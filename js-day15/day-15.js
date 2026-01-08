/* day 15
Project: Digital Clock
Description: Live digital clock with start/stop functionality
Author:Mohammed Naeem Patel*/



/* TASK 3: START BUTTON

Button text: Start Clock
Clicking it:
Starts the clock
Prevents multiple intervals (IMPORTANT)
*/


const startBtn=document.getElementById("str");
let clk=null;

startBtn.addEventListener("click",
    function strt()
    {
        /* TASK 1: BASIC LIVE CLOCK (MANDATORY)
        
        Requirements:
        Show current time
        Update every second
        Use innerText
        Use new Date()*/
        
        if(clk!==null)
        {
            return;
        }

        clk=setInterval(
            ()=>
                {
                    let now=new Date();
                    let h=now.getHours();
                    let m=now.getMinutes();
                    let s=now.getSeconds();
            
                    /* TASK 2: LEADING ZERO FIX (IMPORTANT)
                    
                    If time is:
                    9 → show 09
                    5 → show 05*/

                    const f1=h<10?"0"+h:h
                    const f2=m<10?"0"+m:m
                    const f3=s<10?"0"+s:s

                    document.getElementById("time").innerText=f1+":"+f2+":"+f3;
            },1000);
    });


    /*TASK 4: STOP BUTTON
    
    Button text: Stop Clock
    Clicking it:
    Stops the clock
    Clock freezes*/

    const stopBtn=document.getElementById("sto");

    stopBtn.addEventListener("click",
    function stop()
    {
        clearInterval(clk);
        clk=null;
    });
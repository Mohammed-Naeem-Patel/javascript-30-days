/* day 21
Title: Movie App
Description: Making Real time Movie Search App
Author:Mohammed Naeem Patel*/


let btn=document.getElementById("btn");
let msg=document.getElementById("msg");
let result=document.getElementById("result");


btn.addEventListener("click", async ()=>{
    
    let movie=document.getElementById("movie").value.trim();

    if(movie==="")
    {
        msg.innerText="Please Enter the name of movie!";
        msg.style.color="red";
        result.innerHTML="";
        return;
    }

    msg.innerText="";

    try
    {
        let apikey="2e4d7f63";
        let url=`https://www.omdbapi.com/?t=${movie}&apikey=${apikey}`;

        let response=await fetch(url);
        let data=await response.json();

        if(data.Response==="False")
        {
            throw new Error("Movie Not Found!");
        }

        result.innerHTML=`
        <h3>${data.Title}</h3>
        <p>${data.Year}</p>
        <p>${data.imdbRating}</p>
        <img src="${data.Poster}" alt="Poster" width="200">`;
    }

    catch(error)
    {
        msg.innerText="No Movie Not Found!";
        msg.style.color="red";
        result.innerHTML="";
    }    
});
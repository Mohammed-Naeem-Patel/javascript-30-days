/* day 21
Title: Weather App
Description: Making Real time Weather Search App
Author:Mohammed Naeem Patel*/


let btn=document.getElementById("btn");
let msg=document.getElementById("msg");
let result=document.getElementById("result");

btn.addEventListener("click", async ()=>{

    let city=document.getElementById("city").value.trim();
    
    if(city==="")
    {
        msg.innerText="Please Enter the city name!";
        msg.style.color="red";
        result.innerHTML="";
        return;
    }
    msg.innerText="";

    try 
    {
        let apiKey = "dd214000daf1b34ebc5126ee65dbb857";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
        let response = await fetch(url);
    
        if (!response.ok) 
        {
          throw new Error("City not found");
        }

        let data = await response.json();
        result.innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].main}</p>
        `;
} 
  catch(error) 
  {
    msg.innerText = "City not found!";
    msg.style.color = "red";
    result.innerHTML = "";
  }
});
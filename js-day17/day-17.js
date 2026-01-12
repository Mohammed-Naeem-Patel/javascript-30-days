/* day 17
Title: JSON & Fetch API
Description: Practice of JSON & API (Fetching)
Author:Mohammed Naeem Patel*/

//PART 1: JSON BASICS (NO FETCH YET)

//Task 1: Create a JS object and convert it to JSON

let student = 
{
  name: "Naeem",
  age: 20,
  course: "BCA"
};

let jsonData = JSON.stringify(student);
console.log(jsonData);


// //Task 2: Convert JSON back to JS object

let parsedData = JSON.parse(jsonData);
console.log(parsedData.name);


//PART 2:fetch() BASICS

//Task 3: Fetch data from API (console only)

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });


//PART 3:DISPLAY DATA ON PAGE (IMPORTANT)

//Task 4: Show user names in <ul></ul>

let btn = document.getElementById("btn");
let list = document.getElementById("list");

btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      list.innerHTML = "";

      users.forEach(user => {
        let li = document.createElement("li");
        li.innerText = user.name;
        list.appendChild(li);
      });
    });
});

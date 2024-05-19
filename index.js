const h1 = document.createElement("h1");

const body = document.body;
const container1 = document.querySelector(".container-1");
const form = document.querySelector("form");
const input= document.querySelector("input");
const heading1 = document.querySelector("#heading1");
const p = document.querySelector("p");
const h2 = document.querySelector(".main");

h1.textContent="New Orleans Nightlife";
h1.style.color = "gold";
h1.style.backgroundColor = "purple";
h1.classList.add("heading_1");
h1.style.height = "200px";

// const firstbtn = document.querySelector(".first-btn");
form.addEventListener("submit",(event) =>{
  event.preventDefault();
  console.log(input.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
  
body.appendChild(input);
body.appendChild(h1);
body.appendChild(p);


console.log(body)




p.style.fontFamily = "sans-serif";



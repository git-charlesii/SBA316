const body = document.body;
const h1 = document.querySelector("h1");
const container1 = document.querySelector(".container-1");
const form = document.querySelector("form");
const input= document.querySelector("input");
const heading1 = document.querySelector("#heading1");
const p = document.querySelector("p");
const h2 = document.querySelector(".main");
const img = document.createElement("img");

h1.textContent="New Orleans Nightlife";
h1.style.color = "gold";
h1.style.backgroundColor = "purple";
// h1.classList.add("heading_1");
h1.style.height = "200px";
h1.style.fontSize = "95px";
h1.style.borderRadius = "40px"

const text = "<h2>Sign Up Here!</h2>";

main.innerHTML = text;


// email signup 
function validateEmail() {
  var email = document.getElementById("email").value;
  if (email.includes("@")) {
    alert("Thank you for subscribing!");
  } else {
    alert("Please enter a valid email address.");
  }
}


form.addEventListener("submit",(event) =>{
  event.preventDefault();
  console.log(input.value);
  
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});


  

body.appendChild(h1);
body.appendChild(p);
body.appendChild(form);
body.appendChild(input);







p.style.fontSize = "25px"
p.style.fontFamily = "sans-serif";
console.log(p.innerText);


// (attempt at) opening and closing popup window when image is clicked
// let myWindow;

function newWindow() {
  myWindow = window.open(
    "./images/NewOrleans_IsoMap_FINAL_Screen_95202150-e8d9-4aa0-9530-b5941ffa9252.png",
    "new_orleans_map",
    "width=400, height=200, resizable=yes, scrollbars=yes, location=yes"
  );
  myWindow.focus();
}
// commented out close window portion of code and had some success
// function closeWindow() {
//   myWindow.close();
// }

document.querySelector("a").addEventListener("click", newWindow);
document.querySelector("altButton")
// document.addEventListener("click", closeWindow);


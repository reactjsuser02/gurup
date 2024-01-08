// redirect if authenticated
if(localStorage.getItem('login')) {
  window.location.href = "../index.html";
}

const list = document.querySelector("#list");
const btn = document.querySelector("button");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let login = e.target[0].value;
  let password = e.target[1].value;
  e.target[0].value = "";
  e.target[1].value = "";
  localStorage.setItem('login', login)
  localStorage.setItem('password', password)
  window.location.href = "index.html";
});





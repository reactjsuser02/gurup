// redirect if authenticated
if(localStorage.getItem('login')) {
  window.location.href = "../index.html";
}

const list = document.querySelector("#list");
const btn = document.querySelector("button");
const form = document.querySelector("form");

console.log('first')
console.log(localStorage.getItem('login'))
console.log(localStorage.getItem('password'))

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let login = e.target[0].value;
  let password = e.target[1].value;
  e.target[0].value = "";
  e.target[1].value = "";
  localStorage.setItem('login', login)
  localStorage.setItem('password', password)
  console.log('second')
  console.log(localStorage.getItem('login'))
  console.log(localStorage.getItem('password'))
  window.location.href = "index.html";
});

// localStorage.clear()





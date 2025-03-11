
/*
let username;
document.getElementById("mySubmit").onclick = function() {
username = document.getElementById("myText").value;
document.getElementById("myH1").textContent = `Welcome ${username} `
*/

/* 
let age = window.prompt("How old are you")
age = Number(age)
age = age + 1
console.log(age, typeof age) 
*/

/* type conversion
let x 
let y = "0"
let z = ""

x = Number(x)
y = String(y)
z = Boolean(z)

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)
*/

//const = a variable that cant be changed, once you assign a constant you cant change the value

const PI = 3.14159;
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value
    radius = Number(radius)
    circumference = 2* PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm"
}


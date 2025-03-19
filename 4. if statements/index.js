//IF Statements

/*
let isStudent = true;

if(isStudent){
    console.log("You are a student");
}
else{
    console.log("You are not a student")
}
    */

/*
let age = 25;
let hasLicense = true;

if(age>=16){
    console.log("You are old enough to drive")
   if(hasLicense){
    console.log("You have your license")
   }
   else{
    console.log("You do not have your license 'yet")
   }
}
else{
  console.log("you must be older than 16")
}
*/

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >=100){
        resultElement.textContent = `You are too OLD to enter this site`;
    }
    else if(age>=18){
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(age ==0){
        resultElement.textContent = `Enter correct age`;
    }
    else if(age<0){
        resultElement.textContent = `Your age cant be below 0`;
    }
    
    else{
        resultElement.textContent = `You are not old enough to enter this site`;
    }
}

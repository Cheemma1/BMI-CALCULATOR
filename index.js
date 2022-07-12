
function bmiCalculator() {
let name = document.getElementById("name").value;

let weight =document.getElementById("weight").value;

let height=document.getElementById("height").value;

let bmi = weight/ Math.pow(height, 2);

let finalResult = Math.round (bmi);

document.getElementById("score").innerHTML= name + " " + "your Bmi is"  +  " "  + finalResult ;
}





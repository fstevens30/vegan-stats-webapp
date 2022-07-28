//Declaring the savings per day
const grainPerDay = 18.1437;
const litrePerDay = 4163.953;
const forestPerDay = 2.78709;
const animalsPerDay = 1;

//Converting the inputs to numbers
function calculateDays() {
    document.getElementById("days").value = days;
    document.getElementById("months").value = months;
    document.getElementById("years").value = years;
}

//creating a string for the days


//Calculating the total days
const totalDays = Math.floor(days.value * 1 + months.value * 30.436875 + years.value * 365.2425);


//Savings variables
const grainSavings = (Math.floor(grainPerDay * totalDays));
const litreSavings = (Math.floor(litrePerDay * totalDays));
const forestSavings = (Math.floor(forestPerDay * totalDays));
const animalSavings = (Math.floor(animalsPerDay * totalDays));


//creating functions

function getTimeString() {
    var timeString = days.value + " days, " + months.value + " months, " + years.value + " years";
    document.getElementById("timeString").value = timeString;
}

console.log(timeString);

fuction

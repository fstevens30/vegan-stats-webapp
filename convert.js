//Declaring the savings per day
const grainPerDay = 18.1437;
const litrePerDay = 4163.953;
const forestPerDay = 2.78709;
const animalsPerDay = 1;

//declaring other variables from inputs
var days = document.getElementById("days");
var months = document.getElementById("months");
var years = document.getElementById("years");
var totalDays = calculateDays();

//Calculating the total days
function calculateDays() {
    var totalDays = days.value * 1 + months.value * 30.436875 + years.value * 365.2425;
    return totalDays;
}


//Calculating the savings per day
function calculateSavings() {
    var grainSavings = (Math.floor(grainPerDay * totalDays));
    document.getElementById("grainSavings").innerHTML = grainSavings;
    var litreSavings = (Math.floor(litrePerDay * totalDays));
    document.getElementById("litreSavings").innerHTML;
    var forestSavings = (Math.floor(forestPerDay * totalDays));
    document.getElementById("forestSavings").innerHTML;
    var animalSavings = (Math.floor(animalsPerDay * totalDays));
    document.getElementById("animalSavings").innerHTML;
    return grainSavings, litreSavings, forestSavings, animalSavings;
}

//Savings variables
const grainSavings = (Math.floor(grainPerDay * totalDays));
const litreSavings = (Math.floor(litrePerDay * totalDays));
const forestSavings = (Math.floor(forestPerDay * totalDays));
const animalSavings = (Math.floor(animalsPerDay * totalDays));




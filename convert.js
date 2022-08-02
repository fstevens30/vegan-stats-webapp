//Declaring the savings per day
const grainPerDay = 18.1437;
const litrePerDay = 4163.953;
const forestPerDay = 2.78709;
const animalsPerDay = 1;

//Converting the inputs to numbers
function getTotalDays() {
    const days = parseInt(document.getElementById("days").value);
    const months = parseInt(document.getElementById("months").value);
    const years = parseInt(document.getElementById("years").value);
    return days + months * 30 + years * 365;
}

//show savings

function showSavings() {
    const totalDays = getTotalDays();
    const grainSavings = grainPerDay * totalDays;
    const litreSavings = litrePerDay * totalDays;
    const forestSavings = forestPerDay * totalDays;
    const animalSavings = animalsPerDay * totalDays;
    document.getElementById("grain").innerHTML = grainSavings
    document.getElementById("litre").innerHTML = litreSavings
    document.getElementById("forest").innerHTML = forestSavings
    document.getElementById("animals").innerHTML = animalSavings
}
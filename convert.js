//Refernce the form
const myForm = document.getElementById('inputForm');

//Initialise FormData constructor with the form
const formData = new FormData(myForm);

//Using formData.entries and Object.fromEntries to convert the formData to an object
const formObject = Object.fromEntries(formData.entries());

//Testing
console.log(formObject);

//Init Days
const days = new FormData(myForm);

const userDays = Object.fromEntries(formData.entries(days));

console.log(userDays)

//getting days from the form
const inputDays = document.getElementById('days');
const daysVal = new Object(inputDays.value);

console.log(daysVal)

/* NOT SURE IF THIS WORKS
(() => {
//Declaring the savings per day
const grainPerDay = 18.1437;
const litrePerDay = 4163.953;
const forestPerDay = 2.78709;
const animalsPerDay = 1;
})();

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

*/
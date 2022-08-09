
//Declaring the savings per day
const grainPerDay = 18.1437;
const litrePerDay = 4163.953;
const forestPerDay = 2.78709;
const animalsPerDay = 1;
//Saving the days, months and years inputted by the user as variables
const userDays = document.getElementById("days").value;
const userMonths = document.getElementById("months").value;
const userYears = document.getElementById("years").value;

//Creating a totalDays variable to store the total number of days
const totalDays = math.Floor((userDays)+(userMonths*30.417)+(userYears*365.25));

//Creating a totalGrain variable to store the total amount of grain
const totalGrain = math.Floor(totalDays * grainPerDay);

//Creating a totalWater variable to store the total amount of water saved
const totalWater = math.Floor(totalDays * litrePerDay);

//Creating a totalForest variable to store the total amount of forest saved
const totalForest = math.Floor(totalDays * forestPerDay);

//Creating a totalAnimals variable to store the total amount of animals saved
const totalAnimals = math.Floor(totalDays * animalsPerDay);

//Creating a function to display the total savings in a string when calculate is clicked

function displayResults() {
    calculate.onclick = function() {
        document.getElementById("results").innerHTML = "You will save " + totalGrain + " kg of grain, " + totalWater + " litres of water, " + totalForest + "m2 of forest and " + totalAnimals + "animals.";
    }
};

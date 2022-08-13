//Setting const for the savings per day in each category
const grainPerDay = 18.1437;
const litrePerDay = 4163.953;
const forestPerDay = 2.78709;
const animalsPerDay = 1;


calculateSavings() {
    //Setting the variables to the number of days/months/years inputted by the user in the form
    let days = document.getElementById("days").value; //days
    let months = document.getElementById("months").value; //months
    let years = document.getElementById("years").value; //years

    //Combining the days, months and years into one variable
    let totalDays = ((days) + (months * 30.417) + (years * 365.25));

    //Calculating the total savings per day in each category
    let grain = grainPerDay * totalDays;
    let litre = litrePerDay * totalDays;
    let forest = forestPerDay * totalDays;
    let animals = animalsPerDay * totalDays;

};
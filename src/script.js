document.getElementById('submit').addEventListener('click', function() {
    //Showing the results in the #toshow div
    document.getElementById('results-container').style.visibility = 'visible';

    // Converting the input to a totalDays variable
    const days = document.getElementById('vegan-days').value; //convert days input to a number
    const months = document.getElementById('vegan-months').value; //convert months input to a number
    const years = document.getElementById('vegan-years').value; //convert years input to a number
    const totalDays = Math.floor(days) + Math.floor(months) * 30.412 + Math.floor(years) * 365.25; //convert days, months, and years to a number of days, round down for equations
    document.getElementById('vegan-total-days').innerHTML = Math.floor(totalDays).toLocaleString(); //display the total days in the #vegan-total-days id element. toLocaleString() is a method that converts the number to a string with commas for thousands

    // Declaring the savings per day
    const grainPerDay = 18.1437;
    const litrePerDay = 4163.953;
    const forestPerDay = 2.78709;
    const animalsPerDay = 1;

    //Declaring the user savings using the variables above
    const grain = Math.floor(grainPerDay * totalDays).toLocaleString(); //convert the grainPerDay variable to a number and multiply it by the totalDays variable

    const litre = Math.floor(litrePerDay * totalDays).toLocaleString(); //convert the litrePerDay variable to a number and multiply it by the totalDays variable

    const forest = Math.floor(forestPerDay * totalDays).toLocaleString(); //convert the forestPerDay variable to a number and multiply it by the totalDays variable

    const animals = Math.floor(animalsPerDay * totalDays).toLocaleString(); //convert the animalsPerDay variable to a number and multiply it by the totalDays variable

    // Displaying the user savings
    document.getElementById('grain').innerHTML = grain; //display the grain variable in the #grain id element
    document.getElementById('litre').innerHTML = litre; //display the litre variable in the #litre id element
    document.getElementById('forest').innerHTML = forest; //display the forest variable in the #forest id element
    document.getElementById('animals').innerHTML = animals; //display the animals variable in the #animals id element
});
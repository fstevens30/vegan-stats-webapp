document.getElementById('submit').addEventListener('click', function() {
    const days = document.getElementById('vegan-days').value;
    const months = document.getElementById('vegan-months').value;
    const years = document.getElementById('vegan-years').value;
    const totalDays = Math.floor(days) + Math.floor(months) * 30.412 + Math.floor(years) * 365.25;
    console.log(totalDays);

    const grainPerDay = 18.1437;
    const litrePerDay = 4163.953;
    const forestPerDay = 2.78709;
    const animalsPerDay = 1;

    const grain = Math.floor(grainPerDay * totalDays).toLocaleString();
    const litre = Math.floor(litrePerDay * totalDays).toLocaleString();
    const forest = Math.floor(forestPerDay * totalDays).toLocaleString();
    const animals = Math.floor(animalsPerDay * totalDays).toLocaleString();

    let message = `You have saved ${grain} kg of grain, ${litre} litres of water, ${forest} m2 of forest and the lives of ${animals} animals.`;
    document.getElementById('results').innerHTML = message;
});
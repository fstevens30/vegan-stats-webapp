document.getElementById('submit').addEventListener('click', function() {
    const days = document.getElementById('vegan-days').value;
    const months = document.getElementById('vegan-months').value;
    const years = document.getElementById('vegan-years').value;
    const totalDays = Math.floor((days) + (months * 30.42) + (years * 365.25));
    console.log(totalDays);

    const grainPerDay = 18.1437;
    const litrePerDay = 4163.953;
    const forestPerDay = 2.78709;
    const animalsPerDay = 1;

    const grain = Math.floor(grainPerDay * totalDays);
    const litre = Math.floor(litrePerDay * totalDays);
    const forest = Math.floor(forestPerDay * totalDays);
    const animals = Math.floor(animalsPerDay * totalDays);

    let message = `You have saved ${grain}kg of grain, ${litre}litre of water, ${forest}m2 of forest and the lives of${animals} animals.`;
    document.getElementById('result').innerHTML = message;
});
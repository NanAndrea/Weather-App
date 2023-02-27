
async function displayCurrentWeather(city){
    //afisam orasul
    const currentWeatherData = await getCurrentWeather(city);

    //data la care s-a facut cererea
    const {dt, main, weather, name, wind} = currentWeatherData;  // dt este in fomat utc

    const day = getDateOfTheWeek(dt);
    const hours = getHour(dt);

    //gradele in celsius
    const temperature = Math.round(main.temp);
    //feelsLike
    const realFeel = Math.round(main.feels_like);

    //descrierea vremii
    //Atentie! Weather este un array care are un singur element
    const description = weather[0].description;

    //iconita vremii
    const weatherIcon = getWeatherIcon(weather[0].icon);
    
    //descrierea vantului in km/h
    // ne da in m/secunde si le transformam in km/h
    const windSpeed =Math.round(windToKmPerHour( wind.speed));

    const currentWeatherElement = document.querySelector(".current-weather");
    currentWeatherElement.innerHTML = `
    <div class="px-3">
        <div class="fs-2 mb-2"><strong>${name}</strong></div>
        <div class="f2-3"><strong>${day}</strong>, ${hours}</div>
        <div class="d-flex align-items-center justify-content-center">
            <strong class="fs-1">${temperature}°C</strong>
                <img src="${weatherIcon}" />
            </div>
        </div>
    <div class="px-3">
        <p class="fs-5">Se simte ca <strong>${realFeel}°C</strong></p>
        <p class="fs-5">${description}</p>
        <p class="fs-5">Viteza vantului: <strong>${windSpeed} km/h</strong></p>
    </div>
    `

}
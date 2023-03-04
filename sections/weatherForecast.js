async function displayWeatherForecast (city){
    const data = await getForecast(city);

    const weatherForecastContainer = document.querySelector(".weather-forecast");
    weatherForecastContainer.innerHTML = '';
    
    const {list} = data;

    const forecastMap = {}

    list.forEach(element=>{
        const{dt} = element
        const day = getDateOfTheWeek(dt);
        
        

        if(forecastMap[day]){
            forecastMap[day].push(element);
        } else {
            forecastMap[day] = [element];
        }
    });
        

        for (const key in forecastMap){
            

            weatherForecastContainer.innerHTML += ` <h3 class="text-primary">${key}</h3>`

            const prognoze = forecastMap[key];
            
            prognoze.forEach(prognoza=>{
                const {dt, main, weather} = prognoza;

                const hour = getHour(dt);
                const temperature = Math.round(main.temp);
                const realFeel = Math.round(main.feels_like);
                const weatherIcon = getWeatherIcon(weather[0].icon);
                const weatherDescription = weather[0].description;

                
                weatherForecastContainer.innerHTML += `
                <div class="weather-forecast-box d-flex align-items-center border rounded p-3 mb-3 justify-content-between">
                    <p class="m-0 fs-4">${hour}</p>
                 <div>
                    <img src="${weatherIcon}"/>
                 </div>
                 <div><strong class="fs-3">${temperature}°C</strong></div>
                     <p class="m-0">${weatherDescription}</p>
                     <p class="m-0 fs-5 real-feel">Se simte ca <strong>${realFeel}°C</strong></p>
                 </div>
                
                `

            })


        }
    }
    




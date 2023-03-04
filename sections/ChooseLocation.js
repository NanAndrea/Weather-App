const timisoara = document.querySelector(".dropdown-item.timisoara");
const bucuresti = document.querySelector(".dropdown-item.bucuresti");
const cluj = document.querySelector(".dropdown-item.cluj-napoca");
const oradea = document.querySelector(".dropdown-item.oradea");
const sibiu = document.querySelector(".dropdown-item.sibiu");
const arad = document.querySelector(".dropdown-item.arad");
const brasov = document.querySelector(".dropdown-item.brasov");
const miercureaCiuc = document.querySelector(".dropdown-item.miercurea-ciuc");

function updateCurrentCity(city){
    //selectam elementul care contine orasul principal
   const currentCityElement = document.querySelector(".current-city");
    currentCityElement.innerHTML = city;
}


function updateWeather(city){

    localStorage.setItem("city", city);

    updateCurrentCity(city);
    displayCurrentWeather(city);
    displayCurrentWeather(city);
}

timisoara.addEventListener ("click", function(){
    updateWeather("Timisoara");
})

bucuresti.addEventListener ("click", function(){
    updateWeather("București");
})

cluj.addEventListener ("click", function(){
    updateWeather("Cluj-Napoca");
})

oradea.addEventListener ("click", function(){
    updateWeather("Oradea");
})

sibiu.addEventListener ("click", function(){
    updateWeather("Sibiu");
})

arad.addEventListener ("click", function(){
    updateWeather("Arad");
})

brasov.addEventListener ("click", function(){
    updateWeather("Brasov");
})

miercureaCiuc.addEventListener ("click", function(){
    updateWeather("Miercurea Ciuc");
})
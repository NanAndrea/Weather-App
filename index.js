const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


let currentCity = localStorage.getItem("city");

if(!currentCity){
    localStorage.setItem("city", "Cluj-Napoca");
    currentCity = "Cluj-Napoca";
}

updateCurrentCity(currentCity);
displayCurrentWeather(currentCity);









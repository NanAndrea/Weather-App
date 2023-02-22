const API_KEY = "005a88a1bad7511c8037a0a71dda939b";
const API_URL = "https://api.openweathermap.org/data/2.5";
const DEFAULT_QUERY_PARAMETERS = "lang=ro&units=metric";

function getCurrentWeather(city){
   return fetchAndParse (`${API_URL}/weather?q=Cluj-Napoca&&${DEFAULT_QUERY_PARAMETERS}&appid=${API_KEY}`);
    
}







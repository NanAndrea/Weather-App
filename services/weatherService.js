const API_KEY = "005a88a1bad7511c8037a0a71dda939b";

//URL de baza pt call-urile pe openweatherAPI
const API_URL = "https://api.openweathermap.org/data/2.5";

//query parameters care vor fi trimisi la fiecare request
//lang = ro=> rez vor veni in limba romana
//units=metric=>unitatea de masura sa fie in grade celsius
const DEFAULT_QUERY_PARAMETERS = `lang=ro&units=metric&appid=${API_KEY}`;

function getCurrentWeather(city){
   //construim linkul (endpoint) catre cererea de currentWeather folosind informatiile predefinite
   return fetchAndParse (`${API_URL}/weather?q=${city}&&${DEFAULT_QUERY_PARAMETERS}`);
    
}







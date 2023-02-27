function getDateOfTheWeek(utc){

    //pornind de la unix date, inmultim cu 1000 pt a crea formatul curent
    const date = new Date(utc * 1000);
   // console.log("Date is: ", date);
    date.getDay();
    const day = date.getDay();

    switch(day) {
        case 0: 
             return "Duminica";
        case 1:
            return "Luni";
        case 2:
            return "Marti";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sambata";
        
    }

}

function numberWithZero(nr){
    if (nr < 10){
        return `0${nr}`
    }
    return nr;
}

function getHour(utc){
  
// pornind de la unix date, inmultim cu 1000 pentru a crea data
const date = new Date(utc * 1000);
const hours = numberWithZero(date.getHours());
const minutes = numberWithZero(date.getMinutes());
return ` ${hours}:${minutes}`

}
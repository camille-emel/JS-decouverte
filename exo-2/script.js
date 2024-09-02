// you can write js here
let isTesting  = Boolean(false)

const myDate = new Date();
const jourSemaine = "Jour de semaine";
const jourWeekend = "Jour de Weekend";

let today = myDate;
let hour = today.getHours();


//Jour de la semaine 0-6 avec, 0 = dimanche
if (isTesting){
     let fakeDay = prompt("Quel jour ?").toLowerCase();
    switch (fakeDay) {
        case "sunday":
        case "dimanche":
            day = 0;
            break;
        case "monday":
        case "lundi":
            day = 1;
            break;
        case "tuesday":
        case "mardi":
            day = 2;
            break;
        case "wednesday":
        case "mercredi":
            day = 3;
            break;
        case "thursday":
        case "jeudi":
            day = 4;
            break;
        case "friday":
        case "vendredi":
            day = 5;
            break;
        case "saturday":
        case "samedi":
            day = 6;
            break;
    }
    let fakeHour = prompt("Quel heure ?");
    today = day;
    hour = fakeHour;
}
if (today === 0 || today === 6 || (today === 5 && hour > 17 ) || (today === 1 && hour < 9 )) {
    console.log(jourWeekend)
}
else {
    console.log(jourSemaine)
}

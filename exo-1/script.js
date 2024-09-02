// you can write js here
// let kelvins = 294
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
let celcius = kelvins - 273;
//Formule de calcule pour USA
let farhen = celcius * (9/5) +32;
//Transforme la variable farhen en Int
console.log("La température en fahrenheits est de : " + Math.floor(farhen));

// Cours 8 de Codecademy
console.log("exo-6");

// var joeInfo = {
//     name: "Joe's house",
//     rooms: 5,
//     garage: false,
//     bathrooms: 1 + 2,
//     cars: ['Clio', 'Van'],
// };
// // ! Ne faites pas de modification au dessus de cette ligne !
//
// // 1. Afficher le nombre de voitures de Joe
// console.log("joe a " + joeInfo.cars.length + " voiture");
// // 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
// joeInfo.bathrooms = 1;
// console.log(joeInfo.bathrooms);
// // 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
// joeInfo.garage = true;
// console.log(joeInfo);

let team = {
    players: [
        {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 64
        },
        {
            firstName: "Morty",
            lastName: "Smith",
            age: 14
        }
    ],
    games: [
        {
            opponent: "Zebulon-8",
            teamPoints: 42,
            opponentPoints: 27
        }
    ]
}

function addPlayer(firstName, lastName, age) {
     newPlayer = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    team["players"].push(newPlayer);
}

function addGame(opponent, teamPoints, opponentPoints) {
    newGame = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
    }
    team["games"].push(newGame);
}

addPlayer("Summer", "Smith", 17);
addPlayer("Beth", "Smith", 35);
addPlayer("Jerry", "Smith", 35);

addGame("Zorgbazorgzorg",56,18);
addGame("Froupiland",17,0);
addGame("Zebulon-9",11,18);

console.log(team);


function calculeScoreTeam() {
    let score = 0;
    for (let i = 0; i < team.games.length; i++) {
        score += team.games[i].teamPoints;
    }
    return score;
}
// function calculeScoreOpponent() {
//     let score = 0;
//     for (let i = 0; i < team.games.length; i++) {
//         score += team.games[i].opponentPoints;
//     }
//     return score;
// }

function calculeScoreOpponent() {
    return team.games.reduce((total, game) => total + game.opponentPoints, 0);
}


function oldestPlayer(){
    let oldestPlayer = team.players[0]
    for (let i = 0; i < team.players.length; i++) {
        if (team.players[i].age > oldestPlayer.age) {
            oldestPlayer = team.players[i];
        }
    }
    return oldestPlayer;
}

function sortPlayers() {
    let playersName = []
    for (let i = 0; i < team.players.length; i++) {
        playersName = playersName.concat(team.players[i].firstName+ " "+ team.players[i].lastName);
    }
    return playersName.sort().join(", ");
}


console.log("Notre equipe a marquer : ",calculeScoreTeam(), "points.");
console.log("Les autres equipes ont marquer : ",calculeScoreOpponent(), "points.");

console.log("Notre equipe a une moyenne de : ",calculeScoreTeam()/team.games.length);
console.log("Les autres equipes ont une moyenne de : ",calculeScoreOpponent()/team.games.length);

console.log("Le joueur le plus agé est : ", oldestPlayer().firstName,oldestPlayer().lastName,"a l'age de",oldestPlayer().age)

console.log("Joueur trier alphab : ",sortPlayers())

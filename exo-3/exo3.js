// you can write js here
function getPlayerChoice() {
    let playerInput = prompt("Pierre, Feuille, Ciseau ?").toLowerCase().trim();
    if (!(playerInput === ("pierre" || "feuille" || "ciseau"))){
        getPlayerChoice();
    }
    else if (playerInput === "pierre") {
        return 1;
    } else if (playerInput === "feuille") {
        return 2;
    } else if (playerInput === "ciseau") {
        return 3;
    }
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3) +1;
}

function findWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return console.log("Egalité");
    } else if (playerChoice < computerChoice) {
        return console.log("Player win");
    } else {
        return console.log("Computer win");
    }
}

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
findWinner(playerChoice, computerChoice);

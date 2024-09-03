console.log("exo-7");

function afficherObjet(list) {
    for (let i = 0; i < list.length; i++) {
        console.log("-----");
        console.log("Objet n°", i);
        console.log("name", list[i].name);
        console.log("type", list[i].type);
        console.log("type traduit", list[i].typeTraduit);
        console.log("description", list[i].description);
        console.log("price", list[i].price);
        console.log("quantity dispo", list[i].quantity);
    }
}

let translate = {
    "car": "voiture",
    "house": "maison",
    "game": "jeux",
    "show": "evenement",
    "videoGame": "jeux video",
};

function tradObjet() {
    for (let i = 0; i < jsonDatas.length; i++) {
        jsonDatas[i].typeTraduit = translate[jsonDatas[i].type];
    }
    afficherObjet(jsonDatas);
}

// tradObjet()







function affichage(trouve){
// Boucle à travers chaque objet dans jsonDatas
for (let i = 0; i < jsonDatas.length; i++) {
    const item = jsonDatas[i];

    // Créer une div pour la carte
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    // Boucle à travers chaque attribut de l'objet
    if (isset(trouve)) {

    }
    for (let key in item) {
        if (item.hasOwnProperty(key)) {
            // Créer un paragraphe pour chaque attribut
            let pElement;
            if (key === "name"){
                 pElement = document.createElement('h2');
            }else {
             pElement = document.createElement('p');}
            // Ajouter le texte sous la forme "attribut: valeur"
            pElement.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${item[key]}`;
            // Ajouter le paragraphe à la carte
            card.appendChild(pElement);
        }
    }
    // Ajouter la carte au corps du document
    document.body.appendChild(card);
}
}

affichage()

function onClic() {
    var x = document.getElementById("text").value;
    console.log(x);
    affichage(x)
    }
    // document.getElementById("demo").innerHTML = x;
// }
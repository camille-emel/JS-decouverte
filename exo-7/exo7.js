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

function affichage(results_list) {
    // Boucle à travers chaque objet dans results_list
    let resultsDOM = document.getElementById("results");
    for (let i = 0; i < results_list.length; i++) {
        let card = create_card(results_list[i]);
        resultsDOM.appendChild(card); // Ajouter la carte au corps du document
    }
}

function create_card(item_infos) {
    // Créer une div pour la carte
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    // Boucle à travers chaque attribut de l'objet
    console.log(item_infos);
    for (let key in item_infos) {
        console.log(item_infos[key]);
        if (item_infos.hasOwnProperty(key)) {
            // Créer un paragraphe pour chaque attribut
            let pElement;
            if (key === "Items") {
                pElement = document.createElement('h2');
            } else {
                pElement = document.createElement('p');
            }
            // Ajouter le texte sous la forme "attribut: valeur"
            pElement.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${item_infos[key]}`;
            // Ajouter le paragraphe à la carte
            card.appendChild(pElement);
        }
    }
    return card;
}

function find_items(recherche) {
    let find = [];
    switch (recherche) {
        //recherche vide
        case "":
            if (verifieStock()) {
                for (let j = 0; j < jsonDatas.length; j++) {
                    if (jsonDatas[j].quantity > 0)
                        find.push(jsonDatas[j]);
                }
            } else {
                find = jsonDatas;
            }
            break;

        default :
            for (let i = 0; i < jsonDatas.length; i++) {
                if (verifieStock()) {
                    if (jsonDatas[i].type.toLowerCase() === recherche && jsonDatas[i].quantity > 0) {
                        find.push(jsonDatas[i]);
                    }
                } else if (jsonDatas[i].type.toLowerCase() === recherche) {
                    find.push(jsonDatas[i]);
                }
            }
            break;
    }
    return find;
}

function sort(liste, sortOption) {
    switch (sortOption) {
        case "sortpriceASC":
            liste.sort((a, b) => a.price - b.price);
            break;
        case "sortpriceDESC":
            liste.sort((a, b) => b.price - a.price);
            break;
        case "sortASC":
            liste.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "sortDESC":
            liste.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
}

function sortButton() {
    let recherche = document.getElementById("text").value.trim().toLowerCase();
    document.getElementById("results").innerHTML = "";

    let liste = find_items(recherche);
    let sortOptionElement = document.querySelector('input[name="sortOption"]:checked');

    if (!sortOptionElement && !recherche) {
        liste = jsonDatas;
    } else if (sortOptionElement) {
        sort(liste, sortOptionElement.id);
    }
    affichage(liste);
}

function verifieStock() {
    if (document.getElementById("myCheck").checked) {
        return true;
    }
}
//made by gpt
function addItem() {
    const newItem = {
        name: document.getElementById('name').value,
        type: document.getElementById('type').value,
        description: document.getElementById('description').value,
        price: parseInt(document.getElementById('price').value),
        quantity: parseInt(document.getElementById('quantity').value)
    };
    jsonDatas.push(newItem);
    sortButton();
}






document.addEventListener("DOMContentLoaded", function (event) {
    tradObjet()
    affichage(jsonDatas);
});
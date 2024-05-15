// reset js 
'use strict'

// controllo collegamento

console.log('ciao mondo');

// creazione dell'array di oggetti con le informazioni fornite 

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-carrol-chief-editor.jpg"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
];

console.log(team);

// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

for(let i = 0; i < team.length; i++){
    const member = team[i];

    console.log(member["name"]);
    console.log(member["role"]);
    console.log(member["image"]);


}


// for( let element of team){
//     console.log(element);
// }


// Stampare le stesse informazioni su DOM sottoforma di stringhe

const teamList = document.getElementById("team-list");

const ul = document.createElement("ul");


for(let i = 0 ; i < team.length; i++){

    const member = team[i];

    const liElement = document.createElement("li");

    const nomePersona = document.createElement("h3");
    nomePersona.innerText = member.name;

    const ruoloPersona = document.createElement("h5");
    ruoloPersona.innerText = member.role;

    const fotoPersona = document.createElement("p");
    fotoPersona.innerText = member.image;

    // li.textContent = "Nome: " + member.name + " - Ruolo:  " + member.role + " - Foto:  " + member.image;

    liElement.append(nomePersona);
    liElement.append(ruoloPersona);
    liElement.append(fotoPersona);

    teamList.append(liElement);

    // ul.appendChild(li);


}

// teamList.appendChild(ul);


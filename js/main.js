/***************************
        JSnack 1
***************************/

// Creare un array di oggetti.
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


// Creazione array
const bici = [
    {
        nome: 'Felt',
        peso: 8,
    },
    {
        nome: 'Bolt',
        peso: 6,
    },
    {
        nome: 'Draw',
        peso: 7,
    },
];

console.log(bici);


// Ref
let biciLeggera = bici[0];

for (let i = 1; i < bici.length; i++) {
    if(bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

console.log(biciLeggera);



/***************************
        JSnack 2
***************************/
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// a
const teams = [
    {
        nome:'juve',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome:'inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome:'milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome:'parma',
        puntiFatti: 0,
        falliSubiti: 0,
    },
];

//b 
for(let i = 0; i < teams.length; i++) {
    let team = teams[i];

    team.puntiFatti = randomNumber(0,10);
    team.falliSubiti= randomNumber(0,10);
}

console.table(teams);

// c 
const newTeams = [];

for(let i = 0; i < teams.length; i++) {
    let team = teams[i];

    newTeams.push({
        nome: team.nome,
        falliSubiti: team.falliSubiti,
    });
}

console.table(newTeams);


// gen n random
function randomNumber(min,max) {
    return Math.floor(Math.random() * (max-min + 1)) + min;
}









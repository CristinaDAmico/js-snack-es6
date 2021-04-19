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



/***************************
        JSnack 3
***************************/
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter).

const myArray = [" Cristina", "Paolo", "Fabio", "Lorenzo", "Francesco", "Giulia"];

// Chiedo all'utente di inserire due numeri per pescare il nome nell'array
let min = parseInt( prompt('Inserisci un numero tra 0 e 5'));
let max = parseInt( prompt('Inserisci un numero tra '+min+' e 5'));

let newArray = [];

// Controllo numeri forniti dall'utente
while(isNaN(min) || min < 0 || min > myArray.lenght ){
    min = parseInt( prompt('Inserisci un numero tra 0 e 5'));
}

while(isNaN(max) || max < min ||  max > myArray.length ) {
    max = parseInt( prompt('Inserisci un numero tra '+min+' e 5'));
}


// ES5
// for
let newArray = [];

function filterArray(arr, min, max) {
    for(var i = 0; i < arr.length; i++) {
        const tmp = arr[i];
        if(min <= i && max >= i) {
            newArray.push(tmp);
        }
    }
}

filterArray(myArray, min, max);

console.log(newArray);

// EC6
// filter
const newFilterArray = myArray.filter((element, index) => {
    return min <= index && max >= index;
});

console.log(newFilterArray);

// for each 
function filterArray(min, max) {
    myArray.forEach((element, index) => {
        if(min <= index && max >= index)
        newArray.push(element);
    });
}

filterArray(min, max);
console.log(newArray);



/***************************
        JSnack 4
***************************/
// Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello, tipologia e colore - si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
// Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 (potete sfruttare il map per aggiungere la nuova proprietà):

const arrayObj = [
    {
        name: "Poppy",
        type: "tshirt",
        color: "red",
    },
    {
        name: "Jumping",
        type: "occhiali",
        color: "blue",
    },
    {
        name: "CrissCross",
        type: "scarpe",
        color: "black",
    },
    {
        name: "Jenny",
        type: "borsa",
        color: "pink",
    },
];


// A.  MAP (CREO NUOVO ARRAY E E AGGIUNGO PROPRIETà)
const newArrayObj = arrayObj.map((element) => {
    const newElement = {
        ...element, 
        position: randomNumber(0,5)
    }  

    return newElement;

});


/****************************
    function random number
****************************/

function randomNumber(min,max) {
    return Math.floor( Math.random() * (max - min + 1) + min );
}

console.log(newArrayObj);










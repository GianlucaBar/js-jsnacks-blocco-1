var zucchine = [
    {
    'varietà': 'zucchino romanesco',
    'peso': 1100,
    'lunghezza': 10
    },

    {
        'varietà':'Zucchino ortolano',
        'peso': 400,
        'lunghezza': 13
    },

    {
        'varietà': 'Zucchina bianca',
        'peso': 600,
        'lunghezza': 14
    },

    {
        'varietà': 'Zucchina trombetta',
        'peso': 1200,
        'lunghezza':  30
    },

    {
        'varietà': 'Zucchina trombetta',
        'peso': 1500,
        'lunghezza': 50
    },

    {
        'varietà': 'Zucchina trombetta',
        'peso': 1300,
        'lunghezza': 34
    },

    {
        'varietà': 'Zucchino giallo',
        'peso': 800,
        'lunghezza': 22
    },

    {
        'varietà': 'Zucchino giallo',
        'peso': 650,
        'lunghezza': 21
    },

    {
        'varietà': 'Zucchina Crookneck',
        'peso': 2000,
        'lunghezza': 34
    },

    {
        'varietà': 'Zucchina Crookneck',
        'peso': 1900,
        'lunghezza': 32
    },

];

// // parte uno 
// var pesoTotZucchine = 0;

// for ( var i = 0; i < zucchine.length; i++){
//     pesoTotZucchine = zucchine[i].peso + pesoTotZucchine;
// }

// console.log(pesoTotZucchine);

// // parte due 

// var zucchineXl = [];

// var zucchineSmall = [];

// var limite = 15;

// var pesoSmall = 0;

// var pesoXl = 0;

// for ( i = 0; i < zucchine.length; i++){
//     if (zucchine[i].lunghezza < limite){
//         zucchineSmall.push(zucchine[i]);
//         pesoSmall = pesoSmall + zucchine[i].peso;
        
//     } else {
//         zucchineXl.push(zucchine[i]);
//         pesoXl = pesoXl + zucchine[i].peso;
//     }
// }

// console.log(pesoSmall);

// console.log(pesoXl);






// ===================
// ALL TOGETHER NOW 
// ===================
var pesoTotZucchine = 0;

var zucchineXl = [];

var zucchineSmall = [];

var limite = 15;

var pesoSmall = 0;

var pesoXl = 0;


for ( var i = 0; i < zucchine.length; i++){
    pesoTotZucchine = zucchine[i].peso + pesoTotZucchine;

    if (zucchine[i].lunghezza < limite){
        zucchineSmall.push(zucchine[i]);
        pesoSmall = pesoSmall + zucchine[i].peso;
        
    } else {
        zucchineXl.push(zucchine[i]);
        pesoXl = pesoXl + zucchine[i].peso;
    }
    
}
console.log(pesoTotZucchine);

console.log(pesoSmall);

console.log(pesoXl);
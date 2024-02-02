// primo
// let parola1 = prompt("Inserisci prima parola");
// let parola2 = prompt("Inserisci seconda parola");

// if (parola1.length < parola2.length) {
//     console.log(parola1);
//     console.log(parola2);
// }
// else if (parola2.length < parola1.length) {
//     console.log(parola2);
//     console.log(parola1);
// }

//secondo
// let sum = 0;
// let a;
// for (let i = 0; i < 10; i++) {
//     a = Number(prompt("inserisci numero: "));
//     sum += a;
// }
// console.log(sum);


// terzo
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array

// const array = [];
// let a;

// for (let i = 0; i < 6; i++) {
//     a = Number(prompt("Inserisci numero"));
//     if (a % 2 != 0) {
//         array.push(a);
//     }
// }
// console.log(array);

// quarto SALTATO
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

// let a;
// a = prompt("inserisci numero")
// while (a.length != 4) {
//     a = prompt("inserisci numero");
// }

// let sum = 0; ;
// for (let i = 0; i < a.length; i++) {
//     sum += +a[i];
// }
// console.log(sum);


// BONUS

// quinto
// Stampa il cubo dei primi N numeri,
// (partendo da 1, il numero N indicato dall'utente è compreso)
// dove N è un numero indicato dall’utente.

// let a = 3;

// for (let i = 1; i <= a; i++) {
//     console.log(i * i * i);
// }

// sesto
// Calcola la somma e la media dei primi 10 numeri.

let sum = 0;
let i;
let media;


for (i = 1; i <= 10; i++) {
    console.log(i);
    sum += i;
}

console.log(sum);
media = sum / i;
const ahah = document.getElementById("snack6");
ahah.innerHTML = media;
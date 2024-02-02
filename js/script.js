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

const array = [];
let a;

for (let i = 0; i < 6; i++) {
    a = Number(prompt("Inserisci numero"));
    if (a % 2 != 0) {
        array.push(a);
    }
}
console.log(array);


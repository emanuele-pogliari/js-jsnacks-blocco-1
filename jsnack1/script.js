let parola1 = prompt("Inserisci prima parola");
let parola2 = prompt("Inserisci seconda parola");

if (parola1.length < parola2.length) {
    console.log(parola1);
    console.log(parola2);
}
else if (parola2.length < parola1.length) {
    console.log(parola2);
    console.log(parola1);
}
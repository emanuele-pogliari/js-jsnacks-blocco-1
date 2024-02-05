// let parola1 = prompt("Inserisci prima parola");
// let parola2 = prompt("Inserisci seconda parola");

let result = document.querySelector("#result");

while (!isNaN(parola1)) {
    let parola1 = prompt("Parola non valida. Riprova");
}
while (!isNaN(parola2)) {
    let parola2 = prompt("Parola non valida. Riprova");
}

if (parola1.length < parola2.length) {
    result.innerHTML = `La parola ${parola1} e' piu' corta della parola ${parola2}`;
}

else if (parola2.length < parola1.length) {
    result.innerHTML = `La parola ${parola2} e' piu' corta della parola ${parola1}`;

} else {
    result.innerHTML = `Le parole ${parola2} e ${parola1} hanno la stessa lunghezza`;
}
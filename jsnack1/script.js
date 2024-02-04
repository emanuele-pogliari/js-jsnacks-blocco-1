let parola1 = prompt("Inserisci prima parola");
let parola2 = prompt("Inserisci seconda parola");

let result = document.querySelector("#result");


if (parola1.length < parola2.length) {
    result.innerHTML = `${parola1} e' piu' corta di ${parola2}`;

}
else if (parola2.length < parola1.length) {
    result.innerHTML = `${parola2} e' piu' corta di ${parola1}`;

} else {
    result.innerHTML = `Le parole ${parola2} e ${parola1} hanno la stessa lunghezza`;
}
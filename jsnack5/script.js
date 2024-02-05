let a = prompt("Inserisci numero");

while (isNaN(a)) {
    a = Number(prompt("Hai inserito un numero non valido, riprova: "));
}

for (let i = 1; i <= a; i++) {
    document.querySelector("#result").innerHTML += `Il cubo di ${i} e' ${i * i * i} <br>`;
}
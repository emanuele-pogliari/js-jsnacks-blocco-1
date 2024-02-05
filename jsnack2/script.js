let sum = 0;
let a;

for (let i = 0; i < 10; i++) {
    a = Number(prompt("inserisci numero: "));
    while (isNaN(a)) {
        a = Number(prompt("Hai inserito un numero non valido, riprova: "));
    }
    sum += a;
}

document.querySelector("#result").innerHTML = `La somma dei numeri e' ${sum}`;
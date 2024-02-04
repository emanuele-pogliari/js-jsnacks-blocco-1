let sum = 0;
let a;

for (let i = 0; i < 10; i++) {
    a = Number(prompt("inserisci numero: "));
    sum += a;
}

document.querySelector("#result").innerHTML = `La somma dei numeri e' ${sum}`;
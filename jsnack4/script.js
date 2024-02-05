let a;
a = Number(prompt("inserisci numero"));

while (a.length != 4 || isNaN(a)) {
    a = prompt("Numero inserito non valido, riprova");
}

let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a % 10;
}

document.querySelector("#result").innerHTML = `La somma dei numeri del numero ${a} e' ${sum}`;
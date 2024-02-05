let num;
num = prompt("inserisci numero");
let savedNum = num;

while (num.length != 4 || isNaN(num)) {
    num = prompt("Numero inserito non valido, riprova");
}

let numLength = num.length;
num = Number(num);
let sum = 0;

for (let i = 0; i < numLength; i++) {

    sum += num % 10;
    num = Math.floor(num / 10);
}

document.querySelector("#result").innerHTML = `La somma dei numeri del numero ${savedNum} e' ${sum}`; 
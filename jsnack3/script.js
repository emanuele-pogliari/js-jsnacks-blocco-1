const array = [];
let a;

for (let i = 0; i < 6; i++) {
    a = Number(prompt("Inserisci numero"));
    if (a % 2) {
        array.push(a);
    }
}
document.querySelector("#result").innerHTML = `I numeri dispari sono ${array}`;
let a;
a = prompt("inserisci numero")
while (a.length != 4) {
    a = prompt("inserisci numero");
}

let sum = 0;;
for (let i = 0; i < a.length; i++) {
    sum += +a[i];
}
console.log(sum);
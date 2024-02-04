let sum = 0;
let i;
let media;


for (i = 1; i <= 10; i++) {
    sum += i;
}


media = sum / (i - 1);
document.querySelector("#result").innerHTML += `La somma dei numeri da 1 a 10 e' ${sum} <br>`;
document.querySelector("#result").innerHTML += `La somma dei numeri da 1 a 10 e' ${media}`;
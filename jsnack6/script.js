let sum = 0;
let i;
let media;


for (i = 1; i <= 10; i++) {
    sum += i;
}


media = sum / (i - 1);
console.log(sum);
console.log(i);
document.querySelector("#snack6").innerHTML = media;
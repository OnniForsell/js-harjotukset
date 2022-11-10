let kohde = document.querySelector('#message')
let primeNum = true;
const num = parseInt(prompt("Give number!!!"));

if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primeNum = false;
            break;
        }
    }

    if (primeNum) {
        kohde.innerHTML = num + " is a prime number";
    } else {
        kohde.innerHTML = num + " is not a prime number";
    }
}
else {
    kohde.innerHTML = num + " is not a prime number";
}
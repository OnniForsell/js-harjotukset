'use strict';

// Tehtävä 1
// let kohde = document.querySelector('#message')
console.log("I'm printing to console!")



// (Nämä oli kaikki alun perin samassa tiedostossa, en vain raaskinut poistaa niitä siltä varalta jos jotain meni pieleen)




// Tehtävä 2
/*
let visitor = prompt("Mikä on nimesi?")

document.querySelector('#message').innerHTML = "Päivää, " + visitor + "!";
*/

// Tehtävä 3

/*
let eka = parseInt(prompt("Anna eka"))
let toka = parseInt(prompt("Anna toka"))
let kolmas = parseInt(prompt("Anna kolmas"))

let summa = eka + toka + kolmas
let tulo = eka * toka * kolmas
let ka = summa / 3

kohde.innerHTML = 'summa = ' + summa +
    `, tulo = ` + tulo +
    ` keskiarvo = ` + ka;
*/

// Tehtävä 4

/*
let result = Math.floor(Math.random() * 4) + 1;
let house

if (result == 1){
    house = "Gryffindor"
}
else if (result == 2){
    house = "Ravenclaw"
}
else if (result == 3){
    house = "Hufflepuff"
}
else if (result == 4){
    house = "Slytherin"
}

kohde.innerHTML = 'Visitor, ' + 'You are ' + house;
*/

// Tehtävä 5

/* let v = parseInt(prompt("Anna Vuosiluku"))

if (v % 4 == 0 && v % 100 != 0 || (v % 400 == 0)){
    kohde.innerHTML = "Vuosi on karkausvuosi"
}
else{
    kohde.innerHTML = "Vuosi ei ole karkausvuosi"
}
*/

//Tehtävä 6

/*
const answer = confirm("Should I calculate square root?")

if (answer){
    let num = prompt("Okay what number?")
    if (num > -1){
        let sqrt = Math.sqrt(num)
        kohde.innerHTML = sqrt
    }
    else{
        kohde.innerHTML = "The square root of a negative number is not defined"
    }
}
*/

// Tehtävä 7

/*
let kohde = document.querySelector('#message')
let dice = parseInt(prompt("How many dice do you want to throw?"))
let sum = 0
for (let d = 0; d != dice; d++){
    let result = Math.floor(Math.random() * 6) + 1
    sum = sum + result
}
kohde.innerHTML = "The total sum of the dice is " + sum;
*/

// Tehtävä 8

/*
let kohde = document.querySelector('#message')
let alku = parseInt(prompt("Anna alkuvuosi"));
let loppu = parseInt(prompt("Anna loppuvuosi"));

let html = '<ul>'
for (let v = alku; v <= loppu; v++)
{
    if ((v % 4 == 0 && v % 100 != 0) || (v % 400 == 0))
    {
        html += '<li>';
        html += v;
        html += '</li>';
    }
}
html += '<ul>'

kohde.innerHTML = html
*/

// Tehtävä 9

/*
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
*/

//Tehtävä 10

/*
let kohde = document.querySelector('#message')
let dice = parseInt(prompt("How many dice do you want to throw?"))
let probability = parseInt(prompt("Which sum do you want the probability of?"))
let repetitions = 10000
let correct = 0

for (let r = 0; r != repetitions; r++) {
    let sum = 0
    for (let d = 0; d != dice; d++) {
        let result = Math.floor(Math.random() * 6) + 1
        sum = sum + result
        if (sum == probability) {
            correct++
        }
    }
}

kohde.innerHTML = "The probability to get " + probability + " with " + dice +" dice is " + (correct / 100).toFixed(2) + "%"; */
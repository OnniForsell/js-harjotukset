// Tehtävä 3

let kohde = document.querySelector('#message')

let eka = parseInt(prompt("Anna eka"))
let toka = parseInt(prompt("Anna toka"))
let kolmas = parseInt(prompt("Anna kolmas"))

let summa = eka + toka + kolmas
let tulo = eka * toka * kolmas
let ka = summa / 3

kohde.innerHTML = 'summa = ' + summa +
    `, tulo = ` + tulo +
    ` keskiarvo = ` + ka;
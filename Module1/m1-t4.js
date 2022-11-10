let kohde = document.querySelector('#message')

let visitor = prompt("Mikä on nimesi?")

document.querySelector('#message').innerHTML = "Päivää, " + visitor + "!";

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

kohde.innerHTML = visitor + ', you are ' + house;
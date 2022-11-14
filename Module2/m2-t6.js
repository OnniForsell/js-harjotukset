/* Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters.
Write a main program that rolls the dice until the result is 6.
The main program should print out the result of each roll in an unordered list (<ul>) */
'use strict';

let kohde = document.querySelector('#message')

let diceRolls = []

// Rolls a six sided die whenever it's called, it will then put the result into the diceRolls list
function DiceRoller(){
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    diceRolls.push(diceRoll)
}

for (let i = 0; i <= 6; i++){
    DiceRoller()
}

let html = '<ul>'

for (let i = 1; i < diceRolls.length; i++){
    html += '<li>'
    html += diceRolls[i]
    html += '</li>'
}
html += '</ul>'

console.log(html)
kohde.innerHTML = html
/* Modify the function above so that it gets the number of sides on the dice as a parameter.
With the modified function you can for example roll a 21-sided role-playing dice.
The difference to the last exercise is that the dice rolling in the main program continues
until the program gets the maximum number on the dice, which is asked from the user at the beginning. */
'use strict';

let kohde = document.querySelector('#message')

let diceSides = parseInt(prompt("How many sides does the dice you want to throw have?"))
let rolling = true

let diceRolls = []

function DiceRoller(sides){
    let diceRoll = Math.floor(Math.random() * sides) + 1;
    diceRolls.push(diceRoll)
    if (diceRoll == sides){
        rolling = false
    }
}

// While the rolling bool is true the diceRoller function will be called and will receive
// the diceSides variable declared at the start as a parameter
while (rolling){
    DiceRoller(diceSides)
}

let html = '<ul>'

for (let i = 1; i < diceRolls.length; i++){
    html += '<li>'
    html += diceRolls[i]
    html += '</li>'
}

html += '</ul>'

kohde.innerHTML = html
/* Write a function called concat(), which receives an array of strings as a parameter.
The function returns a string formed by concatenating the elements of the array.
Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky.
The function returns the string JohnnyDeeDeeJoeyMarky.
Do not use array.join() function
You can hardcode the array, no need for prompt().
Print the result to HTML document. */
'use strict';

let kohde = document.querySelector('#message')

let nameList = ['Johnny', 'DeeDee', 'Joey', 'Marky']
let combination = ''

// Since the assignment doesn't allow the use of the array.join() function, i wrote this function
// which just takes every name in the list of names then
// attaches them one by one into a new string
function concat(names){
    for (let i = 0; i < names.length; i++){
        console.log(names[i])
        combination += names[i]
    }
}

concat(nameList)
console.log(combination)


kohde.innerHTML = combination

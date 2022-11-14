/* Write a program that prompts the user for numbers. When the user enters
one of the numbers he previously entered, the program will announce
that the number has already been given and stops its operation
and then prints all the given numbers to the console in ascending order. */
'use strict';

let kohde = document.querySelector('#message')

// Check if the loop on line 12 can still run
let askingForNum = true
let numberList = []

// While true, will ask for number
while (askingForNum){
    let number = parseInt(prompt("Give a number"))
    // If true, will stop the loop, otherwise it'll add it to the list
    if (numberList.includes(number)){
        alert("That's a duplicate of a previous number")
        askingForNum = false
    }
    else{
        numberList.push(number)
    }
}

numberList.sort()
console.log(numberList)
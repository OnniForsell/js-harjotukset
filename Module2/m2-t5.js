/* Write a program that prompts the user for numbers. When the user enters
one of the numbers he previously entered, the program will announce
that the number has already been given and stops its operation
and then prints all the given numbers to the console in ascending order. */
'use strict';

let kohde = document.querySelector('#message')

let numberList = []

// While true, will ask for number
while (true){
    let number = parseInt(prompt("Give a number"))
    // If the given number is already in the numberList array, the loop will stop
    if (numberList.includes(number)){
        alert("That's a duplicate of a previous number")
        break
    }
    // Otherwise it's added to the array
    else{
        numberList.push(number)
    }
}

numberList.sort((a,b) => a-b)
console.log(numberList)
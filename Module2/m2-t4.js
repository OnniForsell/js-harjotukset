/* Write a program that asks the user for numbers until he gives zero.
The given numbers are printed in the console from the largest to the smallest. */

let kohde = document.querySelector('#message')

let numberList = []
let number = parseInt(prompt("Give a number or type 0 to stop"))

// While the given number is not 0 the program will ask for a new number
while (number != 0){
    numberList.push(number);
    number = parseInt(prompt("Give a number or type 0 to stop"))
}


numberList.sort()
numberList.reverse()
console.log(numberList)
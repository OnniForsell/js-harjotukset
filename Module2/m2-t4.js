/* Write a program that asks the user for numbers until he gives zero.
The given numbers are printed in the console from the largest to the smallest. */

let kohde = document.querySelector('#message')

let numberList = []

// While the given number is not 0 the program will ask for a new number
while (true){
    let number = parseInt(prompt("Give a number or type 0 to stop"))

    if (number !== 0){
        numberList.push(number);
    }
    else{
        break
    }
}


numberList.sort()
numberList.reverse()
console.log(numberList)
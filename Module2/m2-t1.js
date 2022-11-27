/* Write a program that prompts the user for five numbers and prints them in the
reverse order they were entered. Print the result to the console.(2p)
- Save the numbers to an array, then use for-loop to iterate in reverse order.
- Do not use array.reverse() function. */
'use strict';

// Numbers to store
const numbers = [];

// Ask the user for 5 numbers then put them in the "numbers" list
for (let i = 0; i < 5; i++){
    let num = parseInt(prompt("Anna numero " + (i + 1)));
    numbers.push(num);
}

// Prints every number in the numbers list, but goes through it backwards
// This way the program conforms to the "do not use array.reverse()" condition of the assignment
for (let i = 4; i >= 0; i--) {
    console.log(numbers[i]);
}


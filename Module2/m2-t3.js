/* Write a program that asks for the names of six dogs.
The program prints dog names to unordered list <ul>
in reverse alphabetical order. */
'use strict';

let kohde = document.querySelector('#message');


// Ask for the names of six dogs then store them in a list
let dogNames = []
for (let i = 0; i < 6; i++){
    let dog = prompt("Name of dog " + (i + 1))
    dogNames.push(dog)
}

// Sort the list of dog names alphabetically then reverse the list
dogNames.sort()
dogNames.reverse()

// Make an open ordered list tag with the following line
let html = '<ul>'

//Add an ordered list item for each dog
for (let i = 0; i <= dogNames.length - 1; i++)
{
    html += '<li>';
    html += dogNames[i];
    html += '</li>';
}
// Close the ordered list tag
html += '<ul>'

// Print the full element that was generated into the page
kohde.innerHTML = html
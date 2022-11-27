/* Write a program that asks the user for the number of participants.
After this, the program asks for the names of all participants.
Finally, the program prints the names of the participants on the web page
in an ordered list (<ol>) in the same order as they were entered. */
'use strict';

let kohde = document.querySelector('#message');

// Ask for the number of participants
let numOfParticipants = parseInt(prompt("Give the number of participants: "));

// Ask for the name of each participant then store them in the list below
let participants = []
for (let i = 0; i < numOfParticipants; i++){
    let participant = prompt("Name of participant " + (i + 1) + ": ");
    participants.push(participant);
}

// Make an open ordered list tag with the following line
let html = '<ol>'

//Add an ordered list item for each participant
for (let i = 0; i <= participants.length - 1; i++)
{
    html += '<li>';
    html += participants[i];
    html += '</li>';
}
// Close the ordered list tag
html += '<ol>'

// Print the full element that was generated into the page
kohde.innerHTML = html
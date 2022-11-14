/* Write a voting program for small-scale meeting use */
'use strict';

let numOfCandidates = parseInt(prompt("How many candidates are there?"))
let candidates = []

for (let i = 0; i < numOfCandidates; i++){
    let candidateName = prompt("Give the name of candidate " + (i + 1))

    let candidate = {
        name: candidateName,
        votes: 0
    }
    candidates.push(candidate)
}
console.log(candidates)

let numOfVoters = parseInt(prompt("How many voters are there?"))
let voterNum = 1

for (let i = 0; i < numOfVoters; i++){
    let vote = prompt('Who will voter ' + voterNum + ' vote for?');

    for (let i of candidates) {
        if (i.name === vote) {
            i.votes = i.votes + 1;
            voterNum++
        }
    }
}

candidates.sort(({votes: a}, {votes: b}) => b - a);

let most_votes = Math.max(...candidates.map(i => i.votes));
let winner = candidates.find((p) => p.votes === most_votes);

console.log(winner.name + ' wins with ' + most_votes + ' votes');

console.log('Results:');
for (let i = 0; i < candidates.length; i++) {
  console.log(candidates[i].name + ': ' + candidates[i].votes + ' votes');
}
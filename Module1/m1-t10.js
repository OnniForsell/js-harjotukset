let kohde = document.querySelector('#message')

let dice = parseInt(prompt("How many dice do you want to throw?"))
let probability = parseInt(prompt("Which sum do you want the probability of?"))
let repetitions = 10000
let correct = 0

for (let r = 0; r != repetitions; r++) {
    let sum = 0
    for (let d = 0; d != dice; d++) {
        let result = Math.floor(Math.random() * 6) + 1
        sum = sum + result
        if (sum == probability) {
            correct++
        }
    }
}

kohde.innerHTML = "The probability to get " + probability + " with " + dice +" dice is " + (correct / 100).toFixed(2) + "%";
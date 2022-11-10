let kohde = document.querySelector('#message')
let dice = parseInt(prompt("How many dice do you want to throw?"))
let sum = 0
for (let d = 0; d != dice; d++){
    let result = Math.floor(Math.random() * 6) + 1
    sum = sum + result
}
kohde.innerHTML = "The total sum of the dice is " + sum;
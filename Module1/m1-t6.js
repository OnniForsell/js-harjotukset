let kohde = document.querySelector('#message')

const answer = confirm("Should I calculate square root?")

if (answer){
    let num = prompt("Okay what number?")
    if (num > -1){
        let sqrt = Math.sqrt(num)
        kohde.innerHTML = "The square root of " + num + " is " + sqrt
    }
    else{
        kohde.innerHTML = "The square root of a negative number is not defined"
    }
}
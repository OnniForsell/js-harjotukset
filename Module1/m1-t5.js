let kohde = document.querySelector('#message')

let v = parseInt(prompt("Anna Vuosiluku"))

if (v % 4 == 0 && v % 100 != 0 || (v % 400 == 0)){
    kohde.innerHTML = "Vuosi on karkausvuosi"
}
else{
    kohde.innerHTML = "Vuosi ei ole karkausvuosi"
}
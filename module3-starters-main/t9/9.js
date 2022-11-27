function calculate(){
    let x = document.getElementById("calculation").value;
    let num_array = x.split("")
    let calculation = ''

num_array.forEach((i) => calculation += i);
let result = Function('return ' + calculation)();
document.getElementById("result").innerHTML = result;
}


const button = document.querySelector('button');
button.onclick = calculate;
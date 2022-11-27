function calculate(){
    let calculation = document.getElementById("calculation").value;
    let result = Function('return ' + calculation)();
    document.getElementById("result").innerHTML = result;
}

const button = document.querySelector('button');
button.onclick = calculate;
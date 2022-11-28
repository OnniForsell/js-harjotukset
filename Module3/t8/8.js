const button = document.querySelector('button');
button.onclick = calculate;

function calculate(){
    let x = document.getElementById("operation").value;
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;

if (x === 'add') {
    document.getElementById("result").innerHTML = parseInt(number1) + parseInt(number2);
}

else if (x === 'sub') {
    document.getElementById("result").innerHTML = parseInt(number1) - parseInt(number2);
}

else if (x === 'multi') {
    document.getElementById("result").innerHTML = parseInt(number1) * parseInt(number2);
}

else if (x === 'div') {
    document.getElementById("result").innerHTML = parseInt(number1) / parseInt(number2);
}

}


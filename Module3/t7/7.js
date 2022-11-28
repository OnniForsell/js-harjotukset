const hover = document.querySelector('p');
let img = document.getElementById('target')

hover.onmouseenter = hoverAlert
hover.onmouseleave = noHover

function hoverAlert(){
    img.src = 'img/picB.jpg'
}

function noHover(){
    img.src = 'img/picA.jpg'
}
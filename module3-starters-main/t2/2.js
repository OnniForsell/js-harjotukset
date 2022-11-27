const d = document.getElementById('divider');
const p = document.createElement('ul');
p.id = 'target'

d.appendChild(p);

document.getElementById('target').innerHTML = '<li>First item</li>\n' +
    '<li id="second">Second item</li>\n' +
    '<li>Third item</li>'

element = document.getElementById('second');
element.classList.add('my-item');
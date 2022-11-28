'use strict';
let list = document.getElementById('target');
let items = ['First item', 'Second item', 'Third item']

for (let i = 0; i !== items.length; i++){
    let list_item = document.createElement('li');
    list_item.innerText = items[i];
    list.appendChild(list_item);

    if (i === 1){
        list_item.classList.add('my-item');
    }
}

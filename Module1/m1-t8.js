let kohde = document.querySelector('#message');

let alku = parseInt(prompt("Anna alkuvuosi!"));
let loppu = parseInt(prompt("Anna loppuvuosi!"));

let html = '<ul>';
for (let v = alku; v <= loppu; v++)
{
    if ((v % 4 == 0 && v % 100 != 0) || (v % 400 == 0))
    {
        html += '<li>';
        html += v;
        html += '</li>';
    }
}
html += '</ul>';

kohde.innerHTML = html;
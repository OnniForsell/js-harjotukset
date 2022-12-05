// Moderni tapa: Async-await ja virheenkäsittely try-catchilla

async function getShow(name){
    try{
        const response = await fetch('https://api.tvmaze.com/search/shows?q=' + name);
        console.log('Response: ', response);
        if (response.ok){
            infoArea.innerHTML = ''
            const data = await response.json();

            /* console.log('Data', data);
            console.log('Show: ', data[0].show.name);
            console.log('Details: ', data[0].show.url);
            console.log('Image: ', data[0].show.image.medium);
            console.log('Summary: ', data[0].show.summary);
            infoArea.innerHTML += data[0].show.name;
            infoArea.innerHTML += data[0].show.url;
            infoArea.innerHTML += '<img src=' + data[0].show.image.medium + '>';
            infoArea.innerHTML += data[0].show.summary; */

            /* for (let i = 0; i !== data.length; i++){
                infoArea.innerHTML += data[i].show.name;
                infoArea.innerHTML += data[i].show.url;
                infoArea.innerHTML += data[i].show.summary;
                //infoImg.innerHTML += '<img src=' + data[i].show.image.medium + '>';

                let genreList = ""
                for (let g = 0; g !== data[i].show.genres.length; g++){
                    console.log(data[i].show.genres[0])
                    genreList += ' | ' + data[i].show.genres[g]
                }
                infoArea.innerHTML += genreList
            } */

            for (let i = 0; i !== data.length; i++){

            let item = document.createElement('div');
            item.id = "result"

            let item2 = document.createElement('div')

            let itemH = document.createElement('h2');
            itemH.innerHTML = data[i].show.name;

            let itemImg = document.createElement('img');
                let source = data[i].show.image?.medium;

                if (source){
                    itemImg.src = source
                    itemImg.alt = 'alt'
                }
                else{
                    itemImg.src = 'https://via.placeholder.com/100x200?text=text+here'
                    itemImg.alt = 'alt'
                }

            let itemLink = document.createElement('a');
            itemLink.innerText = 'Link to details'
            itemLink.href = data[i].show.url;
            itemLink.className = 'myBtn';

            itemLink.addEventListener('click', function (){
                event.preventDefault()
                iframe.src = data[i].show.url;
                modal.style.display = "block";
})

            let itemCaption = document.createElement('p');
            itemCaption.innerHTML = data[i].show.summary;

            let itemGenres = document.createElement('p');
            let genreList = "| ";

            if (data[i].show.genres.length > 0) {
                for (let g = 0; g !== data[i].show.genres.length; g++) {
                    genreList += data[i].show.genres[g] + ' | '
                }
            } else{
                genreList = '| No Genre |'
            }
            itemGenres.innerHTML = genreList;

            item2.appendChild(itemH);
            item.appendChild(item2);
            item.appendChild(itemImg);
            item.appendChild(itemCaption);
            item.appendChild(itemGenres);
            item.appendChild(itemLink);
            infoArea.appendChild(item);

            }
        }
        else{
            // Fetch ok mutta palautti HTTP virhekoodin, esim. 404 Not Found
            console.log('Error: ', response.status);
            infoArea.innerHTML = ('Error: ' + response.status);
        }
    } catch (error){
        infoArea.innerHTML = 'No internet connection'
    }
}

infoArea = document.getElementById('show-info')
//getShow('eric andre');

const button = document.querySelector('button');
button.addEventListener('click', async function(event){

    event.preventDefault()
    const inputField = document.querySelector('input')
    const userInput = inputField.value;
    console.log(userInput)

    if (userInput.length > 0){
        getShow(userInput);
    }
    else{
        infoArea.innerHTML = ''
    }
});

// Get the modal
const modal = document.getElementById("myModal");
const iframe = document.getElementById("my-frame");

// Get the button that opens the modal

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
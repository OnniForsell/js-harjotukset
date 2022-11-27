let helloCounter = 0;

function sayHello(name){
    console.log('Moro ', name, '!');
    helloCounter++;
    if (helloCounter >= 3){
        clearInterval(timer);
    }
}

setTimeout(sayHello, 3000, 'Jere');
sayHello('Matti');

const timer = setInterval(sayHello, 3000, 'Roope');

//clearInterval(timer);

<!-- retrieving the user's location information and displaying it using OpenStreetMap and Leaflet.js -->
// Options for retrieving location information (optional)
    const options = {
      enableHighAccuracy: true,
      timeout: 9000,
      maximumAge: 0,
    };

    // A function that is called when location information is retrieved
    function success(pos) {
      const crd = pos.coords;

      // Printing location information to the console
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      // Use the leaflet.js library to show the location on the map (https://leafletjs.com/)
      const map = L.map('map').setView([crd.latitude, crd.longitude], 16);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([crd.latitude, crd.longitude]).addTo(map)
      .bindPopup('I am here.')
      .openPopup();
    }

    // Function to be called if an error occurs while retrieving location information
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    // Starts the location search
    navigator.geolocation.getCurrentPosition(success, error, options);

    const body = document.querySelector('body');
const paragraphs = document.querySelector('p')
console.log(paragraphs);
paragraphs.innerText = "Uusi teksti";
const newP = document.createElement('p')
body.appendChild(newP)

const bullets = document.querySelectorAll('li');
for (const bullet of bullets) {
    bullet.innerHTML = `--<b>${bullet.innerHTML}</b>--`;
}
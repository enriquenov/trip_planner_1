const mapboxgl = require("mapbox-gl");
const createMarker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibmVpbHNjaGV1ZXJtYW5uIiwiYSI6ImNqb2c4bm9zNDBjbmczcWp0YzZ6ajM5cXQifQ.DYKi3OjESw9ntZSGTBwVvA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

createMarker("http://i.imgur.com/WbMOfMl.png", [-74.009, 40.705]).addTo(map);
createMarker("http://i.imgur.com/D9574Cu.png", [-74.015, 40.725]).addTo(map);
createMarker("http://i.imgur.com/cqR6pUI.png", [-74.008, 40.685]).addTo(map);

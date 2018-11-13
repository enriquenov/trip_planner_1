const mapboxgl = require("mapbox-gl");

function createMarker(imgUrl, arrCoord) {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = `url(${imgUrl})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(arrCoord);
}

module.exports = createMarker;

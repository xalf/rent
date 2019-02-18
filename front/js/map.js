import axios from 'axios';

const mapElem = document.getElementById('map');
if (mapElem) {
  axios.get('/api/pointers')
    .then(response => {
      const pointers = response.data;
      initMap(pointers);
    });

  function initMap(pointers) {
    ymaps.ready(() => {
      const myMap = new ymaps.Map("map", {
        center: [55.01083071, 82.93797303],
        zoom: 11
      });

      const geoObjectData = pointers.forEach(pointer => {
        const myGeoObject = new ymaps.GeoObject({
          geometry: {
            type: "Point",
            coordinates: pointer.coordinates
          },
          properties: {
            balloonContent: getBaloonContent(pointer),
            hintContent: pointer.address
          }
        });
        myMap.geoObjects.add(myGeoObject);
      });
    });
  }

  function getBaloonContent(pointer) {
    return `<div class="map-point">
      <p class="">Пункт по адресу ${pointer.address}</p>
      <a class="" href="/catalog/${pointer._id}">Выбрать велосипед</a>
    </div>`;
  }

}

import axios from 'axios';

const showMoreElem = document.querySelector('.js-more-bikes');

if (showMoreElem) {
  let page = 1;
  let pointId = getPointByURL();

  showMoreElem.addEventListener('click', (e) => {
    page++;
    axios.get(`/api/catalog/${pointId}`, { params: { page } })
      .then((response) => {
        const bikesList = response.data;

        if (bikesList.length) {
          showList(bikesList);
        }
        if (bikesList.length < 6) {
          hideBtn();
        }
      });
  });
}

function getPointByURL() {
    const URLString = document.URL;

    const URLNodes = URLString.split('/');
    return URLNodes[4] || '';
}

function showList(bikesList) {
  const containerElem = document.querySelector('.bikelist');

  bikesList.forEach(bike => {
    var elem = document.createElement('div');
    elem.className = "bikelist__item";
    elem.innerHTML = `
      <img src="/images/${bike.img}" class="responsive-img">
      <p>${bike.name}</p>
      <a href="/order/${bike._id}" class="btn">Арендовать</a>
    `;
    containerElem.appendChild(elem);
  });

}

function hideBtn() {
  showMoreElem.classList.add('hide');
}

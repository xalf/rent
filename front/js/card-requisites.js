import axios from 'axios';
import { getQueryParams } from './api-utils';

const form = document.querySelector('.js-card-requisites');

if (form) {
  const cardNumberElem = document.getElementById('card-number');
  const cardDateElem = document.getElementById('card-date');
  const cardCVVElem = document.getElementById('card-cvv');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const number = cardNumberElem.value;
    const date = cardDateElem.value;
    const cvv = cardCVVElem.value;

    if (validateForm({ number, date, cvv })) {
      axios.put('/api/card-requisites', { number, date, cvv })
        .then(response => {
          const params = getQueryParams();
          let backUrl = params.back_url || '/';
          backUrl = decodeURIComponent(backUrl);
          window.location.assign(backUrl);
        })
        .catch((e) => {console.log(e)});
    }
  });

  function validateForm({ number, date, cvv }) {
    const isError = false;

    return !isError;
  }
}

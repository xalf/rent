import axios from 'axios';

const deleteOrderBtn = document.querySelectorAll('.js-delete-order');

if (deleteOrderBtn && deleteOrderBtn.length) {
  for (let i in deleteOrderBtn) {
    deleteOrderBtn[i].addEventListener('click', (e) => {
      const orderId = e.target.dataset.orderId;
      axios.delete(`/api/order/${orderId}`)
        .then((response) => {
          deleteOrder(e.target);
        });
    });
  }
}

function deleteOrder(elem) {
  const orderListWrapper = document.querySelector('.js-order-list');
  const ordersList = document.querySelectorAll('.js-order');

  for (let i in ordersList) {
    if (ordersList[i].contains(elem)) {
      orderListWrapper.removeChild(ordersList[i]);
    }
  }
}

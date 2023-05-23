let basket = JSON.parse(localStorage.getItem("data")) || [];
const navQuantity = document.getElementById("nav-quantity-product");
let numberQuantity = function () {
    navQuantity.innerHTML = basket
        .map(function (item) {
            return item.item;
        })
        .reduce(function (total, quantity) {
            return total + quantity;
        }, 0);
};
numberQuantity();

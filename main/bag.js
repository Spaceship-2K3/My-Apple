// ! get ingredient
let bagContainer = document.querySelector("#bagContainer");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let container = JSON.parse(localStorage.getItem("container")) || [];
const subTotal = document.querySelector("#subtotal");
const totalPrice = document.querySelector("#total span");
const bagTotal = document.querySelector(".bag-total");
const bagEmpty = document.querySelector("#bag-empty");
const bagNavList = document.querySelector("#bag-nav-list");

// ! getContainer
let getContainer = function () {
    if (basket.length !== 0) {
        for (let i = 0; i < basket.length; i++) {
            for (let j = 0; j < dataProduct.length; j++) {
                if (basket[i].id === dataProduct[j].id) {
                    if (!container.some((e) => e.id === dataProduct[j].id)) {
                        container.push(dataProduct[j]);
                    }
                    break;
                }
            }
        }
    }
};

getContainer();

// ! numberQuantity
const navQuantity = document.getElementById("nav-quantity-product");
let numberQuantity = function () {
    basket = JSON.parse(localStorage.getItem("data")) || [];
    navQuantity.innerHTML = basket
        .map(function (item) {
            return item.item;
        })
        .reduce(function (total, quantity) {
            return total + quantity;
        }, 0);
};

// ! generateProduct
let generateProduct = function () {
    if (container.length !== 0) {
        bagTotal.style.display = "block";
        bagEmpty.style.display = "none";
        bagContainer.innerHTML = container
            .map(function (item) {
                let { id, name, color, img, price, link, learnMore } = item;
                let quantity = JSON.parse(localStorage.getItem("data"));
                quantity = quantity.find(function (x) {
                    return x.id === item.id;
                });
                return `<div class="item-bag" id='${id}'>
        <div class="row">
            <div class="col l-4">
                <img
                    src="${img}"
                    alt=""
                    class="item-bag-img img-block-center"
                />
            </div>
            <div class="col l-8">
                <!-- todo : item-bag-info -->
                <div class="item-bag-info">
                    <h3 class="item-bag-info-name">
                        <a
                            href="${link}"
                            class="item-bag-info-link"
                            >${name} - ${color}
                        </a>
                    </h3>
                    <div class="quantity">
                        <h3 class="quantity-number">${quantity.item}</h3>
                        <div class="quantity-up-and-down">
                            <i class="fa-solid fa-angle-up" 
                            onclick=" increment(${id})"
                            ></i>

                            <i
                                class="fa-solid fa-angle-down" 
                                onclick="decrement(${id})"
                            ></i>
                        </div>
                    </div>

                    <div class="item-bag-price">
                        <h3>$ ${quantity.item * price}</h3>
                    </div>
                </div>
                <!-- todo : item-bag-detail -->
                <div class="item-bag-detail">
                    <div class="item-bag-detail-price">
                        <p>Pay 0% APR for 6 months:</p>
                        <p>$${((quantity.item * price) / 6).toFixed(2)}/mo.</p>
                    </div>

                    <div class="item-bag-detail-summary">
                        <p>
                            <a
                                href="${learnMore}"
                                >Learn More
                            </a>
                        </p>

                        <p><a href="#!" onclick='remove(${id})'>Remove</a></p>
                    </div>
                </div>

                <!-- todo : item-bag-pickupTruck -->
                <div class="item-bag-pickupTruck">
                    <h4>
                        Find out how soon you can get this item.
                        <a href="#!"
                            >Enter zip code
                            <i
                                class="fa-solid fa-angle-down"
                            ></i>
                        </a>
                    </h4>
                    <ul class="item-bag-pickupTruck-list">
                        <li
                            class="item-bag-pickupTruck-item f-center"
                        >
                            <svg
                                viewBox="0 0 25 25"
                                class="as-svgicon as-svgicon-shipping as-svgicon-reduced as-svgicon-shippingreduced"
                                role="img"
                                aria-hidden="true"
                                width="25px"
                                height="25px"
                            >
                                <path
                                    fill="none"
                                    d="M0 0h25v25H0z"
                                ></path>
                                <path
                                    d="M19.69 7.154l-6-3.245a2.5 2.5 0 00-2.38 0l-6 3.245A2.5 2.5 0 004 9.354v6.269a2.5 2.5 0 001.311 2.2l6 3.245a2.5 2.5 0 002.379 0l6-3.245a2.5 2.5 0 001.31-2.2V9.354a2.5 2.5 0 00-1.31-2.2zm-7.9-2.365a1.492 1.492 0 011.427 0l6 3.244a1.454 1.454 0 01.151.11l-2.931 1.665-6.743-3.886zM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 01.151-.11zM5.787 16.941A1.5 1.5 0 015 15.622V9.354a1.5 1.5 0 01.053-.39L12 12.912v7.358a1.463 1.463 0 01-.213-.083zM20 15.622a1.5 1.5 0 01-.786 1.319l-6 3.245a1.5 1.5 0 01-.214.084v-7.358l6.947-3.949a1.508 1.508 0 01.053.391z"
                                ></path>
                            </svg>
                            In stock and ready to ship.
                        </li>
                        <li
                            class="item-bag-pickupTruck-item f-center"
                        >
                            <svg
                                viewBox="0 0 25 25"
                                class="as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced"
                                role="img"
                                aria-hidden="true"
                                width="25px"
                                height="25px"
                            >
                                <path
                                    fill="none"
                                    d="M0 0h25v25H0z"
                                ></path>
                                <path
                                    d="M18.5 5h-1.775a4.231 4.231 0 00-8.45 0H6.5A2.5 2.5 0 004 7.5v11A2.5 2.5 0 006.5 21h12a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 5zm-6-3a3.245 3.245 0 013.225 3h-6.45A3.245 3.245 0 0112.5 2zM20 18.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6h12A1.5 1.5 0 0120 7.5z"
                                ></path>
                                <path
                                    d="M14.4 12.448a1.592 1.592 0 01.738-1.328 1.607 1.607 0 00-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 00-1.739 2.068 4.32 4.32 0 00.723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 00.474-.989 1.516 1.516 0 01-.926-1.403zM12.583 10.357a1.346 1.346 0 00.941-.5 1.594 1.594 0 00.361-.974.731.731 0 00-.008-.136 1.5 1.5 0 00-1.016.528 1.547 1.547 0 00-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011z"
                                ></path>
                            </svg>
                            Pick up at an Apple Store near you.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
`;
            })
            .join("");
        localStorage.setItem("container", JSON.stringify(container));
        numberQuantity();
    } else {
        bagTotal.style.display = "none";
        bagEmpty.style.display = "block";
    }
};
generateProduct();

// ! generateNavBag
let generateNavBag = function () {
    basket = JSON.parse(localStorage.getItem("data")) || [];
    container = JSON.parse(localStorage.getItem("container")) || [];
    if (container.length !== 0) {
        bagNavList.innerHTML = container
            .map(function (item) {
                let { id, name, color, img, price, link, learnMore } = item;
                let quantity = JSON.parse(localStorage.getItem("data"));
                quantity = quantity.find(function (x) {
                    return x.id === item.id;
                });
                return ` <div class="bag-nav-item">
                <img
                    src="${img}"
                    alt=""
                    class="bag-nav-item-img"
                />
                
                    <p class="bag-nav-title">
                    <span
                        class="bag-nav-product-name"
                        >${name}</span
                    >
                    -
                    <span
                        class="bag-nav-product-color"
                        >${color}</span
                    >
                    - X${quantity.item}
                    </p>
                   
            </div>
            
            `;
            })
            .join("");
        localStorage.setItem("container", JSON.stringify(container));
        numberQuantity();
    } else {
        return;
    }
};
generateNavBag();
// ! increment
let increment = function (id) {
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    let selectorItem = id;
    let search = basket.find(function (item) {
        return item.id === selectorItem.id;
    });
    search.item += 1;
    localStorage.setItem("data", JSON.stringify(basket));
    generateProduct();
    numberQuantity();
    generateNavBag();
    total();
};

//  ! decrement
let decrement = function (id) {
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    let selectorItem = id;
    let search = basket.find(function (item) {
        return item.id === selectorItem.id;
    });

    if (search.item < 2) {
        search.item = 1;
    } else {
        search.item -= 1;
    }

    localStorage.setItem("data", JSON.stringify(basket));
    generateNavBag();
    generateProduct();
    numberQuantity();
    total();
};

//  ! remove
let remove = function (id) {
    let searchItem = id;
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    let container = JSON.parse(localStorage.getItem("container")) || [];
    basket = basket.filter(function (x) {
        return x.id !== searchItem.id;
    });
    container = container.filter(function (x) {
        return x.id !== searchItem.id;
    });
    // localStorage.setItem("data", JSON.stringify(basket));
    // localStorage.setItem("container", JSON.stringify(container));

    // generateProduct();
    // total();
};

// ! total
let total = function () {
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    if (basket.length !== 0) {
        basket = basket
            .map(function (x) {
                let search = dataProduct.find(function (y) {
                    return y.id == x.id;
                });
                return x.item * search.price;
            })
            .reduce(function (total, x) {
                return total + x;
            }, 0);
        totalPrice.innerHTML = basket;
        subTotal.innerHTML = basket;
    } else {
        return;
    }
};
total();
numberQuantity();

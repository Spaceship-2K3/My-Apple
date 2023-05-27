const bagNavList = document.querySelector("#bag-nav-list");

// ! getContainer
let getContainer = function () {
    basket = JSON.parse(localStorage.getItem("data")) || [];
    container = JSON.parse(localStorage.getItem("container")) || [];
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

function removeFirstDot(string) {
    return string.replace(/^\./, "");
}

// ! generateNavBag
let generateNavBag = function () {
    basket = JSON.parse(localStorage.getItem("data")) || [];
    container = JSON.parse(localStorage.getItem("container")) || [];
    getContainer();
    if (container.length !== 0) {
        bagNavList.innerHTML = container
            .map(function (item) {
                let { id, name, color, img, price, link, learnMore } = item;
                img = removeFirstDot(img);
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
        bagNavList.innerHTML = "";
    }
};

numberQuantity();
generateNavBag();

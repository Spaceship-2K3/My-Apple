// Char
var data = {
    labels: ["Mon", "Tue", "Wed", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "User visited",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 60, 70, 77, 83, 80],
        },
    ],
};

var options = {
    maintainAspectRatio: false,
    scales: {
        y: {
            stacked: true,
            grid: {
                display: true,
                color: "rgba(255,99,132,0.2)",
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
};

new Chart("chart", {
    type: "bar",
    options: options,
    data: data,
});

// update
const updateLists = document.getElementById("update-list");
updateLists.innerHTML = dataNewsUpdate
    .map(function (item) {
        return `<li class="update-item">
        <img
            src="${item.img}"
            alt="img"
            class="update-img"
        />
        <div class="update-info">
            <h3><a href="#!">${item.title}</a></h3>
            <p>${item.desc}</p>
        </div>
        
        <p class="timeAgo">${item.timeAgo}</p>
        </li>`;
    })
    .join("");

// Dev

const btnControl = document.querySelector(".btn-control-js");
const controlDevList = document.querySelector(".control-dev-list");
const controlDevItem = document.querySelectorAll(".control-dev-item");
const tableList = document.querySelector("#user-list-js");
const addUser = document.querySelector(".control-dev-add");

btnControl.addEventListener("click", function (event) {
    event.target.classList.toggle("active");
    [...controlDevItem].forEach(function (item) {
        item.addEventListener("click", function (e) {
            event.target.classList.remove("active");
            controlDevList.classList.remove("active");
        });
    });
    if (event.target.classList.contains("active")) {
        controlDevList.classList.add("active");
    } else {
        controlDevList.classList.remove("active");
    }
});

let createElement = function () {
    tableList.innerHTML = listDev
        .map(function (item) {
            let { id, name, img, company, role, verified, status } = item;
            return `<div id="${id}" class="tableGrid user-table">
    <h5>
        <img
            src="${img}"
            alt=""
        />
        ${name}
    </h5>
    <p>${company}</p>
    <p>${role}</p>
    <p class="Verified">${verified}</p>
    <p class="Status">${status}</p>
    <p class="Delete">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="MuiBox-root css-1rbh86l iconify iconify--eva"
            width="2.4rem"
            height="2.4rem"
            viewBox="0 0 24 24"
            onclick="remove(${id})"
        >
            <g id="iconifyReact525">
                <g id="iconifyReact526">
                    <g
                        id="iconifyReact527"
                        fill="rgb(255, 77, 71)"
                    >
                        <path
                            d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12Z"
                        ></path>
                        <path
                            d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm6 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Z"
                        ></path>
                    </g>
                </g>
            </g>
        </svg>
    </p>
</div>`;
        })
        .join("");
};
createElement();
let createStatus = function () {
    const statusBar = document.querySelectorAll(".user-table .Status");
    [...statusBar].forEach(function (item) {
        if (item.innerText === "Banned") {
            item.classList.add("disable");
        } else {
            return;
        }
    });
};

createStatus();

let remove = function (id) {
    let searchItem = id;
    listDev = listDev.filter(function (item) {
        return item.id !== searchItem.id;
    });
    createElement();
    createStatus();
};

let removeAll = function () {
    listDev = [];
    createElement();
};

// Product

const controlSort = document.querySelector(".control-short-js");
const sortList = document.querySelector(".sort-list");
const sortItemsText = document.querySelectorAll(".sort-item p");
const textSort = document.querySelector("#sort-choose-js");
const iconSort = document.querySelector("#sort-icon");
const totalProducts = document.getElementById("total-product-js");

// *todo : show list when clicking,handler icon when clicking
controlSort.addEventListener("click", function (event) {
    sortList.classList.toggle("active");
    if (sortList.classList.contains("active")) {
        iconSort.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
    } else {
        iconSort.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
    }
});
// *todo : innerText when clicking item
sortItemsText.forEach(function (item) {
    item.addEventListener("click", function (event) {
        sortItemsText.forEach(function (item) {
            item.parentElement.classList.remove("active");
        });
        textSort.innerText = "";
        event.target.parentElement.classList.add("active");
        textSort.innerText = event.target.innerText;
        sortList.classList.remove("active");
        iconSort.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
    });
});

totalProducts.innerText = dataProductAdmin.length;

// *todo : create item Product
const listProduct = document.getElementById("list-products");

listProduct.innerHTML = dataProductAdmin
    .map(function (item) {
        let { id, name, img, price, color } = item;
        return `<li id= "item-product-${id}" class="item-product">
    <img
        src="${img}"
        alt=""
        class="item-product-img"
    />
    <div class="item-product-info">
        <h4>${name}</h4>
        <img
            src="${color}"
            alt=""
            class="item-product-color"
        />
        <p>
            Form : $
            <span class="item-product-price"
                >${price}</span
            >
        </p>
    </div>
    </li>`;
    })
    .join("");

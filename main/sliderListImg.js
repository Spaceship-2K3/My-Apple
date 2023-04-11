const imgMain = document.querySelector(".slider-img-Main-js");
const sliderItem = document.querySelectorAll(".slider-List-item-js");
const sliderItemImg = document.querySelectorAll(".slider-List-item-js img");
sliderItemImg.forEach(function (item) {
    item.addEventListener("click", function (event) {
        sliderItem.forEach(function (item) {
            item.classList.remove("active");
        });
        let srcCurrent = event.target.src;
        imgMain.src = srcCurrent;
        event.target.parentElement.classList.add("active");
    });
});

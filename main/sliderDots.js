const btnPrev = document.querySelector(".btn-prev-js");
const btnNext = document.querySelector(".btn-next-js");
const dots = document.querySelectorAll(".dot");
const sliderMain = document.querySelector(".slider-main-js");
const sliderItems = document.querySelectorAll(".slider-item-js");
const sliderItemWidth = sliderItems[0].offsetWidth;
const sliderLength = sliderItems.length;

let index = 0;
let positionX = 0;
dots.forEach(function (dot) {
    dot.addEventListener("click", function (event) {
        dots.forEach(function (item) {
            item.classList.remove("active");
        });
        dotIndex = parseInt(event.target.dataset.index);
        index = dotIndex;
        positionX = -1 * index * sliderItemWidth;
        sliderMain.style = `transform: translateX(${positionX}px);`;
        event.target.classList.add("active");
    });
});

btnPrev.addEventListener("click", function (event) {
    handleChangSlider(-1);
});
btnNext.addEventListener("click", function (event) {
    handleChangSlider(1);
});

function handleChangSlider(direction) {
    if (direction === 1) {
        index++;
        positionX = positionX - sliderItemWidth;
        if (index > sliderLength - 1) {
            index = 0;
            positionX = 0;
        }

        sliderMain.style = `transform: translateX(${positionX}px);`;
    } else if (direction === -1) {
        index--;
        positionX = positionX + sliderItemWidth;
        if (index < 0) {
            index = sliderLength - 1;
            positionX = -1 * (sliderLength - 1) * sliderItemWidth;
        }

        sliderMain.style = `transform: translateX(${positionX}px);`;
    }

    dots.forEach(function (item) {
        item.classList.remove("active");
    });
    dots[index].classList.add("active");
}

const imgsLightbox = document.querySelectorAll(".lightbox img");
const imgsLength = imgsLightbox.length;

imgsLightbox.forEach(function (img) {
    img.addEventListener("click", function (event) {
        const currentSrc = event.target.getAttribute("src");
        let temple = `
        <div class="lightBox-show-js f-center">
            <div class="lightBox-content-js">
                <button class="btn-close-js">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="pagination lightBox-pagination-js">
                    <button
                        class="pagination-left btn-pagination f-center btn-prev-js"
                    >
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button
                        class="pagination-right btn-pagination f-center btn-next-js"
                    >
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
                <img
                    src="${currentSrc}"
                    alt=""
                    class="lightBox-img-js"
                />
            </div>
        </div> 
        `;

        document.body.insertAdjacentHTML("beforeend", temple);
    });
});

// handler btn
var index = 0;

document.body.addEventListener("click", function (event) {
    var lightBoxMainImg = document.querySelector(".lightBox-img-js");
    var lightBoxSrc = "";
    // when checking to lightbox hidden
    if (event.target.matches(".lightBox-show-js")) {
        event.target.parentNode.removeChild(event.target);
    } else if (event.target.matches(".btn-prev-js")) {
        lightBoxSrc = lightBoxMainImg.getAttribute("src");
        index = [...imgsLightbox].findIndex(function (item) {
            return item.getAttribute("src") === lightBoxSrc;
        });
        if (index < 0) {
            return;
        }
        index--;
        const newSrc = [...imgsLightbox][index].getAttribute("src");
        lightBoxMainImg.setAttribute("src", newSrc);
    } else if (event.target.matches(".btn-next-js")) {
        lightBoxSrc = lightBoxMainImg.getAttribute("src");
        index = [...imgsLightbox].findIndex(function (item) {
            return item.getAttribute("src") === lightBoxSrc;
        });

        if (index > imgsLength - 1) {
            return;
        }
        index++;
        const newSrc = [...imgsLightbox][index].getAttribute("src");
        lightBoxMainImg.setAttribute("src", newSrc);
    }
});

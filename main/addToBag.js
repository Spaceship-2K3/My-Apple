let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateItem = function (id) {
    let selectorItem = id;

    let search = basket.find(function (item) {
        return item.id === selectorItem.id;
    });
    if (search === undefined) {
        basket.push({
            id: selectorItem.id,
            item: 1,
        });
    } else {
        return;
    }
    localStorage.setItem("data", JSON.stringify(basket));
};

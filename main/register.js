let form = document.querySelector("form");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cfPassword = document.querySelector("#cf-password");
let inputElements = document.querySelectorAll("form input");
function showError(input, message) {
    let parentInput = input.parentElement;
    let errorText = parentInput.querySelector(".form-error-js");
    parentInput.classList.add("error-js");
    errorText.innerText = message;
}
function showSuccess(input) {
    let parentInput = input.parentElement;
    let errorText = parentInput.querySelector(".form-error-js");
    parentInput.classList.remove("error-js");
    errorText.innerText = "";
}

inputElements.forEach(function (item) {
    item.addEventListener("input", function (event) {
        let parentInput = event.target.parentElement;
        parentInput.classList.remove("error-js");
        let errorText = parentInput.querySelector(".form-error-js");
        errorText.innerText = "";
    });
});

function checkEmpty(listInput) {
    let isEmptyError = false;
    listInput.forEach((input) => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true;
            showError(input, "Khong duoc de trong");
        } else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}
function checkLength(input, min) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Phai co it nhat ${min} ky tu`);
        return true;
    }
    showSuccess(input);
    return false;
}
function checkEmail(input) {
    input.value = input.value.trim();
    const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isEmail = !regexEmail.test(input.value);
    if (regexEmail.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, "Email Invalid");
    }
    return isEmail;
}

function checkCFPassword(password, cfPassword) {
    if (password.value !== cfPassword.value) {
        showError(cfPassword, "MK khong truong khop ");
        return true;
    }
    return false;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isEmptyError = checkEmpty([username, email, password, cfPassword]);
    let isEmailError = checkEmail(email);
    let isUsernameLengthError = checkLength(username, 3);
    let isPasswordLengthError = checkLength(password, 5);
    let isMatchPassword = checkCFPassword(password, cfPassword);
});

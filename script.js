
const messageError = (msg) => {
    const errorElement = document.getElementById("error-pwd");
    if (msg === ""){
        errorElement.innerHTML = "";
    }
    else {
        errorElement.innerHTML += `${msg}<br />`;
        errorElement.style.color = "red"
    }
}

function CheckPasswords() {
    const password_confirm = document.getElementById("password-conf");
    const password = document.getElementById("password");

    const comp_pass = password.value == password_confirm.value;

    if (!(comp_pass)){
        password_confirm.valid = false;
        messageError("&#9888 Password doesn't match");
    }

    return comp_pass
}

function ShowPassword(id) {
    const password = document.getElementById(id);
    if (password.type === "password") {
        password.type = "text";
      } 
    else {
        password.type = "password";
      }
}

const buttonShowingPassword = () => {
    const password = document.getElementById("show-pass");
    const password_confirm = document.getElementById("show-pass-conf");

    password.addEventListener("click", () => {
        ShowPassword("password");
        if (password.textContent == "Show") {
            password.textContent = "Hide"
        }
        else {
            password.textContent = "Show"
        }
    })
    password_confirm.addEventListener("click", () => { 
        ShowPassword("password-conf");
        if (password_confirm.textContent == "Show") {
            password_confirm.textContent = "Hide"
        }
        else {
            password_confirm.textContent = "Show"
        }
        
    })
}

const checkInputs = () => {
    const countryValid = document.getElementById("country").checkValidity();
    const zipCodeValid = document.getElementById("zip-code").checkValidity();
    const emailValid = document.getElementById("email").checkValidity();
    const passwordValid = document.getElementById("password").checkValidity();
    if (!countryValid) {
        messageError("&#9888 Country is required and need text");
    }
    if (!zipCodeValid) {
        messageError("&#9888 Zipcode is required and need numbers");
    }
    if (!emailValid) {
        messageError("&#9888 Email is required and need to contain @ and . elements");
    }
    if (!passwordValid) {
        messageError("&#9888 Password is required and need at least 8 characters with one number");
    }
    return (CheckPasswords() && countryValid && zipCodeValid && emailValid && passwordValid);
}

const submitForm = () => {
    const form = document.getElementById("form-validation");

    form.addEventListener("submit", function(event) {
        const inputs = document.getElementsByTagName("input");
        event.preventDefault();
        messageError("");

        for (const input of inputs) {
            input.classList.add("inputed");
        }
        if (checkInputs()) {
            console.log("INPUT GOOD")
            form.submit();
        }
    })
}

const checkInput = () => {
    const inputs = document.getElementsByTagName("input");
    for (const input of inputs) {
        input.addEventListener("focus", (event) => {
            input.classList.add("inputed");
        })
    }
}

function InitJS() {
    buttonShowingPassword();
    checkInput();
    submitForm();
}


InitJS();
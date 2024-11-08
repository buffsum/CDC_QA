// alert("coucou");
// Implémenter le js de ma page

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

//keyup = activé quand on relache après avoir appuyé sur une touche
inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

function validateForm() {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOK = validateEmail(inputMail);

    if (nomOk && prenomOk && mailOK) {
        btnValidation.disabled = false;
    }
    else {
        btnValidation.disabled = true;
    }
}

function validateRequired(input) {
    if (input.value != '') {
        //c'est ok
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else {
        //c'est pas ok
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }
}

function validateEmail(input) {
    //définir mon regex (expression régulière)
    // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = inputMail.value;

    if (mailUser.match(emailRegex)) {
        //c'est ok
        inputMail.classList.add("is-valid");
        inputMail.classList.remove("is-invalid");
        return true;
    }
    else {
        //c'est pas ok
        inputMail.classList.add("is-invalid");
        inputMail.classList.remove("is-valid");
        return false;
    }
}
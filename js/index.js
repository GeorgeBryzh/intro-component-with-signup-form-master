const form = document.querySelector('.signup__form');
console.log('uo');

const firstName = document.getElementById('fname').value;
const lastName = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

function renderError(element) {
    console.log(element.classList)
    element.nextElementSibling.firstElementChild.classList.remove('hide');
    element.classList.add('error-borders');
}

function removeError(element) {
    console.log(element.classList);
    element.nextElementSibling.firstElementChild.classList.add('hide');
    element.classList.remove('error-borders');
}

function renderValidationResult(inp, regex) {
    console.log(inp.value)

    if (inp.value.match(regex)) {
        removeError(inp)
        return true
    }

    renderError(inp)
    return false

}

function validateForm(event) {

    event.preventDefault();
    const firstNameInp = document.getElementById('fname')
    const lastNameInp = document.getElementById('lname')
    const emailInp = document.getElementById('email')
    const passwordInp = document.getElementById('password')

    const regexForFirstName = /^\D+\D/g;
    const regexForLastName = /^\D+\D/g;
    const regexForEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexForPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    // const regexForLastName = 
    // const regexForEmail = 
    // const regexForPassword = 

    if (renderValidationResult(firstNameInp, regexForFirstName) & renderValidationResult(lastNameInp, regexForLastName) & renderValidationResult(emailInp, regexForEmail) & renderValidationResult(passwordInp, regexForPassword)) {
        alert('correct');
    }



}


form.addEventListener('submit', validateForm);
const form = document.querySelector('.signup__form');
console.log('uo');

const firstName = document.getElementById('fname').value;
const lastName = document.getElementById('lname').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

function validate() {
    function renderError(element) {
        console.log('erraar')
        element.nextElementSibling.firstElementChild.classList.remove('hide');
    }

    function removeError(element) {
        console.log('removeErraar');
        element.nextElementSibling.firstElementChild.classList.add('hide');
    }

    function renderFirstNameValidationResult() {
        console.log(firstNameInp.value)

        if (firstNameInp.value.match(regexForFirstName)) {
            removeError(firstNameInp)
            return true
        }

        renderError(firstNameInp)
        return false

    }
    function renderLastNameValidationResult() {
        if (lastNameInp.value.match(regexForLastName)) {
            removeError(lastNameInp);
            return true
        }
        else {
            renderError(lastNameInp);
            return false

        }
    }

    function renderEmailValidationResult() {
        if (emailInp.value.match(regexForEmail)) {
            removeError(emailInp);
            return true
        }
        else {
            renderError(emailInp);
            return false

        }
    }
    function renderPasswordValidationResult() {
        if (passwordInp.value.match(regexForPassword)) {
            removeError(passwordInp);
            return true
        }
        else {
            renderError(passwordInp);
            return false

        }
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

        if (renderFirstNameValidationResult() & renderLastNameValidationResult() & renderEmailValidationResult() & renderPasswordValidationResult()) {
            alert('correct');
        }
        else {
            alert('incorrect');
        }


    }
}

function validate()
form.addEventListener('submit', validateForm);
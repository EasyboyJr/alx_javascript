// save references of DOM in variables
const form = document.getElementById('emailForm');
const para = document.getElementById('error');
const button = document.querySelector('button');

// define the expression
const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// validate function
function validateEmail(email) {
    if (regexp.test(email)) {
        para.textContent = '';
        form.submit();
    } else {
        para.textContent = 'Please enter a valid email address.';
    };
}

// add event listener to button
button.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    validateEmail(email);
});
// Save references to the DOM elements in variables
const passwordInput = document.getElementById('password');
const form = document.getElementById('passwordForm');
const para = document.getElementById('error');
const button = document.querySelector('button');

// Define the regular expressions for criteria
const lengthRegexp = /.{8,}/;
const uppercaseRegexp = /[A-Z]/;
const lowercaseRegexp = /[a-z]/;
const digitRegexp = /\d/;
const specialCharRegexp = /[!@#$%^&*]/;

// Function to validate the password
function validatePassword(password) {
    if (
        lengthRegexp.test(password) &&
        uppercaseRegexp.test(password) &&
        lowercaseRegexp.test(password) &&
        digitRegexp.test(password) &&
        specialCharRegexp.test(password)
    ) {
        para.textContent = ''; // Clear any previous error message
        form.submit(); // Allow form submission
    } else {
        para.textContent = 'Password must meet all criteria: at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.';
    }
}

// Add a click event listener to the button
button.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default button click behavior
    const password = passwordInput.value; // Get the entered password
    validatePassword(password); // Call the validation function
});
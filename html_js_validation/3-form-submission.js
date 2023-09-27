// Save references of the DOM elements
const form = document.getElementById('submitForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// Add event listener on the form element
form.addEventListener('submit', handleFormSubmit);

// Define the handleFormSubmit function
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Retrieve value entered in form fields
    const name = nameInput.value;
    const email = emailInput.value;

    // Check if name or email fields are empty
    if (!name || !email) {
        alert('Please fill in all required fields');
    } else {
        // Perform any additional validation here if needed

        // If all validations pass, submit the form
        form.submit();
        alert('Form submitted successfully!');
    }
}

// save references if the DOM in containers
const form = document.getElementById('dynamicForm');
const container = document.getElementById('inputContainer');


// Add an event listener for form submission
form.addEventListener('submit', (event) => {
    if (!validateForm()) {
        event.preventDefault();
    }
});


function generateInputFields(value) {
    container.innerHTML = '';
    // loop to create input fields
    for (let i = 1; i <= value; i++ ) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `field${i}`;
        container.appendChild(input);
    }
}

// event listener for changes in dropdown
const dropdown = document.getElementById('numFields');
dropdown.addEventListener('change', () => {
    const value = parseInt(dropdown.value);
    generateInputFields(value);
});

// validate form
function validateForm() {
    // Clear previous error messages
    container.querySelectorAll('p').forEach((p) => p.remove());

    const input = container.querySelectorAll('input[type="text"]');
    let valid = true;

    input.forEach((input) => {
        if (input.value === '') {
            valid = false;
            const p = document.createElement('p');
            p.textContent = 'Please fill in all fields';
            container.appendChild(p);
        }
    });

    return valid;
}

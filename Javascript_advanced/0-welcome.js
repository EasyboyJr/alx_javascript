function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;

    function didplayFullName() {
        alert('Welcome' + ' ' + fullName + '!');
    };

    didplayFullName();
};
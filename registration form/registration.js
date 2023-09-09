document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // You can add form validation and submission logic here
        alert('Registration successful!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        clearErrors();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        let hasError = false;

        if (!firstName) {
            showError('firstNameError', 'Name is required.');
            hasError = true;
        }

        if (!lastName) {
            showError('lastNameError', 'Last name is required.');
            hasError = true;
        }

        if (!validateEmail(email)) {
            showError('emailError', 'Please enter a valid email address.');
            hasError = true;
        }

        if (password.length < 8) {
            showError('passwordError', 'Password must be at least 8 characters.');
            hasError = true;
        }

        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Password mismatch.');
            hasError = true;
        }

        if (!hasError) {
            alert('Registration successful!');
            form.reset();
        }
    });

    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(element => element.style.display = 'none');
    }

    function showError(elementId, message) {
        const element = document.getElementById(elementId);
        element.textContent = message;
        element.style.display = 'block';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
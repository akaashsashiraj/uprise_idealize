document.addEventListener('DOMContentLoaded', function() {
    const logregBox = document.querySelector('.logreg-box');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const loginForm = document.querySelector('.form-box.login');
    const registerForm = document.querySelector('.form-box.register');

    registerLink.addEventListener('click', () => {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });

    // Initially show the login form
    loginForm.classList.add('active');
});

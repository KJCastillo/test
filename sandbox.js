const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;
    const usernamePattern = /^[a-zA-z]{6,12}$/;
    
});


const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const username = form.username.value;
const usernamePattern = /^[a-zA-z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    if(usernamePattern.test(username)){
        feedback.textContent = 'username valid'
    }else {
        feedback.textContent = 'username invalid'
    }
});

form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success')
    } else {
        form.username.setAttribute('class', 'error')
    }
});
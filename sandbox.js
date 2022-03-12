const ul = document.querySelector('ul');
ul.remove();


const items = document.querySelectorAll('li');

items.forEach(i => {
    i.addEventListener('click', e => {
        e.target.style.textDecoration = 'line-through';
    });
});
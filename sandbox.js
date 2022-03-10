// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('clicked');
// });

const items = document.querySelectorAll('li');

items.forEach(i => {
    i.addEventListener('click', e => {
        e.target.style.textDecoration = 'line-through';
    });
});
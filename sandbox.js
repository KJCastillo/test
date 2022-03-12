const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.append(li);
});

const items = document.querySelectorAll('li');

// items.forEach(i => {
//     i.addEventListener('click', e => {
//         e.stopPropagation();
//         e.target.remove();
//     });
// });

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});
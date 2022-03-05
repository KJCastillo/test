const ul = document.querySelector('.people');

const people = ['mario', 'kevin', 'boo', 'daisy', 'penny'];


let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`
})

console.log(html)
ul.innerHTML = html;
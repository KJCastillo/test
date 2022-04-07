//fetch api

fetch('todos.json').then((response) => {
    return response.json();
}).then(data => {
    console.log(data)
}).catch((err) => {
    console.log('rejected', err);
});
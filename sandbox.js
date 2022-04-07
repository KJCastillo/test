//fetch api

// fetch('todos.json').then((response) => {
//     return response.json();
// }).then(data => {
//     console.log(data)
// }).catch((err) => {
//     console.log('rejected', err);
// });

const getTodos = async () => {
    const response = await fetch("todos.json");
    const data = await response.json();
    console.log(data);
};

getTodos();
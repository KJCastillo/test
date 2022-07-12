repository made for testing codes and snippit


local storage testing below
//store local storage
localStorage.setItem('name', 'Kevin');
localStorage.setItem('age', 32);

//get data from local storage
let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log(`${name} is ${age} years old and will be a developer in 2022`)

//deleting data from local storage
localStorage.removeItem('age');

//deletes all storage
localStorage.clear();

//type local storage to directly to console

const todos = [
    {text: 'test', author: 'kevin'},
    {text: 'test2', author: 'kevin2'},
    {text: 'test3', author: 'kevin3'},
];

//console.log(JSON.stringify(todos))

localStorage.setItem('todos', JSON.stringify(todos))
//make array into string and then store


const stored = localStorage.getItem('todos')
console.log(JSON.parse(stored))
//gets data back from local storage but as an array again
//create var to get data, then parse from JSON to an array again
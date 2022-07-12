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
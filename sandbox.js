//store local storage
localStorage.setItem('name', 'Kevin');
localStorage.setItem('age', 32);

//get data from local storage
let name = localStorage.getItem('name')
let age = localStorage.getItem('age')

console.log(`${name} is ${age} years old and will be a developer in 2022`)

//deleting data from local storage
localStorage.removeItem('age');


//type local storage to directly to console
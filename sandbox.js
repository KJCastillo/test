//rest
const double = (...nums) => {
  console.log(nums);
  return nums.map(num => num*2)
}

const result = double(1,3,5,7,9,2,4,6,8)

console.log(result)

//spread syntax (arrays)
const people = ['kevin', 'penny', 'daisy']
const members = ['mario', 'jose', ...people]
console.log(members)

//spread syntax (objects)
const person = {name: 'kevin', age: 32, job: 'developer'}
const personClone = {...person, location: 'san diego'}
console.log(personClone)
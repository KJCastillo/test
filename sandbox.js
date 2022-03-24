const scores = [10, 30, 15, 25, 50, 40, 5];

const users = [
    {name: "kevin", premium: true},
    {name: 'castillo', premium: false},
    {name: 'penny', premium: false},
    {name: 'daisy', premium: true}
];

const x = users.filter(user => {
    return user.premium
});

console.log(x)
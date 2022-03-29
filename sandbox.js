// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// scores.sort();
// console.log(scores);

// const names = ['kevin', 'penny', 'daisy', 'bjj'];

// names.sort();
// console.log(names);

const players = [
    {name: 'kevin', score: 20},
    {name: 'penny', score: 10},
    {name: 'daisy', score: 50}
];

// players.sort((a,b) => {
//     if(a.score > b.score){
//         return -1
//     } else if (a.score < b.score){
//         return 1
//     } else {
//         return 0
//     }
// });

players.sort((a,b) => {
    return a.score - b.score
});

console.log(players)